import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Giới thiệu - Cửa tự động 24h - Hotline: 0879 355 661 - 0796 119 395",
};

const AboutPage = () => {
  return (
    <section className="bg-gray-50 py-12 lg:py-20 font-normal text-gray-800 font-LexendDeca">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-blue-900 tracking-tight mb-6">
            GIỚI THIỆU VỀ CHÚNG TÔI
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Với hơn{" "}
            <span className="font-bold text-blue-600">15 năm hoạt động</span>{" "}
            trong lĩnh vực cửa cuốn và cửa tự động, chúng tôi tự hào là đơn vị
            chuyên cung cấp, lắp đặt và sửa chữa chuyên sâu tại TP.HCM. Trải qua
            quá trình phát triển bền vững, doanh nghiệp đã xây dựng được hệ
            thống kỹ thuật viên vững tay nghề, quy trình làm việc chuyên nghiệp
            và mạng lưới phục vụ rộng khắp.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-500 flex justify-center mb-2">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900">Gọi là có mặt ngay</h3>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-500 flex justify-center mb-2">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900">Hỗ trợ nhanh 24/7</h3>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-500 flex justify-center mb-2">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900">Xử lý kịp thời</h3>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Chuyên sâu sửa chữa Cửa Cuốn
            </h2>
            <p className="text-gray-600 mb-6">
              Cửa cuốn là hạng mục quan trọng liên quan trực tiếp đến an ninh.
              Chúng tôi chuyên chẩn đoán chính xác nguyên nhân và xử lý tất cả
              các sự cố:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700">
                  Cửa cuốn kẹt nan, lệch ray
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700">
                  Motor cửa cuốn không hoạt động, cháy mô-tơ
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700">
                  Hỏng bộ điều khiển, remote, hộp nhận tín hiệu
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700">
                  Lỗi lưu điện, bình ắc quy yếu, phát tiếng ồn lớn
                </span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-gray-500 italic">
              * Cam kết báo giá rõ ràng, sử dụng linh kiện chính hãng đảm bảo độ
              bền và an toàn.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Sửa chữa Cửa tự động – Cổng tự động
            </h2>
            <p className="text-gray-600 mb-6">
              Đội ngũ kỹ thuật được đào tạo bài bản về cơ điện – tự động hóa,
              khôi phục vận hành ổn định và an toàn:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700">
                  Cửa kính trượt tự động không đóng/mở
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700">
                  Lỗi board mạch điều khiển, hỏng mắt thần, cảm biến
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700">
                  Motor cổng tay đòn, cổng âm sàn hoạt động yếu
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700">
                  Cửa đóng mở chậm, giật cục, mất tín hiệu điều khiển
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-900 rounded-3xl p-8 lg:p-12 text-white shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Giá rẻ – Minh bạch – Không phát sinh
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                Chúng tôi hiểu rằng khách hàng luôn quan tâm đến chi phí. Vì
                vậy, chúng tôi cam kết mang lại giá trị thiết thực nhất:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-yellow-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Báo giá rõ ràng trước khi thực hiện
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-yellow-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Không phát sinh chi phí bất hợp lý
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-yellow-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Tối ưu phương án để tiết kiệm nhất
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-yellow-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Chính sách bảo hành sau sửa chữa đầy đủ
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 md:p-8 rounded-2xl border border-blue-800">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                Uy tín – Chất lượng – Nhanh chóng
              </h3>
              <p className="text-blue-100 mb-6">
                15 năm hoạt động là minh chứng cho sự tin tưởng của hàng nghìn
                khách hàng tại TP.HCM. Chúng tôi làm việc dựa trên:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-800/50 p-4 rounded-lg text-center">
                  <span className="block font-bold text-lg mb-1">
                    Tinh thần
                  </span>
                  <span className="text-blue-200 text-sm">Trách nhiệm cao</span>
                </div>
                <div className="bg-blue-800/50 p-4 rounded-lg text-center">
                  <span className="block font-bold text-lg mb-1">Tay nghề</span>
                  <span className="text-blue-200 text-sm">
                    Vững vàng, tận tâm
                  </span>
                </div>
              </div>
              <div className="mt-6 text-center text-lg font-medium italic text-blue-50">
                "Xử lý nhanh – Đúng lỗi – Đúng giá"
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Chỉ cần một cuộc gọi, đội ngũ kỹ thuật{" "}
            <span className="font-bold text-blue-600">
              (hơn 20 thợ khắp TP.HCM)
            </span>{" "}
            sẽ có mặt kịp thời để hỗ trợ.
          </p>
          <a
            href="tel:0879355661"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1"
          >
            <svg
              className="w-6 h-6 mr-3 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            Gọi ngay: 0879 355 661
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
