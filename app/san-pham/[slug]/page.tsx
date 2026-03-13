import React from "react";

import {
  Headset,
  Phone,
  Clock,
  Facebook,
  Twitter,
  Mail,
  MessageCircle,
} from "lucide-react";
import ProductGallery from "@components/client/product/ProductGallery";
import BuyNowAction from "@components/client/product/BuyNowAction";
import ProductSidebar from "@components/client/product/ProductSidebar";

export default async function ProductDetailPage() {
  // Dữ liệu mô phỏng (Mock Data)
  const product: any = {
    title: "Mẫu mái hiên, mái xếp di động – 02",
    price: "Giá: liên hệ",
    category: "Mái hiên, mái xếp di động",
    image:
      "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092726334_c59b4c0f97f2e1d3c338f73d8e5bfc4b.jpg",
    gallery: [
      "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092726334_c59b4c0f97f2e1d3c338f73d8e5bfc4b.jpg",
      // Thêm các ảnh phụ nếu có
    ],
  };

  return (
    <div className="w-full bg-white font-sans pb-16">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-gray-500 uppercase text-[11px] md:text-[12px] font-medium tracking-wide">
          <a href="/" className="hover:text-[#002651] transition-colors">
            Home
          </a>
          <span className="mx-2">/</span>
          <a
            href="/san-pham"
            className="hover:text-[#002651] transition-colors"
          >
            Sản phẩm
          </a>
          <span className="mx-2">/</span>
          <a
            href="/danh-muc/mai-hien"
            className="hover:text-[#002651] transition-colors"
          >
            {product.category}
          </a>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 pt-2">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ================= CỘT TRÁI (CHI TIẾT SP) - 9/12 ================= */}
          <div className="w-full lg:w-3/4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Phần Ảnh (6/12 của Cột Trái) */}
              <div className="w-full md:w-1/2">
                <ProductGallery images={product.gallery} />
              </div>

              {/* Phần Thông Tin (6/12 của Cột Trái) */}
              <div className="w-full md:w-1/2 flex flex-col">
                <h1 className="text-2xl md:text-[28px] font-bold text-gray-800 leading-snug mb-3">
                  {product.title}
                </h1>
                <div className="w-12 h-[3px] bg-gray-300 mb-4"></div>

                <p className="text-[#ff0000] font-bold text-[22px] mb-6">
                  {product.price}
                </p>

                {/* Box Hỗ trợ trực tuyến (Nền vàng nhạt, viền đỏ đứt nét) */}
                <div className="bg-[#fffbeb] border border-dashed border-[#ed1c24] rounded-xl p-4 mb-4 text-[14px]">
                  <p className="mb-2">
                    <span className="font-bold text-[15px] underline flex items-center text-gray-800">
                      <Headset size={18} className="mr-2 text-gray-700" /> HỖ
                      TRỢ TRỰC TUYẾN:
                    </span>
                  </p>
                  <p className="mb-1 flex items-center font-bold text-[#ed1c24] text-[16px]">
                    <Phone size={18} className="mr-2" /> HOTLINE: 0909.743.306 -
                    0974.388.377
                  </p>
                  <p className="italic text-gray-600 flex items-center text-[13px]">
                    <Clock size={16} className="mr-2" /> (Mở cửa cả thứ bảy và
                    chủ nhật)
                  </p>
                </div>

                {/* Gọi Nút Client Component */}
                <BuyNowAction product={product} />

                {/* Meta Category & Social */}
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <p className="text-[13px] text-gray-600 mb-3">
                    Category:{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      {product.category}
                    </a>
                  </p>

                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 transition-colors"
                    >
                      <Facebook size={14} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-400 transition-colors"
                    >
                      <Twitter size={14} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-red-500 transition-colors"
                    >
                      <Mail size={14} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-red-600 transition-colors"
                    >
                      <MessageCircle size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CỘT PHẢI (SIDEBAR) - 3/12 ================= */}
          <div className="w-full lg:w-1/4">
            <ProductSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
