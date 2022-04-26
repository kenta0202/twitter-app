/* eslint-disable tailwindcss/no-custom-classname */
import Feed from "components/Feed";
import Sidebar from "components/Sidebar";
import React from "react";

function IndexPage() {
  return (
    <main className="flex mx-auto min-h-screen bg-black mx-w-[1500px]  ">
      <Sidebar />
      <Feed />
      {/* Widgets */}
      {/* Modal */}
    </main>
  );
}

export default IndexPage;
