import React from "react";
import PropTypes, { object } from "prop-types";
import s from "@/assets/styles/main.scss";
import { Seq } from "immutable";
import { connect } from "react-redux";

import { getTransactions, getVendorOrders } from "../selectors/converterSelectors";

@connect(
  (state) => ({
    transactions: getTransactions(state),
    vendor: getVendorOrders(state),
  })
)

class Orders extends React.Component {
  constructor(props) {
    super(props);

  }
  static propTypes = {
    transactions: PropTypes.object.isRequired,
    vendor: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
  };
  render() {
    const { vendor } = this.props;

    if (this.props.loading) {
      return (
        <div className={s["history__body-table_active"]}>Loading ...</div>
      );
    }

    return (
      !this.props.loading &&
        vendor.size > 0 ?
        <table className={s["history__body-table"]}>
          <thead>
            <tr>
              <td> Date</td>
              <td> From</td>
              <td> To</td>
            </tr>
          </thead>
          <tbody>
            {
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
              height: `${vendor.size * 20}px`
            }}></tr>
          </tbody>
        </table> : (<div className={s["history__body-table_active"]}>
          There's not any stored transactions.
        </div>)
    );

  }
}

export default Orders;
