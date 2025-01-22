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
                fr: "",
                en: "Passionate about finance and programming, I acquired my IT skills through hands-on experience and a desire to expand my knowledge. I'm committed to developing tools that prioritize business needs. My expertise covers languages like Python, SQL, JavaScript, and VBA, applied to app development, database interaction, analysis, and automation."
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
                            en: "Designed a PostgreSQL database based on accounting rules: transaction management, join queries, triggers, stored procedures, views, and audit trail with access management",
                            fr: ""
                        },
                        {
                            en: "Audited IT infrastructures across 5 themes (central database, network file management, version control, dev environments); implemented recommendations and ensured follow-up",
                            fr: ""
                        },
                        {
                            en: "Created a tool to automate daily reconciliation of the fund’s trading and accounting data with counterparties",
                            fr: ""
                        },
                        {
                            en: "Developed a Python project to verify customer data with government APIs using fuzzy matching (Levenshtein) and apply a margin",
                            fr: ""
                        },
                        {
                            en: "Integrated market data into databases and risk simulations (VaR) with Bloomberg Desktop API",
                            fr: ""
                        }
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
                            en: "Developed customer portfolio analysis tools for the front office, including cross-asset performance calculations, backtesting, simulation, and decision-support tools for portfolio management and book monitoring to align with CIO recommendations",
                            fr: ""
                        },
                        {
                            en: "Maintained and improved team applications; implemented workflow management tools using Python, PowerShell, and Alteryx to feed these applications daily",
                            fr: ""
                        },
                        {
                            en: "Set up UAC test campaigns for 10+ departments; collected data and feedback from teams; produced improvement and correction specs",
                            fr: ""
                        },
                        {
                            en: "Designed a fully functional support ticket management mockup in React with NextJS and MongoDB in under 3 weeks for presentation to top management",
                            fr: ""
                        },
                        {
                            en: "Managed the migration of 2 static applications to full-stack, building the backend with Django and NodeJS, and the database with SQL Server and the API",
                            fr: ""
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
                            en: "Collaborated with bankers and product specialists to create customized investment proposals for UHNW clients (±30M€)",
                            fr: "Travail avec les banquiers, les gérants et spécialistes pour créer des propositions d'investissement pour des clients UHNW (±30M€ de patrimoine)"
                        },
                        {
                            en: "Created ±5 reports per month, including updates and detailed portfolio performance calculations",
                            fr: "Édition d'en moyenne 5 reportings par mois récapitulant les mouvements et des calculs détaillés de la performance"
                        },
                        {
                            en: "Automated processing of over 10,000 PDFs with Python to update databases using text and image recognition modules",
                            fr: "Automatisation de la lecture d'environ 10 000 documents PDF afin d'alimenter une base de données à l'aide de modules de reconnaissance de texte et d'images"
                        },
                        {
                            en: "Maintained and enhanced a tool to automate portfolio reporting using Python and VBA",
                            fr: "Maintenance et amélioration d'outils automatisés avec Python et VBA"
                        }
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
                            en: "Prepared a paper for weekly client meetings gathering analyses and briefs over recent news from US and EU listed companies (results, governance and publications)",
                            fr: ""
                        },
                        {
                            en: "Wrote ±20 documented sheets on fundamental and financial analysis using qualitative and quantitative sources",
                            fr: ""
                        },
                        {
                            en: "Monitored and improved a portfolio tracking application with Excel VBA",
                            fr: ""
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
                        en: "<li>Master in Management (Programme Grande École)</li>",
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
                            en: "Electives in financial markets",
                            fr: "Cours électifs en finance : Produits dérivés, Fixed Income, Machine-Learning, Gestion de Portefeuille, Finance de marché"
                        },
                    ]
                },
                {
                    type: 'header',
                    left: {
                        en: "<li>MS in Wealth Management</li>",
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
                        en: "<li>5-month Exchange Semester in Brazil</li>",
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
                        en: "Classes Préparatoires aux Grandes Écoles de commerce (CPGE ECE)",
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
                        en: "Python",
                        fr: "Langages de programmation"
                    },
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: "Data: pandas, regex, numpy, requests, selenium",
                            fr: "Python"
                        },
                        {
                            en: "ML: pytesseract, TensorFlow",
                            fr: "Python"
                        },
                    ]
                }
            ],
            [
                {
                    type: 'header',
                    left: {
                        en: "SQL",
                        fr: "Langages de programmation"
                    },
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: "PostgreSQL / SQL Server",
                            fr: ""
                        },
                        {
                            en: "Database design & normalization",
                            fr: ""
                        },
                        {
                            en: "Procedures, Triggers & Views",
                            fr: ""
                        },
                        {
                            en: "Data analysis",
                            fr: ""
                        },
                    ]
                }
            ],
            [
                {
                    type: 'header',
                    left: {
                        en: "Web-devevelopment",
                        fr: ""
                    },
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: "Javascript NodeJS: React, Next & TypeScript",
                            fr: ""
                        },
                        {
                            en: "Python: Django & Flask",
                            fr: ""
                        },
                        {
                            en: "RestAPI & JSON",
                            fr: ""
                        }
                    ]
                }
            ],
            [
                {
                    type: 'header',
                    left: {
                        en: "Automation",
                        fr: ""
                    },
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: "VBA",
                            fr: ""
                        },
                        {
                            en: "Batch & Powershell",
                            fr: ""
                        },
                        {
                            en: "Task Scheduling",
                            fr: ""
                        },
                    ]
                }
            ],
            [
                {
                    type: 'header',
                    left: {
                        en: "Data analysis",
                        fr: ""
                    },
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: "Advanced Excel",
                            fr: ""
                        },
                        {
                            en: "Alteryx",
                            fr: ""
                        },
                        {
                            en: "Power BI",
                            fr: ""
                        },
                        {
                            en: "Custom charting (highcharts.js, D3.js)",
                            fr: ""
                        },
                    ]
                }
            ],
            [
                {
                    type: 'header',
                    left: {
                        en: "Miscellaneous",
                        fr: "Logiciels"
                    },
                },
                {
                    type: 'list',
                    items: [
                        {
                            en: "Object-Oriented Programming",
                            fr: "Git - Gitlab"
                        },
                        {
                            en: "Environment: Anaconda, Jupyter, Git & Gitlab, VS Code, Docker",
                            fr: "Git - Gitlab"
                        },
                        {
                            en: "Bloomberg Terminal",
                            fr: ""
                        },
                    ]
                }
            ],
        ]
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
                        en: `Portfolio Allocation Backtesting Simulator`,
                        fr: "",
                    },
                    right: {
                        en: `Languages: Python (backend & data analysis), Javascript (frontend)`,
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
                    en: "Language: Python (pandas, pdfplumber, pytesseract, TensorFlow)",
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