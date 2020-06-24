import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { setAppSettings } from "../actions/globalActions";
import { Seq } from "immutable";
import { getAppSettings, getGlobalReducers } from "../selectors/globalSelectors";

@connect(state => ({
    appSettings: getAppSettings(state)
}), null)

class AppSettings extends React.Component {

    constructor(props) {
        super(props);


    }

    static propTypes = {
        appSettings: PropTypes.shape().isRequired
    }

    render() {


        const { appSettings } = this.props;

        return (
            <div>

            </div>
        )
    }
}

export default AppSettings;