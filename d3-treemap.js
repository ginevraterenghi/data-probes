// D3.js Hierarchical Treemap for PhD Thesis
// With nested structure and custom layout

// Sections that should have dotted strokes
const DOTTED_SECTIONS = [
    "Women's involvement", "Recurrence", "Resistance",
    "Gender bias", "Situated knowledge",
    "Biosemiotics", "Indexes",
    "Recognising traces", "Enabling interpretation", "Autographic",
    "Analytical/artistic", "Historical/contemporary",
    "Boundary objects",
    "Shared subjectivity", "Data as capta",
    "Data-bodies", "Undefined",
    "QS practices", "Limitations",
    "Competences", "Persona data", "Creative approaches",
    "Challenges",
    "PAR",
    "Participatory DP", "Data collection", "Representation", "Interpretation",
    "Step-by-step",
    "Ice-breaking", "Symptom labels", "Data-probes kit", "Variable labels", "Tablecloth",
    "[A]", "[B]", "[C]", "[D]", "[E]", "[F]", "[G]", "[H]",
    "Thematic", "Compositional",
    "(A) Content", "(B) Methodology",
    "Protocol", "Materials", "Labels", "Limitations", "Facilitation",
    "Clarity", "Signs vs symptoms", "Reordering", "Expert role",
    "Hygiene", "Food role", "Medicines",
    "Agency", "Descriptions", "Anticipation",
    "Uncertainty", "Blood confirmation", "Too busy", "Intersections",
    "Availability", "Not talking", "Alternatives",
    "Inefficacy", "Side-effects?", "Probiotics", "Relief",
    "Emerging", "Existing", "Strategies", "Overlaps",
    "Selection", "Gesture", "Secondary perceptions", "Plugs", "Missing materials", "Missing features", "Cohesion", "Revealing missing",
    "Structure", "Metaphors", "Attitude", "Naming", "Describing",
    "Common condition", "Experts", "Misalignments", "Useful?",
    "Misunderstandings", "Variability", "Vocabulary gap",
    "Anxiety/fear", "Literacy journey", "Empowerment",
    "Materials as tools", "Metaphors", "Collective",
    "Interpretation", "Applicability", "Representativeness", "Value",
    // Chapter 7 sections
    "Structuring", "Collective knowledge",
    "What is symptom", "Final list",
    "2. Expansion", "3. Selection", "4. Interpretation", "5. Exploration", "6. Refinement", "7. Association", "8. Translation", "9. Presentation",
    "1. Contrast", "2. Modularity", "3. Gesture", "4. Scope", "5. Coherence", "6. Sustainability"
];

