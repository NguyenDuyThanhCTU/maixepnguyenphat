"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ChevronRight as ArrowRight,
} from "lucide-react";

export default function HeroAndIntro() {
  // --- Logic cho Slider ---
  const banners = [
    "https://maihienhoangthong.com/wp-content/uploads/2024/07/banner-12787192912.png",
    "https://maihienhoangthong.com/wp-content/uploads/2024/04/banner02.png",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Tự động chuyển slide sau mỗi 4 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? banners.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === banners.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <main className="w-full bg-white font-sans">
      {/* ================= HERO SLIDER SECTION ================= */}
      <section className="relative w-full overflow-hidden group">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {banners.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Banner ${index + 1}`}
              className="w-full h-auto object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Nút điều hướng Slider */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dấu chấm trang (Dots) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentSlide === index
                  ? "bg-[#002651]"
                  : "bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Tiêu đề Section */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-2 relative inline-block">
              MÁI HIÊN - MÁI XẾP HOÀNG THÔNG
              {/* Đường kẻ ngang trang trí mờ dưới tiêu đề (giống giao diện web gốc) */}
              <span className="absolute -bottom-2 left-1/2 w-16 h-[2px] bg-gray-300 -translate-x-1/2"></span>
            </h2>
            <p className="text-lg font-bold text-[#002651] mt-4">
              “ Hoàng Thông – sự lựa chọn hoàn hảo cho mọi người ”
            </p>
          </div>

          {/* Grid Layout tỷ lệ 7:5 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Cột trái (7 phần): Nội dung text & Features */}
            <div className="md:col-span-7 flex flex-col justify-center">
              {/* Khung viền đứt nét như bản HTML gốc */}
              <div className="border border-dashed border-gray-400 rounded-xl p-6 bg-white shadow-sm mb-6">
                <p className="text-gray-700 text-justify mb-4 leading-relaxed">
                  <strong>Mái Hiên – Mái Xếp Hoàng Thông</strong> chuyên tư vấn,
                  thiết kế, thi công mái hiên, mái xếp di động, mái vòm, màn
                  thả, dù che các loại,… Ngoài ra chúng tôi còn cung cấp linh
                  kiện, phụ kiện mái hiên mái xếp,… Với nhiều mẫu mã đa đạng,
                  đội ngũ chuyên nghiệp có nhiều năm kinh nghiệm trong nghề với
                  tay nghề cao thi công nhanh chóng, giá cả phải chăng – cam kết
                  giá tốt nhất cho khách hàng. Bạn sẽ yên tâm khi chính sách bảo
                  hành của chúng tôi luôn minh bạch, bảo hành lâu dài cho từng
                  loại sản phẩm. Chắc chắn bạn sẽ hài lòng về sản phẩm và dịch
                  vụ của chúng tôi.
                </p>
                <p className="text-gray-700 text-justify leading-relaxed">
                  <strong>Mái Hiên – Mái Xếp Hoàng Thông</strong> Nhận thi công
                  lắp ráp, thiết kế cái loại mái hiên, mái che, mái xếp,… cho
                  quán cà phê, căn hộ, quán ăn, công ty,… với giá cả phải chăng
                  cạnh tranh. Quý khách chỉ cần liên hệ{" "}
                  <span className="text-[#ff0000] font-bold">
                    0909.743.306 – 0974.388.377
                  </span>{" "}
                  để được đội ngũ thi công nhanh chóng và chuyên nghiệp và tiết
                  kiệm thời gian nhé!
                </p>
              </div>

              {/* Các điểm nổi bật (Feature list) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-8 pl-2">
                <div className="flex items-start">
                  <CheckCircle2
                    size={20}
                    className="text-blue-600 mr-2 flex-shrink-0 mt-0.5"
                  />
                  <h5 className="font-semibold text-gray-800 text-sm">
                    Sản phẩm chất lượng, Tay nghề cao.
                  </h5>
                </div>
                <div className="flex items-start">
                  <CheckCircle2
                    size={20}
                    className="text-blue-600 mr-2 flex-shrink-0 mt-0.5"
                  />
                  <h5 className="font-semibold text-gray-800 text-sm">
                    Mẫu mã phong phú, đa dạng, nhiều sự lựa chọn.
                  </h5>
                </div>
                <div className="flex items-start">
                  <CheckCircle2
                    size={20}
                    className="text-blue-600 mr-2 flex-shrink-0 mt-0.5"
                  />
                  <h5 className="font-semibold text-gray-800 text-sm">
                    Giá cả cạnh tranh, rẻ nhất thị trường.
                  </h5>
                </div>
                <div className="flex items-start">
                  <CheckCircle2
                    size={20}
                    className="text-blue-600 mr-2 flex-shrink-0 mt-0.5"
                  />
                  <h5 className="font-semibold text-gray-800 text-sm">
                    Thi công khu vực Bình Dương và vùng lân cận.
                  </h5>
                </div>
              </div>

              {/* Nút Tìm hiểu thêm */}
              <div>
                <a
                  href="/gioi-thieu"
                  className="inline-flex items-center px-6 py-2.5 bg-[#002651] text-white font-medium rounded-md hover:bg-blue-900 transition-colors shadow-sm"
                >
                  Tìm hiểu thêm
                  <ArrowRight size={18} className="ml-1.5" />
                </a>
              </div>
            </div>

            {/* Cột phải (5 phần): Hình ảnh minh họa */}
            <div className="md:col-span-5 flex items-center justify-center">
              <div className="w-full h-full overflow-hidden rounded-xl shadow-md transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="https://maihienhoangthong.com/wp-content/uploads/2024/07/banner-1728891921.png"
                  alt="Mái Hiên Hoàng Thông Giới Thiệu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
