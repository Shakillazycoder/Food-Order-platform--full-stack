import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useCart from "../../Hook/useCart";

const Navbar = () => {
  const { user, SignOutUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const [cart] = useCart()


  const subtotal = cart.reduce((total, item) => total + item.price, 0);


  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/SALADS">Order Food</NavLink>
      </li>
      {
        user && (
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
        )
      }
    </>
  );


  const handleLogOut = () => {
    SignOutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar max-w-screen-xl fixed z-10 bg-black bg-opacity-30 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box gap-3 w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Restaurants</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-5">
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">{cart.length}</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg text-black">{cart.length} Items</span>
                  <span className="text-info">Subtotal: ${subtotal.toFixed(2)}</span>
                  <Link to='/dashboard/cart'>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {user ? (
              <div
                className="dropdown tooltip ml-5 tooltip-bottom dropdown-end"
                data-tip={user.displayName}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    {user.photoURL ? (
                      <img alt="User Photo" src={user.photoURL} />
                    ) : (
                      <img
                        alt="User Photo"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box space-y-3 w-52"
                >
                  <li>
                    <h2 className="bg-[#3498db] ">{user.displayName}</h2>
                  </li>
                  <li>
                    <a className="bg-red-600 text-white" onClick={handleLogOut}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink to="/login" className="btn ">
                Login
              </NavLink>
            )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
