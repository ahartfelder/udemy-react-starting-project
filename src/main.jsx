import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import RootLayout from './router/RootLayout';
import Posts, { loader as postsLoader } from './router/Posts';
import NewPost, { action as newPostAction } from './router/NewPost';
import PostDetails, { loader as postLoader } from './router/PostDetails';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />, 
    children: [
      { 
        path: '/', 
        element: <Posts />, 
        loader: postsLoader,
        children: [
          { 
            path: '/create-post', 
            element: <NewPost />, 
            action: newPostAction
          },
          {
            path: '/:id',
            element: <PostDetails />,
            loader: postLoader
          }
        ]
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
