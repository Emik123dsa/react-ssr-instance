import React from "react";
import c from "./Currency.scss";
import withStyles from "isomorphic-style-loader/withStyles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AnimatedNumber from "animated-number-react";

import {
  getAmount,
  getCurrency,
  getLoading,
} from "@/app/selectors/converterSelectors";

@connect((state) => ({
  amount: getAmount(state),
  currency: getCurrency(state),
  loading: getLoading(state),
}))
@withStyles(c)
class Currency extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    amount: PropTypes.shape({
      initial_amount: PropTypes.number,
      converted_amount: PropTypes.number,
    }),
    currency: PropTypes.shape({
      from_currency: PropTypes.string,
      to_currency: PropTypes.string,
    }),
    loading: PropTypes.bool,
  };
  render() {
    const { currency, amount, loading } = this.props;

    return (
      <div className="footer-vendor__wrap-currency">
        <div className={c["footer-vendor__currency-init"]}>
          <AnimatedNumber
            value={amount.get("initial_amount")}
            duration={300}
            formatValue={(value) => value.toFixed(2)}
          />
          <span className="currency">
            &nbsp;{currency.get("from_currency")} =
          </span>
        </div>
        <div className={c["footer-vendor__currency-converted"]}>
          {loading && <span className=""></span>}
          <AnimatedNumber
            value={amount.get("converted_amount")}
            duration={300}
            formatValue={(value) => value.toFixed(5)}
          />
          <span className="currency-super">
            &nbsp;{currency.get("to_currency")}
          </span>
        </div>
      </div>
    );
  }
}

export default Currency;
