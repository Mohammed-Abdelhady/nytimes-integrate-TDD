import React from 'react';
import { useFetchArticlesQuery } from '../../lib/slices/articlesSlice';
import ArticlesSections from 'components/articles/ArticlesSections';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

const ArticlesListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    data: articles,
    error,
    isLoading,
  } = useFetchArticlesQuery({
    period: Number(searchParams.get('period')) || 1,
    search: '',
    section: searchParams.get('section') || '',
  });
  console.log(error, articles, 'articles');
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something Went Wrong</div>;
  return (
    <Flex>
      <ArticlesSections />
      <SimpleGrid columns={[1, 2, 3]} gap={4} ml="10">
        {articles?.map((article) => (
          <Box p={4} bg="blue.500" color="white" key={article.id}>
            <Text>{article.section}</Text>
            <Text>{article.title}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ArticlesListPage;
