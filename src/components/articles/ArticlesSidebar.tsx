import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import ArticlesSections from './ArticlesSections';
import SearchArticles from './SearchArticles';
import ArticlesPeriods from './ArticlesPeriods';
import { SlidersHorizontal } from 'lucide-react';

const ArticlesSidebar = () => {
  return (
    <Box>
      {/* Mobile Version */}
      <ArticlesSidebarMobile />
      {/* Desktop Version */}
      <Box display={{ base: 'none', md: 'block' }}>
        <SearchArticles />
        <ArticlesSections />
        <ArticlesPeriods />
      </Box>
    </Box>
  );
};
const ArticlesSidebarMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box display={{ base: 'block', md: 'none' }}>
      <Button leftIcon={<SlidersHorizontal />} mb="5" onClick={onOpen}>
        Filters
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent pt="5">
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
    </Box>
  );
};
export default ArticlesSidebar;
