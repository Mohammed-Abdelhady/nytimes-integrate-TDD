import React from 'react';
import { useFetchArticlesQuery } from '../../lib/slices/articlesSlice';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import ArticlesSidebar from 'components/articles/ArticlesSidebar';

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
  console.log(error, articles, 'articles');
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something Went Wrong</div>;
  return (
    <Flex justify="space-between">
      <ArticlesSidebar />
      <SimpleGrid columns={[1, 2, 3]} gap={4} ml="10">
        {articles?.map((article) => (
          <Box
            borderBottom="solid 1px"
            bg="blue.500"
            color="white"
            key={article.id}>
            <Text>{article.section}</Text>
            <Text>{article.title}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ArticlesListPage;
