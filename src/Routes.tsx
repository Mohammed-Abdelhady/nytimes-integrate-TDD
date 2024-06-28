import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ArticlesListPage from './pages/articles/ArticlesListPage';
import ArticleDetailsPage from './pages/articles/ArticleDetailsPage';

function Routes() {
  const routers = createBrowserRouter([
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
    <>
      <RouterProvider router={routers} />;
    </>
  );
}

export default Routes;
