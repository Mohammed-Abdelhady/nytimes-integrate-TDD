import { Box, Heading, Image, Skeleton, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { IArticle } from 'types/articlesInterface';

interface ArticleCardProps {
  article: IArticle;
}
/**
 * Renders an ArticleCard component.
 *
 * @param {ArticleCardProps} props - The props for the ArticleCard component.
 * @return {JSX.Element} The rendered ArticleCard component.
 */
const ArticleCard = ({ article }: ArticleCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [searchParams] = useSearchParams();
  const formatDate = () => {
    if (!article.published_date) return '';
    return article.published_date.split('T')[0];
  };
  return (
    <Box
      as={Link}
      to={`/articles/${searchParams.get('period')}/${article.id}`}
      borderWidth="1px"
      borderRadius="md"
      p={5}
      maxH="400px">
      <Text fontWeight="bold">{article.section}</Text>
      {/* Image with Skeleton Loading State */}
      <Skeleton isLoaded={imageLoaded} height="200px" width="100%" mb="3">
        <Image
          objectFit="cover"
          src={article.media[0]?.['media-metadata'][2]?.url}
          alt={article.title}
          width="100%"
          height="200px"
          onLoad={() => setImageLoaded(true)}
          style={!imageLoaded ? { display: 'none' } : {}}
        />
      </Skeleton>
      <Heading size="md" mt="3">
        {article.title}
      </Heading>
      <Text fontWeight="light" mt="2">
        {formatDate()}
      </Text>
    </Box>
  );
};

export default ArticleCard;
