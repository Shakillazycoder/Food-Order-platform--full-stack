import { Helmet } from "react-helmet-async";
import Card from "../Shared/Card";
import img from "../../assets/menu/banner3.jpg";
import useMenu from "../../Hook/useMenu";
import SectionTitle from "../../Component/SectionTitle";
import MenuCategory from "../Shared/MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

const OurMenu = () => {
  const [menu, loading] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>
          <span className="loading loading-spinner text-primary"></span>
          <span className="loading loading-spinner text-secondary"></span>
          <span className="loading loading-spinner text-accent"></span>
          <span className="loading loading-spinner text-neutral"></span>
          <span className="loading loading-spinner text-info"></span>
          <span className="loading loading-spinner text-success"></span>
          <span className="loading loading-spinner text-warning"></span>
          <span className="loading loading-spinner text-error"></span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Our Menu - Bistro Restaurants</title>
      </Helmet>
      <Card
        img={img}
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
      ></Card>
      {/* offered Section */}
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"today's offer"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* DESSERTS offered */}
      <MenuCategory
        items={desserts}
        img={dessertImg}
        title={"DESSERTS"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      {/* PIZZA section */}
      <MenuCategory
        items={pizzas}
        img={pizzaImg}
        title={"PIZZA"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      {/* SALADS Section */}
      <MenuCategory
        items={salads}
        img={saladImg}
        title={"SALADS"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      {/* soup section */}
      <MenuCategory
        items={soups}
        img={soupImg}
        title={"SOUPS"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      {/* drinks section */}
      <MenuCategory
        items={drinks}
        img={img}
        title={"DRINKS"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
    </div>
  );
};

export default OurMenu;
