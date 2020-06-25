import React from "react";
import PropTypes from "prop-types";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {}

    render() {
        return (
            <header className="vendor__concurrently">
                <div className="container">
                    <div className="vendor__header">
                        <div className="vendor__header-title">
                            <h2 className="vendor__header-label">
                                <img src={require('@/assets/img/pickar_logo_white.png')} alt="pickar"/>
                            </h2>
                        </div>
                        <div className="vendor__header-body">
                            <span className="vendor__header-body__label">
                                Convert currencies in real-time
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}