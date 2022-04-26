import React from "react";

type Props = {
  text: string;
  Icon: any;
  active?: boolean;
};

const SidebarLink: React.VFC<Props> = ({ text, Icon, active }) => {
  return (
    <div
      className={` text-[#d9d9d9] flex items-center justify-center  xl:justify-start  text-xl  hoverAnimation space-x-3 ${
        active && "font-bold"
      } `}
    >
      <Icon className="h-7 text-white" />
      <span className="hidden xl:inline ">{text}</span>
    </div>
  );
};

export default SidebarLink;
