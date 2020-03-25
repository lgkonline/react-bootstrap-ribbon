import React from "react";
import { render } from "react-dom";

import { Tabs, Tab } from "react-bootstrap";

import "./demo.scss";
import { ExampleRibbon } from "./ExampleRibbon";

import Ribbon from "../../src/ReactBootstrapRibbon";
import RibbonGroup from "../../src/ReactBootstrapRibbonGroup";
import RibbonGroupItem from "../../src/ReactBootstrapRibbonGroupItem";
import RibbonButton from "../../src/ReactBootstrapRibbonButton";

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="mt-4 mb-3">Simple ribbon</h1>

                    <ExampleRibbon />


                    <h1 className="mt-4 mb-3">Tabbed ribbons</h1>

                    <Tabs defaultActiveKey={0} transition={false} id="example-tabbed-ribbon">
                        <Tab eventKey={0} title="Start">
                            <ExampleRibbon />
                        </Tab>

                        <Tab eventKey={1} title="Second tab">
                            <Ribbon>
                                <RibbonGroup title="Send">
                                    <RibbonGroupItem>
                                        <RibbonButton>
                                            <div className="text-center">
                                                <svg className="bi bi-box-arrow-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M4.646 4.354a.5.5 0 00.708 0L8 1.707l2.646 2.647a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 000 .708z" clipRule="evenodd" />
                                                    <path fillRule="evenodd" d="M8 11.5a.5.5 0 00.5-.5V2a.5.5 0 00-1 0v9a.5.5 0 00.5.5z" clipRule="evenodd" />
                                                    <path fillRule="evenodd" d="M2.5 14A1.5 1.5 0 004 15.5h8a1.5 1.5 0 001.5-1.5V7A1.5 1.5 0 0012 5.5h-1.5a.5.5 0 000 1H12a.5.5 0 01.5.5v7a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5V7a.5.5 0 01.5-.5h1.5a.5.5 0 000-1H4A1.5 1.5 0 002.5 7v7z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>Share</div>
                                        </RibbonButton>
                                    </RibbonGroupItem>

                                    <RibbonGroupItem>
                                        <RibbonButton>
                                            <div className="text-center">
                                                <svg className="bi bi-envelope" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z" clipRule="evenodd" />
                                                    <path fillRule="evenodd" d="M.071 4.243a.5.5 0 01.686-.172L8 8.417l7.243-4.346a.5.5 0 01.514.858L8 9.583.243 4.93a.5.5 0 01-.172-.686z" clipRule="evenodd" />
                                                    <path d="M6.752 8.932l.432-.252-.504-.864-.432.252.504.864zm-6 3.5l6-3.5-.504-.864-6 3.5.504.864zm8.496-3.5l-.432-.252.504-.864.432.252-.504.864zm6 3.5l-6-3.5.504-.864 6 3.5-.504.864z" />
                                                </svg>
                                            </div>
                                            <div>Email</div>
                                        </RibbonButton>
                                    </RibbonGroupItem>
                                </RibbonGroup>

                                <RibbonGroup title="Release for">
                                    <RibbonGroupItem colClass="col-xs-12">
                                        <RibbonButton>
                                            <div className="text-center">
                                                <svg className="bi bi-lock-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="11" height="9" x="2.5" y="7" rx="2" />
                                                    <path fillRule="evenodd" d="M4.5 4a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z" clipRule="evenodd" />
                                                </svg>
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

render(<App />, document.getElementById("app"));