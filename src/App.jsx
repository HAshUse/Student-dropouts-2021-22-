import React from 'react'
import Dashboard from "./components/Dashboard"
import Navbar from './components/navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:
    <div>
    <Navbar/>
    <Dashboard/>
    </div>
  }
])

export default function App() {
  return (
      <RouterProvider router={router} ></RouterProvider>
  )
}
