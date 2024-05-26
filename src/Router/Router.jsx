import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/Contact/ContactUs";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OrderPage from "../Pages/OrderPage/OrderPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import UserHome from "../Pages/Dashboard/UserHome";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems";
import AdminRoutes from "../PrivateRoute/AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem";
import Payment from "../Pages/Dashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/order/:category",
        element: <OrderPage></OrderPage>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: 'payment',
        element: <Payment></Payment>,
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>,
      },
      // admin routes
      {
        path: "allUsers",
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>,
      },
      {
        path: "addItems",
        element: <AdminRoutes><AddItems></AddItems></AdminRoutes>,
      },
      {
        path: "manageItems",
        element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>,
      }, 
      {
        path: "updateItems/:id",
        element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
        loader: ({params}) => fetch(`http://localhost:3000/itemDetails/${params.id}`)
      }
    ]
  }
]);

export default router;
