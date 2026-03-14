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

export default async function SinglePostPage() {
  // --- MOCK DATA (Thay bằng fetch data từ DB/CMS dựa trên slug) ---
  const post: any = {
    title: "Mẹo hay giúp bạn chọn mái hiên di động cho ngôi nhà",
    date: "7 Tháng 7, 2024",
    author: "Mr Anh",
    category: "Tin Tức",
    content: `
      <h2>1. Chọn mái hiên di động phù hợp với mục đích sử dụng</h2>
      <p>Mái hiên di động với mục đích che mưa, che nắng cho ngôi nhà của bạn, nhưng không phải lúc nào bạn cũng sử dụng mái hiên. Chỉ trong khoảng thời tiết xấu như nắng lớn, mưa nhiều thì kéo ra sử dụng mái hiên di động còn lại bạn có thể thu mái hiên cho hiên nhà tràn ngập nắng mới.</p>
      <p>Một chiếc mái hiên di động cho sân vườn cũng là một sự lựa chọn thú vị, nhà bạn có sân vườn rộng bạn muốn mình có không gian để hưởng ngoạn thú vui uống trà đọc sách khi rảnh rỗi thì một chiếc mái hiên di động ngoài trời là quá hợp lý.</p>
      <p>Bể bơi trong nhà cũng là không gian cần có sự kết hợp với mái hiên di động. Tránh sự tác động của thời tiết thay đổi với bể bơi thì nên chọn mái hiên di động.</p>
      <p>Ngoài ra, mái hiên di động không chỉ phù hợp cho ngôi nhà của bạn mà nó ứng dụng nhiều cho quán cafe, quán nhậu, tiệc đứng ngoài trời, trường học, nhà gửi xe,…Còn rất nhiều mẫu <strong>mái xếp di động Bình Dương</strong> đẹp, nếu bạn quan tâm hãy tham khảo nhé</p>
      
      <h2>2. Chọn mái hiên có màu sắc phù hợp</h2>
      <p>Màu sắc của mái hiên cũng ảnh hưởng đến hiệu quả cũng như tính thẩm mỹ của không gian ngôi nhà của bạn. Đa số, mái hiên dùng để làm mát khoảng không trước hay sau ngôi nhà nên chọn mái hiên có màu sắc mát mẻ như màu xanh, màu trắng, màu vàng nhạt,…</p>
      
      <h2>3. Chọn mái hiên phù hợp với phong thủy ngôi nhà</h2>
      <p>Không chỉ chọn màu phù hợp với mệnh của gia chủ, bạn hãy chọn kiểu dáng mái hiên phù hợp với ngôi nhà mình để tạo luồng sinh khí tốt cho ngôi nhà tránh ảnh hưởng đến sức khỏe cũng như hao tài phí của của căn nhà.</p>
      
      <h2>4. Chọn cơ sở thi công mái hiên di động uy tín</h2>
      <p>Muốn chọn cơ sở thi công mái hiên di động hiện nay không hề khó khăn, các cơ sở thi công mái hiên mọc lên nhan nhãn những liệu bạn có tìm ra một cái tên uy tín để giao phó không gian ngôi nhà của mình?</p>
      <p><strong>Mái Hiên – Mái Xếp Nguyên Phát</strong> chắc chắn là cái tên đáng được chú ý nhất. Với kinh nghiệm thi công mái hiên dày dặn trong nghề, Mái Hiên – Mái Xếp Nguyên Phát có trình độ chuyên môn cao cộng với việc ứng dụng công nghệ máy móc hiện đại thì mái hiên của cơ sở có chất lượng tốt có tiếng ở miền Trung.</p>
      <p><strong>Mái Hiên – Mái Xếp Nguyên Phát</strong> có tuổi thọ cao (mái bạt từ 3-10 năm, khung kim loại từ 6-20 năm), thời gian thi công rút ngắn, thi công trên nhiều địa hình khác nhau, phạm vi hoạt động rộng khắp, giá cả lại phải chăng, đội ngũ nhân viên của cơ sở sẽ tư vấn thêm cho khách hàng để có được công trình đẹp mắt và bền chắc nhất có thể.</p>
    `,
    prevPost: {
      title: "Kinh nghiệm lựa chọn mái che di động quán cà phê",
      link: "#",
    },
    nextPost: {
      title: "Mái Hiên – Mái Xếp Nguyên Phát – 0909.743.306",
      link: "#",
    },
  };

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
                {post.category}
              </a>
              <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-gray-800 leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex items-center text-[12px] md:text-[13px] text-gray-500 uppercase tracking-wide">
                <span>Posted on {post.date}</span>
                <span className="mx-2">|</span>
                <span>
                  By <strong className="text-gray-700">{post.author}</strong>
                </span>
              </div>
            </header>

            {/* Nội dung chính (Sử dụng Prose của TailwindCSS) */}
            <article
              className="prose prose-sm md:prose-base max-w-none text-gray-700 text-justify leading-relaxed prose-headings:text-gray-800 prose-headings:font-bold prose-h2:text-[20px] md:prose-h2:text-[22px] prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-4 prose-a:text-blue-600 hover:prose-a:underline prose-strong:text-gray-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
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
                {post.prevPost && (
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
                )}
              </div>
              <div className="hidden sm:block w-[1px] bg-gray-200"></div>
              <div className="w-full sm:w-1/2 flex justify-end text-right">
                {post.nextPost && (
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
                )}
              </div>
            </nav>
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
