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
                            id: 'halfImage',
                            symbolName: 'halfImage',
                            type: 'rect',
                            rect: ['709', '0', '711', '710', 'auto', 'auto']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['466px', '20px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Pathology",
                            align: "right",
                            font: ['Lucida Console, Monaco, monospace', [40, "px"], "rgba(51,172,177,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['741px', '20px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Kidney Calcifications Stones",
                            align: "right",
                            font: ['Lucida Console, Monaco, monospace', [40, "px"], "rgba(39,39,39,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['32px', '162px', '394px', '295px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [1,"rgba(0,0,0,1)","solid"]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['509px', '162px', '394px', '295px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [1,"rgba(0,0,0,1)","solid"]
                        },
                        {
                            id: 'RectangleCopy2',
                            type: 'rect',
                            rect: ['986px', '162px', '394px', '295px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [1,"rgba(0,0,0,1)","solid"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['32px', '468px', '309px', '70px', 'auto', 'auto'],
                            text: "Small renal calcification in renal parenchyma ",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [12, "px"], "rgba(39,39,39,1)", "400", "none solid rgb(39, 39, 39)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text3Copy',
                            type: 'text',
                            rect: ['509px', '468px', '309px', '70px', 'auto', 'auto'],
                            text: "Renal Stone in the pelvis of the kidney",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [12, "px"], "rgba(39,39,39,1)", "400", "none solid rgb(39, 39, 39)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text3Copy2',
                            type: 'text',
                            rect: ['986px', '468px', '309px', '70px', 'auto', 'auto'],
                            text: "Severe renal stone calcifications in calyces with shadowing from the calcifications.",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [12, "px"], "rgba(39,39,39,1)", "400", "none solid rgb(39, 39, 39)", "normal", "break-word", "normal"]
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
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '711px', '710px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
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
                            fill: ['rgba(192,192,192,1)'],
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            rect: ['0px', '0px', '250px', '40px', 'auto', 'auto'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            font: ['Lucida Console, Monaco, monospace', [16, 'px'], 'rgba(39,39,39,1.00)', '500', 'none solid rgb(51, 172, 177)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text5',
                            text: 'REVIEW<br>CONCEPTS &amp; PROCEDURES',
                            align: 'center',
                            rect: ['17px', '5px', 'auto', 'auto', 'auto', 'auto']
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
                            fill: ['rgba(192,192,192,1)'],
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            rect: ['0px', '0px', '250px', '40px', 'auto', 'auto'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            font: ['\'Lucida Console\', Monaco, monospace', [16, 'px'], 'rgba(39,39,39,1)', '500', 'none solid rgb(39, 39, 39)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text6',
                            text: 'GO TO SET UP',
                            align: 'center',
                            rect: ['65px', '12px', 'auto', 'auto', 'auto', 'auto']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("2513_pathology_edgeActions.js");
})("comfortEdge");
