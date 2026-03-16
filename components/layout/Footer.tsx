"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  FileText,
  ChevronRight,
  Facebook,
  Twitter,
  MailPlus,
  MessageCircle,
  ArrowUp,
} from "lucide-react";
import { LocalFindById } from "@components/items/Handle";
import { ContactProps } from "@assets/props/PropsConfig";
import slugify from "slugify";
import { RevalidateTags } from "@app/action";

export default function Footer({ Config }: { Config: Array<any> }) {
  const ContactData: ContactProps = LocalFindById(Config, "contact");

  // Hàm cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addresses = [
    "ĐC1: 49/9 Đường Số 4, P17, Bình Hưng Hòa A, Q.Bình Tân, Tp Hồ Chí Minh.",
    "ĐC2: 212/10 Trần Não, P.Bình An, Q.2, Tp Hồ Chí Minh.",
    "ĐC3: 214/28 Cống Quỳnh, P. Phạm Ngũ Lão, Q.1, Tp Hồ Chí Minh.",
    "ĐC4: 47/5 Lũy Bán Bích, Q.Tân Phú, Tp Hồ Chí Minh.",
    "ĐC5: 438/7 Nơ Trang Long, Q.Gò Vấp, Tp Hồ Chí Minh.",
    "ĐC6: 26/7 Lê Văn Lương, Q7, Tp Hồ Chí Minh.",
  ];

  return (
    <footer className="relative w-full bg-[#002651] text-gray-300 font-sans mt-10">
      {/* --- SVG Wave Divider (Hiệu ứng sóng lượn phía trên Footer) --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-[99%] z-10">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#002651]"
          ></path>
        </svg>
      </div>

      {/* --- Nội dung chính Footer --- */}
      <div className="d:w-[1200px] p:w-auto d:mx-auto p:mx-2 mx-auto px-4 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* CỘT 1: Thông tin liên hệ (5 phần) */}
          <div className="md:col-span-5 flex flex-col">
            <h4 className="text-white text-[18px] font-bold uppercase mb-6 relative inline-block">
              Thông tin liên hệ
              <span className="absolute -bottom-2 left-0 w-12 h-[2px] bg-gray-400"></span>
            </h4>

            <h5 className="text-white font-bold text-[15px] mb-4">
              CÔNG TY TNHH CƠ KHÍ MÁI CHE NGUYÊN PHÁT
            </h5>

            <ul className="space-y-3 text-[14px]">
              <li className="flex items-start">
                <Phone
                  size={18}
                  className="mr-3 text-white flex-shrink-0 mt-0.5"
                />
                <span>
                  <strong className="text-white">Hotline:</strong>{" "}
                  {ContactData?.Hotline}
                </span>
              </li>
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-3 text-white flex-shrink-0 mt-0.5"
                />
                <span>
                  <strong className="text-white">Địa chỉ:</strong>{" "}
                  {ContactData?.CompanyAddress}
                </span>
              </li>

              <li className="flex items-center">
                <FileText size={18} className="mr-3 text-white flex-shrink-0" />
                <span>
                  <strong className="text-white">MST:</strong>
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-white flex-shrink-0" />
                <span>
                  <strong className="text-white">Email:</strong>
                  {ContactData?.Email}
                </span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#002651] transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#002651] transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#002651] transition-colors"
              >
                <MailPlus size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#002651] transition-colors"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* CỘT 2: Liên kết nhanh (3 phần) */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="text-white text-[18px] font-bold uppercase mb-6 relative inline-block">
              Liên kết
              <span className="absolute -bottom-2 left-0 w-12 h-[2px] bg-gray-400"></span>
            </h4>

            <ul className="space-y-3 text-[14px]">
              {["Trang chủ", "Giới thiệu", "Hình ảnh thi công", "Liên hệ"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`${item === "Trang chủ" ? "/" : `/${slugify(item, { locale: "vi", lower: true })}`}`}
                      className="flex items-center group hover:text-white transition-colors"
                    >
                      <ChevronRight
                        size={16}
                        className="mr-2 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all"
                      />
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* CỘT 3: Fanpage (4 phần) */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-white text-[18px] font-bold uppercase mb-6 relative inline-block">
              Chi Nhánh
              <span className="absolute -bottom-2 left-0 w-12 h-[2px] bg-gray-400"></span>
            </h4>

            {/* Box chứa Iframe Facebook */}
            <div className="space-y-4 text-white">
              {addresses.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className=" text-lg mt-1">➤</span>

                  <p className=" leading-relaxed">
                    <span className="font-medium">ĐC{index + 1}: </span>
                    {item}
                  </p>
                </div>
              ))}

              <p className="font-semibold  pt-2 ">
                Khảo sát thi công các tỉnh trên toàn quốc.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Thanh Bản quyền (Copyright Bottom Bar) --- */}
      <div
        className="border-t cursor-pointer border-white/10 py-4 text-center text-[13px] text-gray-400 relative"
        onClick={() => RevalidateTags()}
      >
        <div className="d:w-[1200px] p:w-auto d:mx-auto p:mx-2  mx-auto px-4">
          Bản quyền 2026 © Mái Hiên - Mái Xếp Nguyên Phát
        </div>
      </div>

      {/* --- Nút Cuộn lên đầu trang (Back to top) --- */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 bg-white/10 hover:bg-white text-white hover:text-[#002651] rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 z-50 shadow-lg backdrop-blur-sm"
        aria-label="Cuộn lên đầu trang"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
