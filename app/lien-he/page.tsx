import { ContactProps } from "@assets/props/PropsConfig";
import ContactForm from "@components/client/Contact/ContactForm";
import { LocalFindById } from "@components/items/Handle";
import { find } from "@config/lib/api";
import React from "react";

export default async function ContactPage() {
  const Config = await find("Config");
  const ContactData: ContactProps = LocalFindById(Config, "contact");

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
            <ContactForm Config={Config} />
          </div>

          {/* CỘT PHẢI: Google Maps (Server Component) */}
          <div className="w-full h-[350px] md:h-full min-h-[350px] bg-gray-100 rounded-lg overflow-hidden shadow-sm border border-gray-200">
            <iframe
              src={ContactData?.GoogleMap}
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
