import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "isomorphic-style-loader/withStyles";
import { Link } from 'react-router-dom';


class NotFound extends React.Component {
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