const CHAPTER_DATA = {
    name: "PhD Thesis",
    children: [
        {
            name: "1. Intro",
            color: "#239871",
            chapterId: "chapter-1",
            order: 1,
            children: [
                {
                    name: "1.1 Aims",
                    value: 108, // Reduced to align with 2.1
                    sectionId: "sec-research-aims"
                },
                {
                    name: "1.2 Context",
                    value: 108, // Reduced to align with 2.1
                    sectionId: "sec-context"
                },
                {
                    name: "1.3 Topic",
                    value: 216,
                    sectionId: "sec-topic"
                },
                {
                    name: "1.4 RQ",
                    value: 117,
                    sectionId: "sec-research-questions",
                    children: [
                        {
                            name: "RQ1",
                            value: 163,
                            fullName: "RQ1. How can participatory design practices expand healthcare enquiry?",
                            sectionId: "sec-rq1"
                        },
                        {
                            name: "RQ2",
                            value: 161,
                            fullName: "RQ2. How can material engagement support interpretation?",
                            sectionId: "sec-rq2"
                        },
                        {
                            name: "RQ3",
                            value: 238,
                            fullName: "RQ3. How can physical variables transform individual interpretations?",
                            sectionId: "sec-rq3"
                        }
                    ]
                },
                {
                    name: "1.5 Results",
                    value: 59,
                    sectionId: "sec-outputs-outcomes",
                    children: [
                        {
                            name: "1.5.1 Outputs",
                            value: 250,
                            fullName: "1.5.1 Outputs. Practical and tangible deliverables",
                            sectionId: "sec-151-outputs"
                        },
                        {
                            name: "1.5.2 Outcomes",
                            value: 267,
                            fullName: "1.5.2 Outcomes. Conceptual and methodological contributions",
                            sectionId: "sec-152-outcomes"
                        }
                    ]
                },
                {
                    name: "1.6 The structure of this thesis",
                    value: 300, // Reduced from 565 to align 1.1/1.2 with 2.1
                    sectionId: "sec-16-structure"
                }
            ]
        },
        {
            name: "2. Literature review",
            color: "#ae00ff",
            chapterId: "chapter-2",
            order: 2,
            children: [
                {
                    name: "2.1 The problem of UTIs",
                    value: 108,
                    children: [
                        {
                            name: "2.1.1 Disease concerns",
                            value: 224,
                            children: [
                                { name: "Women's involvement", value: 531 },
                                { name: "Recurrence", value: 191 },
                                { name: "Resistance", value: 236 }
                            ]
                        },
                        {
                            name: "2.1.2 Feminist perspectives",
                            value: 107,
                            children: [
                                { name: "Gender bias", value: 264 },
                                { name: "Situated knowledge", value: 284 }
                            ]
                        },
                        {
                            name: "2.1.3 Positioning",
                            value: 378
                        }
                    ]
                },
                {
                    name: "2.2 Theoretical framing",
                    value: 109,
                    children: [
                        {
                            name: "2.2.1 Symptoms as signs",
                            value: 77,
                            children: [
                                { name: "Biosemiotics", value: 278 },
                                { name: "Indexes", value: 311 }
                            ]
                        },
                        {
                            name: "2.2.2 Material traces",
                            value: 259,
                            children: [
                                { name: "Recognising traces", value: 108 },
                                { name: "Enabling interpretation", value: 321 },
                                { name: "Autographic", value: 226 }
                            ]
                        },
                        {
                            name: "2.2.3 Material approach",
                            value: 442
                        },
                        {
                            name: "2.2.4 Autographic inscriptions",
                            value: 259,
                            children: [
                                { name: "Analytical/artistic", value: 333 },
                                { name: "Historical/contemporary", value: 563 }
                            ]
                        },
                        {
                            name: "2.2.5 Physical artefacts",
                            value: 255
                        },
                        {
                            name: "2.2.6 Material agency",
                            value: 467
                        },
                        {
                            name: "2.2.7 Materiality as mediator",
                            value: 225,
                            children: [
                                { name: "Boundary objects", value: 369 }
                            ]
                        },
                        {
                            name: "2.2.8 Situated to tangible",
                            value: 292
                        }
                    ]
                },
                {
                    name: "2.3 Methodological stance",
                    value: 230,
                    children: [
                        {
                            name: "2.3.1 Data in healthcare",
                            value: 591
                        },
                        {
                            name: "2.3.2 Situatedness",
                            value: 156,
                            children: [
                                { name: "Shared subjectivity", value: 191 },
                                { name: "Data as capta", value: 264 }
                            ]
                        },
                        {
                            name: "2.3.3 Embodiment",
                            value: 284,
                            children: [
                                { name: "Data-bodies", value: 295 },
                                { name: "Undefined", value: 114 }
                            ]
                        },
                        {
                            name: "2.3.4 Self-tracking",
                            value: 111,
                            children: [
                                { name: "QS practices", value: 234 },
                                { name: "Limitations", value: 436 }
                            ]
                        },
                        {
                            name: "2.3.5 Data literacy",
                            value: 154,
                            children: [
                                { name: "Competences", value: 320 },
                                { name: "Persona data", value: 173 },
                                { name: "Creative approaches", value: 393 }
                            ]
                        }
                    ]
                },
                {
                    name: "2.4 The approach",
                    value: 178,
                    children: [
                        {
                            name: "2.4.1 Participatory practices",
                            value: 233,
                            children: [
                                { name: "Challenges", value: 189 }
                            ]
                        },
                        {
                            name: "2.4.2 Collaboration",
                            value: 369,
                            children: [
                                { name: "PAR", value: 181 }
                            ]
                        },
                        {
                            name: "2.4.3 Patient role",
                            value: 278
                        },
                        {
                            name: "2.4.4 Participation in DP",
                            value: 243,
                            children: [
                                { name: "Participatory DP", value: 313 },
                                { name: "Data collection", value: 340 },
                                { name: "Representation", value: 121 },
                                { name: "Interpretation", value: 303 }
                            ]
                        }
                    ]
                },
                {
                    name: "2.5 Conclusions",
                    value: 50, // Added to increase width for better title display
                    children: [
                        {
                            name: "2.5.1 Lack of structure",
                            value: 100 // Reduced to reveal 2.5 title
                        },
                        {
                            name: "2.5.2 Physical variables",
                            value: 100 // Reduced to reveal 2.5 title
                        },
                        {
                            name: "2.5.3 Methodology",
                            value: 100 // Reduced to reveal 2.5 title
                        }
                    ]
                }
            ]
        },
        {
            name: "3. Methodology",
            value: 173,
            color: "#FF7800",
            chapterId: "chapter-3",
            order: 3,
            children: [
                {
                    name: "3.1 Physical variables",
                    value: 169,
                    children: [
                        { name: "3.1.1 Encoding/decoding", value: 327 },
                        { name: "3.1.2 Classifications", value: 249 },
                        { name: "3.1.3 Vocabulary?", value: 290 },
                        { name: "3.1.4 Positioning", value: 334 }
                    ]
                },
                {
                    name: "3.2 Data-probes",
                    value: 671
                },
                {
                    name: "3.3 Shape your symptoms",
                    value: 445,
                    children: [
                        {
                            name: "3.3.1 Workshop format",
                            value: 307,
                            children: [
                                { name: "Step-by-step", value: 587 }
                            ]
                        },
                        {
                            name: "3.3.2 Materials",
                            value: 46,
                            children: [
                                { name: "Ice-breaking", value: 78 },
                                { name: "Symptom labels", value: 108 },
                                { name: "Data-probes kit", value: 97 },
                                { name: "Variable labels", value: 341 },
                                { name: "Tablecloth", value: 147 }
                            ]
                        },
                        {
                            name: "3.3.3 Data collection",
                            value: 352,
                            children: [
                                { name: "[A]", value: 60 }, // Increased from 46
                                { name: "[B]", value: 60 }, // Increased from 51
                                { name: "[C]", value: 75 },
                                { name: "[D]", value: 60 }, // Increased from 45
                                { name: "[E]", value: 69 },
                                { name: "[F]", value: 60 }, // Increased from 32
                                { name: "[G]", value: 60 }, // Increased from 39
                                { name: "[H]", value: 68 }
                            ]
                        },
                        {
                            name: "3.3.4 Analysis",
                            value: 421,
                            children: [
                                { name: "Thematic", value: 581 },
                                { name: "Compositional", value: 518 }
                            ]
                        },
                        {
                            name: "3.3.5 Ethics",
                            value: 440
                        },
                        {
                            name: "3.3.6 Management",
                            value: 214
                        },
                        {
                            name: "3.3.7 My role",
                            value: 134
                        },
                        {
                            name: "3.3.8 Assessment",
                            value: 163,
                            children: [
                                { name: "(A) Content", value: 322 },
                                { name: "(B) Methodology", value: 367 }
                            ]
                        }
                    ]
                },
                {
                    name: "3.4 Pilot feedback",
                    value: 90,
                    children: [
                        { name: "3.4.1 Purpose", value: 68 },
                        {
                            name: "3.4.2 Adjustments",
                            value: 0,
                            children: [
                                { name: "Protocol", value: 200 }, // Increased from 72
                                { name: "Materials", value: 195 }, // Reduced from 323
                                { name: "Labels", value: 97 },
                                { name: "Limitations", value: 63 },
                                { name: "Facilitation", value: 88 }
                            ]
                        },
                        {
                            name: "3.4.3 Expert insights",
                            value: 217,
                            children: [
                                { name: "Clarity", value: 67 },
                                { name: "Signs vs symptoms", value: 94 }, // Will handle split in code or rely on space
                                { name: "Reordering", value: 93 },
                                { name: "Expert role", value: 147 }
                            ]
                        }
                    ]
                },
                {
                    name: "3.5 Conclusions",
                    value: 258,
                    children: [
                        { name: "3.5.1 Limitations", value: 649 },
                        { name: "3.5.2 Future", value: 258 }
                    ]
                }
            ]
        },
        {
            name: "4. Analysis of results",
            value: 145,
            color: "#C5C500",
            chapterId: "chapter-4",
            order: 4,
            children: [
                {
                    name: "4.1 Workshop sessions",
                    value: 351,
                    children: [
                        { name: "4.1.1 Distribution", value: 133 },
                        { name: "4.1.2 Recruitment", value: 126 },
                        { name: "4.1.3 Focus", value: 99 },
                        { name: "4.1.4 Methodology", value: 1107 }
                    ]
                },
                {
                    name: "4.2 Coding",
                    value: 23,
                    children: [
                        { name: "4.2.1 Questions", value: 291 },
                        { name: "4.2.2 Process", value: 500 } // Reduced to give space to 4.3
                    ]
                },
                {
                    name: "4.3 Artefacts", // Renamed from Physical results
                    value: 150 // Increased for width and vertical display
                },
                {
                    name: "4.4 Findings: UTIs",
                    value: 265,
                    children: [
                        {
                            name: "Theme 1: Prevention",
                            value: 207,
                            children: [
                                { name: "Hygiene", value: 278 },
                                { name: "Food role", value: 503 },
                                { name: "Medicines", value: 398 }
                            ]
                        },
                        {
                            name: "Theme 2: Symptoms",
                            value: 47,
                            children: [
                                { name: "Agency", value: 825 },
                                { name: "Descriptions", value: 663 },
                                { name: "Anticipation", value: 444 }
                            ]
                        },
                        {
                            name: "Theme 3: Diagnosis",
                            value: 101,
                            children: [
                                { name: "Uncertainty", value: 521 },
                                { name: "Blood confirmation", value: 429 },
                                { name: "Too busy", value: 516 },
                                { name: "Intersections", value: 328 }
                            ]
                        },
                        {
                            name: "Theme 4: Consultation",
                            value: 112,
                            children: [
                                { name: "Availability", value: 433 },
                                { name: "Not talking", value: 147 },
                                { name: "Alternatives", value: 249 }
                            ]
                        },
                        {
                            name: "Theme 5: Treatments",
                            value: 90,
                            children: [
                                { name: "Inefficacy", value: 275 },
                                { name: "Side-effects?", value: 321 },
                                { name: "Probiotics", value: 471 },
                                { name: "Relief", value: 242 }
                            ]
                        }
                    ]
                },
                {
                    name: "4.5 Findings: Method",
                    value: 207,
                    children: [
                        {
                            name: "Theme 1: Variables",
                            value: 148,
                            children: [
                                { name: "Emerging", value: 744 },
                                { name: "Existing", value: 247 },
                                { name: "Strategies", value: 316 },
                                { name: "Overlaps", value: 245 }
                            ]
                        },
                        {
                            name: "Theme 2: Materials",
                            value: 252,
                            children: [
                                { name: "Selection", value: 483 },
                                { name: "Gesture", value: 288 },
                                { name: "Secondary perceptions", value: 322 },
                                { name: "Plugs", value: 422 },
                                { name: "Missing materials", value: 641 },
                                { name: "Missing features", value: 471 },
                                { name: "Cohesion", value: 451 },
                                { name: "Revealing missing", value: 431 }
                            ]
                        },
                        {
                            name: "Theme 3: Associations",
                            value: 2753
                        },
                        {
                            name: "Theme 4: Representation",
                            children: [
                                { name: "Structure", value: 508 },
                                { name: "Metaphors", value: 433 },
                                { name: "Attitude", value: 242 },
                                { name: "Naming", value: 233 },
                                { name: "Describing", value: 221 }
                            ]
                        },
                        {
                            name: "Theme 5: Structure",
                            children: [
                                { name: "Common condition", value: 474 },
                                { name: "Experts", value: 273 },
                                { name: "Misalignments", value: 380 },
                                { name: "Useful?", value: 392 }
                            ]
                        }
                    ]
                },
                {
                    name: "4.6 Visualization role",
                    value: 80 // Increased to show title
                },
                {
                    name: "4.7 Conclusion",
                    value: 56,
                    children: [
                        { name: "4.7.1 Opening", value: 211 },
                        { name: "4.7.2 Beyond material", value: 167 },
                        { name: "4.7.3 Presentation", value: 165 },
                        { name: "4.7.4 Generative variables", value: 530 }
                    ]
                }
            ]
        },
        {
            name: "5. Assessment",
            value: 223,
            color: "#763267",
            chapterId: "chapter-5",
            order: 5,
            children: [
                {
                    name: "5.1 Interviews",
                    value: 899
                },
                {
                    name: "5.2 Analysis",
                    value: 245,
                    children: [
                        {
                            name: "Theme 1: Diagnosis",
                            children: [
                                { name: "Misunderstandings", value: 291 },
                                { name: "Variability", value: 252 },
                                { name: "Vocabulary gap", value: 407 }
                            ]
                        },
                        {
                            name: "Theme 2: Experience",
                            children: [
                                { name: "Anxiety/fear", value: 219 },
                                { name: "Literacy journey", value: 523 },
                                { name: "Empowerment", value: 350 }
                            ]
                        },
                        {
                            name: "Theme 3: Meaning-making",
                            children: [
                                { name: "Materials as tools", value: 650 },
                                { name: "Metaphors", value: 185 },
                                { name: "Collective", value: 157 }
                            ]
                        },
                        {
                            name: "Theme 4: Methodology",
                            children: [
                                { name: "Interpretation", value: 379 },
                                { name: "Applicability", value: 259 },
                                { name: "Representativeness", value: 130 },
                                { name: "Value", value: 383 }
                            ]
                        }
                    ]
                },
                {
                    name: "5.3 Limitations",
                    value: 250
                },
                {
                    name: "5.4 Conclusions",
                    value: 354
                }
            ]
        },
        {
            name: "6. Discussion",
            value: 267,
            color: "#0040FF",
            chapterId: "chapter-6",
            order: 6,
            children: [
                {
                    name: "6.1 Participatory mapping",
                    value: 582
                },
                {
                    name: "6.2 Material engagement",
                    value: 78,
                    children: [
                        { name: "6.2.1 Gestures", value: 132 },
                        { name: "6.2.2 Un-literacy", value: 143 },
                        { name: "6.2.3 Specificity", value: 360 },
                        { name: "6.2.4 Metaphor", value: 145 }
                    ]
                },
                {
                    name: "6.3 Measurement",
                    value: 466
                },
                {
                    name: "6.4 Physical variables",
                    value: 476
                },
                {
                    name: "6.5 To apparatus",
                    value: 216
                }
            ]
        },
        {
            name: "7. Apparatus",
            value: 360,
            color: "#00c6d4",
            chapterId: "chapter-7",
            order: 7,
            children: [
                {
                    name: "7.1 Applications",
                    value: 304,
                    children: [
                        {
                            name: "7.1.1 Functions",
                            value: 40, // Increased to show Functions title
                            children: [
                                { name: "Structuring", value: 15 },
                                { name: "Collective knowledge", value: 20 }
                            ]
                        }
                    ]
                },
                {
                    name: "7.2 Labels",
                    value: 191,
                    children: [
                        {
                            name: "7.2.1 Symptoms",
                            value: 94,
                            children: [
                                { name: "What is symptom", value: 200 }, // Reduced to give space to 7.1.1
                                { name: "Final list", value: 350 } // Reduced to give space to 7.1.1
                            ]
                        },
                        {
                            name: "7.2.2 Variables",
                            value: 319,
                            children: [
                                { name: "Final list", value: 593 }
                            ]
                        },
                        { name: "7.2.3 Figma", value: 410 },
                        { name: "7.2.4 Summary", value: 154 }
                    ]
                },
                {
                    name: "7.3 Protocol",
                    value: 69,
                    children: [
                        {
                            name: "7.3.1 Phases",
                            value: 110,
                            children: [
                                { name: "[1]", value: 62 },
                                { name: "[2]", value: 61 },
                                { name: "[3]", value: 59 },
                                { name: "[4]", value: 68 },
                                { name: "[5]", value: 80 },
                                { name: "[6]", value: 59 },
                                { name: "[7]", value: 74 },
                                { name: "[8]", value: 119 },
                                { name: "[9]", value: 136 }
                            ]
                        },
                        { name: "7.3.2 Summary", value: 128 }
                    ]
                },
                {
                    name: "7.4 Materials",
                    value: 237,
                    children: [
                        {
                            name: "7.4.1 Principles",
                            value: 201,
                            children: [
                                { name: "1. Contrast", value: 206 },
                                { name: "2. Modularity", value: 205 },
                                { name: "3. Gesture", value: 176 },
                                { name: "4. Scope", value: 172 },
                                { name: "5. Coherence", value: 164 },
                                { name: "6. Sustainability", value: 144 }
                            ]
                        },
                        { name: "7.4.2 Summary", value: 142 }
                    ]
                },
                {
                    name: "7.5 Interface",
                    value: 241,
                    children: [
                        { name: "7.5.1 Integration", value: 466 },
                        { name: "7.5.2 Deconstructing", value: 647 },
                        { name: "7.5.3 Legend", value: 394 },
                        { name: "7.5.4 Future", value: 148 },
                        { name: "7.5.5 Conclusion", value: 109 }
                    ]
                },
                {
                    name: "7.6 Beyond thesis",
                    value: 303,
                    children: [
                        { name: "7.6.1 Adaptation", value: 502 },
                        { name: "7.6.2 Sound", value: 1040 },
                        { name: "7.6.3 Rethinking", value: 333 }
                    ]
                }
            ]
        },
        {
            name: "8. Conclusion",
            value: 143,
            color: "#F78DFF",
            chapterId: "chapter-8",
            order: 8,
            children: [
                {
                    name: "8.1 Summary",
                    value: 1437
                },
                {
                    name: "8.2 Addressing the RQ",
                    value: 106,
                    children: [
                        { name: "RQ1", value: 483 },
                        { name: "RQ2", value: 439 },
                        { name: "RQ3", value: 426 },
                        { name: "RQ4", value: 426 }
                    ]
                },
                {
                    name: "8.3 Contributions",
                    value: 106,
                    children: [
                        { name: "8.3.1 Methodological", value: 521 },
                        { name: "8.3.2 Theoretical", value: 463 },
                        { name: "8.3.3 Empirical", value: 476 }
                    ]
                },
                {
                    name: "8.4 Limitations",
                    value: 106,
                    children: [
                        { name: "8.4.1 Sample", value: 333 },
                        { name: "8.4.2 Duration", value: 222 },
                        { name: "8.4.3 Analysis", value: 278 }
                    ]
                },
                {
                    name: "8.5 Future work",
                    value: 69,
                    children: [
                        { name: "8.5.1 Advancing", value: 158 },
                        { name: "8.5.2 Scope", value: 147 },
                        { name: "8.5.3 Multimodal", value: 140 }, // Increased for visibility
                        { name: "8.5.4 Sonification", value: 116 }
                    ]
                }
            ]
        }
    ]
};

