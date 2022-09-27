import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import CreateEvent from './pages/CreateEvent/CreateEvent';

const router = createBrowserRouter([
  {
      path: '/',
      element: <Landing />
  },
  {
      path: '/create',
      element: <CreateEvent />
  },
  {
    path: '/event',
    element: <div>Hello event</div>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App