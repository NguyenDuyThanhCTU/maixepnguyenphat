import Image from "next/image";
import React from "react";
const PageH1 = ({ Content }: { Content: String }) => {
  return (
    <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/xetaiminhtri.appspot.com/o/cua_cuon_austdoor_gr1_1.jpg?alt=media&token=b20e2c53-d6fc-494b-8a82-33da74c41286)] bg-cover bg-no-repeat">
      <div className="bg-[rgba(0,0,0,0.58)] h-[300px] flex items-center justify-center ">
        <h1 className="text-center text-[30px] uppercase text-white font-bold ">
          {Content}
        </h1>
      </div>
    </div>
  );
};

export default PageH1;
