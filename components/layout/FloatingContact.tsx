import { ContactProps } from "@assets/props/PropsConfig";
import { LocalFindById } from "@components/items/Handle";
import React from "react";

export default function FloatingContact({ Config }: { Config: Array<any> }) {
  const ContactData: ContactProps = LocalFindById(Config, "contact");

  return (
    <div className="fixed bottom-10 left-4 z-50 flex flex-col gap-5">
      {/* Nút Messenger */}
      <a
        href="#"
        target="_blank"
        rel="nofollow noreferrer"
        className="relative group w-[50px] h-[50px] flex items-center justify-center"
        title="Messenger"
      >
        {/* Vòng lan tỏa (Ping) & Vòng nhịp đập (Pulse) */}
        <div className="absolute inset-0 rounded-full bg-blue-500/40 animate-ping"></div>
        <div className="absolute inset-1 rounded-full bg-blue-400/60 animate-pulse"></div>

        {/* Nút chính chứa Icon */}
        <div className="relative w-full h-full bg-[#0084ff] rounded-full flex items-center justify-center shadow-lg border border-white/20 z-10 transition-transform group-hover:scale-110">
          <img
            src="https://maihienhoangthong.com/wp-content/plugins/lien-he-thv/images/messenger.png"
            alt="Messenger"
            className="w-[28px] h-[28px] object-contain"
          />
        </div>
      </a>

      {/* Nút Zalo */}
      <a
        href={`https://zalo.me/${ContactData?.Hotline}`}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative group w-[50px] h-[50px] flex items-center justify-center"
        title="Zalo"
      >
        {/* Sử dụng animation-delay để các vòng không đập cùng lúc */}
        <div
          className="absolute inset-0 rounded-full bg-[#008ae6]/40 animate-ping"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div className="absolute inset-1 rounded-full bg-[#008ae6]/60 animate-pulse"></div>

        <div className="relative w-full h-full bg-[#008ae6] rounded-full flex items-center justify-center shadow-lg border border-white/20 z-10 transition-transform group-hover:scale-110">
          <img
            src="https://maihienhoangthong.com/wp-content/plugins/lien-he-thv/images/zalo.png"
            alt="Zalo"
            className="w-[28px] h-[28px] object-contain"
          />
        </div>
      </a>

      {/* Nút Hotline (Có kéo dài số điện thoại) */}
      <a
        href={`tel:${ContactData?.Hotline}`}
        className="relative group flex items-center w-max h-[50px] mt-1"
        title="Hotline"
      >
        {/* Khối tròn Icon Hotline */}
        <div className="relative w-[50px] h-[50px] flex items-center justify-center flex-shrink-0 z-20">
          <div
            className="absolute inset-0 rounded-full bg-red-600/40 animate-ping"
            style={{ animationDelay: "0.4s" }}
          ></div>
          <div className="absolute inset-1 rounded-full bg-red-500/60 animate-pulse"></div>

          <div className="relative w-full h-full bg-[#ed1c24] rounded-full flex items-center justify-center shadow-lg border border-white/20 z-10 transition-transform group-hover:scale-110">
            <img
              src="https://maihienhoangthong.com/wp-content/plugins/lien-he-thv/images/hotline.png"
              alt="Hotline"
              className="w-[24px] h-[24px] object-contain"
            />
          </div>
        </div>

        {/* Phần Pill nền đỏ kéo dài chứa số điện thoại */}
        <div className="absolute left-[25px] pl-8 pr-5 py-2 bg-[#ed1c24] text-white font-bold text-[16px] rounded-r-full shadow-md z-10 border border-[#cc161d] whitespace-nowrap overflow-hidden">
          {ContactData?.Hotline}
        </div>
      </a>
    </div>
  );
}
