import React from "react";
import PropTypes from "prop-types";

class ReactBootstrapRibbon extends React.Component {
    constructor() {
        super();

        this.state = {
            mobileCurrentGroup: 0
        };
    }

    static get defaultProps() {
        return {
            height: "8rem",
            breakpoint: "md"
        };
    }

    handleChange(event) {
        this.setState({ mobileCurrentGroup: (event.target.value * 1) });
    }

    render() {
        const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];

        return (
            <div className="bg-light">
                <div className={`d-${this.props.breakpoint}-none`}>
                    <div className="mobile-ribbon ribbon">
                        <div className="ribbon-group-content">
                            <select className="mobile-ribbon-select form-control" onChange={(event) => this.handleChange(event)}>
                                {children.map((item, index) => { return (<option key={index} value={index}>{item.props.title}</option>) })}
                            </select>
                        </div>

                        {children.map((item, index) => {
                            return (
                                <div key={index} className={"ribbon-group-content " + (index === this.state.mobileCurrentGroup ? "d-block" : "d-none")}>
                                    <div className="row no-gutters">
                                        {item.props.children}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={`d-none d-${this.props.breakpoint}-block`}>
                    <div className="ribbon d-flex" style={{ height: this.props.height }}>
                        <div className="row no-gutters w-100">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactBootstrapRibbon.propTypes = {
    height: PropTypes.string,
    breakpoint: PropTypes.oneOf(["sm", "md", "lg", "xl"])
};

export default ReactBootstrapRibbon;