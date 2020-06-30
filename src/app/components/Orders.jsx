import React from "react";
import PropTypes, { object } from "prop-types";
import s from "@/assets/styles/main.scss";
import { Seq } from "immutable";
import { connect } from "react-redux";

import { getTransactions } from "../selectors/converterSelectors";

@connect((state) => ({
  transactions: getTransactions(state),
}))
class Orders extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    transactions: PropTypes.object.isRequired,
  };
  render() {
    const { transactions } = this.props;

    if (!transactions.toJS().length) {
      return (
        <div className={s["history__body-table_active"]}>
          There's not any stored transactions.
        </div>
      );
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
          {Seq(transactions)
            .reverse()
            .map((item, key) => (
              <tr
                style={{
                  transform: `translateY(${key * 20}px)`,
                }}
                key={key}
              >
                <td>{item.id}</td>
                <td>{item.from_currency}</td>
                <td>{item.to_currency}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

export default Orders;
