import React from "react";
import PropTypes from "prop-types";
import s from "@/assets/styles/main.scss";
import Footer from "../components/Footer/Footer.jsx";
import Loadable from "react-loadable";
import { Link } from "react-router-dom";
import Converter from "../components/Converter.jsx";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <main className="main">
          <section className={s["vendor__converter"]}>
            <div className={s.container}>
              <div className={s["vendor__header-body"]}>
                <h1 className={s["vendor__header-label"]}>
                  Convert currencies in real-time.
                </h1>
              </div>
              <div className={s.sub_container}>
                <div className={s["vendor__converter-wrap"]}>
                  <Converter />
                </div>
                <div className={s["vendor__converter-link"]}>
                  <Link
                    className={s["vendor__converter-link_title"]}
                    to="/history"
                  >
                    View conversion history >
                  </Link>
                </div>
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
