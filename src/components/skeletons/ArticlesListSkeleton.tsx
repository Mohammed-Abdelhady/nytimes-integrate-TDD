import {
  Box,
  Grid,
  Skeleton,
  SkeletonText,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';

const ArticleCardSkeleton = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <Grid
      width="100%"
      templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      gap={5}
      ml="10">
      {/* Render 20 ArticleCardSkeleton components */}
      {Array.from({ length: isLargerThan800 ? 6 : 1 }, (_, index) => (
        <Box
          p={5}
          borderWidth="1px"
          borderRadius="md"
          // boxShadow="md"
          key={index}>
          <Skeleton height="20px" width="100px" mb="4" />
          <Skeleton height="200px" mb="4" />
          <SkeletonText mb="4" />
          <Skeleton height="20px" width="140px" />
        </Box>
      ))}
    </Grid>
  );
};

export default ArticleCardSkeleton;
