import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const PERIODS = [
  { period: 1, name: '1 day' },
  { period: 7, name: '7 days' },
  { period: 30, name: '30 days' },
];
/**
 * Renders a component that displays a list of article periods and allows the user to select one.
 *
 * @return {JSX.Element} A React component that displays a list of article periods and allows the user to select one.
 */
const ArticlesPeriods = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSectionClick = (period: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('period', period?.toString());
    setSearchParams(newSearchParams.toString());
  };

  return (
    <Box mt="5">
      <Heading size="md">Periods</Heading>
      <UnorderedList styleType="none" width="max-content" minW="100px">
        {PERIODS.map((section) => (
          <ListItem
            key={section.period}
            as="button"
            display="block"
            mt="3"
            onClick={() => handleSectionClick(section.period)}>
            {section.name}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default ArticlesPeriods;
