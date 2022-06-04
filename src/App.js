import React, { Fragment, Suspense } from "react";
// Bootstrap link
import "./container/assets/styles/index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Header = React.lazy(() => import("./container/components/header/header")); // Lazy-loaded
const Footer = React.lazy(() => import("./container/components/footer/footer")); // Lazy-loaded
const Home = React.lazy(() => import("./container/pages/home/home")); // Lazy-loaded
// import Header from "./container/components/header/header";
// import Footer from "./container/components/footer/footer";
// import Home from "./container/pages/home/home";

function App() {
  return (
    <Fragment>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Home />
        <Footer />
      </Suspense>
    </Fragment>
  );
}

export default App;

function Spinner() {
  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        alignItems: "center",
      }}
      class="spinner-border text-primary"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  );
}
