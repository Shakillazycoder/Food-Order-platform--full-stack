import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Component/SectionTitle";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import UsersCard from "./UsersCard";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosSecure.get("/users");
      return response.data;
    },
  });

  return (
    <div>
      <SectionTitle
        subHeading={"How Many??"}
        heading={"Manage all users"}
      ></SectionTitle>

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h2>Total orders: {users.length}</h2>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto mt-4 rounded-xl">
            <table className="table">
              {/* head */}
              <thead className="bg-[#D1A054] text-[#FFF] ">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <UsersCard
                    key={index}
                    index={index}
                    user={user}
                    refetch={refetch}
                  ></UsersCard>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
