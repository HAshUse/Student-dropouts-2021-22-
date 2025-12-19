import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardProvider } from "./Context/DashboardContext"
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Footer from './components/footer'
import About from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  },
  {
    path: "/dashboard",
    element: <div>
      <Navbar />
      <Dashboard />
    </div>
  },
  {
    path: "/about",
    element: <div>
      <Navbar />
      <About />
    </div>
  }
]);

export default function App() {
  return (
    <DashboardProvider>
      <RouterProvider router={router} />;
    </DashboardProvider>

  )
}
