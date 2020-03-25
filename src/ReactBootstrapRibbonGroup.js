import React from "react";

class ReactBootstrapRibbonGroup extends React.Component {
    render() {
        return (
            <div className={"ribbon-col h-100 " + (this.props.colClass ? this.props.colClass : "col-sm-6")}>
                <div className="ribbon-group h-100 d-flex flex-column">
                    <div className="ribbon-group-content h-100 flex-fill">
                        <div className="row no-gutters row-2px h-100 p-1">
                            {this.props.children}
                        </div>
                    </div>
                    <div className="ribbon-group-title text-center">
                        {this.props.title}
                    </div>
                </div>
            </div>
        );
    }
}

export default ReactBootstrapRibbonGroup;