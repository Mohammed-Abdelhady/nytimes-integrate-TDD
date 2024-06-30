import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const ArticleCardSketon = () => {
  return (
    <Box
      p={5}
      borderWidth="1px"
      borderRadius="md"
      // boxShadow="md"
    >
      <Skeleton height="20px" width="100px" mb="4" />
      <Skeleton height="200px" mb="4" />
      <SkeletonText mb="4" />
      <Skeleton height="20px" width="140px" />
    </Box>
  );
};

export default ArticleCardSketon;
