import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routers from './router';

const router = createBrowserRouter(routers)

function App() {
  return <RouterProvider router={router} />;
}

export default App;
