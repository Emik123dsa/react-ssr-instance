import React from "react";
import PropTypes from "prop-types";
import s from "@/assets/styles/main.scss";

import { Link } from "react-router-dom";
import Orders from "../components/Orders.jsx";

class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <main className="main">
          <section className={s.history}>
            <div className={s.container}>
              <div className={s["history__header"]}>
                <Link className={s["history__header-label"]} to="/">
                  {"<"} Go back
                </Link>
              </div>
              <div className={s["history__body"]}>
                <div className={s["history__body-table"]}>
                  <Orders />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default History;
