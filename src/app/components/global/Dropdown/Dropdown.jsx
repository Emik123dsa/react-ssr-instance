import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Seq } from "immutable";
import s from "./Dropdown.scss";
import withStyles from "isomorphic-style-loader/withStyles";
import OutsideClickHandler from "react-outside-click-handler";
import Path from "@/assets/img/Path.png";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  setCurrentCurrency = (vendor, type) => {
    let data = { vendor, type };
    this.props.fetchFromSelector(data);
  };

  openCurrentCurrency = () => {
    this.setState({
      open: true,
    });
  };

  closeCurrentCurrency = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { items, currency, type, exception } = this.props;

    const optionsCurrency = Seq(items).map((vendor) =>
      vendor !== currency ? (
        <li
          className={s["selector__enabled"]}
          onClick={() => {
            this.setCurrentCurrency(vendor, type);
          }}
          key={vendor.toLowerCase()}
        >
          {vendor}
        </li>
      ) : (
        <li
          className={s["selector__active"]}
          key={vendor.toLowerCase()}
        >
          {vendor}
        </li>
      )
    );
    return (
      <div className="selector__currency">
        <OutsideClickHandler
          onOutsideClick={() => {
            this.closeCurrentCurrency();
          }}
        >
          <div
            onClick={this.openCurrentCurrency}
            className={s["selector-curr"]}
          >
            {currency}
          <img 
          style={{
            transform: this.state.open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s ease"
          }}
          src={Path} alt={Path.toLowerCase()}/>
          </div>
        </OutsideClickHandler>
        <div
          style={{
            display: !this.state.open ? "none" : "block",
          }}
          className={s["selector-env"]}
        >
          <nav className="selector__nav">
            <ul className={s["selector-list"]}>{optionsCurrency}</ul>
          </nav>
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  items: PropTypes.object,
  currency: PropTypes.string,
  fetchFromSelector: PropTypes.func,
  type: PropTypes.string,
  exception: PropTypes.string,
};

export default withStyles(s)(Dropdown);
