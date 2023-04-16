import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import AboutPage from '@/pages/AboutPage';
import NotFoundPage from '@/pages/NotFoundPage';
import FormsPage from '@/pages/FormsPage';
import { Provider } from 'react-redux';
import { store } from '@/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: '404',
        element: <NotFoundPage />,
      },
      {
        path: 'forms',
        element: <FormsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'/404'} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
