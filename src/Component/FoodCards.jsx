import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hook/useAxiosSecure";
import useCart from "../Hook/useCart";


const FoodCards = ({item}) => {
    const { image, price, name, recipe, _id } = item;
    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

 const handleAddToCart = () => {

  if(user && user?.email){
   const cartItem = {
    menuId: _id,
     email: user.email,
     name,
     image,
     price,
   }
   
   axiosSecure.post('/add-to-cart', cartItem)
   .then(res => {
     console.log(res.data);
     if(res.data.insertedId){
      Swal.fire({
        title: "Added to cart",
        text: "Your cart has been updated",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK"
      }).then((result) => {
        if (result.isConfirmed) {
          // refetch cart to the update operation
          refetch()
        }
      });
     }
   })
  } else {
    Swal.fire({
      title: "You're not logged in",
      text: "Please login to add to cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Login!"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login', {state: {from : location}})
      }
    });
  }


 }



  return (
    <div>
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img
            src={image}
            alt="salad"
          />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
          <button
            className="!absolute  top-4 right-4 h-8 max-h-[32px] w-20 max-w-[100px] select-none rounded-full text-center align-middle font-sans text-xl font-medium uppercase text-red-500 bg-[#111827] transition-all hover:bg-base-200 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            ${price}
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              {name}
            </h5>
            {/* <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                ></path>
              </svg>
              5.0
            </p> */}
          </div>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            {recipe}
          </p>
        </div>
        <div className="mt-10 text-center mb-10">
        <button
        
        
         onClick={handleAddToCart}
        className="btn btn-outline border-0 border-b-4 text-[#BB8506] border-[#BB8506] bg-[#E8E8E8]">ADD TO CART</button>
      </div>
      </div>
    </div>
  );
};

export default FoodCards;
