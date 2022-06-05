import React, { Fragment } from "react";
import HeroSection from "./components/heroSection";
import Flow from "./components/flow";
import About from "./components/about";

export default function home() {
  return (
    <Fragment>
      <HeroSection />
      <Flow />
      <About />
    </Fragment>
  );
}
