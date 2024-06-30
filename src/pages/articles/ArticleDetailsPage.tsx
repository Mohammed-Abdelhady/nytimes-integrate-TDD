import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import ArticleDetails from 'components/articles/ArticleDetails';
import ArticleDetailsSkeleton from 'components/skeletons/ArticleDetailsSkeleton';
import { useFetchSingleArticleQuery } from 'lib/slices/articlesSlice';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

/**
 * Renders the ArticleDetailsPage component, which displays the details of a single article.
 *
 * @return {JSX.Element} The rendered ArticleDetailsPage component.
 */
const ArticleDetailsPage = () => {
  const { period, articleId } = useParams();
  const {
    data: article,
    isLoading,
    isError,
  } = useFetchSingleArticleQuery({
    period: Number(period) || 1,
    id: Number(articleId),
  });

  if (isLoading) {
    return <ArticleDetailsSkeleton />;
  }

  if (isError) {
    return <div data-testid="error-message">Something went wrong</div>;
  }

  if (!article) {
    return null;
  }

  return (
    <div>
      <Breadcrumb mb="10">
        <BreadcrumbItem>
          <Link to="/">Articles</Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <span>{article.title}</span>
        </BreadcrumbItem>
      </Breadcrumb>
      <ArticleDetails article={article} />
    </div>
  );
};

export default ArticleDetailsPage;
