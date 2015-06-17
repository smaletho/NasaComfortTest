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
                            rect: ['34px', '90px', '363px', '577px', 'auto', 'auto'],
                            text: "Bladder<br><br>The urinary bladder is a stretchable sac with a shape that can be variable.  Without a lot of urine it can be rather flat as urine accumulates it can be a trigonal to a teardrop shaped sac.<br><br>In the horizontal view (Reference marker to the patients right) the section tends to be almost square.<br><br>In the vertical orientation (reference marker up toward the patients head) the shape can be tear drop or linear depending on the volume in the sac.<br>",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [18, "px"], "rgba(39,39,39,1.00)", "300", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Rectangle2Copy2',
                            type: 'rect',
                            rect: ['425px', '164px', '307px', '377px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy8',
                            type: 'rect',
                            rect: ['1079px', '407px', '296px', '196px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy7',
                            type: 'rect',
                            rect: ['780px', '407px', '296px', '196px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['444px', '307px', '274px', '84px', 'auto', 'auto'],
                            text: "FPO<br>diagram of bladder <br>possibly a 3D graphic",
                            align: "center",
                            font: ['\'Lucida Console\', Monaco, monospace', [18, "px"], "rgba(39,39,39,1.00)", "400", "none solid rgb(51, 172, 177)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Rectangle2Copy6',
                            type: 'rect',
                            rect: ['1079px', '120px', '296px', '196px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'Rectangle2Copy3',
                            type: 'rect',
                            rect: ['780px', '120px', '296px', '196px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'Text8Copy2',
                            type: 'text',
                            rect: ['830px', '443px', '199px', '139px', 'auto', 'auto'],
                            text: "probe position <br>verticle<br>",
                            align: "center",
                            font: ['\'Lucida Console\', Monaco, monospace', [18, "px"], "rgba(39,39,39,1.00)", "300", "none solid rgb(51, 172, 177)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text8Copy4',
                            type: 'text',
                            rect: ['1122px', '443px', '199px', '139px', 'auto', 'auto'],
                            text: "ultrasound image<br>verticle",
                            align: "center",
                            font: ['\'Lucida Console\', Monaco, monospace', [18, "px"], "rgba(39,39,39,1.00)", "300", "none solid rgb(51, 172, 177)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text8Copy',
                            type: 'text',
                            rect: ['824px', '150px', '211px', '139px', 'auto', 'auto'],
                            text: "prob position horizontal<br>",
                            align: "center",
                            font: ['\'Lucida Console\', Monaco, monospace', [18, "px"], "rgba(39,39,39,1.00)", "300", "none solid rgb(51, 172, 177)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text8Copy3',
                            type: 'text',
                            rect: ['1131px', '150px', '211px', '139px', 'auto', 'auto'],
                            text: "ultrasound image<br>horizontal<br>",
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
                            "eid97",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            '120px',
                            '120px'
                        ],
                        [
                            "eid94",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy8}",
                            '296px',
                            '296px'
                        ],
                        [
                            "eid102",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy7}",
                            '780px',
                            '780px'
                        ],
                        [
                            "eid88",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy7}",
                            '196px',
                            '196px'
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
                            "eid90",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy7}",
                            '296px',
                            '296px'
                        ],
                        [
                            "eid74",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            '296px',
                            '296px'
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
                            "eid95",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy7}",
                            '407px',
                            '407px'
                        ],
                        [
                            "eid98",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            '120px',
                            '120px'
                        ],
                        [
                            "eid101",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            '425px',
                            '425px'
                        ],
                        [
                            "eid78",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            '196px',
                            '196px'
                        ],
                        [
                            "eid75",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            '196px',
                            '196px'
                        ],
                        [
                            "eid85",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            '164px',
                            '164px'
                        ],
                        [
                            "eid83",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            '307px',
                            '307px'
                        ],
                        [
                            "eid103",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            '780px',
                            '780px'
                        ],
                        [
                            "eid109",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            '1079px',
                            '1079px'
                        ],
                        [
                            "eid96",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy8}",
                            '407px',
                            '407px'
                        ],
                        [
                            "eid92",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy8}",
                            '196px',
                            '196px'
                        ],
                        [
                            "eid108",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy8}",
                            '1079px',
                            '1079px'
                        ],
                        [
                            "eid80",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            '296px',
                            '296px'
                        ],
                        [
                            "eid54",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            '377px',
                            '377px'
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
                            rect: ['0px', '0px', '711px', '710px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
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
                            rect: ['0px', '0px', '800px', '598px', 'auto', 'auto'],
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['274', '240', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text7',
                            text: 'Video Place Holder<br>800x510',
                            align: 'right',
                            font: ['\'Lucida Console\', Monaco, monospace', [40, 'px'], 'rgba(51,172,177,1)', '400', 'none solid rgb(51, 172, 177)', 'normal', 'break-word', 'nowrap']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("2223_foundation_edgeActions.js");
})("comfortEdge");
