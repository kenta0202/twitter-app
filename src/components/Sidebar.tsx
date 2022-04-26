import React from "react";
import Image from "next/image";
import SidebarLink from "./SidebarLink";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="hidden fixed flex-col items-center p-2 h-full sm:flex xl:w-[150px]">
      <div className="flex justify-center items-center  w-14 h-14 xl:ml-[-2rem] hoverAnimation">
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
      </div>
      <div className=" mt-4 mb-2.5 space-y-2.5 xl:ml-24 ">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden w-40 h-[50px] text-lg font-bold text-white bg-[#1d9bf0] hober:bg-[#1a8cd8] rounded-full shadow-md xl:inline xl:ml-24 ">
        Tweet
      </button>
      <div className="flex justify-center items-center mt-auto text-[#d9d9d9] xl:mt-2 xl:ml-28 hoverAnimation">
        <img
          src="https://placehold.jp/50x50.png"
          alt="テスト"
          className="w-10 h-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden leading-5 xl:inline  ">
          <h4 className=" font-bold">firebase</h4>
          <p className="text-[#6e767d]">@firebase1875</p>
        </div>
        <DotsHorizontalIcon className="hidden ml-10 h-5 text-white xl:inline" />
      </div>
    </div>
  );
};

export default Sidebar;
