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
                            rect: ['0px', '0', '711', '710', 'auto', 'auto']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['484px', '20px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Probe Handling",
                            align: "right",
                            font: ['Lucida Console, Monaco, monospace', [40, "px"], "rgba(51,172,177,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['219px', '20px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Foundation",
                            align: "right",
                            font: ['Lucida Console, Monaco, monospace', [40, "px"], "rgba(39,39,39,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['90px', '90px', '355px', '400px', 'auto', 'auto'],
                            text: "The ultrasound image shows a two dimensional slice of tissue under the probe. <br><br>One edge of the probe has a “reference marker”- a raised grey stripe you can see and feel. The reference marker corresponds to the ultrasound screen indicator.<br><br>The other side of the probe is the non-marker edge.",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "300", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['31px', '491px', '256px', '191px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['59px', '545px', 'auto', 'auto', 'auto', 'auto'],
                            text: "3d image of probe on skin<br>",
                            align: "right",
                            font: ['\'Lucida Console\', Monaco, monospace', [14, "px"], "rgba(51,172,177,1)", "400", "none solid rgb(51, 172, 177)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text8Copy',
                            type: 'text',
                            rect: ['339px', '545px', '200px', '82px', 'auto', 'auto'],
                            text: "matching ultrasound <br><br>(I prefer these images to be of kidney or bladder)",
                            align: "left",
                            font: ['\'Lucida Console\', Monaco, monospace', [14, "px"], "rgba(51,172,177,1)", "400", "none solid rgb(51, 172, 177)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Rectangle2Copy',
                            type: 'rect',
                            rect: ['317px', '491px', '256px', '191px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'videoPH',
                            symbolName: 'videoPH',
                            type: 'rect',
                            rect: ['594', '84px', '800', '598', 'auto', 'auto']
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
                            "eid13",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '491px',
                            '491px'
                        ],
                        [
                            "eid12",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '491px',
                            '491px'
                        ],
                        [
                            "eid5",
                            "left",
                            0,
                            0,
                            "linear",
                            "${halfImage}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid11",
                            "top",
                            0,
                            0,
                            "linear",
                            "${videoPH}",
                            '84px',
                            '84px'
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
                            rect: ['0px', '0px', '470px', '710px', 'auto', 'auto'],
                            fill: ['rgba(51,172,177,1.00)']
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
                            rect: ['0px', '0px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            type: 'rect',
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
                            rect: ['0px', '0px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            type: 'rect',
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
            },
            "videoPH": {
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
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '800px', '598px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1.00)']
                        },
                        {
                            font: ['\'Lucida Console\', Monaco, monospace', [40, 'px'], 'rgba(51,172,177,1)', '400', 'none solid rgb(51, 172, 177)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text7',
                            text: 'Video Place Holder<br>800x600',
                            align: 'right',
                            rect: ['274', '240', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '598px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("../Content/EdgeFiles/guide_2211_edgeActions.js");
})("EDGE-8837070");
