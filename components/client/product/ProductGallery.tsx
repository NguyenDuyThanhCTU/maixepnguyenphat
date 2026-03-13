"use client";

import React, { useState } from "react";
import { Expand } from "lucide-react";

export default function ProductGallery({ images }: { images: any }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col w-full">
      {/* Ảnh chính */}
      <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-md overflow-hidden mb-3 group cursor-pointer border border-gray-200">
        <img
          src={mainImage}
          alt="Sản phẩm chính"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Expand size={18} className="text-gray-700" />
        </div>
      </div>

      {/* Ảnh Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto pb-1">
        {images.map((img: any, index: any) => (
          <div
            key={index}
            onClick={() => setMainImage(img)}
            className={`w-[22%] aspect-[4/3] flex-shrink-0 cursor-pointer rounded-sm overflow-hidden border-2 transition-all ${
              mainImage === img
                ? "border-[#002651] opacity-100"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={img}
              alt={`Thumb ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
