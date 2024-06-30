import { Box, Heading, Text } from '@chakra-ui/react';
import { Link, useSearchParams } from 'react-router-dom';
import { IArticle } from '~/types/articlesInterface';
import ImageLoader from '../core/ImageLoader';

interface ArticleCardProps {
  article: IArticle;
  fallback?: React.ReactNode;
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
      maxH="500px"
      data-testid="article-card">
      <Text fontWeight="bold" data-testid="article-section">
        {article.section}
      </Text>
      {/* Image with Skeleton Loading State */}
      <ImageLoader
        src={article.media[0]?.['media-metadata'][2]?.url}
        alt={article.title}
        height="200px"
      />

      <Heading size="md" mt="3" data-testid="article-title">
        {article.title}
      </Heading>
      <Text fontWeight="light" mt="2" data-testid="article-date">
        {formatDate()}
      </Text>
    </Box>
  );
};

export default ArticleCard;
