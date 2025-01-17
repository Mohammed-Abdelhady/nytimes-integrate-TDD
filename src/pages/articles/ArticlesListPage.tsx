import React, { Suspense, lazy } from 'react';
import { useFetchArticlesQuery } from '../../lib/slices/articlesSlice';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import ArticlesSidebar from '../../components/articles/ArticlesSidebar';
import ArticleCardSkeleton from '../../components/skeletons/ArticlesListSkeleton';

const ArticleCard = lazy(() => import('../../components/articles/ArticleCard'));

/**
 * Renders the ArticlesListPage component, which displays a list of articles fetched from the server.
 *
 * @return {JSX.Element} The rendered ArticlesListPage component.
 */
const ArticlesListPage = () => {
  const [searchParams] = useSearchParams();

  const {
    data: articles,
    error,
    isLoading,
  } = useFetchArticlesQuery({
    period: Number(searchParams.get('period')) || 1,
    search: searchParams.get('search') || '',
    section: searchParams.get('section') || '',
  });

  if (error) return <div>Something went wrong</div>;

  return (
    <Flex
      justifyContent="space-between"
      flexDir={{ base: 'column', md: 'row' }}>
      <ArticlesSidebar />
      {isLoading ? (
        <ArticleCardSkeleton />
      ) : (
        <SimpleGrid
          columns={[1, 2, 2, 3]}
          spacing={5}
          mx={{ base: 'auto', md: '10px' }}
          data-testid="articles-list">
          {articles?.map((article) => (
            <Suspense key={article.id}>
              <ArticleCard
                article={article}
                fallback={<ArticleCardSkeleton />}
              />
            </Suspense>
          ))}
        </SimpleGrid>
      )}
    </Flex>
  );
};

export default ArticlesListPage;
