import ContactForm from "@components/client/Contact/ContactForm";
import React from "react";

export default function ContactPage() {
  return (
    <div className="w-full bg-white font-sans pb-16">
      <div className="d:w-[1200px] p:w-auto d:mx-auto p:mx-2 mx-auto px-4 py-10 md:py-16">
        {/* Tiêu đề trang */}
        <div className="mb-8">
          <h1 className="text-xl md:text-2xl font-bold uppercase text-gray-800 mb-2 relative inline-block">
            LIÊN HỆ VỚI CHÚNG TÔI
          </h1>
          <div className="w-16 h-[2px] bg-gray-300"></div>
        </div>

        {/* Layout 2 cột: Form & Bản đồ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* CỘT TRÁI: Form liên hệ (Client Component) */}
          <div className="w-full">
            <ContactForm />
          </div>

          {/* CỘT PHẢI: Google Maps (Server Component) */}
          <div className="w-full h-[350px] md:h-full min-h-[350px] bg-gray-100 rounded-lg overflow-hidden shadow-sm border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d15672.483669677568!2d106.75704155!3d10.878411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8641a2e7c65%3A0xc3ddbbd2243d443!2zS2h1IHBo4buRIE5o4buLIMSQ4buTbmcsIETEqSBBbiwgQsOsbmggRMawxqFuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1710000000000!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ Mái Hiên Nguyên Phát"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
