import { render, screen } from '@testing-library/react';
import ArticleMockup from '../mockup/Article.mockup';
import { IArticle } from '~/types/articlesInterface';
import ArticleDetails from '../../components/articles/ArticleDetails';
import { MemoryRouter } from 'react-router-dom';

describe('ArticleDetails', () => {
  const article: IArticle = ArticleMockup;

  it('renders article title', () => {
    render(
      <MemoryRouter>
        <ArticleDetails article={article} />
      </MemoryRouter>,
    );
    expect(screen.getByText(article.title)).toBeInTheDocument();
  });

  it('renders article date', () => {
    render(<ArticleDetails article={article} />);
    expect(
      screen.getByText(
        new Date(article.published_date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
      ),
    ).toBeInTheDocument();
  });

  it('renders article section', () => {
    render(<ArticleDetails article={article} />);
    expect(screen.getByText(article.section)).toBeInTheDocument();
  });

  it('renders article image', () => {
    render(<ArticleDetails article={article} />);
    expect(screen.getByAltText(article.title)).toBeInTheDocument();
  });

  it('renders article image copyright', () => {
    render(<ArticleDetails article={article} />);
    expect(screen.getByText(article.media[0].copyright)).toBeInTheDocument();
  });

  it('renders article keywords', () => {
    render(<ArticleDetails article={article} />);
    expect(screen.getByText(article.adx_keywords)).toBeInTheDocument();
  });

  it('renders article abstract', () => {
    render(<ArticleDetails article={article} />);
    expect(screen.getByText(article.abstract)).toBeInTheDocument();
  });
});
