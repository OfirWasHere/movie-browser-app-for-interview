import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Routes from './Components/Routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={createBrowserRouter(Routes)} />
    </Provider>
  </React.StrictMode>
);