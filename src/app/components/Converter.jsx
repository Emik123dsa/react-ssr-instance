import React from "react";
import PropTypes from "prop-types";
import s from "@/assets/styles/main.scss";
import Switcher from "@/assets/img/switcher.png";
import { connect } from "react-redux";
import Selector from "./global/Selector.jsx";

import {
  getAmount,
  getCurrency,
  getAvailableCurrencies,
} from "../selectors/converterSelectors";
const CONVERT = "convert";

import {
  getLoadedCurrencies,
  setCurrentState,
} from "../actions/converterActions";

@connect(
  (state) => ({
    amount: getAmount(state),
    currency: getCurrency(state),
    available_currencies: getAvailableCurrencies(state),
  }),
  {
    getLoadedCurrencies,
    setCurrentState,
  }
)
class Converter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      current_currency: "",
      to_currency: "",
      loading: false,
    };

    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    console.log(this.textInput);
  }

  #submitBundle = (e) => {
    e.preventDefault();
    this.state.loading = true;

    this.props.getLoadedCurrencies(CONVERT);
  };

  static propTypes = {
    getLoadedCurrencies: PropTypes.func.isRequired,
    setCurrentState: PropTypes.func.isRequired,
    amount: PropTypes.shape({
      initial_amount: PropTypes.number,
      converted_amount: PropTypes.number,
    }),
    currency: PropTypes.shape({
      from_currency: PropTypes.string,
      to_currency: PropTypes.string,
    }),
    available_currencies: PropTypes.object,
  };

  #changeHandler = (e) => {
    e.persist();

    this.props.setCurrentState({
      [e.target.name]: e.target.value,
    });

    this.setState((prev) => ({
      ...prev,
      ...{
        [e.target.name]: e.target.value,
      },
    }));
  };

  render() {
    const { amount, currency } = this.props;
    return (
      <form className={s["vendor__converter-body"]}>
        <div className={s["vendor__converter-item"]}>
          <input
            id="initial_value"
            type="text"
            name="amount"
            onChange={this.#changeHandler}
            // value={!!this.state.amount ? this.state.amount.replace(0, "") : 0}
          />
          <label htmlFor="initial_value">Amount</label>
        </div>
        <div className={s["vendor__converter-item"]}>
          <input
            id="current_currency"
            type="text"
            name="current_currency"
            onChange={this.#changeHandler}
            ref={this.textInput}
          />
          <Selector items={this.props.available_currencies} />
          <label htmlFor="from_value">From</label>
        </div>
        <div className={s["vendor__converter-item_changer"]}>
          <img src={Switcher} alt={Switcher.toUpperCase()} />
        </div>
        <div className={s["vendor__converter-item"]}>
          <input
            id="to_value"
            type="text"
            name="to_currency"
            onChange={this.#changeHandler}
          />
          <label htmlFor="to_value">To</label>
        </div>
        <div className={s["vendor__converter-item"]}>
          {!this.state.loading && (
            <button
              className={s["vendor__converter-item__button"]}
              onClick={this.#submitBundle}
              type="submit"
              disabled={this.state.loading}
            >Convert</button>
          )}
          {this.state.loading && (
            <button
              className={s["vendor__converter-item__button"]}
              onClick={this.#submitBundle}
              type="submit"
              disabled={this.state.loading}
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
