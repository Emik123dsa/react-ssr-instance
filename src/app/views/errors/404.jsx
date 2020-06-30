import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "isomorphic-style-loader/withStyles";
import { Link } from "react-router-dom";
import s from "@/assets/styles/main.scss";

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="error">
        <section className={s.error_page}>
          <div 
          className={s.error}> 400 | Page not found </div>
        </section>
      </main>
    );
  }
}

export default NotFound;
