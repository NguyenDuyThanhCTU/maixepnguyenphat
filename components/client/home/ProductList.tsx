"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

export default function ProductList() {
  // Mảng dữ liệu sản phẩm (Giúp code gọn gàng, dễ dàng thay đổi ảnh/text sau này)
  const products = [
    {
      id: 1,
      title: "Mẫu mái hiên, mái xếp di động – 08",
      price: "Giá: liên hệ",
      image:
        "https://maihienhoangthong.com/wp-content/uploads/2024/04/12890121213.jpeg",
      link: "/san-pham/mau-mai-hien-mai-xep-di-dong-08/",
    },
    {
      id: 2,
      title: "Mẫu mái hiên, mái xếp di động – 07",
      price: "Giá: liên hệ",
      image:
        "https://maihienhoangthong.com/wp-content/uploads/2024/04/z1799722498996_8da817baf3ee8763a7a7fcb1498c83d2-scaled-1.jpg",
      link: "/san-pham/mau-mai-hien-mai-xep-di-dong-07/",
    },
    {
      id: 3,
      title: "Mẫu mái hiên, mái xếp di động – 06",
      price: "Giá: liên hệ",
      image:
        "https://maihienhoangthong.com/wp-content/uploads/2024/04/291967095_186029253854199_172308236233051608_n.jpg",
      link: "/san-pham/mau-mai-hien-mai-xep-di-dong-06/",
    },
    {
      id: 4,
      title: "Mẫu mái hiên, mái xếp di động – 05",
      price: "Giá: liên hệ",
      image:
        "https://maihienhoangthong.com/wp-content/uploads/2024/04/hinh-anh-1-768x1024-1.webp",
      link: "/san-pham/mau-mai-hien-mai-xep-di-dong-05/",
    },
    {
      id: 5,
      title: "Mẫu mái hiên, mái xếp di động – 04",
      price: "Giá: liên hệ",
      image:
        "https://maihienhoangthong.com/wp-content/uploads/woocommerce-placeholder.png",
      link: "/san-pham/mau-mai-hien-mai-xep-di-dong-04/",
    },
    {
      id: 6,
      title: "Mẫu mái hiên, mái xếp di động – 03",
      price: "Giá: liên hệ",
      image:
        "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092714594_cbf6c9aadd8f6a950dec8dad1fca5b86.jpg",
      link: "/san-pham/mau-mai-hien-mai-xep-di-dong-03/",
    },
    {
      id: 7,
      title: "Mẫu mái hiên, mái xếp di động – 02",
      price: "Giá: liên hệ",
      image:
        "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092726334_c59b4c0f97f2e1d3c338f73d8e5bfc4b.jpg",
      link: "/san-pham/mau-mai-hien-mai-xep-di-dong-02/",
    },
    {
      id: 8,
      title: "Mẫu mái hiên, mái xếp di động – 01",
      price: "Giá: liên hệ",
      image:
        "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092684476_019a160a8e3c591b8220ee8bd7ea19eb.jpg",
      link: "/san-pham/mau-mai-hien-mai-xep-di-dong-01/",
    },
  ];

  return (
    <section className="py-10 bg-white w-full">
      <div className="container mx-auto px-4">
        {/* Tiêu đề Section */}
        <div className="text-center mb-10">
          <h3 className="text-xl md:text-2xl font-bold uppercase text-gray-800 relative inline-block">
            NHÀ THI CÔNG MÁI HIÊN - MÁI XẾP SỐ 1 BÌNH DƯƠNG, ĐỒNG NAI, HCM
            {/* Đường gạch ngang trang trí */}
            <span className="absolute -bottom-3 left-1/2 w-16 h-[2px] bg-gray-300 -translate-x-1/2"></span>
          </h3>
        </div>

        {/* Grid Sản Phẩm */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              {/* Box Hình Ảnh */}
              <div className="w-full aspect-square overflow-hidden rounded-sm relative mb-3 bg-gray-50 border border-gray-100">
                <a href={product.link} className="block w-full h-full">
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
                  href={product.link}
                  className="text-[13px] md:text-[14px] text-gray-700 font-medium hover:text-[#002651] transition-colors line-clamp-2 h-[40px] leading-snug"
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

        {/* Nút Xem Tất Cả */}
        <div className="flex justify-center mt-10">
          <a
            href="/danh-muc/mai-hien-mai-xep-di-dong/"
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
