import React from "react";
import {
  Facebook,
  Twitter,
  Mail,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Sidebar from "@components/client/product/Sidebar";
import { Metadata } from "next";
import { find } from "@config/lib/api";
import { PostProps } from "@assets/props/PropsPost";
import { CategoryProps } from "@assets/props/Props";

interface PostsDetailProps {
  params: { slug: string };
}
export async function generateMetadata({
  params,
}: PostsDetailProps): Promise<Metadata> {
  const posts = await find("Posts");

  const Data: PostProps = posts?.find(
    (item: PostProps) => item.url == params.slug,
  );
  return {
    title: Data?.title ? Data?.title : "Bài viết",
    description: Data?.description,
  };
}

export default async function SinglePostPage({ params }: PostsDetailProps) {
  const Posts = await find("Posts");
  const CategoryData: CategoryProps[] = await find("PostCategory");
  const post: PostProps = Posts?.find(
    (item: PostProps) => item.url == params.slug,
  );
  return (
    <div className="w-full bg-[#fcfcfc] font-sans pb-20">
      <div className="d:container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* ================= CỘT TRÁI (NỘI DUNG BÀI VIẾT) - 9/12 ================= */}
          <div className="w-full lg:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
            {/* Header Bài viết */}
            <header className="mb-8 border-b border-gray-200 pb-6">
              <a
                href="/tin-tuc"
                className="text-[11px] md:text-[12px] font-bold uppercase text-gray-500 hover:text-[#002651] tracking-widest mb-2 inline-block"
              >
                {post.level0}
              </a>
              <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-gray-800 leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex items-center text-[12px] md:text-[13px] text-gray-500 uppercase tracking-wide">
                <span>Posted on {post.date}</span>
                <span className="mx-2">|</span>
                <span>
                  By{" "}
                  <strong className="text-gray-700">
                    {post.author ? post.author : "Mái Xếp Nguyên Phát"}
                  </strong>
                </span>
              </div>
            </header>

            {/* Nội dung chính (Sử dụng Prose của TailwindCSS) */}
            <article
              className="prose prose-sm md:prose-base max-w-none text-gray-700 text-justify leading-relaxed prose-headings:text-gray-800 prose-headings:font-bold prose-h2:text-[20px] md:prose-h2:text-[22px] prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-4 prose-a:text-blue-600 hover:prose-a:underline prose-strong:text-gray-800"
              dangerouslySetInnerHTML={{
                __html: post.content ? post.content : "",
              }}
            />

            {/* Khối Share Bài Viết */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-center space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400 transition-all"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-red-500 hover:border-red-500 transition-all"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Điều hướng Bài Trước / Bài Sau */}
            <nav className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
              <div className="w-full sm:w-1/2 flex justify-start text-left">
                {/* {post.prevPost && (
                  <a
                    href={post.prevPost.link}
                    className="group flex items-center text-[14px] text-gray-600 hover:text-[#002651] transition-colors leading-snug"
                  >
                    <ChevronLeft
                      size={20}
                      className="mr-2 flex-shrink-0 group-hover:-translate-x-1 transition-transform"
                    />
                    <span className="line-clamp-2">{post.prevPost.title}</span>
                  </a>
                )} */}
              </div>
              <div className="hidden sm:block w-[1px] bg-gray-200"></div>
              <div className="w-full sm:w-1/2 flex justify-end text-right">
                {/* {post.nextPost && (
                  <a
                    href={post.nextPost.link}
                    className="group flex items-center text-[14px] text-gray-600 hover:text-[#002651] transition-colors leading-snug justify-end"
                  >
                    <span className="line-clamp-2">{post.nextPost.title}</span>
                    <ChevronRight
                      size={20}
                      className="ml-2 flex-shrink-0 group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                )} */}
              </div>
            </nav>
          </div>

          {/* ================= CỘT PHẢI (SIDEBAR) - 3/12 ================= */}
          <div className="w-full lg:w-1/4">
            <Sidebar categories={CategoryData} recentPosts={Posts} />
          </div>
        </div>
      </div>
    </div>
  );
}
