import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Footer from "./components/Footer";
import RestaurentSignle from "./components/RestaurantSingle";
import Shimmer from "./components/Shimmer";
//import Instamart from "./components/Instamart";

const Instamart = lazy(()=> import('./components/Instamart'));

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

// Configuration of array
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/single/:id",
        element: <RestaurentSignle />,
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
