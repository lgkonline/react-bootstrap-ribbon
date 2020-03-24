<h1>React Bootstrap Ribbon (1.x.x)</h1>

Get a Microsoft inspired Ribbon menu for your React app. It uses Bootstrap controls.<br>
<a href="https://www.npmjs.com/package/react-bootstrap-ribbon">Find React Bootstrap Ribbon on NPM.</a>

<h2>Desktop preview</h2>
<img src="https://raw.githubusercontent.com/lgkonline/react-bootstrap-ribbon/master/preview_desktop.jpg" style="max-width:100vw" alt="Ribbon menu on desktop"/>

<h2>Mobile preview</h2>
<img src="https://raw.githubusercontent.com/lgkonline/react-bootstrap-ribbon/master/preview_mobile.jpg" width="350" alt="Ribbon menu on mobile" style="float:right"/>

<h2>Installation</h2>

<p>
Add it with NPM:<br>
<code>npm i -D react-bootstrap-ribbon</code>
</p>

<p>
After that you can import the components:<br>
<code>import {Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton} from "react-bootstrap-ribbon";</code>
</p>

<p>
Make sure you also embed the CSS:<br>
<code>import "react-bootstrap-ribbon/dist/react-bootstrap-ribbon.css";</code>
</p>


<h2>Usage</h2>

Your code could look like this:

```
import React, { Component } from 'react';
import {Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton} from "react-bootstrap-ribbon";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-ribbon/dist/react-bootstrap-ribbon.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <h1 className="page-header">Hello World</h1>

                    <Ribbon>
                        <RibbonGroup title="Clipboard" colClass="col-xs-3">
                            <RibbonGroupItem colClass="col-xs-4">
                                <RibbonButton>
                                    <div className="ribbon-icon">
                                        <svg className="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>Edit</div>
                                </RibbonButton>
                            </RibbonGroupItem>

                            <RibbonGroupItem colClass="col-xs-4">
                                <RibbonButton>
                                    <div className="ribbon-icon">
                                        <svg className="bi bi-files" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M3 2h8a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H3z" clipRule="evenodd" />
                                            <path d="M5 0h8a2 2 0 012 2v10a2 2 0 01-2 2v-1a1 1 0 001-1V2a1 1 0 00-1-1H5a1 1 0 00-1 1H3a2 2 0 012-2z" />
                                        </svg>
                                    </div>
                                    <div>Copy</div>
                                </RibbonButton>
                            </RibbonGroupItem>

                            <RibbonGroupItem colClass="col-xs-4">
                                <RibbonButton>
                                    <div className="ribbon-icon">
                                        <svg className="bi bi-clipboard" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>Paste</div>
                                </RibbonButton>
                            </RibbonGroupItem>
                        </RibbonGroup>

                        <RibbonGroup title="New" colClass="col-xs-3">
                            <RibbonGroupItem colClass="col-xs-4">
                                <RibbonButton>
                                    <div className="ribbon-icon">
                                        <svg className="bi bi-folder-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M9.828 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91H9v1H2.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3h3.982a2 2 0 011.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0013.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 011-.98h3.672a1 1 0 01.707.293z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M13.5 10a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13v-1.5a.5.5 0 01.5-.5z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M13 12.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>New folder</div>
                                </RibbonButton>
                            </RibbonGroupItem>
                            <RibbonGroupItem colClass="col-xs-8">
                                <div className="row row-2px">
                                    <RibbonGroupItem colClass="col-xs-12">
                                        <RibbonButton>
                                            <svg className="bi bi-file-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 1H4a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V8h-1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h5V1z" />
                                                <path fillRule="evenodd" d="M13.5 1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V1.5a.5.5 0 01.5-.5z" clipRule="evenodd" />
                                                <path fillRule="evenodd" d="M13 3.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clipRule="evenodd" />
                                            </svg> New file
                                </RibbonButton>
                                    </RibbonGroupItem>

                                    <RibbonGroupItem colClass="col-xs-12">
                                        <RibbonButton>
                                            <svg className="bi bi-inbox" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M3.81 4.063A1.5 1.5 0 014.98 3.5h6.04a1.5 1.5 0 011.17.563l3.7 4.625a.5.5 0 01-.78.624l-3.7-4.624a.5.5 0 00-.39-.188H4.98a.5.5 0 00-.39.188L.89 9.312a.5.5 0 11-.78-.624l3.7-4.625z" clipRule="evenodd" />
                                                <path fillRule="evenodd" d="M.125 8.67A.5.5 0 01.5 8.5H6a.5.5 0 01.5.5 1.5 1.5 0 003 0 .5.5 0 01.5-.5h5.5a.5.5 0 01.496.562l-.39 3.124a1.5 1.5 0 01-1.489 1.314H1.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.121-.393zm.941.83l.32 2.562a.5.5 0 00.497.438h12.234a.5.5 0 00.496-.438l.32-2.562H10.45a2.5 2.5 0 01-4.9 0H1.066z" clipRule="evenodd" />
                                            </svg> Easy access
                                </RibbonButton>
                                    </RibbonGroupItem>
                                </div>
                            </RibbonGroupItem>
                        </RibbonGroup>
                    </Ribbon>
                </div>
            </div>
        );
    }
}

export default App;
```

<h2>Run an example</h2>
Clone this repo on your PC. After that install all dependencies with <code>npm i</code>.<br>
Then run <code>npm start</code> and you should see the example in your browser. You can see the code under <code>./src/client/app/index.jsx</code>.
