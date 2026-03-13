import Sidebar from "@components/client/product/Sidebar";
import React from "react";

export default async function NewsPage() {
  // --- MOCK DATA ---
  const categories: any = [
    { name: "Mái hiên, mái xếp di động", active: false, link: "#" },
    { name: "Mái che lấy sáng", active: false, link: "#" },
    { name: "Dù che nắng", active: false, link: "#" },
    { name: "Màng thả", active: false, link: "#" },
    { name: "Cửa cuốn, cửa kéo", active: false, link: "#" },
    { name: "Mái vòm", active: false, link: "#" },
    { name: "Linh kiện, phụ kiện", active: false, link: "#" },
  ];

  const recentPosts: any = [
    {
      day: "31",
      month: "Th8",
      title:
        "Mái hiên di an, mái hiên thuân an – [mái hiên thủ dầu một giá rẻ]",
      link: "#",
    },
    {
      day: "07",
      month: "Th4",
      title: "MÁI TÔN – ĐỒNG NAI- BIÊN HÒA – GIÁ RẺ ĐT 0909743306",
      link: "#",
    },
    {
      day: "16",
      month: "Th3",
      title:
        "Lợp Mái Tôn-Thay Tôn- Thuận An -Thủ Dầu Một -Bình Dương [Trọn Gói 0909743306]",
      link: "#",
    },
    {
      day: "25",
      month: "Th2",
      title: "99 MẨU MÁI TÔN. LƠP TÔN .GIÁ RẺ TẠI VĨNH CỮU ĐỒNG NAI",
      link: "#",
    },
    {
      day: "09",
      month: "Th1",
      title:
        "Bạt Lót Ao Hồ Nuôi Trồng Thủy Hải Sản Tại Đồng Nai giá rẻ ĐT 0909743306",
      link: "#",
    },
  ];

  // Dữ liệu bài viết chính
  const mainPosts = [
    {
      id: 1,
      title:
        "thợ lơp tôn -thi công mái tôn  giá rẻ -uy tính- tại thuân an bình dương đt 090973306",
      date: "10 Tháng 7, 2024",
      excerpt:
        "THI CÔNG MÁI TÔN GIÁ RẺ – MÁI TÔN HOÀNG THÔNG 0909743306- 0974388377 “ Hoàng Thông – uy tín chất lượng tạo nên thương hiệu ” Mái Tôn – Thay tôn Hoàng Thông chuyên tư vấn, thiết kế, thi...",
      image: null, // Bài không có ảnh
      link: "/mai-hien-mai-xep-mai-tha-thuan-an-hoang-thong/",
    },
    {
      id: 2,
      title: "Mẹo hay giúp bạn chọn mái hiên di động cho ngôi nhà",
      date: "7 Tháng 7, 2024",
      excerpt:
        "1. Chọn mái hiên di động phù hợp với mục đích sử dụng Mái hiên di động với mục đích che mưa, che nắng cho ngôi nhà của bạn, nhưng không phải lúc nào bạn cũng sử dụng mái hiên. [...]",
      image:
        "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092684476_019a160a8e3c591b8220ee8bd7ea19eb-533x400.jpg",
      link: "/meo-hay-giup-ban-chon-mai-hien-di-dong-cho-ngoi-nha/",
    },
    {
      id: 3,
      title: "Kinh nghiệm lựa chọn mái che di động quán cà phê",
      date: "7 Tháng 7, 2024",
      excerpt:
        "Quán cà phê không chỉ là nơi mà những người có sở thích và thói quen uống cà phê vào mỗi sáng tìm đến mà còn là nơi được nhiều người lựa chọn để tụ tập bạn bè nói chuyện [...]",
      image:
        "https://maihienhoangthong.com/wp-content/uploads/2024/04/z5372092696583_371617a4e42ef87863c5f0d82ad8f048-533x400.jpg",
      link: "/kinh-nghiem-lua-chon-mai-che-di-dong-quan-ca-phe/",
    },
    {
      id: 4,
      title: "Những bước quan trọng cần thực hiện khi xây nhà",
      date: "7 Tháng 7, 2024",
      excerpt:
        "Xây nhà là một trong những mục đích và giá trị lớn lao mà nhiều người hướng đến. Ông bà xưa có câu “An cư lạc nghiệp”, có một nơi để về, để nghỉ ngơi thì công việc mới thuận [...]",
      image: null,
      link: "/nhung-buoc-quan-trong-can-thuc-hien-khi-xay-nha/",
    },
    {
      id: 5,
      title: "Cải tạo nhà tập thể cũ thay mới không gian sống",
      date: "7 Tháng 7, 2024",
      excerpt:
        "Hầu hết nhà tập thể cũ có tuổi thọ lâu năm, đã xuống cấp thì việc sửa chữa, cải tạo nhà tập thể cũ là cần thiết để mang tới cuộc sống tiện nghi, hiện đại và an toàn hơn. Với những [...]",
      image: null,
      link: "/cai-tao-nha-tap-the-cu-thay-moi-khong-gian-song/",
    },
  ];

  return (
    <div className="w-full bg-[#fcfcfc] font-sans pb-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ================= CỘT TRÁI (DANH SÁCH BÀI VIẾT) - 9/12 ================= */}
          <div className="w-full lg:w-3/4">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-gray-800 mb-6 relative inline-block">
              TIN TỨC
              <span className="absolute -bottom-2 left-0 w-12 h-[2px] bg-gray-300"></span>
            </h3>

            {/* Grid bài viết (3 cột trên desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPosts.map((post) => (
                <div key={post.id} className="h-full">
                  <a
                    href={post.link}
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
                        {post.excerpt}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ================= CỘT PHẢI (SIDEBAR) - 3/12 ================= */}
          <div className="w-full lg:w-1/4">
            <Sidebar categories={categories} recentPosts={recentPosts} />
          </div>
        </div>
      </div>
    </div>
  );
}
