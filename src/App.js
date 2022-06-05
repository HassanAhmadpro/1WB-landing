import React, { Fragment, Suspense } from "react";
// Bootstrap link
import "./container/assets/styles/index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Header = React.lazy(() => import("./container/components/header/header")); // Lazy-loaded
const Footer = React.lazy(() => import("./container/components/footer/footer"));
const Home = React.lazy(() => import("./container/pages/home/home"));

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
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "auto",
      }}
      class="text-center"
    >
      <div class="spinner-border text-dark" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}
