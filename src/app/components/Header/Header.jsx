import React from "react";
import PropTypes from "prop-types";
import Logo from "@/assets/img/pickar_logo_white.png";

import withStyles from "isomorphic-style-loader/withStyles";

import s from "./Header.scss";
import m from "@/assets/styles/main.scss";

const pickarStyle = {
  background: "url(" + Logo + ")",
  position: "relative",
  display: "block",
  width: "100%",
  zIndex: "22",
  height: "35px",
  backgroundRepeat: "no-repeat",
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {};

  render() {
    return (
      <header className={s.vendor__concurrently}>
        <div className={m.container}>
          <div className={s.vendor__header}>
            <div className="vendor__wrap">
              <div className="vendor__header-title">
                <div style={pickarStyle}></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withStyles(s)(Header);
