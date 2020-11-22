import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div id="rootDiv">
      <Header
        keywords={props.keywords}
        description={props.description}
        title={props.title}
      />
      <Navbar />
      <Helmet>
        <html lang="en-GB" />
      </Helmet>
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
