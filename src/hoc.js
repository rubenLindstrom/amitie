import React from "react";

import Footer from "./components/footer";

export const withFooter = Component => (
  <>
    <Component />
    <Footer />
  </>
);
