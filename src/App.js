import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import Checkout from "./components/Checkout";
import CourseDetails from "./components/CourseDetails";
import Courses from "./components/Courses";
import Faq from "./components/Faq";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
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
          return fetch("https://y-iota-livid.vercel.app/courses/");
        },
      },
      {
        path: "/course/:courseId",
        element: <CourseDetails />,
        loader: async ({ params }) => {
          return fetch(
            `https://y-iota-livid.vercel.app/courses/${params.courseId}`
          );
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
        path: "/checkout/:courseId",
        loader: async ({ params }) => {
          return fetch(
            `https://y-iota-livid.vercel.app/courses/${params.courseId}`
          );
        },
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
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

