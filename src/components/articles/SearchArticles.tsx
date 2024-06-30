import React, { act, useEffect, useState } from 'react';
import { Input, useColorMode } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

/**
 * Renders a search input field that updates the URL search parameters with a debounced search term.
 *
 * @return {JSX.Element} The search input field component.
 */
const SearchArticles = () => {
  const { colorMode } = useColorMode();
  const [searchParams, setSearchParams] = useSearchParams();
  const [term, setTerm] = useState<string>('');

  useEffect(() => {
    setTerm(searchParams.get('search') || '');
  }, [searchParams]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const handleSearchParams = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('search', term);
    setSearchParams(newSearchParams.toString());
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      act(() => {
        // Wrap in act for debounce update
        handleSearchParams();
      });
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term, setSearchParams, searchParams]);

  return (
    <Input
      mb="5"
      placeholder={'Enter search term'}
      bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
      p="1"
      borderRadius={'md'}
      onChange={handleSearch}
      value={term}
      data-testid="search-input"
    />
  );
};

export default SearchArticles;
