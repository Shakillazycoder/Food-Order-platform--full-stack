import { Link } from "react-router-dom";
import SectionTitle from "../../Component/SectionTitle";
import useCart from "../../Hook/useCart";
import ItemCard from "./ItemCard";

const Cart = () => {
  const [cart] = useCart();
  const subtotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <SectionTitle
        subHeading={"My cart"}
        heading={"wanna add more?"}
      ></SectionTitle>

      <div className="max-w-3xl mx-auto bg-white p-10">
        <div className="flex items-center justify-between">
          <div>
            <h2>Total orders: {cart.length}</h2>
          </div>
          <div>
            <span className="text-info">Subtotal: ${subtotal.toFixed(2)}</span>
          </div>
          <div>
            {
              cart.length > 0? (
                <Link to='/dashboard/payment'>
                <button className="btn bg-[#D1A054] text-white">PAY</button>
                </Link>
              ) : (
                <button className="btn bg-[#D1A054] text-white" disabled>
                  PAY
                </button>
              )
            }
          </div>
        </div>
        <div>
          <div className="overflow-x-auto mt-4 rounded-xl">
            <table className="table">
              {/* head */}
              <thead className="bg-[#D1A054] text-[#FFF] ">
                <tr>
                  <th>
                    #
                  </th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                    cart.map((item, index) => <ItemCard key={index} index={index} item={item}></ItemCard>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
