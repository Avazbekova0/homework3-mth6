import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import { MainPage } from '../pages/Main/MainPage';
import { DetailsPage } from '../pages/Details/DetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'products/:id',
        element: <DetailsPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};