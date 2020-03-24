import React from "react";

class ReactBootstrapRibbonButton extends React.Component {
    render() {
        return (
            <button type="button" className="btn btn-light btn-block text-nowrap" {...this.props}>
                {this.props.children}
            </button>
        );
    }
}

export default ReactBootstrapRibbonButton;