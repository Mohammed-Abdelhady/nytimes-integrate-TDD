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
      element: (
        <WrapLayout>
          <ArticlesListPage />
        </WrapLayout>
      ),
    },
    {
      path: '/articles/:period/:articleId',
      element: (
        <WrapLayout>
          <ArticleDetailsPage />
        </WrapLayout>
      ),
    },
  ]);

  return (
    <Container maxW={'container.xl'} mx="auto" p="5">
      <RouterProvider router={router} />
    </Container>
  );
}

const WrapLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <LayoutNavBar />
      <Box mt="10">{children}</Box>
    </>
  );
};
export default Routes;