function getColor(d) {
    // Traverse up to find the chapter color
    while (d.parent) {
        if (d.data.color) return d.data.color;
        d = d.parent;
    }
    return d.data.color || "#000000";
}

function initD3Treemap() {
    const container = document.getElementById('static-treemap');
    if (!container) {
        console.error('Treemap container not found');
        return;
    }

    // Clear any existing content
    container.innerHTML = '';

    const updateTreemap = () => {
        const width = container.clientWidth;
        const height = container.clientHeight || 860;

        // Clear previous SVG
        d3.select(container).selectAll('*').remove();

        // Create SVG
        const svg = d3.select(container)
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', `0 0 ${width} ${height}`)
            .attr('preserveAspectRatio', 'xMidYMid meet');

        // Create treemap layout with binary tiling for better ordering
        const treemap = d3.treemap()
            .size([width, height])
            .paddingOuter(4)  // Reduced from 8 to 4 - tighter spacing between parent border and children
            .paddingTop(d => {
                // Adjust top padding based on depth and name length
                if (d.depth === 1) {
                    // Check if it's Chapter 1 (needs space for title)
                    if (d.data.name.startsWith("1. ")) return 22;

                    // Dynamic padding for long chapter titles
                    // If title is long, give it more space (effectively shrinking children)
                    if (d.data.name.length > 20) return 32;

                    return 22;
                }

                // Section titles (depth 2)
                if (d.depth === 2) {
                    // Specific sections that need extra padding for title visibility
                    const needsExtraPadding = [
                        "2.1.2 Feminist perspectives",
                        "4.7 Conclusions",
                        "3.4.2 Adjustments",
                        "3.4.3 Expert insights",
                        "2.4.1 Participation practices"
                    ];

                    if (needsExtraPadding.includes(d.data.name)) {
                        return 40; // Increased from 32 to 40 for better visibility
                    }

                    // Dynamic padding for long section titles
                    if (d.data.name.length > 25) return 28;
                    return 18;
                }

                // Subsection titles (depth 3)
                if (d.depth === 3) {
                    // Specific subsections that need extra padding for title visibility
                    const needsExtraPadding = [
                        "2.1.2 Feminist perspectives"
                    ];

                    if (needsExtraPadding.includes(d.data.name)) {
                        return 30; // Extra padding for subsections with children
                    }

                    return 12; // Default for depth 3
                }

                return 12; // Default for others
            })
            .paddingInner(d => {
                // Adjust padding based on depth
                // T1-T2 (Chapter to Section): 2px
                // T2-T3 (Section to Subsection): 1px (tight)
                // T3-T4 (Subsection to smallest units): 2px (increased back to original)
                if (d.depth === 2) return 1; // Tight spacing for T2-T3
                return 2; // Default spacing for T1-T2 and T3-T4
            })
            .tile(d3.treemapBinary)
            .round(true);

        // Create hierarchy
        const root = d3.hierarchy(CHAPTER_DATA)
            .sum(d => d.value || 0)
            .sort((a, b) => {
                // First sort by order if available (for chapters)
                if (a.data.order && b.data.order) {
                    return a.data.order - b.data.order;
                }
                // For sections within a chapter, maintain their array order
                if (a.parent === b.parent) {
                    const siblings = a.parent.children;
                    return siblings.indexOf(a) - siblings.indexOf(b);
                }
                // Otherwise sort by value
                return b.value - a.value;
            });

        // Apply treemap layout
        treemap(root);

        // Tooltip setup
        const tooltip = d3.select('body').append('div')
            .attr('class', 'treemap-tooltip')
            .style('position', 'absolute')
            .style('visibility', 'hidden')
            .style('background-color', 'rgba(255, 255, 255, 0.6)')
            .style('backdrop-filter', 'blur(5px)')
            .style('-webkit-backdrop-filter', 'blur(5px)')
            .style('padding', '16px 24px') // Height with doubled horizontal padding
            .style('min-width', '60px')   // Smaller minimum width
            .style('text-align', 'center') // Center text
            .style('border-radius', '50%') // 50% rounded corners
            .style('border', '1px solid #ccc')
            .style('font-family', 'Suisse Light, sans-serif')
            .style('font-size', '12px')
            .style('color', '#333')
            .style('pointer-events', 'none')
            .style('z-index', '1000')
            .style('box-shadow', '0 2px 10px rgba(0,0,0,0.1)');

        // Mobile adjustments
        if (window.innerWidth <= 768) {
            // Add subtitle and warning
            d3.select('#treemap-container').insert('div', ':first-child')
                .style('text-align', 'center')
                .style('margin-bottom', '10px')
                .html('<h3 style="font-size: 14px; margin: 0;">A participatory data physicalization approach to women’s UTI symptoms.</h3><p style="font-size: 12px; color: #666; margin: 5px 0;">For a better experience, please view on desktop.</p>');

            // Hide non-chapter nodes in mobile view via CSS class or opacity
            // We'll do this by filtering the nodes selection or setting opacity
            // But the user wants "only strokes and main chapters name".
            // So we keep the rectangles but hide text for depth > 1?
            // Or hide the rectangles too? "make only strokes visible".
            // If we hide rectangles, we lose the structure. Maybe they mean "show structure but only label chapters".
            // Let's assume hiding text for depth > 1 is what's needed for clarity, and maybe reducing stroke width for inner ones.
        }

        // Create groups for all nodes (chapters and nested sections)
        // On mobile, only show main chapters (depth 1)
        const isMobile = window.innerWidth <= 768;
        const nodesToShow = isMobile ? root.descendants().filter(d => d.depth === 1) : root.descendants();

        const nodes = svg.selectAll('g')
            .data(nodesToShow)
            .enter()
            .append('g')
            .attr('class', d => {
                if (d.depth === 0) return 'root-node';
                if (d.depth === 1) return 'chapter-node';
                if (d.depth === 2) return 'section-node';
                return 'subsection-node';
            })
            .attr('transform', d => `translate(${d.x0},${d.y0})`)
            .style('cursor', d => d.depth > 0 ? 'pointer' : 'default');

        // Add rectangles for all nodes except root
        nodes.filter(d => d.depth > 0)
            .append('rect')
            .attr('x', d => 0)
            .attr('y', d => 0)
            .attr('width', d => d.x1 - d.x0)
            .attr('height', d => d.y1 - d.y0)
            .attr('fill', d => d.children ? '#ffffff' : '#ffffff') // White background for all
            .attr('stroke', d => getColor(d))
            .attr('stroke-width', d => d.depth === 1 ? 2 : 1)
            .attr('stroke-linecap', 'round') // Rounded corners for dots
            .attr('stroke-dasharray', d => {
                // Check if this section should have dotted strokes
                if (DOTTED_SECTIONS.includes(d.data.name)) {
                    return '2, 2.5'; // 2px dots, 2.5px spacing
                }
                return 'none'; // Solid stroke for others
            })
            .on('mouseover', function (event, d) {
                // Highlight effect
                d3.select(this)
                    .attr('fill', getColor(d))
                    .style('cursor', 'pointer');

                // Find text sibling and change color to white
                d3.select(this.parentNode).select('text')
                    .attr('fill', '#ffffff');

                // Tooltip logic
                const color = getColor(d);

                // Generate path string: Specific -> General (reversed)
                // e.g. RQ3 → 1.4 Research questions → Chapter 1
                const ancestors = d.ancestors();
                if (ancestors.length > 0 && ancestors[ancestors.length - 1].depth === 0) {
                    ancestors.pop();
                }

                const path = ancestors.map(node => node.data.name).join(' → ');

                tooltip.style('visibility', 'visible')
                    .style('border-color', color)
                    .text(path);
            })
            .on('mousemove', function (event) {
                const tooltipWidth = tooltip.node().getBoundingClientRect().width;
                const windowWidth = window.innerWidth;
                const margin = 20;

                let left = event.pageX + 10;
                // If tooltip goes off right edge, move to left of cursor
                if (left + tooltipWidth > windowWidth - margin) {
                    left = event.pageX - tooltipWidth - 10;
                }

                tooltip.style('top', (event.pageY + 10) + 'px')
                    .style('left', left + 'px');
            })
            .on('mouseout', function (event, d) {
                // Reset highlight
                d3.select(this)
                    .attr('fill', '#ffffff');

                // Reset text color
                d3.select(this.parentNode).select('text')
                    .attr('fill', getColor(d));

                // Hide tooltip
                tooltip.style('visibility', 'hidden');
            })
            .on('click', (event, d) => {
                // Scroll logic
                let targetId = null;
                if (d.data.sectionId) {
                    targetId = d.data.sectionId;
                } else if (d.data.chapterId) {
                    targetId = d.data.chapterId;
                } else {
                    // Try to find a parent with an ID if the leaf doesn't have one
                    let current = d;
                    while (current.parent && !targetId) {
                        current = current.parent;
                        if (current.data.sectionId) targetId = current.data.sectionId;
                        else if (current.data.chapterId) targetId = current.data.chapterId;
                    }
                }

                if (targetId) {
                    const element = document.getElementById(targetId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                        console.log("Target element not found:", targetId);
                    }
                }
            });

        // Add text labels for all nodes except root
        nodes.filter(d => d.depth > 0)
            .append('text')
            .attr('class', 'node-label')
            .attr('x', 4)
            .attr('y', d => d.depth === 1 ? 14 : 10)
            .attr('fill', d => getColor(d))
            .attr('font-family', 'Suisse Light, sans-serif')
            .attr('font-size', d => {
                if (d.depth === 1) return '13px';
                if (d.depth === 2) return '10px';
                return '8px'; // Smaller font for leaves
            })
            .attr('font-weight', d => d.depth === 1 ? '500' : '300')
            .attr('pointer-events', 'none')
            .each(function (d) {
                const textElement = d3.select(this);
                const rectWidth = (d.x1 - d.x0);
                const rectHeight = (d.y1 - d.y0);
                const availableWidth = rectWidth - 8;
                const availableHeight = rectHeight;

                // If rectangle is too small, show just "..." to indicate content exists
                if (availableWidth < 5 || availableHeight < 10) {
                    textElement.text('...')
                        .attr('font-size', '8px')
                        .style('display', 'block');
                    return;
                }

                const fullText = d.data.name;
                const fontSize = d.depth === 1 ? 13 : (d.depth === 2 ? 10 : 8);
                const lineHeight = fontSize * 0.9;

                // Extract section number if present
                const numberMatch = fullText.match(/^(\d+(\.\d+)*|\[.*?\])/);
                const sectionNumber = numberMatch ? numberMatch[1] : '';

                // Mobile: Show abbreviated chapter titles
                const chapterAbbreviations = {
                    '1. Introduction': '1. Intro',
                    '2. Literature review': '2. Literature review',
                    '3. Methodology': '3. Methodology',
                    '4. The study': '4. The study',
                    '5. Findings': '5. Findings',
                    '6. Discussion': '6. Discussion',
                    '7. Apparatus': '7. Apparatus',
                    '8. Conclusion': '8. Conclusion'
                };

                let displayText = fullText;
                if (isMobile && d.depth === 1 && chapterAbbreviations[fullText]) {
                    displayText = chapterAbbreviations[fullText];
                } else {
                    // For parent nodes, use only section number if space is limited
                    // Exception: Always show full title for sections 1.4 and 1.5
                    const alwaysShowFullTitle = ['1.4', '1.5'].some(section => fullText.startsWith(section));

                    if (d.children && sectionNumber && !alwaysShowFullTitle) {
                        const totalHeight = d.y1 - d.y0;
                        const paddingRatio = availableHeight / totalHeight;
                        if (paddingRatio < 0.15 || availableWidth < 50) {
                            displayText = sectionNumber + '...';
                        }
                    }
                }

                // === STEP 1: Check rectangle dimensions ===
                const padding = 4; // 2px on each side
                const maxWidth = availableWidth - padding;
                const maxHeight = availableHeight - 8;

                // === STEP 2: Decide orientation ===
                const isParent = !!d.children || d.depth === 1;
                const isBracketLabel = /^\[[^\]]+\]$/.test(displayText);

                // Measure text
                textElement.text(displayText);
                const initialTextWidth = textElement.node().getComputedTextLength();

                // Decide: vertical or horizontal?
                let useVertical = false;
                if (!isParent && !isBracketLabel && initialTextWidth > maxWidth) {
                    // Consider vertical if tall and narrow
                    if (rectHeight > rectWidth && rectHeight > 40) {
                        useVertical = true;
                    }
                }

                // === STEP 3: Render text in chosen orientation ===
                if (useVertical) {
                    // VERTICAL TEXT
                    textElement
                        .attr('transform', `translate(8, ${rectHeight - 4}) rotate(-90)`)
                        .attr('x', 0)
                        .attr('y', 0)
                        .style('text-anchor', 'start')
                        .text(displayText);

                    const currentLength = textElement.node().getComputedTextLength();

                    // Step 4: Truncate if needed
                    if (currentLength > maxHeight) {
                        let text = displayText;
                        textElement.text(text + '...');
                        while (textElement.node().getComputedTextLength() > maxHeight && text.length > 0) {
                            text = text.slice(0, -1);
                            textElement.text(text + '...');
                        }
                    }
                } else {
                    // HORIZONTAL TEXT
                    textElement
                        .attr('transform', null)
                        .attr('x', 2)
                        .attr('y', d.depth === 1 ? 14 : 10)
                        .style('text-anchor', 'start')
                        .text(displayText);

                    const currentLength = textElement.node().getComputedTextLength();

                    // Step 4: Truncate if needed
                    if (currentLength > maxWidth) {
                        let text = displayText;
                        textElement.text(text + '...');
                        while (textElement.node().getComputedTextLength() > maxWidth && text.length > 0) {
                            text = text.slice(0, -1);
                            textElement.text(text + '...');
                        }
                    }
                }
            });

        // Sort nodes to ensure text is on top (smaller nodes last)
        // This helps but separating rects and texts is better. 
        // Since we use groups, we rely on the tree order. 
        // Leaf nodes are usually rendered last in D3 treemap traversal, so they should be on top.          }
    };

    // Initial render
    updateTreemap();

    // Re-render on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateTreemap, 250);
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initD3Treemap);
} else {
    initD3Treemap();
}
