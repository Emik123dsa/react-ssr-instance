import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "isomorphic-style-loader/StyleContext";
import { Link } from 'react-router-dom';

@connect((state) => ({
    globalReducer: state.getIn(["globalReducer", "appSettings"])
}), null)

class NotFound extends React.Component {
    static propTypes = {
        globalReducer: PropTypes.shape().isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> 400 | Page not found </div>
        )
    }
}

export default NotFound;