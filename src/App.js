import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import Checkout from "./components/Checkout";
import CourseDetails from "./components/CourseDetails";
import Courses from "./components/Courses";
import Faq from "./components/Faq";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Root from "./Layout/Root";
import PrivateRoute from "./Routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Courses />,
        loader: async () => {
          return fetch("courses.json");
        },
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/courseDetails",
        element: <CourseDetails />,
      },
      {
        path: "/checkOut",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
