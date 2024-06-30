import { Grid, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import ArticleCardSketon from './ArticleCardSketon';

/**
 * Renders a skeleton component for an article card.
 *
 * @return {JSX.Element} The skeleton component for an article card.
 */
const ArticleCardSkeleton = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <Grid
      data-testid="article-card-skeleton"
      width="100%"
      templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      gap={5}
      ml="10">
      {/* Render 20 ArticleCardSkeleton components */}
      {Array.from({ length: isLargerThan800 ? 6 : 1 }, (_, index) => (
        <ArticleCardSketon key={index} />
      ))}
    </Grid>
  );
};

export default ArticleCardSkeleton;
