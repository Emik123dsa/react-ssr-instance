import React from "react";
import PropTypes, { object } from "prop-types";
import s from "@/assets/styles/main.scss";
import { Seq } from "immutable";
import { connect } from "react-redux";
import { withCookies, Cookies } from "react-cookie";
import { setMongoDbThunk } from "../actions/converterActions";

import { getTransactions, getMongoDB } from "../selectors/converterSelectors";

@connect(
  (state) => ({
    transactions: getTransactions(state),
    vendor: getMongoDB(state),
  }),
  {
    setMongoDbThunk,
  }
)
class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
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

  static propTypes = {
    transactions: PropTypes.object.isRequired,
    vendor: PropTypes.object.isRequired,
  };
  render() {
    const { vendor } = this.props;

    if (!vendor.toJS().length) {
      if (this.state.loading) {
        return (
          <div className={s["history__body-table_active"]}>
            There's not any stored transactions.
          </div>
        );
      } else {
        return (
          <div className={s["history__body-table_active"]}>Loading ...</div>
        );
      }
    }

    return (
      <table className={s["history__body-table"]}>
        <thead>
          <tr>
            <td> Date</td>
            <td> From</td>
            <td> To</td>
          </tr>
        </thead>
        <tbody>
          {!this.state.loading &&
            Seq(vendor)
              .reverse()
              .map((item, key) => (
                <tr 
                style={{
                    transform: `translateY(${key * 20}px)`
                }}
                key={key}>
                  <td>{item.get("id")}</td>
                  <td>{item.get("from_currency")}</td>
                  <td>{item.get("to_currency")}</td> 
                </tr>
              ))}
              <tr style={{
                  height: `${vendor.toJS().length * 20}px`
              }}></tr>
        </tbody>
      </table>
    );
  }
}

export default withCookies(Orders);
