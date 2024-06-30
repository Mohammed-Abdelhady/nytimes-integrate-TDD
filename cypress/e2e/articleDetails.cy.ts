describe('ArticleDetailsPage', () => {
  const articleId = 100000009444032;
  const period = 30;

  beforeEach(() => {
    // Intercepting the API call to get article details with fixture data
    cy.intercept(
      'GET',
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=*`,
      { fixture: 'articleDetails.json' },
    ).as('getArticleDetails');
    cy.visit(`http://localhost:3000/articles/${period}/${articleId}`);
  });

  it('should render the article details correctly', () => {
    cy.wait('@getArticleDetails');
    cy.get('[data-testid="article-title"]').should(
      'contain',
      'How Healthy Are Avocados?',
    );
    cy.get('[data-testid="article-copyright"]').should(
      'contain',
      'Bobbi Lin for The New York Times',
    );
    cy.get('[data-testid="article-abstract"]').should(
      'contain',
      'Here’s a highlight reel of their biggest nutritional benefits, plus delicious recipes to help you enjoy them.',
    );
    cy.get('[data-testid="article-keywords"]').should(
      'contain',
      'Avocados;Diet and Nutrition;Recipes;Heart;Cholesterol;Content Type: Service;Oils and Fats;Fiber (Dietary);Blood Pressure;Cooking and Cookbooks;Vegetarianism;Soups;Salads',
    );
  });

  it('should handle loading state correctly', () => {
    cy.intercept(
      'GET',
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=*`,
      (req) => {
        req.on('response', (res) => {
          res.setDelay(2000); // Adding delay to simulate loading
        });
      },
    ).as('getArticleDetails');
    cy.visit(`http://localhost:3000/articles/${period}/${articleId}`);
    cy.get('[data-testid="article-skeleton"]').should('exist');
    cy.wait('@getArticleDetails');
    cy.get('[data-testid="article-details"]').should('exist');
  });

  it('should handle error state correctly', () => {
    // Intercepting the API call to simulate an error
    cy.intercept(
      'GET',
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=*`,
      { statusCode: 500 },
    ).as('getArticleDetailsError');
    cy.visit(`http://localhost:3000/articles/${period}/${articleId}`);
    cy.wait('@getArticleDetailsError');
    cy.get('[data-testid="error-message"]')
      .should('exist')
      .and('contain', 'Something went wrong');
  });
});
