import { Helmet } from "react-helmet-async";
import Intro from "../../Component/Intro";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefRecommended from "./ChefRecommended/ChefRecommended";
import Contact from "./Contact/Contact";
import Featured from "./Featured/Featured";
import PopularItems from "./PopularItem/PopularItems";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home- Bistro Restaurants</title>
                <meta name="description" content="Bistro Restaurants" />
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Intro></Intro>
            <PopularItems></PopularItems>
            <Contact></Contact>
            <ChefRecommended></ChefRecommended>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;