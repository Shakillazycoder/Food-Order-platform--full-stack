import SectionTitle from "../../../Component/SectionTitle";
import PopularItemCard from "./PopularItemCard";
import useMenu from "../../../Hook/useMenu";

const PopularItems = () => {
const [menu] = useMenu();
const popularItems = menu.filter((item) => item.category === "popular")


  return (
    <section className="mb-20">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"from our menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-5 px-2">
        {
            popularItems.map((popularItem, index) => <PopularItemCard key={index} popularItem={popularItem}></PopularItemCard>)
        }
      </div>
      <div className="mt-10 text-center mb-10">
        <button className="btn btn-outline border-0 border-b-4 uppercase">View Full MeNu</button>
      </div>
    </section>
  );
};

export default PopularItems;
