import "../styles/dist.css";
import "../styles/normalize.css";
import "../styles/global.css";

import React from "react";
import HeadInformation from "components/general/HeadInformation";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <HeadInformation title="Twitter" />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
