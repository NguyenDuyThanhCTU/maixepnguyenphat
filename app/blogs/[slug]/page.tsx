import { CategoryProps } from "@assets/props/Props";
import { PostProps } from "@assets/props/PropsPost";
import Sidebar from "@components/client/product/Sidebar";
import { PostMetadata } from "@components/items/HandleMetadata";
import { find } from "@config/lib/api";
import { Metadata } from "next";
import React from "react";

interface BlogPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params,
  searchParams,
}: BlogPageProps): Promise<Metadata> {
  const searchFilterParams: any = searchParams.filter;
  const searchCategory: any = searchParams.category;
  const Category: CategoryProps[] = await find("PostCategory");

  const PostTitle = await PostMetadata(
    searchCategory,
    searchFilterParams,
    Category,
    params.slug,
  );

  return {
    title: PostTitle.CollectionName
      ? `${PostTitle.CollectionName} - Mái xếp Nguyên Phát`
      : "Blogs",
  };
}

export default async function NewsPage({
  params,
  searchParams,
}: BlogPageProps) {
  const Posts = await find("Posts");
  const Category: CategoryProps[] = await find("PostCategory");
  const searchFilterParams: any = searchParams.filter;
  const searchCategory: any = searchParams.category;
  const ProductCategory: CategoryProps[] = await find("ProductCategory");

  let Datashow: PostProps[] = [];

  if (params.slug) {
    const LV0Data = Posts?.filter((Slug) => Slug.level0 === params.slug);
    Datashow = LV0Data;

    if (searchCategory) {
      const LV1Data = LV0Data?.filter((item) => item.level1 === searchCategory);
      Datashow = LV1Data;
      if (searchFilterParams) {
        const LV2Data = LV1Data?.filter((item) =>
          item.level2?.includes(searchFilterParams),
        );

        Datashow = LV2Data;
      }
    }
  }
  const PostTitle = await PostMetadata(
    searchCategory,
    searchFilterParams,
    Category,
    params.slug,
  );

  return (
    <div className="w-full bg-[#fcfcfc] font-sans pb-16">
      <div className="d:w-[1200px] p:w-auto d:mx-auto p:mx-2 mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ================= CỘT TRÁI (DANH SÁCH BÀI VIẾT) - 9/12 ================= */}
          <div className="w-full lg:w-3/4">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-gray-800 mb-6 relative inline-block">
              {PostTitle?.CollectionName}
              <span className="absolute -bottom-2 left-0 w-12 h-[2px] bg-gray-300"></span>
            </h3>

            {/* Grid bài viết (3 cột trên desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Datashow.map((post) => (
                <div key={post.id} className="h-full">
                  <a
                    href={`/${post.url}`}
                    className="group flex flex-col h-full bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                  >
                    {/* Render khung ảnh nếu có ảnh */}
                    {post.image && (
                      <div className="w-full aspect-[4/3] overflow-hidden relative border-b border-gray-100">
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Khối Text */}
                    <div className="p-5 flex flex-col flex-grow">
                      <h5 className="text-[16px] font-bold text-gray-800 group-hover:text-[#002651] transition-colors mb-2 leading-snug line-clamp-2">
                        {post.title}
                      </h5>
                      <span className="text-[12px] text-gray-500 mb-3">
                        {post.date}
                      </span>
                      <div className="w-10 h-[2px] bg-gray-200 mb-3"></div>
                      <p className="text-[14px] text-gray-600 leading-relaxed text-justify line-clamp-4">
                        {post.description}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ================= CỘT PHẢI (SIDEBAR) - 3/12 ================= */}
          <div className="w-full lg:w-1/4">
            <Sidebar categories={ProductCategory} recentPosts={Posts} />
          </div>
        </div>
      </div>
    </div>
  );
}
