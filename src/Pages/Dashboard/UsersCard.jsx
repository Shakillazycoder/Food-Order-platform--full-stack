import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { FaUsers } from "react-icons/fa6";

const UsersCard = ({ user, index, refetch }) => {
  const { name, image, _id } = user;
  const axiosSecure = useAxiosSecure();

  const handleDeleteUsers = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${_id}`).then((result) => {
          if (result.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  const handleMakeAdmin = user => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to admin this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I want to make Admin!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.patch(`/users/admin/${_id}`).then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire(`${user.name} is now admin`);
            }
          });
        }
      });
  }

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td className="text-[#737373]">{name}</td>
      <td className="text-[#737373]">
        { user.role === 'admin' ? 'Admin' : <button
          onClick={() => handleMakeAdmin(user)}
          className="btn bg-[#D1A054] w-12 h-12 btn-xs"
        >
          <FaUsers className="text-white text-2xl"></FaUsers>
        </button>}
      </td>
      <th>
        <button
          onClick={() => handleDeleteUsers(_id)}
          className="btn bg-[#B91C1C] w-12 h-12 btn-xs"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 6H5H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 11V17"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 11V17"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </th>
    </tr>
  );
};

export default UsersCard;
