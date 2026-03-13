import React from "react";
import {
  ShieldCheck,
  BadgeDollarSign,
  Users,
  PhoneCall,
  MapPin,
  Mail,
} from "lucide-react";
import { FaPhoneVolume } from "react-icons/fa";

export default function ProductSidebar() {
  const commitments = [
    {
      text: "Dịch vụ và sản phẩm chất lượng, uy tín.",
      icon: <ShieldCheck size={28} className="text-blue-600" />,
    },
    {
      text: "Giá cả hợp lý, cạnh tranh nhất thị trường.",
      icon: <BadgeDollarSign size={28} className="text-blue-600" />,
    },
    {
      text: "Đội ngũ nhân viên thân thiện, nhiệt tình.",
      icon: <Users size={28} className="text-blue-600" />,
    },
    {
      text: "Tư vấn miễn phí cho quý khách hàng 24/24.",
      icon: <PhoneCall size={28} className="text-blue-600" />,
    },
  ];

  return (
    <div className="flex flex-col space-y-6">
      {/* Box 1: Cam kết */}
      <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
        <div className="bg-[#002651] py-2.5 px-4">
          <h4 className="text-white font-bold text-[15px]">
            Cam kết với khách hàng
          </h4>
        </div>
        <div className="bg-gray-50 p-4 flex flex-col space-y-4">
          {commitments.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <div className="w-[45px] flex-shrink-0 flex justify-center">
                {item.icon}
              </div>
              <p className="text-[13.5px] text-gray-700 leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Box 2: Liên hệ */}
      <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
        <div className="bg-[#002651] py-2.5 px-4">
          <h4 className="text-white font-bold text-[15px]">
            Thông tin liên hệ
          </h4>
        </div>
        <div className="bg-gray-50 p-4 text-[14px] text-gray-700 flex flex-col space-y-3">
          <p className="flex items-center">
            <FaPhoneVolume size={16} className="mr-2 text-gray-600" />
            <strong>Hotline:</strong>{" "}
            <a href="tel:0909743306" className="ml-1 text-[#ff0000] font-bold">
              0909.743.306
            </a>
          </p>
          <p className="flex items-center">
            <MapPin size={16} className="mr-2 text-gray-600" />
            <strong>Zalo:</strong> <span className="ml-1">0909.743.306</span>
          </p>
          <p className="flex items-center">
            <Mail size={16} className="mr-2 text-gray-600" />
            Chờ cập nhật Email...
          </p>
        </div>
      </div>
    </div>
  );
}
