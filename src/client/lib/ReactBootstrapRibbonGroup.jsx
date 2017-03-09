import React from "react";

class ReactBootstrapRibbonGroup extends React.Component {
    render() {
        return (
            <div className={"ribbon-col row-2px-col " + (this.props.colClass ? this.props.colClass : "col-sm-6")}>
                <div className="ribbon-group">
                    <div className="ribbon-group-content">
                        <div className="row row-2px">
                            {this.props.children}
                        </div>
                    </div>
                    <div className="ribbon-group-title">
                        {this.props.title}
                    </div>
                </div>
            </div>            
        );
    }
}

export default ReactBootstrapRibbonGroup;