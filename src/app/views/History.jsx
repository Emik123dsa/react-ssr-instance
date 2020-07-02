import React from "react";
import PropTypes from "prop-types";
import s from "@/assets/styles/main.scss";
import { withCookies, Cookies } from "react-cookie";
import { setMongoDbThunk } from "../actions/converterActions";
import { Link } from "react-router-dom";
import Orders from "../components/Orders.jsx";
import { connect } from "react-redux";

@connect(null,
  {
    setMongoDbThunk
  }
)
class History extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }

  }

  componentDidMount() {
    this.setState({
      loading: true,
    });

    const uuid = this.props.cookies.get("uuid");

    if (!!uuid) {
      this.props.setMongoDbThunk(uuid);
    }

    this.setState({
      loading: false,
    });
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
                  <Orders loading={this.state.loading} />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default withCookies(History);
