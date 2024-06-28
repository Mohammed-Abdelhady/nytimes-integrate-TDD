import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ArticlesListPage from './pages/articles/ArticlesListPage';
import ArticleDetailsPage from './pages/articles/ArticleDetailsPage';

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

  return <RouterProvider router={router} />;
}

export default Routes;
