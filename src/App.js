import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
//import About from "./components/About.js";
import RestaurantCard from "./components/RestaurantCard.js";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";


const Grocery = lazy(() => import("./components/Grocery.js")); 
const About = lazy(() => import("./components/About.js"  ));

const AppLayout =()=> {
    return(
       <Provider store={appStore}>
        <div className="app">
            <Header/>
            < Outlet/>
        </div>
        </Provider>
    );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path:"/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback = {<h1>Loading.....</h1>} ><About/> </Suspense>,
      },
      {
        path:"/contact",
        element:<Contact />,
      }, 
      {
        path: "/grocery",
        element: <Suspense fallback = {<h1>Loading.....</h1>} ><Grocery /></Suspense>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
    ],
    errorElement:<Error/>,
  },
  
  ]
);

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
     
