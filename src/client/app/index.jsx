import React from "react";
import {render} from "react-dom";

import {Tabs, Tab} from "react-bootstrap";
import {Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton} from "react-bootstrap-ribbon";
import SyntaxHighlighter from "react-syntax-highlighter";
import {docco} from "react-syntax-highlighter/dist/styles";

import ExampleRibbon from "./ExampleRibbon.jsx";

import "./bootstrap.scss";
import "react-bootstrap-ribbon/dist/react-bootstrap-ribbon.css";
import "./main.scss";

class App extends React.Component {
    render() {
        return (
            <div>
                <header id="header" className="jumbotron">
                    <div className="container">
                        <h1>React Bootstrap Ribbon <small>by LGK</small></h1>
                    </div>
                </header>

                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="https://github.com/lgkonline/react-bootstrap-ribbon"><span className="icon-github"/> This project on GitHub</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="https://lgk.io"><span className="icon-lgk-filled"/> My other projects</a>
                            </li>
                            <li>
                                <a href="https://twitter.com/lgkonline"><span className="icon-twitter"/> Twitter</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <section id="section-install">
                        <h1 className="page-header">Getting started</h1>

                        <article>
                            <h2>Install with NPM</h2>
                            <p>
                                This is the recommended method. This way you'll always get the latest version.
                            </p>
                            <p style={{textAlign: "center"}}>
                                <code>npm i -D react-bootstrap-ribbon</code>
                            </p>
                        </article>

                        <article>
                            <h2>Download the latest release</h2>

                            <p style={{textAlign: "center"}}>
                                <a href="https://github.com/lgkonline/react-bootstrap-ribbon/releases/latest" className="btn btn-primary btn-lg">
                                    Get the latest release
                                </a>
                            </p>
                        </article>
                    </section>

                    <section id="section-usage">
                        <h1 className="page-header">Usage</h1>
                        <SyntaxHighlighter language="javascript" style={docco}>
                            {
                                'import React, { Component } from "react";\n' +
                                'import {Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton} from "react-bootstrap-ribbon"\n\n' +
                                '// In this example Bootsrap is installed via NPM. Here it gets imported from the "./node_modules" folder:\n' +
                                'import "bootstrap/dist/css/bootstrap.css";\n' +
                                'import "react-bootstrap-ribbon/dist/react-bootstrap-ribbon.css";\n\n' +
                                'class App extends Component {\n' +
                                '   render() {\n' +
                                '       return (\n' +
                                '           <div className="container">\n' +
                                '               <Ribbon>\n' +
                                '                   ...\n' +
                                '               </Ribbon>\n' +
                                '           </div>\n' +
                                '       );\n' +
                                '   }\n' +
                                '}\n\n' +
                                'export default App;'
                            }
                        </SyntaxHighlighter>
                    </section>

                    <section id="section-examples">
                        <h1 className="page-header">Examples</h1>

                        <article>
                            <h2>Simple ribbon</h2>

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
                            <h2>Tabbed ribbons</h2>
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

                    <section id="section-documentation">
                        <h1 className="page-header">Documentation</h1>

                        <article>
                            <h2>Props</h2>

                            <h3>Ribbon</h3>
                            <p className="text-muted">No props.</p>

                            <h3>RibbonGroup</h3>
                            <h4>colClass</h4>
                            <p>Usage: <code>&lt;RibbonGroup colClass="col-xs-4"&gt;&lt;/RibbonGroup&gt;</code></p>
                            <p className="text-info"><span className="icon-info"/> Here you can use the column classes from Bootstrap. 
                                Take a look <a href="http://getbootstrap.com/css/#grid">Bootstrap documentation</a> for more information.</p>

                            <h4>title</h4>
                            <p>Usage: <code>&lt;RibbonGroup title="Your title"&gt;&lt;/RibbonGroup&gt;</code></p>

                            <h3>RibbonGroupItem</h3>
                            <h4>colClass</h4>
                            <p>Usage: <code>&lt;RibbonGroupItem colClass="col-xs-4"&gt;&lt;/RibbonGroupItem&gt;</code></p>
                            <p className="text-info"><span className="icon-info"/> Here you can use the column classes from Bootstrap. 
                                Take a look <a href="http://getbootstrap.com/css/#grid">Bootstrap documentation</a> for more information.</p>

                            <h3>RibbonButton</h3>
                            <p className="text-muted">No props.</p>
                        </article>
                    </section>
                </div>

                <footer id="footer" className="jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                &copy; 2017 LGK // Made with <span className="icon-heart"/> in Germany
                            </div>

                            <div className="col-md-4" style={{textAlign: "center"}}>
                                <a href="https://lgk.io" id="lgkLogo"><span className="icon-lgk-filled"/></a>
                            </div>

                            <div className="col-md-4" style={{textAlign: "right"}}>
                                <a href="http://me.lgk.io/contact">Contact</a> // <a href="http://about.lgkonline.com/impressum">Imprint</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

render(<App/>, document.getElementById("app"));