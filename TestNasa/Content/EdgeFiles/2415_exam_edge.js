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
                            rect: ['588px', '0', '711', '710', 'auto', 'auto'],
                            transform: [[],[],[],['1.33333']]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['484px', '20px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Right Kidney",
                            align: "right",
                            font: ['Lucida Console, Monaco, monospace', [40, "px"], "rgba(39,39,39,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Rectangle2Copy6',
                            type: 'rect',
                            rect: ['968px', '400px', '396px', '251px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy2',
                            type: 'rect',
                            rect: ['525px', '256px', '396px', '251px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['116px', '20px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Exam Procedure",
                            align: "right",
                            font: ['Lucida Console, Monaco, monospace', [40, "px"], "rgba(51,172,177,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['34px', '90px', '430px', '656px', 'auto', 'auto'],
                            text: "STEP 4<br><br>Once you feel you have the Longest and Widest right Kidney with BOTH poles in view maintain your probe position, stabilize, patient can be asked to maintain breath and steady your hand over this view and press Acquire once. You will hear an audible beep.<br><br>Acquire two more cine-loop images from the right kidney. You will hear an audible beep each time.<br><br>Stop scanning and temporarily store the probe back on the ultrasound system",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [16, "px"], "rgba(39,39,39,1.00)", "300", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['967px', '116px', '398px', '251px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
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
                            "eid190",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '398px',
                            '398px'
                        ],
                        [
                            "eid186",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '251px',
                            '251px'
                        ],
                        [
                            "eid18",
                            "left",
                            0,
                            0,
                            "linear",
                            "${halfImage}",
                            '588px',
                            '588px'
                        ],
                        [
                            "eid192",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '116px',
                            '116px'
                        ],
                        [
                            "eid17",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${halfImage}",
                            '1.33333',
                            '1.33333'
                        ],
                        [
                            "eid185",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid156",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            '251px',
                            '251px'
                        ],
                        [
                            "eid193",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            '256px',
                            '256px'
                        ],
                        [
                            "eid155",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            '396px',
                            '396px'
                        ],
                        [
                            "eid194",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            '525px',
                            '525px'
                        ],
                        [
                            "eid184",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            '968px',
                            '968px'
                        ],
                        [
                            "eid168",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            '396px',
                            '396px'
                        ],
                        [
                            "eid191",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '967px',
                            '967px'
                        ],
                        [
                            "eid165",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            '251px',
                            '251px'
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
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['0px', '0px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
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
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['0px', '0px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            type: 'rect',
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,1)']
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
                            rect: ['274', '240', 'auto', 'auto', 'auto', 'auto'],
                            font: ['\'Lucida Console\', Monaco, monospace', [40, 'px'], 'rgba(51,172,177,1)', '400', 'none solid rgb(51, 172, 177)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text7',
                            text: 'Video Place Holder<br>800x510',
                            align: 'right',
                            type: 'text'
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("2415_exam_edgeActions.js");
})("comfortEdge");
