import React from "react";
import PropTypes from "prop-types";
import s from "@/assets/styles/main.scss";
import Switcher from "@/assets/img/switcher.png";
import { connect } from "react-redux";
import Dropdown from "./global/Dropdown/Dropdown.jsx";

import {
  getAmount,
  getAvailableCurrencies,
  getLoading,
  getCurrency,
  getRatio,
} from "../selectors/converterSelectors";

const CONVERT = "convert";

import {
  getLoadedCurrencies,
  setCurrentAmount,
  setFromCurrentCurrency,
  setToCurrentCurrency
} from "../actions/converterActions";

@connect(
  (state) => ({
    amount: getAmount(state),
    available_currencies: getAvailableCurrencies(state),
    loading: getLoading(state),
    currency: getCurrency(state),
    ratio: getRatio(state),
  }),
  {
    getLoadedCurrencies,
    setCurrentAmount,
    setToCurrentCurrency,
    setFromCurrentCurrency
  }
)
class Converter extends React.Component {
  constructor(props) {
    super(props);
    const { currency } = this.props;
    this.state = {
      amount: "",
      from_currency: currency.get("from_currency"),
      to_currency: currency.get("to_currency"),
    };
  }

  static propTypes = {
    getLoadedCurrencies: PropTypes.func.isRequired,
    setCurrentAmount: PropTypes.func.isRequired,
    setFromCurrentCurrency: PropTypes.func.isRequired,
    setToCurrentCurrency: PropTypes.func.isRequired,
    amount: PropTypes.shape({
      initial_amount: PropTypes.number,
      converted_amount: PropTypes.number,
    }),
    currency: PropTypes.shape({
      from_currency: PropTypes.string,
      to_currency: PropTypes.string,
    }),
    available_currencies: PropTypes.object,
    loading: PropTypes.bool,
    ratio: PropTypes.number,
  };

  fetchFromSelector = (data) => {
    const { vendor, type } = data;

    this.setState({
      [type]: vendor,
    });
  };

  submitBundle = (e) => {
    e.preventDefault();

    this.props.setCurrentAmount({
      ["amount"]: this.state.amount,
    });
    this.props.setFromCurrentCurrency(this.state.from_currency);

    this.props.getLoadedCurrencies(CONVERT, {
      currency: [this.state.from_currency, this.state.to_currency],
      amount: this.state.amount,
    });

    this.props.setToCurrentCurrency(this.state.to_currency);
  };

  changeHandler = (e) => {
    e.persist();

    this.setState((prev) => ({
      ...prev,
      ...{
        [e.target.name]: e.target.value,
      },
    }));
  };

  render() {
    const { loading, available_currencies } = this.props;

    let current_currencies = {
      to_currency: "to_currency",
      from_currency: "from_currency",
    };

    return (
      <form className={s["vendor__converter-body"]}>
        <div className={s["vendor__converter-item"]}>
          <input
            id="initial_value"
            type="text"
            name="amount"
            onChange={this.changeHandler}
            // value={!!this.state.amount ? this.state.amount.replace(0, "") : 0}
          />
          <label htmlFor="initial_value">Amount</label>
        </div>
        <div className={s["vendor__converter-item"]}>
          <Dropdown
            currency={this.state.from_currency}
            exception={this.state.to_currency}
            type={current_currencies.from_currency}
            fetchFromSelector={this.fetchFromSelector.bind(this)}
            items={available_currencies}
          />
          <label htmlFor="from_value">From</label>
        </div>
        <div className={s["vendor__converter-item_changer"]}>
          <img src={Switcher} alt={Switcher.toUpperCase()} />
        </div>
        <div className={s["vendor__converter-item"]}>
          <Dropdown
            currency={this.state.to_currency}
            exception={this.state.from_currency}
            fetchFromSelector={this.fetchFromSelector.bind(this)}
            type={current_currencies.to_currency}
            items={available_currencies}
          />
          <label htmlFor="to_value">To</label>
        </div>
        <div className={s["vendor__converter-item"]}>
          {!loading && (
            <button
              className={s["vendor__converter-item__button"]}
              onClick={this.submitBundle}
              type="submit"
              disabled={loading}
            >
              Convert
            </button>
          )}
          {loading && (
            <button
              className={s["vendor__converter-item__button"]}
              onClick={this.submitBundle}
              type="submit"
              disabled={loading}
            >
              Loading
            </button>
          )}
        </div>
      </form>
    );
  }
}

export default Converter;
