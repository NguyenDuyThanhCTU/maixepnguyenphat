import { ProductProps } from "@assets/props/PropsProduct";
import React from "react";

export default function ProductGrid({
  products,
}: {
  products: ProductProps[];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group flex flex-col items-center text-center cursor-pointer border border-transparent hover:border-gray-100 hover:shadow-md transition-all duration-300 pb-3 rounded-md"
        >
          <div className="w-full aspect-square overflow-hidden rounded-sm relative mb-3 bg-gray-50">
            <a href={product.url} className="block w-full h-full">
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </a>
          </div>
          <div className="flex flex-col px-2 w-full">
            <a
              href={product.url}
              className="text-[13px] md:text-[14px] text-gray-700 font-medium group-hover:text-[#002651] transition-colors line-clamp-2 h-[40px] leading-snug"
            >
              {product.title}
            </a>
            <span className="text-[#ff0000] font-bold text-[14px] mt-1">
              {product.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
