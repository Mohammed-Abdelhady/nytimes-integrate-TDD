import { Box, Heading, Text } from '@chakra-ui/react';
import ImageLoader from 'components/core/ImageLoader';
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
  const [searchParams] = useSearchParams();
  const formatDate = () => {
    if (!article.published_date) return '';
    return new Date(article.published_date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };
  return (
    <Box
      as={Link}
      to={`/articles/${searchParams.get('period') || 1}/${article.id}`}
      borderWidth="1px"
      borderRadius="md"
      p={5}
      maxH="500px">
      <Text fontWeight="bold">{article.section}</Text>
      {/* Image with Skeleton Loading State */}
      <ImageLoader
        src={article.media[0]?.['media-metadata'][2]?.url}
        alt={article.title}
        height="200px"
      />

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
