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
                            id: 'Text2',
                            type: 'text',
                            rect: ['50px', '90px', '572px', '312px', 'auto', 'auto'],
                            text: "Verify ultrasound Settings: Look in the upper left-hand side of the ultrasound monitor.  Check the preset, probe and depth settings:<br><br>The ultrasound will freeze after a period of inactivity.  <br><br>Verify that the ultrasound system is not frozen. <br><br>If the Freeze button is bright and green the ultrasound is frozen. Press Freeze once to unfreeze the button will be amber colored.<br>",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [18, "px"], "rgba(39,39,39,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['50px', '20px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Set Up",
                            align: "right",
                            font: ['Lucida Console, Monaco, monospace', [40, "px"], "rgba(51,172,177,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'halfImage',
                            symbolName: 'halfImage',
                            type: 'rect',
                            rect: ['709', '0', '711', '710', 'auto', 'auto']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['30px', '402px', '270px', '276px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['220px', '20px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Ultrasound Machine",
                            align: "right",
                            font: ['Lucida Console, Monaco, monospace', [40, "px"], "rgba(39,39,39,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['42px', '520px', '253px', '84px', 'auto', 'auto'],
                            text: "freeze button<br>ON",
                            align: "center",
                            font: ['\'Lucida Console\', Monaco, monospace', [18, "px"], "rgba(39,39,39,1.00)", "400", "none solid rgb(51, 172, 177)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Rectangle2Copy2',
                            type: 'rect',
                            rect: ['376px', '402px', '270px', '276px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'Text8Copy2',
                            type: 'text',
                            rect: ['388px', '520px', '253px', '84px', 'auto', 'auto'],
                            text: "freeze button<br>OFF",
                            align: "center",
                            font: ['\'Lucida Console\', Monaco, monospace', [18, "px"], "rgba(39,39,39,1.00)", "400", "none solid rgb(51, 172, 177)", "normal", "break-word", ""]
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
                            rect: ['0px', '0px', '711px', '710px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['286px', '322', 'auto', 'auto', 'auto', 'auto'],
                            font: ['\'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif', [18, 'px'], 'rgba(39,39,39,1.00)', '800', 'none solid rgb(51, 172, 177)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text4',
                            text: 'ultrasound machine with system<br>presents shown',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '711px', '710px']
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
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['17px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Lucida Console, Monaco, monospace', [16, 'px'], 'rgba(39,39,39,1.00)', '500', 'none solid rgb(51, 172, 177)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text5',
                            text: 'REVIEW<br>CONCEPTS &amp; PROCEDURES',
                            align: 'center',
                            type: 'text'
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
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['65px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['\'Lucida Console\', Monaco, monospace', [16, 'px'], 'rgba(39,39,39,1)', '500', 'none solid rgb(39, 39, 39)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text6',
                            text: 'GO TO SET UP',
                            align: 'center',
                            type: 'text'
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("2321_setup_edgeActions.js");
})("comfortEdge");
