// KHÔNG có 'use client' ở đây -> Đây là Server Component chuẩn của Next.js
import { CategoryProps } from "@assets/props/Props";
import { PostProps } from "@assets/props/PropsPost";
import { ProductProps } from "@assets/props/PropsProduct";
import CategoryFilter from "@components/client/product/CategoryFilter";
import ProductGrid from "@components/client/product/ProductGrid";
import Sidebar from "@components/client/product/Sidebar";
import { find } from "@config/lib/api";
import { Metadata } from "next";
import React from "react";
import slugify from "slugify";

function filterTitlePageBySlug(
  ProductCategory: CategoryProps[],
  slugParams: string,
) {
  for (const item of ProductCategory) {
    for (const key in item) {
      const value = item[key];

      if (Array.isArray(value)) {
        for (const val of value) {
          const slug = slugify(val, { lower: true, locale: "vi" });
          if (slug === slugParams) {
            return val;
          }
        }
      } else if (typeof value === "string") {
        const slug = slugify(value, { lower: true, locale: "vi" });
        if (slug === slugParams) {
          return value;
        }
      }
    }
  }
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const ProductCategory: CategoryProps[] = await find("ProductCategory");
  const TitlePage = filterTitlePageBySlug(ProductCategory, params.slug);

  return {
    title: `Những sản phẩm ${TitlePage} - Mái xếp Nguyên Phát`,
  };
}

function filterProductsBySlug(products: ProductProps[], slugParam: string) {
  const matchedLevel2 = [];
  const matchedLevel1 = [];
  const matchedLevel0 = [];

  for (const product of products) {
    let matched = false;

    // Ưu tiên kiểm tra level2 (mảng)
    if (Array.isArray(product.level2)) {
      for (const val of product.level2) {
        if (slugify(val, { lower: true, locale: "vi" }) === slugParam) {
          matchedLevel2.push(product);
          matched = true;
          break;
        }
      }
    }

    if (matched) continue;

    // Sau đó kiểm tra level1 (chuỗi)
    if (
      typeof product.level1 === "string" &&
      slugify(product.level1, { lower: true, locale: "vi" }) === slugParam
    ) {
      matchedLevel1.push(product);
      continue;
    }

    // Cuối cùng kiểm tra level0 (chuỗi)
    if (
      typeof product.level0 === "string" &&
      slugify(product.level0, { lower: true, locale: "vi" }) === slugParam
    ) {
      matchedLevel0.push(product);
    }
  }

  // Trả về danh sách theo đúng thứ tự ưu tiên
  return [...matchedLevel2, ...matchedLevel1, ...matchedLevel0];
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const ProductCategory: CategoryProps[] = await find("ProductCategory");
  const Products: ProductProps[] = await find("Products");
  const Posts: PostProps[] = await find("Posts");
  let TitlePage = filterTitlePageBySlug(ProductCategory, params.slug);

  const filteredProducts = filterProductsBySlug(Products, params.slug);

  return (
    <div className="w-full bg-white font-sans">
      <div className="w-full bg-white border-b border-gray-200 py-3">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <nav className="text-gray-500 uppercase text-[11px] md:text-[12px] font-medium tracking-wide mb-3 md:mb-0">
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
            <span className="text-gray-800 font-bold">{TitlePage}</span>
          </nav>

          {/* Gắn Client Component xử lý Select Option vào đây */}
          {/* <CategoryFilter totalResults={products.length} /> */}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* CỘT TRÁI (9/12) */}
          <div className="w-full lg:w-3/4">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-gray-800 mb-6 relative inline-block">
              {TitlePage}
              <span className="absolute -bottom-2 left-0 w-12 h-[2px] bg-gray-300"></span>
            </h3>

            {/* Render Server Component hiển thị Grid */}
            <ProductGrid products={filteredProducts} />
          </div>

          {/* CỘT PHẢI (3/12) */}
          <div className="w-full lg:w-1/4">
            {/* Render Server Component hiển thị Sidebar */}
            <Sidebar categories={ProductCategory} recentPosts={Posts} />
          </div>
        </div>
      </div>
    </div>
  );
}
