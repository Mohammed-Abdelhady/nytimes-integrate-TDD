import React from 'react';
import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import { useFetchAllSectionsQuery } from 'lib/slices/articlesSlice';
import { useSearchParams } from 'react-router-dom';

/**
 * Displays a list of article sections fetched from the API.
 */
const ArticlesSections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: sections } = useFetchAllSectionsQuery({
    period: Number(searchParams.get('period')) || 1,
  });

  /**
   * Handles click event on a section item.
   * Updates URL search params with the selected section.
   * @param {string} section - The section name clicked.
   */
  const handleSectionClick = (section: string) => {
    setSearchParams(new URLSearchParams({ section }));
  };

  return (
    <Box>
      <Heading size="md">Sections</Heading>
      <UnorderedList styleType="none" width="max-content">
        <ListItem
          as="button"
          display="block"
          mt="3"
          onClick={() => handleSectionClick('')}>
          All
        </ListItem>
        {sections?.map((section) => (
          <ListItem
            as="button"
            display="block"
            mt="3"
            onClick={() => handleSectionClick(section)}
            key={section}>
            {section}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default ArticlesSections;
