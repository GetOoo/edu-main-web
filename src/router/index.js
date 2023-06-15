import React from 'react';
import CoursesPage from "../pages/Course";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RootLayout from "../pages/Root";

const routers = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'courses',
        element: <CoursesPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      }
    ]
  },
  {
    path: '*',
    element: <LoginPage />
  }
]

export default routers;