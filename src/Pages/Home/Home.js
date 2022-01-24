import React from "react";
import Chart from "../../Components/Chart/Chart";
import FeaturedInfo from "../../Components/featuredInfo/FeaturedInfo";
import "./Home.css";
import { salesData } from "../../dummyData";
import SmallWidget from "../../Components/smallWidget/SmallWidget";
import LargeWidget from "../../Components/largeWidget/LargeWidget";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={salesData} title="Sales Analytics" grid dataKey="Sales" />
      <div className="homeWidgets">
        <SmallWidget />
        <LargeWidget />
      </div>
    </div>
  );
};

export default Home;
