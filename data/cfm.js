const resume = [
    {
        section_type: 'resume-details',
        section_content: [
            {
                name: "Hippolyte LEPRELLE",
                details: `<a href="mailto:hippolyte.leprelle@gmail.com">hippolyte.leprelle@gmail.com</a> - +33 7 67 50 64 16 - <a href="https://www.linkedin.com/in/hippolyte-leprelle/" target="_blank">linkedin</a>`,
                summary: {
                    fr: "Développeur fullstack",
                    en: "Developer in finance",
                },
            }
        ],
    },
    {
        section_type: 'text-box',
        section_name: {
            fr: "DESCRIPTION",
            en: "OBJECTIVE",
        },
        section_content: [
            {
                fr: "A la recherche de mon premier CDI en tant que développeur junior, mon parcours en finance a nourri ma passion pour la programmation, et aujourd'hui, ces deux domaines sont devenus des éléments clés de mon parcours professionnel. Je souhaite mettre à profit cette double compétence pour créer des solutions techniques innovantes combinant finance et développement.",
                en: "Passionate about finance and programming, I acquired my technical IT skills through hand-on experiences and my desire to constantly expand my knowledge. I'm committed to developing tools that meet the needs of business first. My IT expertise covers various languages such as Python, SQL, Javascript or VBA applied to the development and interaction with apps and databases, analysis as well as automation."
            }
        ]
    },
    {
        section_type: 'box-section',
        section_name: {
            fr: "EXPERIENCE",
            en: "EXPERIENCE",
        },
        section_content: [
            [
                {
                    type: 'header',
                    left: {
                        en: "Front & Middle Office Technology, internship",
                        fr: "Front & Middle Office Technology, stage",
                    },
                    right: {
                        en: "6 months, 10/2024 - present",
                        fr: "6 mois, 10/2024 - aujourd'hui"
                    }
                },
                {
                    type: 'header',
                    left: {
                        en: "Jukoï Capital",
                        fr: "Jukoï Capital"
                    },
                    right: {
                        en: "Monaco",
                        fr: "Monaco"
                    }
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: "Design of a central database in PostgreSQL relying on accounting rules and carefully selected conventions: transaction management; development of complex join queries, triggers, stored procedures and views; implementation of a robust audit trail and access management",
                            fr: "",
                        },
                        {
                            en: "Audit of IT hardware and software infrastructures, focusing on 5 major themes including the central database, network file management, source code versioning and development environments; implementation of recommendations and follow-up via regular presentations to colleagues",
                            fr: "",
                        },
                        {
                            en: "Creation of a tool to automate the daily reconciliation of the fund's trading and accounting data with counterparties",
                            fr: "",
                        },
                        {
                            en: "Development of a Python project for frequent verification of the customer base with official government APIs; application of a fuzzy matching (levenstein algorithm) to compute distance and applying a margin",
                            fr: "",
                        },
                        {
                            en: "Integration of market data in databases and risk simulations like VaR with Bloomberg and its Desktop API",
                            fr: "",
                        },
                    ]
                }
            ],
            [
                {
                    type: 'header',
                    left: {
                        en: "Business Analyst / Software Developer, apprenticeship",
                        fr: "Business Analayst / Développeur, apprentissage"
                    },
                    right: {
                        en: "1 year, 09/2023 - 09/2024",
                        fr: "1 an, 09/2023 - 09/2024",
                    }
                },
                {
                    type: 'header',
                    left: {
                        en: "UBS",
                        fr: "UBS",
                    },
                    right: {
                        en: "Paris, France",
                        fr: "Paris, France",
                    }
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: "Development of customer portfolio analysis tools for the front office, including cross-asset performance calculations, backtesting and simulation, as well as decision-support tools for portfolio management and book monitoring to match CIO recommendations for instance",
                            fr: "",
                        },
                        {
                            en: "Day-to-day maintenance and improvement of the team's applications; implementation of workflow management tools with Python, Powershell and Alteryx in particular to feed these applications on a daily basis",
                            fr: "",
                        },
                        {
                            en: "Set up UAC test campaigns for ten or so departments on the team's tools; collected data and user feedback from ten or so teams; produced improvement and correction specs",
                            fr: "",
                        },
                        {
                            en: "Successful design of a fully functional mockup of a support ticket management application in less than 3 weeks in React with NextJS and Mongo DB, for presentation to top management",
                            fr: "",
                        },
                        {
                            en: "Managed the migration of 2 static applications to full-stack, building the backend with Django and NodeJS, the database with SQL Server and the API",
                            fr: "",
                        }
                    ]
                }
            ],
            [
                {
                    type: 'header',
                    left: { en: "Investment Analyst, internship", fr: "Investment Analyst, stage" },
                    right: { en: "6 months, 07/2022 - 12/2022", fr: "6 mois, 07/2022 - 12/2022" },
                },
                {
                    type: 'header',
                    left: { en: "UBS", fr: "UBS" },
                    right: { en: "Paris, France", fr: "Paris, France" },
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: "Worked with bankers and product specialists to create tailor-made investment proposals for UHNW clients (30M€+ portfolios)",
                            fr: "Travail avec les banquiers, les gérants et spécialistes pour créer des propositions d'investissement pour des clients UHNW (±30M€ de patrimoine)"
                        },
                        {
                            en: "Creation of ±5 full reports/month, including changes and detailed calculation of portfolio performance",
                            fr: "Édition d'en moyenne 5 reportings par mois récapitulant les mouvements et des calculs détaillés de la performance"
                        },
                        {
                            en: "Automated reading of a stack of over 10,000 PDF documents with Python to update databases made with text and image recognition modules",
                            fr: "Automatisation de la lecture d'environ 10 000 documents PDF afin d'alimenter une base de données à l'aide de modules de reconnaissance de texte et d'images"
                        },
                        {
                            en: "Maintained and improved a tool to automate a portfolio reporting tool with Python and VBA",
                            fr: "Maintenance et amélioration d'outils automatisés avec Python et VBA"
                        },
                    ]
                }
            ],
            [
                {
                    type: 'header',
                    left: {
                        en: "Equity Analyst, internship",
                        fr: "Equity Analyst, stage"
                    },
                    right: {
                        en: "6 months, 01/2022 - 06/2022",
                        fr: "6 mois, 01/2022 - 06/2022"
                    }
                },
                {
                    type: 'header',
                    left: {
                        en: "Obsido Family Office",
                        fr: "Obsido Family Office"
                    },
                    right: {
                        en: "Paris, France",
                        fr: "Paris, France"
                    }
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: "Elaborated a presentation paper for a weekly client meeting containing analyses and short briefs about recent news from US and EU largest listed companies including results, corporate governance publications",
                            fr: "Élaboration d'un support de réunion hebdomadaire contenant des analyses de l'actualité récente de grandes sociétés cotées aux États-Unis et dans l'UE comprenant résultats, publications et gouvernance d'entreprise"
                        },
                        {
                            en: "Wrote ±20 deeply documented sheets about fundamental and financial analysis using qualitative and quantitative sources",
                            fr: "Rédaction de ±20 documents détaillés d'analyse fondamentale et financière à l'aide de sources qualitatives et quantitatives"
                        },
                        {
                            en: "Monitored and improved a portfolio tracking application using Excel VBA",
                            fr: "Maintenance et amélioration d'une application de tracking de portefeuille avec Excel et VBA"
                        },
                    ]
                }
            ],
        ],
    },
    {
        section_type: 'box-section',
        section_name: {
            en: "EDUCATION",
            fr: "PARCOURS ACADÉMIQUE",
        },
        section_content: [
            [
                {
                    type: 'header',
                    left: {
                        en: "SKEMA Business School",
                        fr: "SKEMA Business School",
                    },
                    right: {
                        en: "2020 - 2024",
                        fr: "2020 - 2024"
                    }
                },
                {
                    type: 'header',
                    left: {
                        en: "Master in Management (Programme Grande École)",
                        fr: "Programme Grande École"
                    },
                    right: {
                        en: "Lille, France",
                        fr: "Lille, France"
                    },
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: "Electives in finance: Derivatives, Fixed Income, Machine-Learning, Portfolio Management, Financial Markets & Institutions",
                            fr: "Cours électifs en finance : Produits dérivés, Fixed Income, Machine-Learning, Gestion de Portefeuille, Finance de marché"
                        },
                        {
                            en: "Core courses: Economics, Accounting, Corporate Finance, Tax & Legal, Geopolitics, Strategy, Marketing, Quantitative Methods",
                            fr: "Cours principaux : Économie, Comptabilité, Finance d'entreprise, Droit, Géopolitique, Stratégie, Marketing, Méthodes quantitatives"
                        },
                    ]
                },
                {
                    type: 'header',
                    left: {
                        en: "MS in Wealth Management",
                        fr: "MS Gestion de Patrimoine"
                    },
                    right: {
                        en: "Paris, France",
                        fr: "Paris, France"
                    },
                },
                // {
                //     type: 'list',
                //     items: [
                //         {
                //             en: "Inheritance management, Structured Products, Life-Insurance, Real-Estate, Banking products, French and international taxation",
                //             fr: ""
                //         }
                //     ]
                // },
                {
                    type: 'header',
                    left: {
                        en: "5-month Exchange Semester in Brazil",
                        fr: "Échange universitaire de 5 mois au Brésil"
                    },
                    right: {
                        en: "Belo Horizonte, Brazil",
                        fr: "Belo Horizonte, Brésil"
                    },
                },
            ],
            [
                {
                    type: 'header',
                    left: {
                        en: "Lycée Saint-Joseph du Loquidy",
                        fr: "Lycée Saint-Joseph du Loquidy",
                    },
                    right: {
                        en: "2018 - 2020",
                        fr: "2018 - 2020"
                    }
                },
                {
                    type: 'header',
                    left: {
                        en: "Two-year undergraduate intensive preparation for the entrance exams to top French Business schools, CPGE ECE",
                        fr: "Classes Préparatoires aux Grandes Écoles de commerce"
                    },
                    right: {
                        en: "Nantes, France",
                        fr: "Nantes, France"
                    },
                },
            ],
        ],
    },
    {
        section_type: 'box-section',
        section_name: {
            en: "MAIN PROJECTS",
            fr: "PROJETS PRINCIPAUX"
        },
        section_content: [
            [
                {
                    type: 'header',
                    left: {
                        en: `<span style="background: yellow">PROJET DATA VIS</span>`,
                        fr: "",
                    },
                    right: {
                        en: `<span style="background: yellow">Languages: </span>`,
                        fr: "",
                        special: 'italic'
                    }
                }
            ],
            [
                {
                    type: 'header',
                    left: {
                        en: "PostgreSQL Accounting/Trading Database",
                        fr: "",
                    },
                    right: {
                        en: "Languages: SQL, PSQL, VBA, Python",
                        fr: "",
                        special: 'italic'
                    }
                }
            ],
            // [
            //     {
            //         type: 'header',
            //         left: {
            //             en: "Ticket management application",
            //             fr: "Application de gestion de tickets",
            //         },
            //         right: {
            //             en: "Languages: NextJS, ReactJS, Javascript, Typescript, SQL, NoSQL",
            //             fr: "",
            //             special: 'italic'
            //         }
            //     }
            // ],
            [{
                type: 'header',
                left: {
                    en: "CRM and reporting generator",
                    fr: "CRM et générateur de reportings",
                },
                right: {
                    en: "Languages: Javascript (NodeJS), HTML, CSS, Python, SQL Server",
                    fr: "",
                    special: 'italic'
                }
            }],
            [{
                type: 'header',
                left: {
                    en: "PDF reader robot",
                    fr: "Lecteur de PDF automatisé",
                },
                right: {
                    en: "Language: Python (pandas, pdfplumber, pytesseract, tensorFlow)",
                    fr: "",
                    special: 'italic'
                }
            }],
            [{
                type: 'header',
                left: {
                    en: "Fund data scraper and and brochure format viewer",
                    fr: "Scraping de données sur des fonds",
                },
                right: {
                    en: "Languages: Python (regex, requests, pandas), Javascript, HTML, CSS",
                    fr: "Langages : Python, Javascript, HTML, CSS",
                    special: 'italic'
                }
            }],
        ],
    },
    {
        section_type: 'box-column-section',
        section_name: {
            en: "HARD SKILLS",
            fr: "COMPÉTENCES TECHNIQUES",
        },
        section_content: [
            [
                {
                    type: 'header',
                    left: {
                        en: "Programming languages",
                        fr: "Langages de programmation"
                    },
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: "Javascript, HTML, CSS",
                            fr: "Javascript, HTML, CSS"
                        },
                        {
                            en: "Python",
                            fr: "Python"
                        },
                        {
                            en: "VBA",
                            fr: "VBA"
                        },
                        {
                            en: "SQL",
                            fr: "SQL"
                        },
                        {
                            en: "Batch/Powershell",
                            fr: "Batch/Powershell"
                        },
                    ]
                }
            ],
            [
                {
                    type: 'header',
                    left: {
                        en: "Main frameworks",
                        fr: "Frameworks et modules"
                    },
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: `Python
                            <div class="box-list">
                            <ul>
                            <li style="text-align: left;">Backend: Django, Flask</li>
                            <li style="text-align: left;">Data: regex, pandas, Jupyter</li>
                            <li style="text-align: left;">Machine Learning: pytesseract, TensorFlow</li>
                            <li style="text-align: left;">Webscraping: requests, selenium</li>
                            </ul>
                            </div>`,
                            fr: `Python
                            <div class="box-list">
                            <ul>
                            <li>Backend : Django, Flask</li>
                            <li>Data : regex, pandas, Jupyter</li>
                            <li>IA : pytesseract, TensorFlow</li>
                            <li>Webscraping: requests, selenium</li>
                            </ul>
                            </div>`
                        },
                        {
                            en: "NodeJS, Typescript, React & NextJS",
                            fr: "NodeJS, Typescript, React et NextJS"
                        },
                    ]
                },
            ],
            [
                {
                    type: 'header',
                    left: {
                        en: "Softwares",
                        fr: "Logiciels"
                    },
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: "Git - Gitlab",
                            fr: "Git - Gitlab"
                        },
                        {
                            en: "Visual Studio Code",
                            fr: "Visual Studio Code"
                        },
                        {
                            en: "MS Office",
                            fr: "MS Office"
                        },
                        {
                            en: "PowerBI, Alteryx",
                            fr: "PowerBI, Alteryx"
                        },
                        {
                            en: "MongoDB, SQL Server, PostgreSQL",
                            fr: "MongoDB, SQL Server, PostgreSQL"
                        },
                        {
                            en: "Bloomberg",
                            fr: "Bloomberg"
                        },
                    ]
                }
            ],
            [
                {
                    type: 'header',
                    left: {
                        en: "Competencies",
                        fr: "Compétences"
                    },
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: "REST APIs",
                            fr: "Création d'API REST"
                        },
                        {
                            en: "Data Analysis",
                            fr: "Analyse de données"
                        },
                        {
                            en: "Web-scraping",
                            fr: "Web-scraping"
                        },
                        {
                            en: "SQL/NoSQL",
                            fr: "SQL/NoSQL"
                        },
                        {
                            en: "Financial modeling",
                            fr: "Modélisation financière"
                        },
                    ]
                }
            ],
        ]
    },
    {
        section_type: 'box-column-section',
        section_name: {
            en: "MISCELLANEOUS",
            fr: "DIVERS",
        },
        section_content: [
            [
                {
                    type: 'header',
                    left: {
                        en: "Certifications",
                        fr: "Certifications"
                    },
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: "Certification AMF",
                            fr: "Certification AMF"
                        },
                        {
                            en: "TOEFL ITP(570/ 677)",
                            fr: ""
                        },
                    ]
                }
            ],
            [
                {
                    type: 'header',
                    left: {
                        en: "Languages",
                        fr: "Langues"
                    },
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: "French (native)",
                            fr: ""
                        },
                        {
                            en: "English (professional)",
                            fr: ""
                        },
                        {
                            en: "Spanish (intermediate)",
                            fr: ""
                        },
                        {
                            en: "Portuguese (conversational)",
                            fr: ""
                        },
                    ]
                }
            ],
            [
                {
                    type: 'header',
                    left: {
                        en: "Soft skills",
                        fr: "Soft skills"
                    },
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: "Proactivity",
                            fr: "Proactivité"
                        },
                        {
                            en: "Teamwork",
                            fr: "Travail en équipe"
                        },
                        {
                            en: "Problem solving",
                            fr: "Résolution de problèmes"
                        },
                    ]
                }
            ],
            [
                {
                    type: 'header',
                    left: {
                        en: "References",
                        fr: "Références"
                    },
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: `<span class="bold">Yuanjing LU</span>, Executive Director at UBS yuanjing.lu@ubs.com`,
                            fr: `<span class="bold">Yuanjing LU</span>, Executive Director chez UBS yuanjing.lu@ubs.com`
                        },
                    ]
                }
            ],

        ]
    },

];