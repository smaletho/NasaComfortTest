/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['445px', '20px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Objective",
                            align: "right",
                            font: ['Lucida Console, Monaco, monospace', [40, "px"], "rgba(51,172,177,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['90px', '90px', '572px', '303px', 'auto', 'auto'],
                            text: "Setting:<br><br>• Crewmember has medical complaints and ultrasound images of kidneys and urinary bladder are necessary. Renal stone with blockage or urine flow is suspected.  <br><br>• Acquire the ultrasound images of the right and left kidneys and two views of the urinary bladder.<br><br>• Task will take up to 30 minutes.<br>",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [18, "px"], "rgba(39,39,39,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['89px', '424px', '589px', '149px', 'auto', 'auto'],
                            text: "Would you like to review the concepts and details of the procedure (foundations tab) or go straight to set-up and step by step exam procedure?",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [22, "px"], "rgba(51,172,177,1.00)", "800", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'reviewBTN',
                            symbolName: 'reviewBTN',
                            type: 'rect',
                            rect: ['234px', '559px', '250', '40', 'auto', 'auto']
                        },
                        {
                            id: 'halfImage',
                            symbolName: 'halfImage',
                            type: 'rect',
                            rect: ['709', '0', '711', '710', 'auto', 'auto']
                        },
                        {
                            id: 'setUpBTN',
                            symbolName: 'setUpBTN',
                            type: 'rect',
                            rect: ['234px', '627px', '250', '40', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1418px', '710px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid4",
                            "top",
                            0,
                            0,
                            "linear",
                            "${setUpBTN}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            0,
                            "linear",
                            "${reviewBTN}",
                            '559px',
                            '559px'
                        ],
                        [
                            "eid3",
                            "left",
                            0,
                            0,
                            "linear",
                            "${setUpBTN}",
                            '234px',
                            '234px'
                        ],
                        [
                            "eid1",
                            "left",
                            0,
                            0,
                            "linear",
                            "${reviewBTN}",
                            '234px',
                            '234px'
                        ]
                    ]
                }
            },
            "halfImage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '711px', '710px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'text',
                            rect: ['286px', '322', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text4',
                            text: 'place holder image',
                            align: 'left',
                            font: ['\'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif', [18, 'px'], 'rgba(51,172,177,1)', '800', 'none solid rgb(51, 172, 177)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '711px', '710px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "reviewBTN": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            rect: ['0px', '0px', '250px', '40px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)'],
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            type: 'text',
                            rect: ['17px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text5',
                            text: 'REVIEW<br>CONCEPTS &amp; PROCEDURES',
                            align: 'center',
                            font: ['Lucida Console, Monaco, monospace', [16, 'px'], 'rgba(39,39,39,1.00)', '500', 'none solid rgb(51, 172, 177)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '250px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "setUpBTN": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            rect: ['0px', '0px', '250px', '40px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)'],
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            type: 'text',
                            rect: ['65px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text6',
                            text: 'GO TO SET UP',
                            align: 'center',
                            font: ['\'Lucida Console\', Monaco, monospace', [16, 'px'], 'rgba(39,39,39,1)', '500', 'none solid rgb(39, 39, 39)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '250px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("2111_objective_edgeActions.js");
})("comfortEdge");
