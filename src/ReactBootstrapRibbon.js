import React from "react";
// import "./react-bootstrap-ribbon.css";

class ReactBootstrapRibbon extends React.Component {
    constructor() {
        super();

        this.state = {
            mobileCurrentGroup: 0
        };
    }

    handleChange(event) {
        this.setState({ mobileCurrentGroup: (event.target.value * 1) });
    }

    render() {
        const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];

        return (
            <div>
                <div className="d-md-none">
                    <div className="mobile-ribbon ribbon">
                        <div className="ribbon-group-content">
                            <select className="mobile-ribbon-select form-control" onChange={(event) => this.handleChange(event)}>
                                {children.map((item, index) => { return (<option key={index} value={index}>{item.props.title}</option>) })}
                            </select>
                        </div>

                        {children.map((item, index) => {
                            return (
                                <div key={index} className={"mobile-ribbon-item ribbon-group-content " + (index === this.state.mobileCurrentGroup ? "active" : "")}>
                                    <div className="row row-2px">
                                        {item.props.children}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="d-none d-md-block">
                    <div className="ribbon">
                        <div className="row row-eq-height row-2px">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReactBootstrapRibbon;