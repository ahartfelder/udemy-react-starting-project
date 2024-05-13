import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import Posts from './router/Posts'
import NewPost from './router/NewPost';
import RootLayout from './router/RootLayout';

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, children: [
    { path: '/', element: <Posts />, children: [
      { path: '/create-post', element: <NewPost /> }
    ] },
  ] }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
