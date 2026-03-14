"use client";

import React, { useState } from "react";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import { ContactProps } from "@assets/props/PropsConfig";
import { LocalFindById } from "@components/items/Handle";

export default function ContactForm({ Config }: { Config: Array<any> }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const ContactData: ContactProps = LocalFindById(Config, "contact");

  // Thay bằng email thực tế của bạn

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    // Cấu hình FormSubmit
    formData.append("_subject", "📩 Tin nhắn mới từ trang Liên Hệ");
    formData.append("_template", "table");
    formData.append("_captcha", "false");

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
        form.reset(); // Xoá trắng form sau khi gửi
        setTimeout(() => setIsSuccess(false), 5000); // Ẩn thông báo sau 5 giây
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
    <div className="w-full">
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center p-8 bg-green-50 border border-green-200 rounded-lg text-center h-full">
          <CheckCircle2
            size={56}
            className="text-green-500 mb-4 animate-bounce"
          />
          <h4 className="text-lg font-bold text-gray-800 mb-2">
            Gửi tin nhắn thành công!
          </h4>
          <p className="text-[14px] text-gray-600">
            Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi lại trong thời gian sớm
            nhất.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <input
              type="text"
              name="Họ_và_Tên"
              required
              placeholder="Họ và tên (*)"
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#002651] focus:ring-1 focus:ring-[#002651] transition-shadow"
            />
          </div>

          <div>
            <input
              type="email"
              name="Email"
              required
              placeholder="Email (*)"
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#002651] focus:ring-1 focus:ring-[#002651] transition-shadow"
            />
          </div>

          <div>
            <input
              type="tel"
              name="Số_Điện_Thoại"
              required
              placeholder="Số điện thoại (*)"
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#002651] focus:ring-1 focus:ring-[#002651] transition-shadow"
            />
          </div>

          <div>
            <textarea
              name="Nội_Dung"
              placeholder="Nội dung"
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#002651] focus:ring-1 focus:ring-[#002651] transition-shadow resize-none"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex justify-center items-center bg-[#ed1c24] hover:bg-red-700 text-white font-bold py-2.5 px-8 rounded-full transition-colors uppercase text-[14px] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin mr-2" /> Đang
                  gửi...
                </>
              ) : (
                "Gửi"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
