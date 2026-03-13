import FeaturesAndGallery from "@components/client/home/FeaturesAndGallery";
import HeroAndIntro from "@components/client/home/HeroAndIntro";
import LatestNews from "@components/client/home/LatestNews";
import ProductList from "@components/client/home/ProductList";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroAndIntro />
      <ProductList />
      <FeaturesAndGallery />
      <LatestNews />
    </div>
  );
};

export default HomePage;
