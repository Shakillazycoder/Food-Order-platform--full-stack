import { Helmet } from "react-helmet-async";
import Card from "../Shared/Card";
import coverImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../Hook/useMenu";
import OrderTabs from "./OrderTabs";
import { useParams } from "react-router-dom";

const OrderPage = () => {
    const categories = ['SALADS', 'PIZZA', 'SOUPS', 'DESSERTS', 'DRINKS']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu()
  const desserts = menu.filter((item) => item.category === "dessert");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Order Food - Bistro Restaurant</title>
      </Helmet>
      <Card
        img={coverImg}
        title={"OUR SHOP"}
        description={"Would you like to try a dish?"}
      ></Card>
      {/* tabs */}
      <div className="my-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <OrderTabs items={salads}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={pizzas}></OrderTabs>
          </TabPanel>
          <TabPanel>
          <OrderTabs items={soups}></OrderTabs>
          </TabPanel>
          <TabPanel>
          <OrderTabs items={desserts}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={drinks}></OrderTabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderPage;
