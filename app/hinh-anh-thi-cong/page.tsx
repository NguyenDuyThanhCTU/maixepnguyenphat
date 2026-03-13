import GalleryGrid from "@components/client/Gallery/GalleryGrid";
import React from "react";

export default async function GalleryPage() {
  // Dữ liệu bóc tách từ Inner HTML gốc
  const galleryImages = [
    "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092726334_c59b4c0f97f2e1d3c338f73d8e5bfc4b.jpg",
    "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092960200_6593c09190ad48b5747854657d2e839f.jpg",
    "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092714594_cbf6c9aadd8f6a950dec8dad1fca5b86.jpg",
    "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092705975_0633b9a483c8dbb56c330777d89534d6.jpg",
    "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092705974_4b24a9884e78c1dde5f11f95b7c55202.jpg",
    "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092705971_5c05f4a708cf919a15e4f6e4abd02176.jpg",
    "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092698099_2873228eb759090243fdfee9bf9b1f80.jpg",
    "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092696583_371617a4e42ef87863c5f0d82ad8f048.jpg",
    "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092684478_ed2b5185efafb8cccd37ba38a2824e82.jpg",
    "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092684476_019a160a8e3c591b8220ee8bd7ea19eb.jpg",
    "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092684110_f42dfa53dce9bb04c8ea3ba447b396e5.jpg",
    "https://maihienhoangthong.com/wp-content/uploads/2024/04/a.jpg",
    "https://maihienhoangthong.com/wp-content/uploads/2024/04/12890121213.jpeg",
    "https://maihienhoangthong.com/wp-content/uploads/2024/04/z1799722498996_8da817baf3ee8763a7a7fcb1498c83d2-scaled-1.jpg",
    "https://maihienhoangthong.com/wp-content/uploads/2024/04/291967095_186029253854199_172308236233051608_n.jpg",
    "https://maihienhoangthong.com/wp-content/uploads/2024/04/hinh-anh-1-768x1024-1.webp",
  ];

  return (
    <div className="w-full bg-white font-sans pb-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Tiêu đề Section (Căn trái theo bản gốc) */}
        <div className="mb-10">
          <h1 className="text-xl md:text-2xl font-bold uppercase text-gray-800 mb-2 relative inline-block">
            HÌNH ẢNH HOẠT ĐỘNG
          </h1>
          <div className="w-16 h-[2px] bg-gray-300"></div>
        </div>

        {/* Gọi Client Component hiển thị lưới ảnh */}
        <GalleryGrid images={galleryImages} />
      </div>
    </div>
  );
}
