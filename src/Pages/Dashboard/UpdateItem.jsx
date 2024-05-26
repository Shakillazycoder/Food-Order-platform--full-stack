import { FaUtensils } from "react-icons/fa6";
import SectionTitle from "../../Component/SectionTitle";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData} from "react-router-dom";
import useCart from "../../Hook/useCart";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure()
 const updateItems = useLoaderData()
 const [, refetch] = useCart()

 const {name, price, recipe, category, _id} = updateItems


  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imbb then get an url
    const imageFile = { image: data.image[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if(res.data.success){
        const menuUpdateItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            image: res.data.data.display_url,
            description: data.description,
            recipe: data.recipe
          };
          console.log(menuUpdateItem);
          const menuRes = await axiosSecure.put(`/menuUpdate/${_id}`, menuUpdateItem)
          console.log(menuRes.data);
          if(menuRes.data.modifiedCount > 0){
            Swal.fire({
              title: `${data.name} is added to the Update`,
              text: "Your menu has been Updated",
              icon: "success",
              showCancelButton: false,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "OK"
            })
            refetch()
          }
    }
    console.log(res.data);
  };








  return (
    <div>
      <SectionTitle
        subHeading={"Update an Item"}
        heading={"ADD AN ITEM"}
      ></SectionTitle>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="m-20 space-y-5 bg-white p-10 rounded-2xl"
        >
          <div>
            <label>Name</label>
            {/* <input {...register("name")} /> */}
            <input
              {...register("name")}
              type="text"
              placeholder="name"
              value={name}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-5">
            <div className="form-control w-full">
              <label>Category</label>
              <select
                defaultValue={category}
                {...register("category")}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  {category}
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="desserts">Desserts</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label>Price</label>
              {/* <input {...register("name")} /> */}
              <input
                {...register("price")}
                type="text"
                placeholder="price"
                defaultValue={price}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text text-lg">Recipe Details*</span>
              </div>
              <textarea
                {...register("recipe")}
                className="textarea textarea-bordered h-24"
                placeholder="recipes"
                value={recipe}
              ></textarea>
            </label>
          </div>
          <div>
            <input
              {...register("image")}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <button 
          
          type="submit" className="btn bg-yellow-600 text-white mt-5">
            Update Items <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
