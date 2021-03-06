import { useRouter } from "next/router";
import React from "react";

const Name = () => {
  const router = useRouter();
  /* http://localhost:3000/sample/products/red?name=aaaa */
  const { name /* クエリパラメータ */, color /* 動的ページPath */ } = router.query;
  return (
    <>
      <h1 className=" text-gray-500">
        {name}の{color}カラーです
      </h1>
    </>
  );
};
export default Name;

// Name.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };
