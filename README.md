<h1>React Bootstrap Ribbon</h1>

Get a Microsoft inspired Ribbon menu for your React app. It uses Bootstrap controls.

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
                                        <span className="glyphicon glyphicon-pushpin"/>
                                    </div>
                                    <div>Pin</div>
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
