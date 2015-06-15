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
                            id: 'Rectangle2Copy4',
                            type: 'rect',
                            rect: ['733px', '287px', '196px', '196px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(51,172,177,1.00)","solid"]
                        },
                        {
                            id: 'Rectangle3Copy2',
                            type: 'rect',
                            rect: ['533px', '510px', '396px', '196px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [2,"rgb(51, 172, 177)","solid"]
                        },
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
                            rect: ['69px', '220px', '336px', '290px', 'auto', 'auto'],
                            text: "In a long axis view, the reference  marker should always point upward then orient the beam to the length of the organ. <br><br>In Short axis or transverse, the transducer marker should point to the patients’ right and orient to the widest region of that organ.",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2Copy2',
                            type: 'text',
                            rect: ['50px', '90px', '355px', '170px', 'auto', 'auto'],
                            text: "Correct probe orientation will ensure that the image is not reversed on the screen.<br>",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [22, "px"], "rgba(39,39,39,1.00)", "400", "none", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2Copy',
                            type: 'text',
                            rect: ['1030px', '90px', '355px', '400px', 'auto', 'auto'],
                            text: "Ultrasound requires gel as an acoustic conductor between the probe and the skin.  <br><br>If there is not enough gel, part of the image will be lost (black or artifactual).<br><br>Hold the probe like a pencil while keeping part of the hand on the patient for stability, similar to a tripod.  <br><br>The probe requires consistent firm pressure to maintain contact with the body. This allows probe contact on the body even while tilting or panning. If your hand gets tired switch hands or use both hands.<br>",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "300", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'halfImage2',
                            symbolName: 'halfImage',
                            type: 'rect',
                            rect: ['949px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['485px', '287px', '196px', '196px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1.00)"],
                            stroke: [2,"rgba(51,172,177,1.00)","solid"]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['496px', '316px', '178px', '149px', 'auto', 'auto'],
                            text: "Ultrasound image without a proper amount of conductive gel.  Show the black under the probe contact.",
                            align: "left",
                            font: ['\'Lucida Console\', Monaco, monospace', [14, "px"], "rgba(51,172,177,1)", "400", "none solid rgb(51, 172, 177)", "normal", "break-word", ""],
                            textStyle: ["", "", "20px", ""]
                        },
                        {
                            id: 'Text8Copy2',
                            type: 'text',
                            rect: ['609px', '160px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Probe diagram <br>pointing out marker <br>face<br>gray ridge",
                            align: "left",
                            font: ['\'Lucida Console\', Monaco, monospace', [14, "px"], "rgba(51,172,177,1)", "400", "none solid rgb(51, 172, 177)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "20px", ""]
                        },
                        {
                            id: 'Text8Copy3',
                            type: 'text',
                            rect: ['617px', '572px', 'auto', 'auto', 'auto', 'auto'],
                            text: "holding probe like a pencil<br>",
                            align: "right",
                            font: ['\'Lucida Console\', Monaco, monospace', [14, "px"], "rgba(51,172,177,1)", "400", "none solid rgb(51, 172, 177)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text8Copy',
                            type: 'text',
                            rect: ['746px', '314px', '148px', '151px', 'auto', 'auto'],
                            text: "Ultrasound image without a proper amount of conductive gel.  Show the black under the probe contact.",
                            align: "left",
                            font: ['\'Lucida Console\', Monaco, monospace', [14, "px"], "rgba(51,172,177,1)", "400", "none solid rgb(51, 172, 177)", "normal", "break-word", ""],
                            textStyle: ["", "", "20px", ""]
                        },
                        {
                            id: 'Rectangle3Copy',
                            type: 'rect',
                            rect: ['485px', '68px', '396px', '196px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [2,"rgb(51, 172, 177)","solid"]
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
                            "eid84",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            '178px',
                            '178px'
                        ],
                        [
                            "eid75",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '485px',
                            '485px'
                        ],
                        [
                            "eid15",
                            "top",
                            0,
                            0,
                            "linear",
                            "${halfImage2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid85",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            '496px',
                            '496px'
                        ],
                        [
                            "eid68",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text8Copy3}",
                            '617px',
                            '617px'
                        ],
                        [
                            "eid72",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${Text8Copy2}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid24",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(51,172,177,1.00)',
                            'rgba(51,172,177,1.00)'
                        ],
                        [
                            "eid81",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            '196px',
                            '196px'
                        ],
                        [
                            "eid91",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Text8Copy}",
                            '151px',
                            '151px'
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
                            "eid71",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${Text8Copy}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid79",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(51,172,177,1.00)',
                            'rgba(51,172,177,1.00)'
                        ],
                        [
                            "eid76",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '287px',
                            '287px'
                        ],
                        [
                            "eid90",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text8Copy}",
                            '314px',
                            '314px'
                        ],
                        [
                            "eid88",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Text8Copy}",
                            '148px',
                            '148px'
                        ],
                        [
                            "eid82",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            '733px',
                            '733px'
                        ],
                        [
                            "eid64",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text8Copy2}",
                            '160px',
                            '160px'
                        ],
                        [
                            "eid89",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text8Copy}",
                            '746px',
                            '746px'
                        ],
                        [
                            "eid87",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            '149px',
                            '149px'
                        ],
                        [
                            "eid86",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            '316px',
                            '316px'
                        ],
                        [
                            "eid78",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            '196px',
                            '196px'
                        ],
                        [
                            "eid73",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '196px',
                            '196px'
                        ],
                        [
                            "eid74",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '196px',
                            '196px'
                        ],
                        [
                            "eid63",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text8Copy2}",
                            '609px',
                            '609px'
                        ],
                        [
                            "eid70",
                            "line-height",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid77",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            '287px',
                            '287px'
                        ],
                        [
                            "eid67",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text8Copy3}",
                            '572px',
                            '572px'
                        ],
                        [
                            "eid14",
                            "left",
                            0,
                            0,
                            "linear",
                            "${halfImage2}",
                            '949px',
                            '949px'
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("../Content/EdgeFiles/guide_2111_edgeActions.js");
})("EDGE-8837070");
