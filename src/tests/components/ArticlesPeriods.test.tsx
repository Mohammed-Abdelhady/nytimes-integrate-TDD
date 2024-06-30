import { render, screen } from '@testing-library/react';
import ArticlesPeriods from '../../components/articles/ArticlesPeriods';
import { MemoryRouter } from 'react-router-dom';

describe('ArticlesPeriods', () => {
  it('renders the component', () => {
    render(
      <MemoryRouter>
        <ArticlesPeriods />
      </MemoryRouter>,
    );
    expect(screen.getByText('Periods')).toBeInTheDocument();
  });

  it('displays the list of periods', () => {
    render(
      <MemoryRouter>
        <ArticlesPeriods />
      </MemoryRouter>,
    );
    expect(screen.getByText('1 day')).toBeInTheDocument();
    expect(screen.getByText('7 days')).toBeInTheDocument();
    expect(screen.getByText('30 days')).toBeInTheDocument();
  });
});
