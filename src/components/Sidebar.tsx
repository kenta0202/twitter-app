import React from "react";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div className="hidden fixed flex-col items-center p-2 h-full sm:flex xl:w-[340px]">
      <div className="flex justify-center items-center w-14 h-14 xl:ml-24 hoverAnimation">
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
      </div>
    </div>
  );
};

export default Sidebar;
