"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Search,
  Menu,
  X,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ChevronRight,
} from "lucide-react";
import { LocalFindById } from "@components/items/Handle";
import { ContactProps } from "@assets/props/PropsConfig";
import Link from "next/link";

export default function Header({ Config }: { Config: Array<any> }) {
  const ContactData: ContactProps = LocalFindById(Config, "contact");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState(null);

  // Khóa cuộn trang khi mở menu mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Cấu trúc dữ liệu Menu (Giúp dễ dàng thêm/sửa link sau này)
  const menuItems = [
    { title: "Trang chủ", link: "/", active: true },
    { title: "Giới Thiệu", link: "/gioi-thieu" },
    {
      title: "Sản Phẩm",
      link: "/san-pham/tat-ca",
      sub: [
        {
          title: "Mái hiên, mái xếp di động",
          link: "/san-pham/mai-hien-mai-xep-di-dong",
        },
        { title: "Mái che lấy sáng", link: "/san-pham/mai-che-lay-sang" },
        { title: "Dù che nắng", link: "/san-pham/du-che-nang" },
        { title: "Màng thả", link: "/san-pham/mang-tha" },
        { title: "Cửa cuốn, cửa kéo", link: "/san-pham/cua-cuon-cua-keo" },
        { title: "Mái vòm", link: "/san-pham/mai-vom" },
        { title: "Linh kiện, phụ kiện", link: "/san-pham/linh-kien-phu-kien" },
      ],
    },
    {
      title: "Dịch vụ thi công",
      link: "/dich-vu-thi-cong",
    },
    { title: "Hình ảnh thi công", link: "/hinh-anh-thi-cong" },
    { title: "Tin Tức", link: "/tin-tuc" },
    { title: "Liên hệ", link: "/lien-he" },
  ];

  const toggleMobileSub = (index: any, e: any) => {
    e.preventDefault();
    setOpenMobileSub(openMobileSub === index ? null : index);
  };

  return (
    <header className="w-full bg-white font-sans shadow-sm relative z-50">
      {/* ================= TOP BAR (Desktop) ================= */}
      <div className="hidden md:flex bg-gray-100 border-b border-gray-200 text-[13px] py-1.5">
        <div className="d:w-[1200px] p:w-auto d:mx-auto p:mx-2  mx-auto px-4 flex justify-between items-center">
          <ul className="flex items-center space-x-6 text-gray-600">
            <li className="flex items-center hover:text-[#002651] cursor-pointer">
              <MapPin size={14} className="mr-1.5 text-[#002651]" />
              <span>Mái Hiên - Mái Xếp Nguyên Phát</span>
            </li>
            <li className="flex items-center hover:text-[#002651] cursor-pointer">
              <Mail size={14} className="mr-1.5 text-[#002651]" />
              <span>{ContactData?.Email}</span>
            </li>
            <li className="flex items-center hover:text-[#002651] cursor-pointer">
              <Phone size={14} className="mr-1.5 text-[#002651]" />
              <span className="font-semibold">{ContactData?.Hotline}</span>
            </li>
          </ul>

          <ul className="flex items-center space-x-3 text-gray-500">
            <li className="hover:text-blue-600 cursor-pointer">
              <Facebook size={16} />
            </li>
            <li className="hover:text-pink-600 cursor-pointer">
              <Instagram size={16} />
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              <Twitter size={16} />
            </li>
            <li className="hover:text-red-600 cursor-pointer">
              <Youtube size={16} />
            </li>
          </ul>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <div className="d:w-[1200px] p:w-auto d:mx-auto p:mx-2  mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="w-1/2 md:w-1/3 lg:w-1/4">
          <a href="/">
            <img
              src={ContactData?.LogoWebsite}
              alt="Mái Hiên Nguyên Phát"
              className="w-full h-auto object-contain max-w-[150px]"
            />
          </a>
        </div>

        {/* Slogan (Desktop) */}
        <div className="hidden lg:flex justify-center w-1/3">
          <img
            src="https://maihienhoangthong.com/wp-content/uploads/2024/04/slogan2.png"
            alt="Slogan"
            className="h-[40px] object-contain"
          />
        </div>

        {/* Hotline */}
        <div className="flex items-center justify-end w-1/2 md:w-1/3 lg:w-1/4">
          <div className="flex items-center space-x-3">
            <img
              src="https://maihienhoangthong.com/wp-content/uploads/2022/08/1625829.gif"
              alt="Hotline"
              className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full"
            />
            <div className="text-[12px] md:text-[14px] text-gray-800 leading-tight">
              Liên hệ tư vấn
              <br />
              <Link
                href={`tel:${ContactData?.Hotline}`}
                className="text-[#ff0000] text-[16px] md:text-[20px] font-bold"
              >
                {ContactData?.Hotline}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= NAVIGATION BAR (Xanh đậm) ================= */}
      <div className="bg-[#002651] sticky top-0 z-40">
        <div className="d:w-[1200px] p:w-auto d:mx-auto p:mx-2  mx-auto px-4 flex justify-between items-center h-[50px]">
          {/* Nút Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white flex items-center p-1"
          >
            <Menu size={26} />
          </button>

          {/* Menu PC (Desktop) */}
          <nav className="hidden md:flex items-center h-full">
            <ul className="flex space-x-1 h-full text-white text-[13px] lg:text-[14px] font-semibold uppercase tracking-wide">
              {menuItems.map((item, index) => (
                <li key={index} className="h-full group relative">
                  <a
                    href={item.link}
                    className={`h-full flex items-center px-2 lg:px-3 transition-colors ${item.active ? "text-[#f8a51c]" : "hover:bg-white/10"}`}
                  >
                    {item.title}
                    {item.sub && <ChevronDown size={14} className="ml-1" />}
                  </a>

                  {/* Dropdown Menu trên PC */}
                  {item.sub && (
                    <ul className="absolute left-0 top-full w-[240px] bg-white text-gray-700 shadow-xl border-t-[3px] border-[#ed1c24] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 flex flex-col">
                      {item.sub.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.link}
                            className="block px-4 py-2.5 text-[13px] capitalize border-b border-gray-100 hover:bg-gray-50 hover:text-[#002651] hover:pl-6 transition-all duration-300"
                          >
                            {subItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Search Box */}
          <div className="flex items-center bg-white rounded overflow-hidden h-[32px] w-[180px] md:w-[220px]">
            <input
              type="text"
              placeholder="Tìm Kiếm..."
              className="w-full px-3 py-1 text-[13px] text-gray-700 outline-none border-none"
            />
            <button className="bg-gray-100 hover:bg-gray-200 px-3 h-full flex items-center justify-center text-gray-600 transition-colors">
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= MENU MOBILE (Slide Drawer) ================= */}
      {/* Lớp phủ đen */}
      <div
        className={`fixed inset-0 bg-black/60 z-[999] transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Panel Trượt */}
      <div
        className={`fixed top-0 left-0 w-[80%] max-w-[320px] h-full bg-white z-[1000] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header Drawer */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
          <img
            src={ContactData?.LogoWebsite}
            alt="Logo"
            className="h-8 object-contain"
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-500 hover:text-red-500 bg-white p-1 rounded-full shadow-sm"
          >
            <X size={24} />
          </button>
        </div>

        {/* Khung Search trên Mobile */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center bg-gray-100 rounded-md overflow-hidden h-[40px]">
            <input
              type="text"
              placeholder="Tìm Kiếm..."
              className="w-full px-3 text-[14px] bg-transparent outline-none"
            />
            <button className="px-3 text-gray-600">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Danh sách Menu Mobile */}
        <div className="flex-1 overflow-y-auto">
          <ul className="flex flex-col text-[14px] font-bold text-gray-800 uppercase">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-gray-100">
                <div className="flex items-center justify-between px-4 py-3.5">
                  <a
                    href={item.link}
                    className={`flex-1 ${item.active ? "text-[#002651]" : ""}`}
                  >
                    {item.title}
                  </a>

                  {/* Nút mở Submenu (Accordion) */}
                  {item.sub && (
                    <button
                      onClick={(e) => toggleMobileSub(index, e)}
                      className="p-1 text-gray-500 border border-gray-200 rounded bg-gray-50"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${openMobileSub === index ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {/* Submenu Mobile (Accordion Content) */}
                {item.sub && (
                  <div
                    className={`overflow-hidden transition-all duration-300 bg-gray-50 ${openMobileSub === index ? "max-h-[500px] border-t border-gray-100" : "max-h-0"}`}
                  >
                    <ul className="flex flex-col py-1">
                      {item.sub.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.link}
                            className="flex items-center px-6 py-2.5 text-[13px] font-normal text-gray-600 hover:text-[#002651] hover:bg-gray-200"
                          >
                            <ChevronRight
                              size={14}
                              className="mr-2 opacity-50"
                            />
                            {subItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Chân trang Mobile Menu */}
        <div className="p-4 bg-[#002651] text-white text-center text-[13px]">
          <p className="mb-2">Tư vấn miễn phí 24/7</p>
          <a
            href="tel:0909743306"
            className="flex items-center justify-center font-bold text-[18px] text-[#f8a51c]"
          >
            <Phone size={18} className="mr-2" />{" "}
            <Link href={`tel:${ContactData?.Hotline}`}>
              {ContactData?.Hotline}
            </Link>
          </a>
        </div>
      </div>
    </header>
  );
}
