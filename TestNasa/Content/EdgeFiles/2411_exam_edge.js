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
                            rect: ['544px', '70px', '796px', '506px', 'auto', 'auto'],
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
                            rect: ['34px', '90px', '363px', '124px', 'auto', 'auto'],
                            text: "Demonstration of the right kidney for first position through image acquisition.",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [18, "px"], "rgba(39,39,39,1.00)", "300", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['76px', '214px', '297px', '207px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'Text8Copy3',
                            type: 'text',
                            rect: ['121px', '278px', '211px', '139px', 'auto', 'auto'],
                            text: "still image<br>right kidney<br>horizontal",
                            align: "center",
                            font: ['\'Lucida Console\', Monaco, monospace', [18, "px"], "rgba(39,39,39,1.00)", "300", "none solid rgb(51, 172, 177)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text8Copy',
                            type: 'text',
                            rect: ['851px', '255px', '211px', '139px', 'auto', 'auto'],
                            text: "video of right kidney",
                            align: "center",
                            font: ['\'Lucida Console\', Monaco, monospace', [18, "px"], "rgba(39,39,39,1.00)", "300", "none solid rgb(51, 172, 177)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['121px', '527px', '211px', '139px', 'auto', 'auto'],
                            text: "still image<br>right kidney<br>verticle",
                            align: "center",
                            font: ['\'Lucida Console\', Monaco, monospace', [18, "px"], "rgba(39,39,39,1.00)", "300", "none solid rgb(51, 172, 177)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Rectangle2Copy',
                            type: 'rect',
                            rect: ['76px', '468px', '297px', '207px', 'auto', 'auto'],
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
                            "eid140",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '214px',
                            '214px'
                        ],
                        [
                            "eid141",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '76px',
                            '76px'
                        ],
                        [
                            "eid145",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '297px',
                            '297px'
                        ],
                        [
                            "eid118",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            '70px',
                            '70px'
                        ],
                        [
                            "eid143",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '207px',
                            '207px'
                        ],
                        [
                            "eid131",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            '506px',
                            '506px'
                        ],
                        [
                            "eid144",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '76px',
                            '76px'
                        ],
                        [
                            "eid138",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '207px',
                            '207px'
                        ],
                        [
                            "eid146",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '468px',
                            '468px'
                        ],
                        [
                            "eid139",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '297px',
                            '297px'
                        ],
                        [
                            "eid115",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            '544px',
                            '544px'
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
                            "eid130",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            '796px',
                            '796px'
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("2411_exam_edgeActions.js");
})("comfortEdge");
