import React, { Fragment } from "react";
import HeroSection from "./components/heroSection";
import Flow from "./components/flow";
import About from "./components/about";
import HowItWorks from "./components/howItWorks";
import Contact from "./components/contact";

export default function home() {
  return (
    <Fragment>
      <HeroSection />
      <Flow />
      <HowItWorks />
      <About />
      <Contact />
    </Fragment>
  );
}
