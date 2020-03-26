# React Bootstrap Ribbon

Get a Microsoft inspired Ribbon menu for your React app. It uses Bootstrap 4 components.\
[Find React Bootstrap Ribbon on NPM.](https://www.npmjs.com/package/react-bootstrap-ribbon)

[![npm version](https://img.shields.io/npm/v/react-bootstrap-ribbon.svg)](https://www.npmjs.com/package/react-bootstrap-ribbon)

<h2>Desktop preview</h2>
<img src="https://raw.githubusercontent.com/lgkonline/react-bootstrap-ribbon/master/preview_desktop.png" style="max-width:100vw" alt="Ribbon menu on desktop"/>

<h2>Mobile preview</h2>
<img src="https://raw.githubusercontent.com/lgkonline/react-bootstrap-ribbon/master/preview_mobile.png" width="350" alt="Ribbon menu on mobile" style="float:right"/>

<h2>Installation</h2>

<p>
Add it with NPM:<br>
<code>npm i -S react-bootstrap-ribbon</code>
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

```javascript
import React, { Component } from "react";
import { Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton } from "react-bootstrap-ribbon";

// In this example Bootsrap is installed via NPM. Here it gets imported from the "./node_modules" folder:
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-ribbon/dist/react-bootstrap-ribbon.css";

class App extends Component {
    render() {
        return (
            <div className="container">
                {/* 
                    `breakpoint` prop is optional and defines when to switch between mobile and desktop view. 
                    Possible values: "sm", "md", "lg", "xl", default: "md"
                    `height` is also optional. Default is "8rem".
                */}
                <Ribbon breakpoint="lg" height="8rem">
                    <RibbonGroup title="Clipboard" colClass="col-3">
                        <RibbonGroupItem colClass="col-4" onClick={() => alert("Hello from Ribbon button!")}>
                            <RibbonButton>
                                ✏️
                                <div>Edit</div>
                            </RibbonButton>
                        </RibbonGroupItem>

                        {/* more Ribbon group items */}
                    </RibbonGroup>

                    {/* more Ribbon groups */}
                </Ribbon>
            </div>
        );
    }
}

export default App;
```

<h2>Run an example</h2>
Clone this repo on your PC. After that install all dependencies with <code>npm i</code>.<br>
Then run <code>npm start</code> and you should see the example in your browser. You can see the code under <code>./docs/src/index.js</code>.
