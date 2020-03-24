import React from "react";

class ReactBootstrapRibbonButton extends React.Component {
    render() {
        return (
            <button type="button" className="btn btn-default btn-block" {...this.props}>
                {this.props.children}
            </button>            
        );
    }
}

export default ReactBootstrapRibbonButton;