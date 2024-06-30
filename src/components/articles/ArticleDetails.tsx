import { Box, Center, HStack, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { IArticle } from '~/types/articlesInterface';
import ArticlelSharing from './ArticlelSharing';
import ImageLoader from '../core/ImageLoader';

interface ArticleDetailsProps {
  article: IArticle;
}
/**
 * Renders the details of an article.
 *
 * @param {Object} props - The props for the ArticleDetails component.
 * @param {IArticle} props.article - The article object containing the details.
 * @return {JSX.Element} The rendered ArticleDetails component.
 */
const ArticleDetails = ({ article }: ArticleDetailsProps) => {
  const formatDate = () => {
    if (!article.published_date) return '';
    return new Date(article.published_date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  return (
    <Stack data-testid="article-details">
      <Center>
        <Box maxW="800px">
          <ImageLoader
            src={article.media[0]?.['media-metadata'][2]?.url}
            alt={article.title}
            height={{ base: '200px', sm: '300px', md: '500px' }}
          />
          <Text fontWeight="100" data-testid="article-copyright">
            {article.media[0].copyright}
          </Text>
        </Box>
      </Center>
      <Box borderBottom="solid 1px" pb="10" data-testid="article-header">
        <Heading mb="3" data-testid="article-title">
          {article.title}
        </Heading>
        <HStack data-testid="article-metadata">
          <Text>{formatDate()} </Text>
          <Box w="1px" h="5" bg="gray.500" />
          <Text>{article?.section} </Text>
        </HStack>
        <ArticlelSharing />
      </Box>
      <Text data-testid="article-keywords">{article?.adx_keywords}</Text>
      <Text pt="10" fontSize="2xl" data-testid="article-abstract">
        {article.abstract}
      </Text>
    </Stack>
  );
};

export default ArticleDetails;
