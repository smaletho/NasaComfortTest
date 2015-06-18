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
                            id: 'videoPH',
                            symbolName: 'videoPH',
                            type: 'rect',
                            rect: ['594', '40px', '800', '598', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.85284']]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['484px', '20px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Concepts &amp; Images",
                            align: "right",
                            font: ['Lucida Console, Monaco, monospace', [40, "px"], "rgba(39,39,39,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['219px', '20px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Foundation",
                            align: "right",
                            font: ['Lucida Console, Monaco, monospace', [40, "px"], "rgba(51,172,177,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['34px', '90px', '285px', '577px', 'auto', 'auto'],
                            text: "Right Kidney<br><br>Watch the ultrasound screen as you control the probe to observe the kidney shape on the screen.<br><br>On the right kidney initial probe placement is near right purple 2.<br><br>Orient the probe to the kidney using small rotation and sliding.  Small rotations affect the Length and width of the kidney.<br><br>The best right Kidney is Longest and Widest with BOTH poles in view<br>",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [18, "px"], "rgba(39,39,39,1.00)", "300", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Rectangle2Copy2',
                            type: 'rect',
                            rect: ['353px', '84px', '224px', '241px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['371px', '178px', 'auto', 'auto', 'auto', 'auto'],
                            text: "FPO<br>(probe placement<br>graphic)",
                            align: "center",
                            font: ['\'Lucida Console\', Monaco, monospace', [18, "px"], "rgba(39,39,39,1.00)", "400", "none solid rgb(51, 172, 177)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Rectangle2Copy',
                            type: 'rect',
                            rect: ['353px', '339px', '224px', '167px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy3',
                            type: 'rect',
                            rect: ['353px', '524px', '224px', '167px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'Text8Copy2',
                            type: 'text',
                            rect: ['366px', '361px', '199px', '139px', 'auto', 'auto'],
                            text: "FPO<br><br>Ideal longest/widest <br>ultrasound image",
                            align: "center",
                            font: ['\'Lucida Console\', Monaco, monospace', [18, "px"], "rgba(39,39,39,1.00)", "300", "none solid rgb(51, 172, 177)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text8Copy',
                            type: 'text',
                            rect: ['366px', '540px', '211px', '139px', 'auto', 'auto'],
                            text: "FPO<br><br>Ideal longest/widest <br>ultrasound image",
                            align: "center",
                            font: ['\'Lucida Console\', Monaco, monospace', [18, "px"], "rgba(39,39,39,1.00)", "300", "none solid rgb(51, 172, 177)", "normal", "break-word", ""]
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
                            "eid39",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '339px',
                            '339px'
                        ],
                        [
                            "eid47",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            '524px',
                            '524px'
                        ],
                        [
                            "eid40",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '167px',
                            '167px'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${videoPH}",
                            '0.85284',
                            '0.85284'
                        ],
                        [
                            "eid25",
                            "top",
                            0,
                            0,
                            "linear",
                            "${videoPH}",
                            '40px',
                            '40px'
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
                            "eid21",
                            "left",
                            0,
                            0,
                            "linear",
                            "${videoPH}",
                            '596px',
                            '596px'
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
                            "eid42",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '224px',
                            '224px'
                        ],
                        [
                            "eid29",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            '84px',
                            '84px'
                        ],
                        [
                            "eid46",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            '224px',
                            '224px'
                        ],
                        [
                            "eid45",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid38",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            '224px',
                            '224px'
                        ],
                        [
                            "eid43",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            '167px',
                            '167px'
                        ],
                        [
                            "eid41",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid37",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid36",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            '241px',
                            '241px'
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
                            text: 'Video Place Holder<br>800x510',
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("2221_foundation_edgeActions.js");
})("comfortEdge");
