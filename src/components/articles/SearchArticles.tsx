import { Input } from '@chakra-ui/react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchArticles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('search', event.target.value);
    setSearchParams(newSearchParams.toString());
  };
  return (
    <Input
      mb="5"
      placeholder={'Enter search term'}
      bg="gray.100"
      p="1"
      borderRadius={'md'}
      onChange={handleSearch}
    />
  );
};

export default SearchArticles;
