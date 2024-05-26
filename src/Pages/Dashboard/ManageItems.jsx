import SectionTitle from "../../Component/SectionTitle";
import useMenu from "../../Hook/useMenu";
import ManageCard from "./ManageCard";

const ManageItems = () => {
    const [menu] = useMenu();
    const subtotal = menu.reduce((total, item) => total + item.price, 0);
    return (
        <div>
            <SectionTitle subHeading={'Hurry Up!'} heading={'manage all items'}></SectionTitle>
            <div className="max-w-3xl mx-auto bg-white p-10">
        <div className="flex items-center justify-between">
          <div>
            <h2>Total orders: {menu.length}</h2>
          </div>
          <div>
            <span className="text-info">Subtotal: ${subtotal.toFixed(2)}</span>
          </div>
          <div>
            <button className="btn bg-[#D1A054] text-white">PAY</button>
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
                  <th>Update</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                    menu.map((item, index) => <ManageCard key={index} index={index} item={item}></ManageCard>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ManageItems;