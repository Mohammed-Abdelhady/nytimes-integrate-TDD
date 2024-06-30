import React from 'react';
import {
  Box,
  Heading,
  Button,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { useFetchAllSectionsQuery } from 'lib/slices/articlesSlice';
import { useSearchParams } from 'react-router-dom';

/**
 * Displays a list of article sections fetched from the API.
 */
const ArticlesSections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    data: sections,
    isLoading,
    isError,
  } = useFetchAllSectionsQuery({
    period: Number(searchParams.get('period')) || 1,
  });

  /**
   * Handles click event on a section item.
   * Updates URL search params with the selected section.
   * @param {string} section - The section name clicked.
   */
  const handleSectionClick = (section: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('section', section);
    setSearchParams(newSearchParams.toString());
  };

  return (
    <Box>
      <Heading size="md" mb="3">
        Sections
      </Heading>
      <UnorderedList styleType="none" width="max-content" minW="100px">
        <ListItem>
          <Button
            data-testid="section-button"
            variant="ghost"
            color={searchParams.get('section') ? 'gray.500' : ''}
            onClick={() => handleSectionClick('')}>
            All
          </Button>
        </ListItem>
        {isError ? (
          <ListItem>Error loading sections</ListItem>
        ) : isLoading ? (
          <ListItem>Loading sections...</ListItem>
        ) : (
          sections?.map((section) => (
            <ListItem key={section}>
              <Button
                variant="ghost"
                color={
                  section === searchParams.get('section') ? 'blue.500' : ''
                }
                data-testid="section-button"
                onClick={() => handleSectionClick(section)}>
                {section}
              </Button>
            </ListItem>
          ))
        )}
      </UnorderedList>
    </Box>
  );
};

export default ArticlesSections;
