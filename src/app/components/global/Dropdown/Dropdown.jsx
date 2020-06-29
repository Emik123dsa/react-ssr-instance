import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Seq } from "immutable";
import s from "./Dropdown.scss";
import withStyles from "isomorphic-style-loader/withStyles";
import useComponentVisible from "../../../hooks/useComponentVisible";

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

    const { ref, isComponentVisible } = useComponentVisible(true);

    const optionsCurrency = Seq(items).map(
      (vendor) =>
        vendor !== exception && (
          <li
            className={s["selector__enabled"]}
            onClick={() => {
              this.setCurrentCurrency(vendor, type);
            }}
            key={vendor.toLowerCase()}
          >
            {vendor}
          </li>
        )
    );
    return (
      <div ref={ref} className="selector__currency">
        {isComponentVisible ? "123" : "no"}
        <div onClick={this.openCurrentCurrency} className={s["selector-curr"]}>
          {currency}
        </div>
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
