import React from "react";
import PropTypes from "prop-types";
import s from "@/assets/styles/main.scss";
import Footer from "../components/Footer/Footer.jsx";
import Loadable from "react-loadable";

import Converter from "../components/Converter.jsx";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <main className="main">
          <section className="vendor__converter">
            <div className={s.container}>
              <div className={s["vendor__converter-wrap"]}>
                <Converter />
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <div id={s.customVendor}></div>
      </div>
    );
  }
}
export default Main;
