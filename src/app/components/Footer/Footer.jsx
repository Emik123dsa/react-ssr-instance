import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/withStyles";
import s from "@/assets/styles/main.scss";
import Currency from "../global/Currency/Currency.jsx";
import f from "./Footer.scss";

@withStyles(f)
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {};

  render() {
    return (
      <footer className="footer-vendor">
        <div className={s.container}>
          <div className={f["footer-vendor__wrap"]}>
            <Currency></Currency>
          </div>
        </div>
      </footer>
    );
  }
}
