import { Input, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

/**
 * Renders a search input field that updates the search parameters in the URL with the input value.
 *
 * @return {JSX.Element} A search input field component.
 */
const SearchArticles = () => {
  const { colorMode } = useColorMode();

  const [searchParams, setSearchParams] = useSearchParams();
  /**
   * Updates the search parameters in the URL with the input value from the search input field.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   * @return {void} This function does not return anything.
   */
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('search', event.target.value);
    setSearchParams(newSearchParams.toString());
  };
  return (
    <Input
      mb="5"
      placeholder={'Enter search term'}
      bg={colorMode == 'light' ? 'gray.100' : 'gray.700'}
      p="1"
      borderRadius={'md'}
      onChange={handleSearch}
    />
  );
};

export default SearchArticles;
