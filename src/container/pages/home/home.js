import React, { Fragment } from "react";
import HeroSection from "./components/heroSection";
import Flow from "./components/flow";
import About from "./components/about";
import Services from "./components/services";
import Team from "./components/team";
import Features from "./components/features";
import HowItWorks from "./components/howItWorks";
import Contact from "./components/contact";

export default function home() {
  return (
    <Fragment>
      <HeroSection />
      {/* <Flow /> */}
      <Features />
      <Services />
      <HowItWorks />
      <About />
      <Team />
      <Contact />
    </Fragment>
  );
}
