import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";

import "./App.css";
import AboutPage from "./pages/About";
import SystemsPage from "./pages/Systems";
import SupportPage from "./pages/Support";
import CareersPage from "./pages/Careers";
import EmployeePortalPage from "./pages/EmployePortal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/systems", element: <SystemsPage /> },
      { path: "/support", element: <SupportPage /> },
      { path: "/careers", element: <CareersPage /> },
      { path: "/employee-portal", element: <EmployeePortalPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
