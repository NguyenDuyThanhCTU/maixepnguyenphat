import { CategoryProps } from "@assets/props/Props";
import { ProductProps } from "@assets/props/PropsProduct";
import FeaturesAndGallery from "@components/client/home/FeaturesAndGallery";
import HeroAndIntro from "@components/client/home/HeroAndIntro";
import LatestNews from "@components/client/home/LatestNews";
import ProductList from "@components/client/home/ProductList";
import { find } from "@config/lib/api";
import React from "react";
import slugify from "slugify";

const HomePage = async () => {
  const Slides = await find("Slides");
  const ProductCategory: CategoryProps[] = await find("ProductCategory");
  const Products: ProductProps[] = await find("Products");
  const Collections = await find("Collections");
  const Posts = await find("Posts");

  return (
    <div>
      <HeroAndIntro Data={Slides} />
      {ProductCategory?.map((item, idx) => {
        const Data = Products?.filter(
          (Pitem) =>
            Pitem.level0 ===
            slugify(item.level0, { lower: true, locale: "vi" }),
        );
        return (
          <div key={idx}>
            {Data?.length > 0 && (
              <ProductList
                Data={Data}
                Category={slugify(item.level0, { lower: true, locale: "vi" })}
              />
            )}
          </div>
        );
      })}

      <FeaturesAndGallery Data={Collections} />
      <LatestNews Data={Posts} />
    </div>
  );
};

export default HomePage;
