/* eslint-disable react/prop-types */
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Index from "./components/Dashboard/Index";
import Login from "./components/Login/Login";
import Nodes from "./components/Nodes/Nodes";

const isAuthenticated = () => {
  const accessToken = localStorage.getItem("access token");
  return !!accessToken;
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute element={<Index />} />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "nodes",
        element: <Nodes />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
