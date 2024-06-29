import { Box } from '@chakra-ui/react';
import React from 'react';
import ArticlesSections from './ArticlesSections';
import SearchArticles from './SearchArticles';
import ArticlesPeriods from './ArticlesPeriods';

const ArticlesSidebar = () => {
  return (
    <Box>
      {/* Search Articles */}
      <SearchArticles />
      {/* Articles Sections */}
      <ArticlesSections />
      {/* Articles Periods */}
      <ArticlesPeriods />
    </Box>
  );
};

export default ArticlesSidebar;
