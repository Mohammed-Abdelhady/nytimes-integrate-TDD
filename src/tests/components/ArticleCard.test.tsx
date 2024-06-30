import { render, screen } from '@testing-library/react';
import ArticleMockup from './Article.mockup';
import { IArticle } from '~/types/articlesInterface';
import ArticleCard from '../../components/articles/ArticleCard';
import { MemoryRouter } from 'react-router-dom';

describe('ArticleCard', () => {
  const article: IArticle = ArticleMockup;

  it('renders the article section', () => {
    render(
      <MemoryRouter>
        <ArticleCard article={article} />
      </MemoryRouter>,
    );
    expect(screen.getByText(article.section)).toBeInTheDocument();
  });

  it('renders the article title', () => {
    render(
      <MemoryRouter>
        <ArticleCard article={article} />
      </MemoryRouter>,
    );
    expect(screen.getByText(article.title)).toBeInTheDocument();
  });

  it('renders the formatted date', () => {
    render(
      <MemoryRouter>
        <ArticleCard article={article} />
      </MemoryRouter>,
    );
    // Format the date from article.published_date (assuming it's a string in ISO format)
    const formattedDate = new Date(article.published_date).toLocaleDateString(
      'en-US',
      {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      },
    );
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });

  it('renders the article image', () => {
    render(
      <MemoryRouter>
        <ArticleCard article={article} />
      </MemoryRouter>,
    );
    expect(screen.getByAltText(article.title)).toBeInTheDocument();
  });

  it('renders the article link', () => {
    render(
      <MemoryRouter>
        <ArticleCard article={article} />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/articles/1/${article.id}`,
    );
  });
});
