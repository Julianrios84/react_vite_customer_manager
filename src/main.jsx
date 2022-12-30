import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Index, { loader as loaderClients } from './pages/Index';
import CreateClient, { action as actionClient } from './pages/CreateClient';
import ErrorPage from './components/ErrorPage';
import UpdateClient, {
  loader as updateClientLoader,
  action as updateClientAction,
} from './pages/UpdateClient';

import { action as deleteClientAction } from './components/Client';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: loaderClients,
        errorElement: <ErrorPage />,
      },
      {
        path: '/client/create',
        element: <CreateClient />,
        action: actionClient,
        errorElement: <ErrorPage />,
      },
      {
        path: '/client/:clientId/update',
        element: <UpdateClient />,
        loader: updateClientLoader,
        action: updateClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: '/client/:clientId/delete',
        action: deleteClientAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
