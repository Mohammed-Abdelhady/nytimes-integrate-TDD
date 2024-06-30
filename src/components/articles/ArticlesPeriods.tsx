import React from 'react';
import {
  Box,
  Heading,
  Button,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
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

  /**
   * Handles click event on a period item.
   * Updates URL search params with the selected period.
   * @param {number} period - The period value clicked.
   */
  const handlePeriodClick = (period: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('period', period.toString());
    setSearchParams(newSearchParams.toString());
  };

  return (
    <Box mt="5">
      <Heading size="md">Periods</Heading>
      <UnorderedList styleType="none" width="max-content" minW="100px">
        {PERIODS.map((periodOption) => (
          <ListItem key={periodOption.period}>
            <Button
              data-testid="period-button"
              variant="ghost"
              color={
                periodOption.period.toString() === searchParams.get('period')
                  ? 'blue.500'
                  : ''
              }
              onClick={() => handlePeriodClick(periodOption.period)}>
              {periodOption.name}
            </Button>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default ArticlesPeriods;
