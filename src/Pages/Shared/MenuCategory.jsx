import { Link } from "react-router-dom";
import PopularItemCard from "../Home/PopularItem/PopularItemCard";
import Card from "./Card";

const MenuCategory = ({ items, title, img, description }) => {
  return (
    <div>
        { title && <Card img={img} title={title} description={description}></Card>}
      <div className="grid md:grid-cols-2 gap-5 px-2 my-10">
        {items.map((popularItem, index) => (
          <PopularItemCard
            key={index}
            popularItem={popularItem}
          ></PopularItemCard>
        ))}
      </div>
     <Link to={`/order/${title}`}>
     <div className="mt-10 text-center mb-10">
        <button className="btn btn-outline border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
      </div>
     </Link>
    </div>
  );
};

export default MenuCategory;
