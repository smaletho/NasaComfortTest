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
                            text: "Kidney Hydronephrosis ",
                            align: "right",
                            font: ['Lucida Console, Monaco, monospace', [40, "px"], "rgba(39,39,39,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['32px', '387px', '307px', '230px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [1,"rgba(0,0,0,1)","solid"]
                        },
                        {
                            id: 'RectangleCopy4',
                            type: 'rect',
                            rect: ['32px', '103px', '653px', '230px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [1,"rgba(0,0,0,1)","solid"]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['378px', '387px', '307px', '230px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [1,"rgba(0,0,0,1)","solid"]
                        },
                        {
                            id: 'RectangleCopy2',
                            type: 'rect',
                            rect: ['726px', '387px', '307px', '230px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [1,"rgba(0,0,0,1)","solid"]
                        },
                        {
                            id: 'RectangleCopy3',
                            type: 'rect',
                            rect: ['1076px', '387px', '307px', '230px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [1,"rgba(0,0,0,1)","solid"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['726px', '104px', '655px', '232px', 'auto', 'auto'],
                            text: "Hydronephrosis is due to a buildup of urine. When urine cannot empty the kidneys due to a blockage.  Hydronephrosis and can range from mild to moderate to severe. Obstruction due to kidney stone is a common cause of kidney outflow obstruction.  Initially an obstruction will be mild and stretch the inner kidney.  Left untreated, the distention will extent into the outer regions of the kidney causing moderate dilation and if untreated will continue to stretch and thin the cortex of the kidney.  ",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [18, "px"], "rgba(39,39,39,1.00)", "400", "none solid rgb(51, 172, 177)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['32px', '628px', '309px', '70px', 'auto', 'auto'],
                            text: "Mild hydronephrosis, central dilation no effect to the outer cortex.  The obstruction is caused by a stone; however the stone is out of view in this example.",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [12, "px"], "rgba(39,39,39,1)", "400", "none solid rgb(39, 39, 39)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text3Copy',
                            type: 'text',
                            rect: ['378px', '628px', '309px', '70px', 'auto', 'auto'],
                            text: "Moderate hydronephrosis, The dilation is central but beginning to extend to the outer cortex of the kidney.<br>There is a renal stone in the pelvis of the kidney with shadowing seen below the renal stone",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [12, "px"], "rgba(39,39,39,1)", "400", "none solid rgb(39, 39, 39)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text3Copy2',
                            type: 'text',
                            rect: ['726px', '628px', '309px', '70px', 'auto', 'auto'],
                            text: "Moderately Severe hydronephrosis dilated renal calyces and the cortex is compressed and hypoechogenic.",
                            align: "left",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [12, "px"], "rgba(39,39,39,1)", "400", "none solid rgb(39, 39, 39)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text3Copy3',
                            type: 'text',
                            rect: ['1076px', '628px', '309px', '70px', 'auto', 'auto'],
                            text: "Severe hydronephrosis dilated renal calyces and thin renal cortex",
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("2512_pathology_edgeActions.js");
})("comfortEdge");
