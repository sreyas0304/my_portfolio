import dhrumil_about_image from './assets/dhrumil_images/IMG_3113.jpg';
import dalhousie_university_image from './assets/education_images/iu.jpg';
import gujarat_technological_university_image from './assets/education_images/tcet_1.jpg';
// import medium_logo from './assets/logo_images/medium_logo.jpg';

export const portfolio = {
    aboutme: {
        fullName: "Sreyas Sawant",
        email: "sawantsreyas2@gmail.com",
        profileImage: dhrumil_about_image,
        linkedInLink: "https://www.linkedin.com/in/sreyas-sawant-5b7a8118b/",
        githubLink: "https://github.com/sreyas0304",
        // instagramLink: "https://www.instagram.com/dhrumil_shah_98/",
        // facebookLink: "https://www.facebook.com/dhrumil.shah1998/",
        // twitterLink: "https://twitter.com/dhrumil_shah_98",
        heading: "Hi all, I'm Sreyas",
        paragraph: "Experienced data analyst and engineer adept at navigating complex datasets, leveraging advanced tools and methodologies to derive actionable insights and drive informed decision-making. Let's connect to transform your data into valuable assets!",
    },
    experiences: [
        {
            company: "PwC Power BI Job Simulation on Forage | Remote",
            position: "Data Analyst | May 2024",
            projects: [],
            work: [
                "Completed a job simulation where I strengthened my PowerBI skills to better understand clients and their data visualisation needs.",
                "Demonstrated expertise in data visualization through the creation of Power BI dashboards that effectively conveyed KPIs, showcasing the ability to respond to client requests with well-designed solutions.",
                "Strong communication skills reflected in the concise and informative email communication with engagement partners, delivering valuable insights and actionable suggestions based on data analysis.",
                "Leveraged analytical problem-solving skills to examine HR data, particularly focusing on gender-related KPIs, and identified root causes for gender balance issues at the executive management level, highlighting a commitment to data-driven decision-making."
            ]
        },
        {
            company: "Indiana University - Bloomington | Indiana, US",
            position: "Research Assistant | Jun 2023 - Aug 2023",
            projects: [],
            work: [
                "Conducted comprehensive data collection activities focusing on geological, hydrological, and ecological aspects of regions in Botswana and South Africa. Consolidated diverse datasets into a unified format suitable for analysis, ensuring data integrity and consistency.",
                "Leveraged Python and TensorFlow to design and deploy a sophisticated machine learning model. The model was specifically tailored to distinguish elephant ivory from other animal species' ivory with remarkable precision, achieving a notable classification accuracy of 95%.",
                "Employed advanced data modeling techniques to structure and refine the collected data. Conducted data transformation processes to enhance data quality and prepare it for analytical purposes, ensuring compatibility with subsequent analytical methodologies.",
                "Utilized ArcGIS to visualize spatial data and create informative maps. Applied geographic analysis techniques to gain insights into the spatial distribution of geological, hydrological, and ecological features, facilitating a deeper understanding of the regions under study.",
                "Collaborated with interdisciplinary teams comprising geologists, hydrologists, ecologists, and data scientists to ensure comprehensive analysis and interpretation of the collected data. Integrated diverse perspectives to enrich analytical outcomes and generate holistic insights.",
                "Evaluated the impact of the project by assessing the effectiveness of the developed machine learning model in ivory classification. Analyzed the implications of the findings on wildlife conservation efforts and proposed potential strategies for mitigating illegal ivory trade based on the obtained insights."
            ]
        },
        {
            company: "The Sparks Foundation | Mumbai, IN",
            position: "Graduate Intern | Dec 2021 - Mar 2022",
            projects: [],
            work: [
                "Spearheaded comprehensive data cleaning and preprocessing initiatives, meticulously addressing discrepancies and errors within raw datasets. Implemented robust techniques resulting in a notable 25% reduction in data errors and inconsistencies, ensuring the integrity and reliability of subsequent analyses.",
                "Exhibited proficiency in utilizing Python's scikit-learn library to implement diverse machine learning algorithms. Applied algorithms strategically to enhance predictive modeling accuracy by an impressive 20%, reflecting adeptness in algorithm selection and parameter tuning to optimize model performance.",
                "Leveraged Tableau's powerful data visualization capabilities to craft visually compelling representations of complex datasets. Produced engaging visualizations that facilitated intuitive understanding and interpretation of data insights, leading to a significant 30% increase in actionable insights derived from the analyzed data.",
                "Demonstrated adept analytical problem-solving skills throughout the project lifecycle. Identified key challenges associated with data quality and predictive modeling accuracy, devising effective strategies to overcome obstacles and achieve project objectives successfully.",
                "Engaged collaboratively with peers and stakeholders to exchange insights and perspectives, fostering a synergistic work environment conducive to innovation and knowledge sharing. Actively contributed to team discussions and decision-making processes, leveraging collective expertise to drive project outcomes.",
                "Exhibited a proactive approach to continuous learning and skill development, staying abreast of emerging trends and technologies in the field of data analytics. Embraced feedback and opportunities for improvement, refining techniques and methodologies to enhance overall project efficiency and effectiveness."
            ]
        }
    ],
    educations: [
        {
            shortform: null,
            name: "Indiana University | Bloomington, US",
            years: "August 2022 - May 2024",
            course: "Master of Computer Science",
            cgpa: "3.56/4.00",
            cpi: null,
            image: dalhousie_university_image,
            imageAlt: "Indiana University Logo and Text",
            transcriptLink: null,
            degreeCertiLink: null
        },
        {
            shortform: null,
            name: "Thakur College of Engineering & Technology | Mumbai, IN",
            years: "August 2018 - May 2022",
            course: "Bachelors in Computer Engineering",
            cgpa: "9.67/10.00",
            cpi: null,
            image: gujarat_technological_university_image,
            imageAlt: "TCET Logo and Text",
            transcriptLink: null,
            degreeCertiLink: null
        },
    ],
    skills: {
        technologies: ["R", "Python", "HTML", "CSS", "JavaScript", "SQL", "NoSQL", "SAS"],
        tools: ["AWS", "Snowflake", "Databricks", "Tableau", "Power BI", "VS Code", "Anaconda", "MS Excel" ],
        frameworks: ["Snowpark", "Airflow", "Spark", "REST Apis", "Hadoop", "React.js", "Express.js", "Node.js"],
        databases: ["PostgreSQL", "SQLite", "NoSQL", "MySQL", "Neo4j", "Oracle"],
        industryKnowledge: ["Agile Methodologies", "Algorithms", "Continuous Integration and Continuous Delivery (CI/CD)", "Data Structures", "Data Modelling", "Extract Transform Load(ETL)", "Data Cleaning", "Data Orchestration", "Data Analysis", "Object-Oriented Programming (OOP)"],
        versionControl: ["Git", "GitHub", "GitLab", "AWS CodeBuild"]
    },
    projects: [
        {
            projectName: "CRNY Dashboard Development",
            projectTechnologies: ["Microsoft Power BI", "Python", "SQL", "Github"],
            projectAWSTechnologies:null,
            projectGCPTechnologies: null,
            projectDuration: "Feb 2024 - Mar 2024",
            projectAbout: "CRNY Dashboard is a data-driven project aimed at understanding and addressing the needs of New York's artist community through comprehensive survey data analysis. Leveraging advanced data visualization techniques, the project delves into the demographics, financial wellness, and COVID-19 impact on artists in the region. From applicant demographics to financial safety nets and caregiving responsibilities, each aspect is meticulously examined to uncover insights crucial for supporting artists. The project utilizes Python for data preprocessing and SQL for data manipulation, culminating in captivating visualizations created using Microsoft's Power BI platform. By shedding light on the challenges and opportunities faced by artists, this project paves the way for informed decision-making and targeted interventions to foster the growth and sustainability of the arts community in New York.",
            projectGitHubLink: "https://github.com/sreyas0304/CRNY-Survey-Data-Analysis-.git",
            projectDeploymentLink: "https://app.powerbi.com/links/z-iLpN2fgg?ctid=1113be34-aed1-4d00-ab4b-cdd02510be91&pbi_source=linkShare&bookmarkGuid=1ccb26f8-39e0-4653-856e-7a7190288014"
        },
        {
            projectName: "Bank Loan Payment Analysis",
            projectTechnologies: ["Tableau", "Python", "SQL", "Github"],
            projectAWSTechnologies:null,
            projectGCPTechnologies: null,
            projectDuration: "Apr 2024 - May 2024",
            projectAbout: "Developed a comprehensive Bank Loan Payment Analysis Dashboard to facilitate data-driven decision-making and optimize lending strategies within the bank. The dashboard consists of three interconnected modules: Summary, Overview, and Details, providing stakeholders with a holistic view of lending operations. This project showcases expertise in data analysis, dashboard development, and project management, contributing to enhanced operational efficiency and strategic decision-making within the organization.",
            projectGitHubLink: "https://github.com/sreyas0304/Bank-Loan-Payment-Analysis-Dashboard",
            projectDeploymentLink: "https://public.tableau.com/views/BankLoanDataAnalysis_17154944361490/Details?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link"
        },
        {
            projectName: "Spotify End-to-End Data Pipeline",
            projectTechnologies: ["Python","AWS", "Git", "GitHub", "Jupyter Notebook"],
            projectAWSTechnologies: ["AWS S3", "AWS Lambda", "AWS Glue", "AWS Athena", "AWS IAM user", "AWS CodeBuild"],
            projectGCPTechnologies: null,
            projectDuration: " Dec 2023 - Jan 2024",
            projectAbout: "I led the implementation of an end-to-end data pipeline for Spotify using Python and AWS. Utilizing the Spotify API, I retrieved and processed data, leveraging AWS services like S3, Lambda, Glue, IAM, and Athena for transformation and analysis. This pipeline facilitated seamless handling of Spotify's data, enabling comprehensive insights into user behaviors and platform trends.",
            projectGitHubLink: "https://github.com/sreyas0304/Spotify-End-to-End-Data-Pipeline.git",
            projectDeploymentLink: null
        },
        {
            projectName: "End-to-End ETL and Analysis on Amazon's Mobile Sales Orders",
            projectTechnologies: ["Python", "Snowflake", "AWS", "SQL", "Git", "Github"],
            projectAWSTechnologies: ["Snowpark API", "AWS S3", "AWS IAM"],
            projectGCPTechnologies: null,
            projectDuration: "Oct 2023 - Dec 2023",
            projectAbout: "I spearheaded an end-to-end Extract, Transform, Load (ETL) process for Amazon's mobile sales orders, utilizing Snowpark and Snowflake technologies. We facilitated seamless data flow from three regions, ensuring integrity and accessibility. Our analysis revealed a notable 10% annual growth in sales, empowering stakeholders with actionable insights. Technical tools included SQL, Snowflake, Snowpark Python API, and AWS S3 bucket & IAM for secure data management and analysis.",
            projectGitHubLink: "https://github.com/sreyas0304/Amazon-End-to-End-Sales-Analysis-Pipeline.git",
            projectDeploymentLink: null
        },
        {
            projectName: "Football Transfermarket Analysis",
            projectTechnologies: ["Python","Matplotlib", "Plotly Dash", "Tableau Public", "Git", "GitHub"],
            projectAWSTechnologies: null,
            projectGCPTechnologies: null,
            projectDuration: "Jul 2023 - Sep 2023",
            projectAbout: "In the Football Transfer Market Analysis project, we delved into the global football transfer markets, focusing on the top 5 leagues. Leveraging a decade's worth of data, our analysis unveiled spending patterns, strategic decisions, and correlations between investments and on-field success. Through meticulous data visualization using Python, Matplotlib, Plotly Dash, and Tableau Public, we provided comprehensive insights to stakeholders, empowering them to make informed decisions in the dynamic landscape of football transfers.",
            projectGitHubLink: "https://github.com/sreyas0304/Football-Transfermarket-Analysis.git",
            projectDeploymentLink: null
        },
        {
            projectName: "Weather Data Ingestion Pipeline",
            projectTechnologies: ["Python","AWS", "Git", "GitHub", "Airflow", "SQL"],
            projectAWSTechnologies: ["AWS S3", "AWS Redshift ", "AWS Glue", "AWS Codebuild", "AWS Managed Apache Airflow"],
            projectGCPTechnologies: null,
            projectDuration: "May 2024",
            projectAbout: "The Weather Data Ingestion Pipeline project automates the extraction, transformation, and loading (ETL) of 5 days' worth of weather data in JSON format from the OpenWeatherMap website using API calls, converting it into CSV format, and storing it in an S3 bucket. Orchestrated by Apache Airflow, the pipeline ensures seamless execution of tasks, while a triggered Glue job transfers the data to Redshift for further analysis. This scalable solution leverages AWS services to maintain data integrity and reliability, empowering organizations with timely and actionable weather insights for informed decision-making.",
            projectGitHubLink: "https://github.com/sreyas0304/Weather-Data-Ingestion-Pipeline.git",
            projectDeploymentLink: null
        }
    ],
    blogs: [],
    certifications: [
        {
            name: "Big Data 101",
            issuer: "Cognitive Class (IBM)",
            issueDate: "May 31, 2024",
            credentialId: "513e2f3a8456403f9204d0946316b5f8",
            credentialLink: "https://courses.cognitiveclass.ai/certificates/513e2f3a8456403f9204d0946316b5f8",
        },
        {
            name: "PwC Power BI Simulation",
            issuer: "Forage",
            issueDate: "May 28, 2024",
            credentialId: "2dKpsbzTcuw5TTWhf",
            credentialLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_dE4qWGZoWpPtZADRq_1716872519228_completion_certificate.pdf",
        },
        {
            name: "Lakehouse Fundamentals",
            issuer: "Databricks",
            issueDate: "Mar 19, 2024",
            credentialId: null,
            credentialLink: "https://drive.google.com/file/d/1DvPLOo6JGuN_cdnO1MptPj0UYWaTIUiZ/view?usp=sharing",
        },
        {
            name: "Hands On Essentials - Data Warehouse",
            issuer: "Snowflake",
            issueDate: "Dec 28, 2023",
            credentialId: null,
            credentialLink: "https://drive.google.com/file/d/1R_c-2BMSsSq8hl6GOnpynWYH2UDFdvbe/view?usp=sharing",
        },
        {
            name: "Hands On Essentials - Data Applications",
            issuer: "Snowflake",
            issueDate: "Dec 30, 2023",
            credentialId: null,
            credentialLink: "https://drive.google.com/file/d/1--d4z8YRc-p1PaUCPUNv8a1f2CujXB9i/view?usp=sharing",
        },
        {
            name: "Hands On Essentials - Collaboration & Marketplace",
            issuer: "Snowflake",
            issueDate: "Jan 6, 2024",
            credentialId: null,
            credentialLink: "https://drive.google.com/file/d/1QulNk05ukaP0Rjp6c72Av7Z5ekJl45na/view?usp=sharing",
        },
        {
            name: "Hands On Essentials - Data Lake",
            issuer: "Snowflake",
            issueDate: "Jan 8, 2024",
            credentialId: null,
            credentialLink: "https://drive.google.com/file/d/1I3r869byiz2ciWyCyJi6xEBUd2NoXvsY/view?usp=sharing",
        },
        {
            name: "Hands On Essentials - Data Engineering",
            issuer: "Snowflake",
            issueDate: "Jan 9, 2024",
            credentialId: null,
            credentialLink: "https://drive.google.com/file/d/1uPAahGFVkY5QeHKpWVqbvsPmA5rHuS33/view?usp=sharing",
        },
        {
            name: "Exploratory Data Analysis in SQL",
            issuer: "Datacamp",
            issueDate: "Jan 16, 2024",
            credentialId: null,
            credentialLink: "https://drive.google.com/file/d/1MFQL_IRJH1lYcJlJ84pswQ1KkSlg7Qld/view?usp=sharing",
        },
        {
            name: "Building Data Engineering Pipelines in Python",
            issuer: "Datacamp",
            issueDate: "Jan 19, 2024",
            credentialId: null,
            credentialLink: "https://drive.google.com/file/d/1zcjXvyKeQOlQnoPuDCSCZvtk4-FJ6S9f/view?usp=sharing",
        },
        {
            name: "Introduction to PySpark",
            issuer: "Datacamp",
            issueDate: "Dec 19, 2023",
            credentialId: null,
            credentialLink: "https://drive.google.com/file/d/1ScIS0_nPLPJ-p01-lOzO-PfXj0bou0lY/view?usp=sharing",
        },
        {
            name: "Introduction to Airflow in Python",
            issuer: "Datacamp",
            issueDate: "Jan 26, 2024",
            credentialId: null,
            credentialLink: "https://drive.google.com/file/d/1h_2Ipb9ROZClwwUExjJew5_sgVGGtZID/view?usp=sharing",
        },
        {
            name: "Big Data Fundamentals with PySpark",
            issuer: "Datacamp",
            issueDate: "Dec 21, 2023",
            credentialId: null,
            credentialLink: "https://drive.google.com/file/d/1Z5lIL0zmyqkOihhlxpV2m7lcIcptXAxg/view?usp=sharing",
        },
        {
            name: "Data Analytics Essentials",
            issuer: "Cisco Networking Academy",
            issueDate: "Dec 26, 2023",
            credentialId: null,
            credentialLink: "https://drive.google.com/file/d/1LLfTs8ZK73EdYSpfdyoa_BBVzfSI_JOc/view?usp=sharing",
        }
    ],
    contactMe: {
        line: "Discuss a project or just want to say Hi? I am open for a conversation."
    }
};