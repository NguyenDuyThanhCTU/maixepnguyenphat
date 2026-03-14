"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { ProductProps } from "@assets/props/PropsProduct";
import slugify from "slugify";

export default function ProductList({
  Data,
  Category,
}: {
  Data: ProductProps[];
  Category: string;
}) {
  // Mảng dữ liệu sản phẩm (Giúp code gọn gàng, dễ dàng thay đổi ảnh/text sau này)

  return (
    <section className="py-10 bg-white w-full">
      <div className="d:w-[1200px] p:w-auto d:mx-auto p:mx-2  mx-auto px-4">
        {/* Tiêu đề Section */}
        <div className="text-center mb-10">
          <h3 className="text-xl md:text-2xl font-bold uppercase text-gray-800 relative inline-block">
            {Category}
            {/* Đường gạch ngang trang trí */}
            <span className="absolute -bottom-3 left-1/2 w-16 h-[2px] bg-gray-300 -translate-x-1/2"></span>
          </h3>
        </div>

        {/* Grid Sản Phẩm */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {Data.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              {/* Box Hình Ảnh */}
              <div className="w-full aspect-square overflow-hidden rounded-sm relative mb-3 bg-gray-50 border border-gray-100">
                <a
                  href={`/product/${product.url}`}
                  className="block w-full h-full"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </a>
              </div>

              {/* Box Text */}
              <div className="flex flex-col flex-grow w-full px-1">
                <a
                  href={`/product/${product.url}`}
                  className="text-[13px] md:text-[14px] text-gray-700 font-medium hover:text-[#002651] transition-colors line-clamp-2 h-[40px] leading-snug"
                >
                  {product.title}
                </a>
                <span className="text-[#ff0000] font-bold text-[14px] mt-1">
                  {product.price ? product.price : "Liên hệ báo giá"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Nút Xem Tất Cả */}
        <div className="flex justify-center mt-10">
          <a
            href={`/san-pham/${slugify(Category, { locale: "vi", lower: true })}`}
            className="inline-flex items-center px-6 py-2.5 bg-[#002651] text-white font-medium rounded-lg hover:bg-blue-900 transition-colors shadow-md"
          >
            <span>Xem tất cả</span>
            <ChevronRight size={18} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
