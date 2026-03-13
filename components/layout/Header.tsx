"use client";

import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Search,
  Menu,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white font-sans shadow-sm">
      {/* --- TOP BAR (Hiển thị trên Desktop, ẩn trên Mobile) --- */}
      <div className="hidden md:flex bg-gray-100 border-b border-gray-200 text-[13px] py-1.5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <ul className="flex items-center space-x-6 text-gray-600">
            <li className="flex items-center hover:text-[#002651] cursor-pointer">
              <MapPin size={14} className="mr-1.5 text-[#002651]" />
              <span>Mái Hiên - Mái Xếp Hoàng Thông</span>
            </li>
            <li className="flex items-center hover:text-[#002651] cursor-pointer">
              <Mail size={14} className="mr-1.5 text-[#002651]" />
              <span>Chờ cập nhật Email...</span>
            </li>
            <li className="flex items-center hover:text-[#002651] cursor-pointer">
              <Phone size={14} className="mr-1.5 text-[#002651]" />
              <span className="font-semibold">0909.743.306 - 0974.388.377</span>
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

      {/* --- MAIN HEADER (Logo, Slogan, Hotline) --- */}
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="w-1/2 md:w-1/3 lg:w-1/4">
          <a href="/">
            <img
              src="https://maihienhoangthong.com/wp-content/uploads/2024/07/logo-18289921.png"
              alt="Mái Hiên – Mái Xếp Hoàng Thông"
              className="w-full h-auto object-contain max-w-[250px]"
            />
          </a>
        </div>

        {/* Slogan (Ẩn trên Mobile) */}
        <div className="hidden lg:flex justify-center w-1/3">
          <img
            src="https://maihienhoangthong.com/wp-content/uploads/2024/04/slogan2.png"
            alt="Slogan"
            className="h-[40px] object-contain"
          />
        </div>

        {/* Hotline Box */}
        <div className="flex items-center justify-end w-1/2 md:w-1/3 lg:w-1/4">
          <div className="flex items-center space-x-3">
            <img
              src="https://maihienhoangthong.com/wp-content/uploads/2022/08/1625829.gif"
              alt="Hotline"
              className="w-[50px] h-[50px] rounded-full"
            />
            <div className="text-sm md:text-base text-gray-800">
              Liên hệ tư vấn
              <br />
              <span className="text-[#ff0000] text-[18px] md:text-[20px] font-bold">
                0909.743.306
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- NAVIGATION BAR (Nền xanh đậm) --- */}
      <div className="bg-[#002651] sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center h-[50px]">
          {/* Nút Menu Mobile (Hiển thị trên thiết bị nhỏ) */}
          <button className="md:hidden text-white flex items-center">
            <Menu size={24} />
          </button>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center h-full">
            <ul className="flex space-x-1 h-full text-white text-[14px] font-semibold uppercase">
              <li className="h-full flex items-center px-3 hover:bg-white/10 cursor-pointer transition-colors text-[#f8a51c]">
                Trang chủ
              </li>
              <li className="h-full flex items-center px-3 hover:bg-white/10 cursor-pointer transition-colors">
                Giới Thiệu
              </li>

              {/* Dropdown Sản Phẩm */}
              <li className="h-full flex items-center px-3 hover:bg-white/10 cursor-pointer transition-colors group relative">
                Sản Phẩm <ChevronDown size={14} className="ml-1" />
                {/* Ở phiên bản hoàn thiện, phần này sẽ chứa thẻ <ul> absolute cho Dropdown menu */}
              </li>

              {/* Dropdown Dịch vụ */}
              <li className="h-full flex items-center px-3 hover:bg-white/10 cursor-pointer transition-colors group relative">
                Dịch vụ thi công <ChevronDown size={14} className="ml-1" />
              </li>

              <li className="h-full flex items-center px-3 hover:bg-white/10 cursor-pointer transition-colors">
                Hình ảnh thi công
              </li>
              <li className="h-full flex items-center px-3 hover:bg-white/10 cursor-pointer transition-colors">
                Tin Tức
              </li>
              <li className="h-full flex items-center px-3 hover:bg-white/10 cursor-pointer transition-colors">
                Liên hệ
              </li>
            </ul>
          </nav>

          {/* Search Box */}
          <div className="flex items-center bg-white rounded-md overflow-hidden h-[34px] w-[180px] md:w-[220px]">
            <input
              type="text"
              placeholder="Tìm Kiếm..."
              className="w-full px-3 py-1 text-sm text-gray-700 outline-none border-none"
            />
            <button className="bg-gray-100 hover:bg-gray-200 px-3 h-full flex items-center justify-center text-gray-600 transition-colors">
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
