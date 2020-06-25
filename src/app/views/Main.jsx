import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

import withStyles from 'isomorphic-style-loader/withStyles';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <div className="crutch">
              Main123123211233254645
              <Link to="/world">123</Link>
            </div>
        )
    }
}
export default Main;