import { Box, Center, HStack, Heading, Stack, Text } from '@chakra-ui/react';
import ImageLoader from 'components/core/ImageLoader';
import React from 'react';
import { IArticle } from 'types/articlesInterface';
import ArticlelSharing from './ArticlelSharing';

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
    return article.published_date.split('T')[0];
  };
  return (
    <Stack>
      <Center>
        <Box maxW="800px">
          <ImageLoader
            src={article.media[0]?.['media-metadata'][2]?.url}
            alt={article.title}
            height={{ base: '200px', sm: '300px', md: '500px' }}
          />
          <Text fontWeight="100">{article.media[0].copyright}</Text>
        </Box>
      </Center>
      <Box borderBottom="solid 1px" pb="10">
        <Heading mb="3">{article.title}</Heading>
        <HStack>
          <Text>{formatDate()} </Text>
          <Box w="1px" h="5" bg="gray.500" />
          <Text>{article?.section} </Text>
        </HStack>
        <ArticlelSharing />
      </Box>
      <Text>{article?.adx_keywords}</Text>
      <Text pt="10" fontSize="2xl">
        {article.abstract}
      </Text>
    </Stack>
  );
};

export default ArticleDetails;
