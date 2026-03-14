"use client";

import React, { useState } from "react";
import { ShoppingCart, X, Loader2, CheckCircle2 } from "lucide-react";
import { ProductProps } from "@assets/props/PropsProduct";
import { ContactProps } from "@assets/props/PropsConfig";

interface BuyNowActionProps {
  product: ProductProps;
  ContactData: ContactProps;
}

export default function BuyNowAction({
  product,
  ContactData,
}: BuyNowActionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Email nhận thông báo đơn hàng

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    // Thêm các thông tin cấu hình giao diện Email chuyên nghiệp cho FormSubmit
    formData.append("_subject", `🛒 Đơn hàng mới từ Web: ${product.title}`);
    formData.append("_template", "table"); // Bật giao diện bảng biểu chuyên nghiệp trong Gmail
    formData.append("_captcha", "false"); // Tắt captcha để không làm gián đoạn trải nghiệm (AJAX mode)

    // Thêm thông tin sản phẩm tĩnh vào Data gửi đi
    formData.append("Tên_Sản_Phẩm", product.title);
    formData.append("Giá_Sản_Phẩm", product.price ? product.price : "");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${ContactData?.Email}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        },
      );

      if (response.ok) {
        setIsSuccess(true);
        // Tự động đóng Popup sau 3 giây khi thành công
        setTimeout(() => {
          setIsOpen(false);
          setIsSuccess(false); // Reset lại trạng thái cho lần mở sau
        }, 3000);
      } else {
        alert("Rất tiếc, đã có lỗi xảy ra. Vui lòng thử lại sau!");
      }
    } catch (error) {
      alert("Lỗi kết nối mạng. Vui lòng kiểm tra lại đường truyền!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Nút Mua Ngay (Ngoài màn hình) */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-[#ed1c24] hover:bg-red-700 text-white rounded-md py-3 px-4 flex flex-col items-center justify-center transition-colors shadow-md mt-6 mb-4"
      >
        <span className="uppercase font-bold text-lg flex items-center">
          <ShoppingCart size={20} className="mr-2" /> Mua ngay
        </span>
        <span className="text-sm font-normal">
          Gọi điện xác nhận và giao hàng tận nơi
        </span>
      </button>

      {/* Popup / Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="bg-gray-100 px-4 py-3 flex justify-between items-center border-b border-gray-200">
              <h3 className="font-bold text-gray-800 text-[15px]">
                Đặt mua {product.title}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-red-500 transition-colors disabled:opacity-50"
                disabled={isSubmitting}
              >
                <X size={24} />
              </button>
            </div>

            {/* Màn hình Thành công */}
            {isSuccess ? (
              <div className="p-10 flex flex-col items-center justify-center text-center">
                <CheckCircle2
                  size={64}
                  className="text-green-500 mb-4 animate-bounce"
                />
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Đặt hàng thành công!
                </h4>
                <p className="text-gray-600">
                  Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ lại qua số điện
                  thoại của bạn trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              /* Modal Body - Form nhập liệu */
              <div className="flex flex-col md:flex-row p-4 md:p-6 gap-6">
                {/* Cột trái: Thông tin SP */}
                <div className="w-full md:w-[40%] flex flex-col text-center border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full aspect-square object-cover rounded-md mb-3 border border-gray-100"
                  />
                  <span className="font-bold text-gray-800 text-[15px]">
                    {product.title}
                  </span>
                  <span className="text-[#ff0000] font-bold mt-1">
                    {product.price}
                  </span>
                  <p className="text-[13px] text-gray-500 mt-4 text-justify">
                    Bạn vui lòng nhập đúng số điện thoại để chúng tôi sẽ gọi xác
                    nhận đơn hàng trước khi giao hàng. Xin cảm ơn!
                  </p>
                </div>

                {/* Cột phải: Form nhập thông tin */}
                <form
                  onSubmit={handleSubmit}
                  className="w-full md:w-[60%] flex flex-col"
                >
                  <h4 className="font-bold text-gray-800 mb-3 text-[14px]">
                    Thông tin người mua
                  </h4>

                  <div className="flex items-center space-x-6 mb-4">
                    <label className="flex items-center text-[14px] cursor-pointer">
                      <input
                        type="radio"
                        name="Danh_Xưng"
                        value="Anh"
                        defaultChecked
                        className="mr-2"
                      />{" "}
                      Anh
                    </label>
                    <label className="flex items-center text-[14px] cursor-pointer">
                      <input
                        type="radio"
                        name="Danh_Xưng"
                        value="Chị"
                        className="mr-2"
                      />{" "}
                      Chị
                    </label>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <input
                      type="text"
                      name="Họ_và_Tên"
                      required
                      placeholder="Họ và tên *"
                      className="border border-gray-300 rounded px-3 py-2 text-[14px] focus:outline-[#002651] w-full"
                    />
                    <input
                      type="tel"
                      name="Số_Điện_Thoại"
                      required
                      placeholder="Số điện thoại *"
                      className="border border-gray-300 rounded px-3 py-2 text-[14px] focus:outline-[#002651] w-full"
                    />
                  </div>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Địa chỉ email (Không bắt buộc)"
                    className="border border-gray-300 rounded px-3 py-2 text-[14px] focus:outline-[#002651] w-full mb-3"
                  />
                  <textarea
                    name="Địa_Chỉ_Nhận_Hàng"
                    required
                    placeholder="Địa chỉ nhận hàng *"
                    className="border border-gray-300 rounded px-3 py-2 text-[14px] focus:outline-[#002651] w-full mb-3"
                  ></textarea>
                  <textarea
                    name="Ghi_Chú"
                    placeholder="Ghi chú đơn hàng (Không bắt buộc)"
                    className="border border-gray-300 rounded px-3 py-2 text-[14px] focus:outline-[#002651] w-full mb-4"
                  ></textarea>

                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-gray-700">Tổng:</span>
                    <span className="font-bold text-[#ff0000] text-lg">
                      0 ₫
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center bg-[#ed1c24] hover:bg-red-700 text-white font-bold py-2.5 rounded transition-colors uppercase disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin mr-2" /> Đang
                        gửi...
                      </>
                    ) : (
                      "Đặt hàng ngay"
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
