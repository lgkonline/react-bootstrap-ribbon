import React from "react";
import {render} from "react-dom";

import {Tabs, Tab} from "react-bootstrap";
import {Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton} from "react-bootstrap-ribbon";
import SyntaxHighlighter from "react-syntax-highlighter";
import {vs, docco} from "react-syntax-highlighter/dist/styles";

import ExampleRibbon from "./ExampleRibbon.jsx";

// import "bootstrap-sass/assets/stylesheets/_bootstrap.scss";

import "./bootstrap.scss";
import "react-bootstrap-ribbon/dist/react-bootstrap-ribbon.css";
import "./main.scss";

class App extends React.Component {
    render() {
        return (
            <div>
                <div id="header" className="jumbotron">
                    <div className="container">
                        <h1>React Bootstrap Ribbon <small>by LGK</small></h1>
                    </div>
                </div>

                <div className="container">
                    <section id="section-examples">
                        <h1 className="page-header">Examples</h1>

                        <article>
                            <h2 className="page-header">Simple ribbon</h2>

                            <ExampleRibbon/>

                            <SyntaxHighlighter language="html" style={docco}>
                                {'<Ribbon>\n' + 
                                '   <RibbonGroup title="Clipboard" colClass="col-xs-3">\n' +
                                '       <RibbonGroupItem colClass="col-xs-4">\n' +
                                '           <RibbonButton>\n' +
                                '               <div className="ribbon-icon">\n' +
                                '                   <span className="icon-pushpin"/>\n' +
                                '               </div>\n' +
                                '               <div>Pin</div>\n' +
                                '           </RibbonButton>\n' +
                                '       </RibbonGroupItem>\n' +
                                '       ...\n' +
                                '   </RibbonGroup>\n' +
                                '   ...\n' +
                                '</Ribbon>'}
                            </SyntaxHighlighter>
                        </article>

                        <article>
                            <h2 className="page-header">Tabbed ribbons</h2>
                            <p>
                                To realize tabbed ribbons I use the <code>Tabs</code> components of <a href="https://react-bootstrap.github.io/components.html#tabs">React-Bootstrap</a>.
                            </p>

                            <Tabs defaultActiveKey={0} animation={false} id="example-tabbed-ribbon">
                                <Tab eventKey={0} title="Start">
                                    <ExampleRibbon/>
                                </Tab>

                                <Tab eventKey={1} title="Release">
                                    <Ribbon>
                                        <RibbonGroup title="Send">
                                            <RibbonGroupItem>
                                                <RibbonButton>
                                                    <div className="ribbon-icon">
                                                        <span className="icon-share"/>
                                                    </div>
                                                    <div>Share</div>
                                                </RibbonButton>
                                            </RibbonGroupItem>

                                            <RibbonGroupItem>
                                                <RibbonButton>
                                                    <div className="ribbon-icon">
                                                        <span className="icon-mail"/>
                                                    </div>
                                                    <div>Email</div>
                                                </RibbonButton>
                                            </RibbonGroupItem>                                    
                                        </RibbonGroup>

                                        <RibbonGroup title="Release for">
                                            <RibbonGroupItem colClass="col-xs-12">
                                                <RibbonButton>
                                                    <div className="ribbon-icon">
                                                        <span className="icon-lock"/>
                                                    </div>
                                                    <div>Close releasing</div>
                                                </RibbonButton>
                                            </RibbonGroupItem>                                   
                                        </RibbonGroup>
                                    </Ribbon>
                                </Tab>
                            </Tabs>

                            <SyntaxHighlighter language="html" style={docco}>
                                {'<Tabs defaultActiveKey={0} animation={false} id="example-tabbed-ribbon">\n' +
                                '   <Tab eventKey={0} title="Start">\n' +
                                '       <Ribbon>\n' + 
                                '           <RibbonGroup title="Clipboard" colClass="col-xs-3">\n' +
                                '               <RibbonGroupItem colClass="col-xs-4">\n' +
                                '                   <RibbonButton>\n' +
                                '                       <div className="ribbon-icon">\n' +
                                '                           <span className="icon-pushpin"/>\n' +
                                '                       </div>\n' +
                                '                       <div>Pin</div>\n' +
                                '                   </RibbonButton>\n' +
                                '               </RibbonGroupItem>\n' +
                                '               ...\n' +
                                '           </RibbonGroup>\n' +
                                '           ...\n' +
                                '       </Ribbon>\n' +
                                '   </Tab>\n' +
                                '   <Tab eventKey={1} title="Release">\n' +
                                '       <Ribbon>\n' +
                                '           ...\n' +
                                '       </Ribbon>\n' +
                                '   </Tab>\n' +
                                '</Tabs>'}
                            </SyntaxHighlighter>                        
                        </article>
                    </section>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById("app"));