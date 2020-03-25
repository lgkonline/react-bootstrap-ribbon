import React from "react";

class ReactBootstrapRibbonGroupItem extends React.Component {
    render() {
        return (
            <div className={"d-md-flex " + (this.props.colClass ? this.props.colClass : "col-6")}>
                {this.props.children}
            </div>
        );
    }
}

export default ReactBootstrapRibbonGroupItem;