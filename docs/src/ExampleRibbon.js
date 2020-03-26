import React from "react";

import Ribbon from "../../src/ReactBootstrapRibbon";
import RibbonGroup from "../../src/ReactBootstrapRibbonGroup";
import RibbonGroupItem from "../../src/ReactBootstrapRibbonGroupItem";
import RibbonButton from "../../src/ReactBootstrapRibbonButton";

export const ExampleRibbon = () => (
    <Ribbon breakpoint="lg">
        <RibbonGroup title="Clipboard" colClass="col-3">
            <RibbonGroupItem colClass="col-4">
                <RibbonButton>
                    <svg className="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z" clipRule="evenodd" />
                    </svg>
                    <div>Edit</div>
                </RibbonButton>
            </RibbonGroupItem>

            <RibbonGroupItem colClass="col-4">
                <RibbonButton>
                    <svg className="bi bi-files" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 2h8a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H3z" clipRule="evenodd" />
                        <path d="M5 0h8a2 2 0 012 2v10a2 2 0 01-2 2v-1a1 1 0 001-1V2a1 1 0 00-1-1H5a1 1 0 00-1 1H3a2 2 0 012-2z" />
                    </svg>
                    <div>Copy</div>
                </RibbonButton>
            </RibbonGroupItem>

            <RibbonGroupItem colClass="col-4">
                <RibbonButton>
                    <svg className="bi bi-clipboard" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z" clipRule="evenodd" />
                    </svg>
                    <div>Paste</div>
                </RibbonButton>
            </RibbonGroupItem>
        </RibbonGroup>

        <RibbonGroup title="New" colClass="col-3">
            <RibbonGroupItem colClass="col-5">
                <RibbonButton>
                    <svg className="bi bi-folder-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M9.828 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91H9v1H2.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3h3.982a2 2 0 011.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0013.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 011-.98h3.672a1 1 0 01.707.293z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M13.5 10a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13v-1.5a.5.5 0 01.5-.5z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M13 12.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clipRule="evenodd" />
                    </svg>
                    <div>New folder</div>
                </RibbonButton>
            </RibbonGroupItem>
            <RibbonGroupItem colClass="col-7">
                <div className="row">
                    <RibbonGroupItem colClass="col-12">
                        <RibbonButton>
                            <svg className="bi bi-file-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1H4a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V8h-1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h5V1z" />
                                <path fillRule="evenodd" d="M13.5 1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V1.5a.5.5 0 01.5-.5z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M13 3.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clipRule="evenodd" />
                            </svg> New file
                    </RibbonButton>
                    </RibbonGroupItem>

                    <RibbonGroupItem colClass="col-12">
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

        <RibbonGroup title="Open" colClass="col-4">
            <RibbonGroupItem colClass="col-4">
                <RibbonButton>
                    <svg className="bi bi-card-list" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M5 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 8zm0-2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0 5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                        <circle cx="3.5" cy="5.5" r=".5" />
                        <circle cx="3.5" cy="8" r=".5" />
                        <circle cx="3.5" cy="10.5" r=".5" />
                    </svg>
                    <div>Properties</div>
                </RibbonButton>
            </RibbonGroupItem>
            <RibbonGroupItem colClass="col-8">
                <div className="row">
                    <RibbonGroupItem colClass="col-12">
                        <RibbonButton>
                            <svg className="bi bi-file-earmark" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 1h5v1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6h1v7a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2z" />
                                <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 019 4.5z" />
                            </svg> Open file
                    </RibbonButton>
                    </RibbonGroupItem>

                    <RibbonGroupItem colClass="col-12">
                        <RibbonButton>
                            <svg className="bi bi-clock-history" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8.515 1.019A7 7 0 008 1V0a8 8 0 01.589.022l-.074.997zm2.004.45a7.003 7.003 0 00-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 00-.439-.27l.493-.87a8.025 8.025 0 01.979.654l-.615.789a6.996 6.996 0 00-.418-.302zm1.834 1.79a6.99 6.99 0 00-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 00-.214-.468l.893-.45a7.976 7.976 0 01.45 1.088l-.95.313a7.023 7.023 0 00-.179-.483zm.53 2.507a6.991 6.991 0 00-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 01-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 01-.401.432l-.707-.707z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M8 1a7 7 0 104.95 11.95l.707.707A8.001 8.001 0 118 0v1z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M7.5 3a.5.5 0 01.5.5v5.21l3.248 1.856a.5.5 0 01-.496.868l-3.5-2A.5.5 0 017 9V3.5a.5.5 0 01.5-.5z" clipRule="evenodd" />
                            </svg> History
                    </RibbonButton>
                    </RibbonGroupItem>
                </div>
            </RibbonGroupItem>
        </RibbonGroup>

        <RibbonGroup title="Select" colClass="col-2">
            <RibbonGroupItem colClass="col-12">
                <div className="row">
                    <RibbonGroupItem colClass="col-12">
                        <RibbonButton>
                            <svg className="bi bi-grid-3x3-gap" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="#000" d="M1.5 2a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V2zm5 0a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V2zm5 0a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V2zm-10 5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V7zm5 0a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V7zm5 0a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V7zm-10 5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-2zm5 0a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5v-2zm5 0a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2z" />
                            </svg> Select all
                    </RibbonButton>
                    </RibbonGroupItem>

                    <RibbonGroupItem colClass="col-12">
                        <RibbonButton>
                            <svg className="bi bi-grid-3x3-gap" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="#000" d="M1.5 2a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V2zm5 0a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V2zm5 0a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V2zm-10 5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V7zm5 0a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V7zm5 0a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V7zm-10 5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-2zm5 0a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5v-2zm5 0a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2z" />
                            </svg> Toggle selection
                    </RibbonButton>
                    </RibbonGroupItem>
                </div>
            </RibbonGroupItem>
        </RibbonGroup>
    </Ribbon>
);