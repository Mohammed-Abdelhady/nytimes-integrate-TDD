import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import ArticleDetails from 'components/articles/ArticleDetails';
import { useFetchSingleArticleQuery } from 'lib/slices/articlesSlice';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ArticleDetailsPage = () => {
  const { peroid, articleId } = useParams();

  const {
    data: article,
    error,
    isLoading,
  } = useFetchSingleArticleQuery({
    period: Number(peroid) || 1,
    id: Number(articleId),
  });
  console.log(article, 'article');
  if (error) return <div>Article not found</div>;

  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        article && (
          <>
            <Breadcrumb mb="10">
              <BreadcrumbItem>
                <Link to="/">Articles</Link>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <Link to={`/articles/${peroid || 1}/${articleId}`}>
                  {article.title}
                </Link>
              </BreadcrumbItem>
            </Breadcrumb>
            <ArticleDetails article={article} />
          </>
        )
      )}
    </div>
  );
};

export default ArticleDetailsPage;
