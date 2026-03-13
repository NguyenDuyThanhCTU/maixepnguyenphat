"use client";

import React from "react";

export default function LatestNews() {
  // Dữ liệu bài viết (Mô phỏng lại chính xác text và cấu trúc HTML gốc)
  const featuredPost = {
    title:
      "thợ lơp tôn -thi công mái tôn  giá rẻ -uy tính- tại thuân an bình dương đt 090973306",
    excerpt:
      "THI CÔNG MÁI TÔN GIÁ RẺ – MÁI TÔN HOÀNG THÔNG 0909743306- 0974388377 “ Hoàng Thông – uy tín chất lượng tạo nên thương hiệu ” Mái Tôn – Thay tôn Hoàng Thông chuyên tư vấn, thiết kế, thi công mái tôn , tôn xếp di động, mái vòm, [...]",
    link: "/mai-hien-mai-xep-mai-tha-thuan-an-hoang-thong/",
  };

  const sidePosts = [
    {
      id: 1,
      title: "Mẹo hay giúp bạn chọn mái hiên di động cho ngôi nhà",
      excerpt:
        "1. Chọn mái hiên di động phù hợp với mục đích sử dụng Mái hiên di động với mục đích che mưa, che nắng cho ngôi nhà của bạn, nhưng không phải lúc nào bạn cũng sử dụng mái hiên. Chỉ trong khoảng thời tiết xấu như nắng lớn, mưa [...]",
      image:
        "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092684476_019a160a8e3c591b8220ee8bd7ea19eb.jpg",
      link: "/meo-hay-giup-ban-chon-mai-hien-di-dong-cho-ngoi-nha/",
    },
    {
      id: 2,
      title: "Kinh nghiệm lựa chọn mái che di động quán cà phê",
      excerpt:
        "Quán cà phê không chỉ là nơi mà những người có sở thích và thói quen uống cà phê vào mỗi sáng tìm đến mà còn là nơi được nhiều người lựa chọn để tụ tập bạn bè nói chuyện phiếm, để học tập nhóm hay để bàn bạc công [...]",
      image:
        "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092696583_371617a4e42ef87863c5f0d82ad8f048.jpg",
      link: "/kinh-nghiem-lua-chon-mai-che-di-dong-quan-ca-phe/",
    },
    {
      id: 3,
      title: "Những bước quan trọng cần thực hiện khi xây nhà",
      excerpt:
        "Xây nhà là một trong những mục đích và giá trị lớn lao mà nhiều người hướng đến. Ông bà xưa có câu “An cư lạc nghiệp”, có một nơi để về, để nghỉ ngơi thì công việc mới thuận lợi. Đó là lý do vì sao nhu cầu xây [...]",
      image: null, // Bài viết này trong HTML gốc không có ảnh
      link: "/nhung-buoc-quan-trong-can-thuc-hien-khi-xay-nha/",
    },
  ];

  return (
    <section className="py-12 bg-white w-full font-sans">
      <div className="container mx-auto px-4">
        {/* Tiêu đề Section */}
        <div className="text-center mb-10">
          <h3 className="text-xl md:text-2xl font-bold uppercase text-gray-800 relative inline-block">
            TIN TỨC MỚI NHẤT
            <span className="absolute -bottom-3 left-1/2 w-16 h-[2px] bg-gray-300 -translate-x-1/2"></span>
          </h3>
        </div>

        {/* Layout chia 2 cột trên màn hình lớn */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CỘT TRÁI: Bài viết nổi bật (Featured Post) */}
          <div className="flex flex-col">
            <a
              href={featuredPost.link}
              className="group block bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 p-6 rounded-xl transition-all duration-300 hover:shadow-md h-full"
            >
              <h5 className="text-[16px] md:text-[18px] font-bold text-gray-800 group-hover:text-[#002651] transition-colors mb-3 uppercase leading-snug">
                {featuredPost.title}
              </h5>
              <div className="w-10 h-[3px] bg-gray-300 mb-4"></div>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed text-justify">
                {featuredPost.excerpt}
              </p>
            </a>
          </div>

          {/* CỘT PHẢI: Danh sách các bài viết nhỏ */}
          <div className="flex flex-col space-y-6">
            {sidePosts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                className="group flex flex-col sm:flex-row bg-white hover:bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-sm"
              >
                {/* Khối Hình Ảnh (Rộng 40% trên mobile/tablet ngang) */}
                {post.image && (
                  <div className="w-full sm:w-[40%] flex-shrink-0 aspect-[4/3] sm:aspect-auto sm:h-auto overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 absolute inset-0"
                    />
                  </div>
                )}

                {/* Khối Text */}
                <div
                  className={`p-4 sm:p-5 flex flex-col justify-center ${post.image ? "w-full sm:w-[60%]" : "w-full"}`}
                >
                  <h5 className="text-[15px] font-bold text-gray-800 group-hover:text-[#002651] transition-colors mb-2 line-clamp-2 leading-snug">
                    {post.title}
                  </h5>
                  <div className="w-8 h-[2px] bg-gray-300 mb-3"></div>
                  <p className="text-[13px] md:text-[14px] text-gray-600 line-clamp-3 md:line-clamp-4 leading-relaxed text-justify">
                    {post.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
