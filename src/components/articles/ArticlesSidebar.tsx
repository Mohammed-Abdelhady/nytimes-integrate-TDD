import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import ArticlesSections from './ArticlesSections';
import SearchArticles from './SearchArticles';
import ArticlesPeriods from './ArticlesPeriods';

const ArticlesSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  console.log({ isLargerThan800 });
  return (
    <Box>
      {/* Conditionally render as a Drawer on 'md' and larger screens */}
      {!isLargerThan800 ? (
        <>
          <Box onClick={onOpen}>Open Sidebar</Box>
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody>
                {/* Search Articles */}
                <SearchArticles />
                {/* Articles Sections */}
                <ArticlesSections />
                {/* Articles Periods */}
                <ArticlesPeriods />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <>
          {/* Regular Box layout on smaller screens */}
          <SearchArticles />
          <ArticlesSections />
          <ArticlesPeriods />
        </>
      )}
    </Box>
  );
};

export default ArticlesSidebar;
