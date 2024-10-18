import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard"; // Adjust the path as necessary
import Index from "./components/Dashboard/Index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
