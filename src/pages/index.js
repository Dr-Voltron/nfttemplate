import React from "react";

import Style from "../styles/index.module.css";
import {
  BigNFTSlider,
  Category,
  Filter,
  HeroSection,
  Service,
  Subscribe,
  Title,
} from "../../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading=" Feautured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <Filter />
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured  categories"
      />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;
