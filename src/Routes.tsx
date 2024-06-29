import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ArticlesListPage from './pages/articles/ArticlesListPage';
import ArticleDetailsPage from './pages/articles/ArticleDetailsPage';
import LayoutNavBar from './components/navs/LayoutNavBar';
import { Box, Container } from '@chakra-ui/react';

/**
 * Renders the routes for the application.
 *
 * This function sets up the routing configuration using `react-router-dom`.
 * It defines the routes for the application and provides the corresponding components.
 *
 * @returns {JSX.Element} The rendered routes wrapped in the RouterProvider.
 */
function Routes(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ArticlesListPage />,
    },
    {
      path: '/articles/:articleId',
      element: <ArticleDetailsPage />,
    },
  ]);

  return (
    <Container maxW={'container.xl'} mx="auto" p="5">
      <LayoutNavBar />
      <Box pt="10">
        <RouterProvider router={router} />
      </Box>
    </Container>
  );
}

export default Routes;
