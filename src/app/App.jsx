import React, { Component } from "react";

import PropTypes from "prop-types";
import { renderRoutes } from "react-router-config";

import { getRouterLocation } from "./selectors/router";

import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import s from "@/assets/styles/main.scss";
import withStyles from "isomorphic-style-loader/withStyles";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

@connect(
  (state) => ({
    location: getRouterLocation(state),
  }),
  null
)
@withStyles(s)
class App extends Component {
  static propTypes = {
    location: PropTypes.shape().isRequired,
    route: PropTypes.shape().isRequired,
  };

  renderSiteMeta() {
    const canonical = this.props.location.toJS().pathname.toLowerCase();

    return (
      <Helmet
        link={[
          {
            href: canonical,
            rel: "canonical",
          },
        ]}
        meta={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        ]}
      />
    );
  }

  render() {
    const { route } = this.props;
    return (
      <div>
        {this.renderSiteMeta()}
        <div className="page">
          <Header />
          {renderRoutes(route.routes)}
        </div>
      </div>
    );
  }
}

export default App;
