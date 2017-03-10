import React from "react";
import {Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton} from "react-bootstrap-ribbon";

class ExampleRibbon extends React.Component {
    render() {
        return (
            <Ribbon>
                <RibbonGroup title="Clipboard" colClass="col-xs-3">
                    <RibbonGroupItem colClass="col-xs-4">
                        <RibbonButton>
                            <div className="ribbon-icon">
                                <span className="icon-pushpin"/>
                            </div>
                            <div>Pin</div>
                        </RibbonButton>
                    </RibbonGroupItem>

                    <RibbonGroupItem colClass="col-xs-4">
                        <RibbonButton>
                            <div className="ribbon-icon">
                                <span className="icon-copy"/>
                            </div>
                            <div>Copy</div>
                        </RibbonButton>
                    </RibbonGroupItem>

                    <RibbonGroupItem colClass="col-xs-4">
                        <RibbonButton>
                            <div className="ribbon-icon">
                                <span className="icon-paste"/>
                            </div>
                            <div>Paste</div>
                        </RibbonButton>
                    </RibbonGroupItem>
                </RibbonGroup>

                <RibbonGroup title="New" colClass="col-xs-3">
                    <RibbonGroupItem colClass="col-xs-4">
                        <RibbonButton>
                            <div className="ribbon-icon">
                                <span className="icon-folder-plus"/>
                            </div>
                            <div>New folder</div>
                        </RibbonButton>
                    </RibbonGroupItem>
                    <RibbonGroupItem colClass="col-xs-8">
                        <div className="row row-2px">
                            <RibbonGroupItem colClass="col-xs-12">
                                <RibbonButton>
                                    <span className="icon-file-text"/> New file
                                </RibbonButton>
                            </RibbonGroupItem>

                            <RibbonGroupItem colClass="col-xs-12">
                                <RibbonButton>
                                    <span className="icon-accessibility"/> Easy access
                                </RibbonButton>
                            </RibbonGroupItem>
                        </div>
                    </RibbonGroupItem>
                </RibbonGroup>

                <RibbonGroup title="Open" colClass="col-xs-4">
                    <RibbonGroupItem colClass="col-xs-4">
                        <RibbonButton>
                            <div className="ribbon-icon">
                                <span className="icon-list"/>
                            </div>
                            <div>Properties</div>
                        </RibbonButton>
                    </RibbonGroupItem>
                    <RibbonGroupItem colClass="col-xs-8">
                        <div className="row row-2px">
                            <RibbonGroupItem colClass="col-xs-12">
                                <RibbonButton>
                                    <span className="icon-folder-open"/> Open file
                                </RibbonButton>
                            </RibbonGroupItem>

                            <RibbonGroupItem colClass="col-xs-12">
                                <RibbonButton>
                                    <span className="icon-clock"/> History
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
                                    <span className="icon-checkbox-checked"/> Select all
                                </RibbonButton>
                            </RibbonGroupItem>

                            <RibbonGroupItem colClass="col-xs-12">
                                <RibbonButton>
                                    <span className="icon-checkbox-unchecked"/> Toggle selection
                                </RibbonButton>
                            </RibbonGroupItem>
                        </div>
                    </RibbonGroupItem>
                </RibbonGroup>
            </Ribbon>
        );
    }
}

export default ExampleRibbon;