import React, { Fragment } from "react";
// Bootstrap link
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./container/components/header/header";
import Footer from "./container/components/footer/footer";
import Home from "./container/pages/home/home";
import "./container/assets/styles/index.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
