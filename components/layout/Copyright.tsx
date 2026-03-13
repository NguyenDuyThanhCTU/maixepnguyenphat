"use client";

import { RevalidateTags } from "@app/action";
import { CategoryProps } from "@assets/props/Props";
import { ProductProps } from "@assets/props/PropsProduct";
import { useStateProvider } from "@context/StateProvider";
import { useEffect } from "react";

interface CopyrightProps {
  Config: Array<any>;
  ProductCategory: CategoryProps[];
  PostCategory: CategoryProps[];
  Products: ProductProps[];
}

const Copyright = () => {
  return (
    <>
      <div
        className="cursor-pointer flex justify-center text-center px-2 text-[14px] font-Montserrat font-LexendDeca py-4 bg-black text-white "
        onClick={() => RevalidateTags()}
      >
        <p className="pr-2">©2024 All Rights reserved</p>
        <p className="pl-2 border-l-[1px] border-gray-400">
          Designed by ADS Company
        </p>
      </div>
    </>
  );
};

export default Copyright;
