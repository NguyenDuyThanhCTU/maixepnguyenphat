"use client";

import React from "react";
import {
  History,
  Users,
  BadgeDollarSign,
  Ban,
  ThumbsUp,
  FileCheck,
  ChevronRight,
  ZoomIn,
} from "lucide-react";
import { CollectionProps } from "@assets/props/Props";

export default function FeaturesAndGallery({
  Data,
}: {
  Data: CollectionProps[];
}) {
  // --- Data: 06 Lý do ---
  const reasons = [
    {
      id: 1,
      title: "HOẠT ĐỘNG LÂU NĂM",
      desc: "Mái Hiên – Mái Xếp Nguyên Phát là 1 trong những đơn vị hoạt động lâu năm nhất trong lĩnh vực lắp đặt mái hiên, mái xếp tại Bình Dương.",
      icon: <History className="text-[#002651]" size={32} />,
    },
    {
      id: 2,
      title: "ĐỘI NGŨ KINH NGHIỆM",
      desc: "Chúng tôi có đội ngũ thợ thi công mái che giàu kinh nghiệm, sẵn sàng phục vụ khách hàng trong thời gian nhanh, gấp rút tại bất cứ thời điểm nào.",
      icon: <Users className="text-[#002651]" size={32} />,
    },
    {
      id: 3,
      title: "GIÁ TỐT NHẤT THỊ TRƯỜNG",
      desc: "Với lợi thế là đại lý cấp 1 từ nhà máy sản xuất, Mái Hiên – Mái Xếp Nguyên Phát cam kết mức giá sản phẩm thấp nhất trên thị trường.",
      icon: <BadgeDollarSign className="text-[#002651]" size={32} />,
    },
    {
      id: 4,
      title: "KHÔNG PHÁT SINH CHI PHÍ",
      desc: "Báo giá trọn gói không phát sinh, miễn phí toàn bộ công lắp đặt và chi phí vận chuyển.",
      icon: <Ban className="text-[#002651]" size={32} />,
    },
    {
      id: 5,
      title: "SẢN PHẨM CHẤT LƯỢNG CAO",
      desc: "Mái Hiên – Mái Xếp Nguyên Phát hoạt động chuyên nghiệp, bảo hành lâu dài cho từng loại sản phẩm.",
      icon: <ThumbsUp className="text-[#002651]" size={32} />,
    },
    {
      id: 6,
      title: "NGUỒN GỐC XUẤT XỨ RÕ RÀNG",
      desc: "Toàn bộ sản phẩm có nguồn gốc xuất xứ rõ ràng, “Nói không với hàng giả hàng nhái”.",
      icon: <FileCheck className="text-[#002651]" size={32} />,
    },
  ];

  // --- Data: Hình ảnh hoạt động ---
  const galleryImages = Data?.filter((item) => item.type === "hinh-anh");

  return (
    <div className="w-full bg-white font-sans">
      {/* ================= SECTION: 06 LÝ DO ================= */}
      <section className="py-12 bg-gray-50 border-t border-b border-gray-100">
        <div className="d:w-[1200px] p:w-auto d:mx-auto p:mx-2  mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-gray-800 relative inline-block">
              06 LÝ DO NÊN CHỌN MÁI HIÊN - MÁI XẾP Nguyên Phát
              <span className="absolute -bottom-3 left-1/2 w-16 h-[2px] bg-gray-300 -translate-x-1/2"></span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-4 space-y-3 sm:space-y-0 p-4 hover:bg-white hover:shadow-md rounded-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-[60px] h-[60px] flex-shrink-0 flex items-center justify-center bg-blue-50 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[15px] text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[14px] text-gray-600 leading-relaxed text-justify">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION: HÌNH ẢNH HOẠT ĐỘNG ================= */}
      <section className="py-12">
        <div className="d:w-[1200px] p:w-auto d:mx-auto p:mx-2 mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-gray-800 relative inline-block">
              HÌNH ẢNH HOẠT ĐỘNG
              <span className="absolute -bottom-3 left-1/2 w-16 h-[2px] bg-gray-300 -translate-x-1/2"></span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((src, index) => (
              <a
                key={index}
                href={src.image}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full aspect-square overflow-hidden rounded-lg cursor-pointer bg-gray-100 shadow-sm"
              >
                <img
                  src={src.image}
                  alt={`Hoạt động thi công ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                {/* Lớp phủ đen mờ và Icon khi Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100"
                    size={32}
                  />
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <a
              href="/hinh-anh-thi-cong"
              className="inline-flex items-center px-6 py-2.5 bg-[#002651] text-white font-medium rounded-lg hover:bg-blue-900 transition-colors shadow-md"
            >
              <span>Xem tất cả</span>
              <ChevronRight size={18} className="ml-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
