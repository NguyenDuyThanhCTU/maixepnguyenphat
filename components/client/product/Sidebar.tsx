import React from "react";
import { ChevronRight } from "lucide-react";
import { CategoryProps } from "@assets/props/Props";
import { PostProps } from "@assets/props/PropsPost";

interface SidebarProps {
  categories: CategoryProps[];
  recentPosts: PostProps[];
}

export default function Sidebar({ categories, recentPosts }: SidebarProps) {
  return (
    <div className="w-full flex flex-col space-y-8">
      {/* Widget 1: Danh mục sản phẩm */}
      <div className="border border-gray-200 rounded-sm">
        <h4 className="bg-[#002651] text-white text-[15px] font-bold uppercase py-3 px-4">
          Danh mục sản phẩm
        </h4>
        <ul className="flex flex-col">
          {categories.map((cat, index) => (
            <li
              key={index}
              className="border-b border-gray-100 last:border-none"
            >
              <a
                href={cat.link}
                className={`flex items-center px-4 py-3 text-[14px] transition-colors ${
                  cat.active
                    ? "text-[#002651] font-bold bg-gray-50"
                    : "text-gray-600 hover:text-[#002651] hover:bg-gray-50"
                }`}
              >
                <ChevronRight
                  size={14}
                  className={`mr-2 ${cat.active ? "text-[#002651]" : "text-gray-400"}`}
                />
                {cat.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Widget 2: Bài viết mới nhất */}
      <div className="border border-gray-200 rounded-sm">
        <h4 className="bg-[#002651] text-white text-[15px] font-bold uppercase py-3 px-4">
          Bài viết mới nhất
        </h4>
        <ul className="flex flex-col p-4 space-y-4">
          {recentPosts.map((post, index) => (
            <li key={index} className="flex items-start group cursor-pointer">
              <div className="flex flex-col items-center justify-center border border-gray-200 rounded-sm min-w-[45px] px-1 py-1 mr-3 group-hover:border-[#002651] transition-colors">
                {/* <span className="text-[16px] font-bold text-gray-800 leading-none">{post.day}</span>
                <span className="text-[10px] text-gray-500 uppercase mt-1">{post.month}</span> */}
                thứ ...
              </div>
              <a
                href={post.url}
                className="text-[13px] text-gray-700 leading-snug group-hover:text-[#002651] transition-colors line-clamp-3"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
