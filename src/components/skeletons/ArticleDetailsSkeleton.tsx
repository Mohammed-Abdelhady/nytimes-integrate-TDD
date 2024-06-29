import {
  Box,
  Center,
  HStack,
  Stack,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import React from 'react';

/**
 * Renders a skeleton component for the article details.
 *
 * @return {JSX.Element} The skeleton component for the article details.
 */
const ArticleDetailsSkeleton = () => {
  return (
    <Stack>
      <Center>
        <Box w="80vw">
          <Skeleton
            height={{ base: '200px', sm: '300px', md: '500px' }}
            w="80vw"
          />
          <SkeletonText mt="4" noOfLines={1} spacing="4" />
        </Box>
      </Center>
      <Box borderBottom="solid 1px" pb="10">
        <Skeleton height="30px" width="60%" mb="3" />
        <HStack>
          <Skeleton height="20px" width="40px" />
          <Box w="1px" h="5" bg="gray.500" />
          <Skeleton height="20px" width="40px" />
        </HStack>
        <Skeleton height="30px" width="100px" mt="4" />
      </Box>
      <SkeletonText mt="4" noOfLines={1} spacing="4" />
      <SkeletonText mt="4" noOfLines={6} spacing="4" />
    </Stack>
  );
};

export default ArticleDetailsSkeleton;
