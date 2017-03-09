import React from "react";
import {render} from "react-dom";

import {Tabs, Tab} from "react-bootstrap";

import Ribbon from "../lib/ReactBootstrapRibbon.jsx";
import RibbonGroup from "../lib/ReactBootstrapRibbonGroup.jsx";
import RibbonGroupItem from "../lib/ReactBootstrapRibbonGroupItem.jsx";
import RibbonButton from "../lib/ReactBootstrapRibbonButton.jsx";

import "../lib/react-bootstrap-ribbon.css";
import "./demo.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="page-header">Simple ribbon</h1>

                    <Ribbon>
                        <RibbonGroup title="Clipboard" colClass="col-xs-3">
                            <RibbonGroupItem colClass="col-xs-4">
                                <RibbonButton>
                                    <div className="ribbon-icon">
                                        <span className="glyphicon glyphicon-pushpin"/>
                                    </div>
                                    <div>Pin</div>
                                </RibbonButton>
                            </RibbonGroupItem>

                            <RibbonGroupItem colClass="col-xs-4">
                                <RibbonButton>
                                    <div className="ribbon-icon">
                                        <span className="glyphicon glyphicon-duplicate"/>
                                    </div>
                                    <div>Copy</div>
                                </RibbonButton>
                            </RibbonGroupItem>

                            <RibbonGroupItem colClass="col-xs-4">
                                <RibbonButton>
                                    <div className="ribbon-icon">
                                        <span className="glyphicon glyphicon-paste"/>
                                    </div>
                                    <div>Paste</div>
                                </RibbonButton>
                            </RibbonGroupItem>
                        </RibbonGroup>

                        <RibbonGroup title="New" colClass="col-xs-3">
                            <RibbonGroupItem colClass="col-xs-4">
                                <RibbonButton>
                                    <div className="ribbon-icon">
                                        <span className="glyphicon glyphicon-folder-open"/>
                                    </div>
                                    <div>New folder</div>
                                </RibbonButton>
                            </RibbonGroupItem>
                            <RibbonGroupItem colClass="col-xs-8">
                                <div className="row row-2px">
                                    <RibbonGroupItem colClass="col-xs-12">
                                        <RibbonButton>
                                            <span className="glyphicon glyphicon-file"/> New file
                                        </RibbonButton>
                                    </RibbonGroupItem>

                                    <RibbonGroupItem colClass="col-xs-12">
                                        <RibbonButton>
                                            <span className="glyphicon glyphicon-inbox"/> Easy access
                                        </RibbonButton>
                                    </RibbonGroupItem>
                                </div>
                            </RibbonGroupItem>
                        </RibbonGroup>

                        <RibbonGroup title="Open" colClass="col-xs-4">
                            <RibbonGroupItem colClass="col-xs-4">
                                <RibbonButton>
                                    <div className="ribbon-icon">
                                        <span className="glyphicon glyphicon-list-alt"/>
                                    </div>
                                    <div>Properties</div>
                                </RibbonButton>
                            </RibbonGroupItem>
                            <RibbonGroupItem colClass="col-xs-8">
                                <div className="row row-2px">
                                    <RibbonGroupItem colClass="col-xs-12">
                                        <RibbonButton>
                                            <span className="glyphicon glyphicon-file"/> Open file
                                        </RibbonButton>
                                    </RibbonGroupItem>

                                    <RibbonGroupItem colClass="col-xs-12">
                                        <RibbonButton>
                                            <span className="glyphicon glyphicon-time"/> History
                                        </RibbonButton>
                                    </RibbonGroupItem>
                                </div>
                            </RibbonGroupItem>
                        </RibbonGroup>

                        <RibbonGroup title="Select" colClass="col-xs-2">
                            <RibbonGroupItem colClass="col-xs-12">
                                <div className="row row-2px">
                                    <RibbonGroupItem colClass="col-xs-12">
                                        <RibbonButton>
                                            <span className="glyphicon glyphicon-th"/> Select all
                                        </RibbonButton>
                                    </RibbonGroupItem>

                                    <RibbonGroupItem colClass="col-xs-12">
                                        <RibbonButton>
                                            <span className="glyphicon glyphicon-th"/> Toggle selection
                                        </RibbonButton>
                                    </RibbonGroupItem>
                                </div>
                            </RibbonGroupItem>
                        </RibbonGroup>
                    </Ribbon>


                    <h1 className="page-header">Tabbed ribbons</h1>

                    <Tabs defaultActiveKey={0} animation={false} id="example-tabbed-ribbon">
                        <Tab eventKey={0} title="Start">
                            <Ribbon>
                                <RibbonGroup title="Clipboard" colClass="col-xs-3">
                                    <RibbonGroupItem colClass="col-xs-4">
                                        <RibbonButton>
                                            <div className="ribbon-icon">
                                                <span className="glyphicon glyphicon-pushpin"/>
                                            </div>
                                            <div>Pin</div>
                                        </RibbonButton>
                                    </RibbonGroupItem>

                                    <RibbonGroupItem colClass="col-xs-4">
                                        <RibbonButton>
                                            <div className="ribbon-icon">
                                                <span className="glyphicon glyphicon-duplicate"/>
                                            </div>
                                            <div>Copy</div>
                                        </RibbonButton>
                                    </RibbonGroupItem>

                                    <RibbonGroupItem colClass="col-xs-4">
                                        <RibbonButton>
                                            <div className="ribbon-icon">
                                                <span className="glyphicon glyphicon-paste"/>
                                            </div>
                                            <div>Paste</div>
                                        </RibbonButton>
                                    </RibbonGroupItem>
                                </RibbonGroup>

                                <RibbonGroup title="New" colClass="col-xs-3">
                                    <RibbonGroupItem colClass="col-xs-4">
                                        <RibbonButton>
                                            <div className="ribbon-icon">
                                                <span className="glyphicon glyphicon-folder-open"/>
                                            </div>
                                            <div>New folder</div>
                                        </RibbonButton>
                                    </RibbonGroupItem>
                                    <RibbonGroupItem colClass="col-xs-8">
                                        <div className="row row-2px">
                                            <RibbonGroupItem colClass="col-xs-12">
                                                <RibbonButton>
                                                    <span className="glyphicon glyphicon-file"/> New file
                                                </RibbonButton>
                                            </RibbonGroupItem>

                                            <RibbonGroupItem colClass="col-xs-12">
                                                <RibbonButton>
                                                    <span className="glyphicon glyphicon-inbox"/> Easy access
                                                </RibbonButton>
                                            </RibbonGroupItem>
                                        </div>
                                    </RibbonGroupItem>
                                </RibbonGroup>

                                <RibbonGroup title="Open" colClass="col-xs-4">
                                    <RibbonGroupItem colClass="col-xs-4">
                                        <RibbonButton>
                                            <div className="ribbon-icon">
                                                <span className="glyphicon glyphicon-list-alt"/>
                                            </div>
                                            <div>Properties</div>
                                        </RibbonButton>
                                    </RibbonGroupItem>
                                    <RibbonGroupItem colClass="col-xs-8">
                                        <div className="row row-2px">
                                            <RibbonGroupItem colClass="col-xs-12">
                                                <RibbonButton>
                                                    <span className="glyphicon glyphicon-file"/> Open file
                                                </RibbonButton>
                                            </RibbonGroupItem>

                                            <RibbonGroupItem colClass="col-xs-12">
                                                <RibbonButton>
                                                    <span className="glyphicon glyphicon-time"/> History
                                                </RibbonButton>
                                            </RibbonGroupItem>
                                        </div>
                                    </RibbonGroupItem>
                                </RibbonGroup>

                                <RibbonGroup title="Select" colClass="col-xs-2">
                                    <RibbonGroupItem colClass="col-xs-12">
                                        <div className="row row-2px">
                                            <RibbonGroupItem colClass="col-xs-12">
                                                <RibbonButton>
                                                    <span className="glyphicon glyphicon-th"/> Select all
                                                </RibbonButton>
                                            </RibbonGroupItem>

                                            <RibbonGroupItem colClass="col-xs-12">
                                                <RibbonButton>
                                                    <span className="glyphicon glyphicon-th"/> Toggle selection
                                                </RibbonButton>
                                            </RibbonGroupItem>
                                        </div>
                                    </RibbonGroupItem>
                                </RibbonGroup>
                            </Ribbon>
                        </Tab>

                        <Tab eventKey={1} title="Release">
                            <Ribbon>
                                <RibbonGroup title="Send">
                                    <RibbonGroupItem>
                                        <RibbonButton>
                                            <div className="ribbon-icon">
                                                <span className="glyphicon glyphicon-share"/>
                                            </div>
                                            <div>Share</div>
                                        </RibbonButton>
                                    </RibbonGroupItem>

                                    <RibbonGroupItem>
                                        <RibbonButton>
                                            <div className="ribbon-icon">
                                                <span className="glyphicon glyphicon-envelope"/>
                                            </div>
                                            <div>Email</div>
                                        </RibbonButton>
                                    </RibbonGroupItem>                                    
                                </RibbonGroup>

                                <RibbonGroup title="Release for">
                                    <RibbonGroupItem colClass="col-xs-12">
                                        <RibbonButton>
                                            <div className="ribbon-icon">
                                                <span className="glyphicon glyphicon-lock"/>
                                            </div>
                                            <div>Close releasing</div>
                                        </RibbonButton>
                                    </RibbonGroupItem>                                   
                                </RibbonGroup>
                            </Ribbon>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById("app"));