import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { useSearchParams } from 'react-router-dom';
import SearchArticles from 'components/articles/SearchArticles';

// Mocking useSearchParams hook
jest.mock('react-router-dom', () => ({
  useSearchParams: jest.fn(),
}));

// Enable fake timers globally for this test file
jest.useFakeTimers();

describe('SearchArticles component', () => {
  // Mock setSearchParams and initial search params
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let setSearchParamsMock: jest.Mock<any, any>;
  let searchParamsMock: URLSearchParams;

  beforeEach(() => {
    setSearchParamsMock = jest.fn();
    searchParamsMock = new URLSearchParams();
    (useSearchParams as jest.Mock).mockReturnValue([
      searchParamsMock,
      setSearchParamsMock,
    ]);
  });

  it('should render input field correctly', () => {
    const { getByPlaceholderText } = render(<SearchArticles />);
    const inputElement = getByPlaceholderText('Enter search term');
    expect(inputElement).toBeInTheDocument();
  });

  it('should update search term when input value changes', async () => {
    const { getByPlaceholderText } = render(<SearchArticles />);
    const inputElement = getByPlaceholderText('Enter search term');

    fireEvent.change(inputElement, { target: { value: 'react' } });

    // Check if the input value updates correctly
    expect(inputElement).toHaveValue('react');
  });

  it('should update search params when input value changes and debounce', async () => {
    const { getByPlaceholderText } = render(<SearchArticles />);
    const inputElement = getByPlaceholderText('Enter search term');

    fireEvent.change(inputElement, { target: { value: 'react' } });

    // Wait for debounce timeout (300ms)
    await act(async () => {
      jest.advanceTimersByTime(300);
    });

    // Check if setSearchParams was called with the correct parameters
    expect(setSearchParamsMock).toHaveBeenCalledWith(
      new URLSearchParams('search=react').toString(),
    );
  });

  it('should update input value when search params change', () => {
    searchParamsMock.set('search', 'typescript');

    const { getByPlaceholderText } = render(<SearchArticles />);
    const inputElement = getByPlaceholderText('Enter search term');

    // Check if the input value updates to match search params
    expect(inputElement).toHaveValue('typescript');
  });
});
