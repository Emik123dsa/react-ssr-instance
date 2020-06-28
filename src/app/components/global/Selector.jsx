import React from "react";
import PropTypes from "prop-types";
import { Seq } from "immutable";

const Selector = ({ items }) => {
  const optionsCurrency = Seq(items).map((i) => (
    <li key={i.toLowerCase()}>{i}</li>
  ));

  return (
    <div 
    style={{
        display: "none"
    }}
    className="selector__currency">
      <nav className="selector__nav">
        <ul className="selector__list">{optionsCurrency}</ul>
      </nav>
    </div>
  );
};

Selector.propTypes = {
  items: PropTypes.object.isRequired,
};
export default Selector;
