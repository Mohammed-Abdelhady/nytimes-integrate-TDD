describe('ArticlesListPage', () => {
  beforeEach(() => {
    // Intercepting the API call to get articles with fixture data
    cy.intercept(
      'GET',
      'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=*',
      { fixture: 'articles.json' },
    ).as('getArticles');
    cy.visit('http://localhost:3000/');
  });

  it('should render the articles list correctly', () => {
    cy.wait('@getArticles');
    cy.get('[data-testid="articles-list"]').should('exist');
    cy.get('[data-testid="article-card"]').should('have.length.at.least', 1);
  });

  it('should handle loading state correctly', () => {
    cy.wait('@getArticles');
    cy.get('[data-testid="article-card-skeleton"]').should('exist');
    cy.get('[data-testid="articles-list"]').should('exist');
  });

  it('should handle error state correctly', () => {
    // Intercepting the API call to simulate an error
    cy.intercept(
      'GET',
      'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=*',
      { statusCode: 500 },
    ).as('getArticlesError');
    cy.visit('http://localhost:3000/');
    cy.wait('@getArticlesError');
    cy.contains('Something went wrong').should('exist');
  });

  it('should filter articles based on search', () => {
    cy.wait('@getArticles');
    cy.get('[data-testid="search-input"]').type('debate');
    cy.get('[data-testid="article-card"]').should('have.length.at.least', 1);
  });

  it('should filter articles based on section', () => {
    cy.wait('@getArticles');
    cy.get('[data-testid="section-button"]').contains('Well').click();
    cy.get('[data-testid="article-card"]').should('have.length.at.least', 1);
  });

  it('should filter articles based on period', () => {
    cy.wait('@getArticles');
    cy.get('[data-testid="period-button"]').contains('30 days').click();
    cy.get('[data-testid="article-card"]').should('have.length.at.least', 1);
  });
});
