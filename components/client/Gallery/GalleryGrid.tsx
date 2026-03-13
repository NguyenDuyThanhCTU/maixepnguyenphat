"use client";

import React, { useState } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryGridProps {
  images: any;
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  // State quản lý việc mở Modal phóng to ảnh
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Đóng Modal
  const closeLightbox = () => setSelectedIndex(null);

  // Chuyển ảnh trước/sau trong Modal
  const showPrev = (e: any) => {
    e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài làm đóng modal
    // setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e: any) => {
    e.stopPropagation();
    setSelectedIndex((prev: any) =>
      prev === images.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <>
      {/* --- Grid hiển thị ảnh --- */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {images.map((src: any, index: any) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="group relative block w-full aspect-square overflow-hidden rounded-[5%] cursor-pointer bg-gray-100 shadow-sm border border-gray-200"
          >
            <img
              src={src}
              alt={`Hình ảnh thi công ${index + 1}`}
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
          </div>
        ))}
      </div>

      {/* --- Lightbox Modal (Hiển thị khi click vào ảnh) --- */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Nút Đóng */}
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white transition-colors p-2"
            onClick={closeLightbox}
          >
            <X size={36} />
          </button>

          {/* Nút Prev */}
          <button
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 transition-colors"
            onClick={showPrev}
          >
            <ChevronLeft size={48} />
          </button>

          {/* Ảnh được phóng to */}
          <div className="relative w-[90vw] max-w-5xl max-h-[85vh] flex items-center justify-center pointer-events-none">
            <img
              src={images[selectedIndex]}
              alt="Phóng to"
              className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl pointer-events-auto animate-in zoom-in-95 duration-300"
            />
          </div>

          {/* Nút Next */}
          <button
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 transition-colors"
            onClick={showNext}
          >
            <ChevronRight size={48} />
          </button>

          {/* Bộ đếm số lượng */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-widest">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
