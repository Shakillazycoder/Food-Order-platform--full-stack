import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import SectionTitle from "../../Component/SectionTitle";
import PaymentCard from "../../Component/PaymentCard";

const PaymentHistory = () => {
const axiosSecure = useAxiosSecure()
const {user} = useAuth()

const {data} = useQuery({
    queryKey: ["payment-history", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/payment-history/${user?.email}`);
      console.log(response);
      return response.data;
    },
})
 console.log(data);
    return (
        <div>
            <SectionTitle subHeading={'At a Glancel'} heading={'Payment history'}></SectionTitle>
            <div className="max-w-3xl mx-auto bg-white p-10">
        <div className="flex items-center justify-between">
          <div>
            <h2>Total orders: {data.length}</h2>
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
                  <th>Email</th>
                  <th>Category</th>
                  <th>Total Price</th>
                  <th>Payment Date</th>
                </tr>
              </thead>
              <tbody>
                {
                    data.map((item, index) => <PaymentCard key={index} index={index} item={item}></PaymentCard>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
        </div>
    );
};

export default PaymentHistory;