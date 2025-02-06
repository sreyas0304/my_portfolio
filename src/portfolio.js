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
        paragraph: "Experienced Data Engineer with a strong background in cloud technologies, specializing in AWS and GCP. Proficient in designing and implementing scalable ETL/ELT pipelines, data warehousing, and advanced analytics solutions. Skilled in leveraging cutting-edge technologies such as Apache Airflow, Spark, and Kafka for efficient data processing and real-time streaming. Demonstrated expertise in integrating AI and machine learning models, to enhance data extraction and search capabilities. Committed to data quality and governance, with a track record of improving data integrity and optimizing query performance in large-scale systems.",
    },
    experiences: [
        {
            company: "CrowdDoing | San Francisco, US",
            position: "Data Analytics Engineer | June 2024 - Present",
            projects: [],
            work: [
                "Architected and implemented a scalable ETL pipeline using AWS S3, Docker, and Apache Airflow, streamlining the processing of large volumes of book data and metadata.",
                "Integrated advanced Large Language Models (LLMs) for intelligent data extraction and consolidation, resulting in a 40% improvement in context and quote extraction accuracy.",
                "Developed a sophisticated knowledge graph using Neo4j for storing vector embeddings and complex relationships, enhancing the depth and interconnectivity of book information.",
                "Implemented an AI-powered search system by integrating OpenAI APIs and Retrieval-Augmented Generation (RAG) models with LangChain, enabling highly contextual and relevant search capabilities.",
                "Designed and deployed an intelligent query routing system to differentiate between contextual and data-specific queries, significantly improving search precision and user experience."
            ]
        },
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
            position: "Data Engineer | Jan 2023 - May 2024",
            projects: [],
            work: [
                "Architected a scalable, cloud-based ETL pipeline for student and HR data using AWS services (S3, Glue, Lambda, Step Functions, Redshift), efficiently processing data from PeopleSoft Oracle databases.",
                "Automated infrastructure provisioning with AWS CloudFormation, reducing deployment time by 70% and improving reliability and reproducibility of the setup.",
                "Developed AWS Glue ETL jobs for data extraction, transformation (including PII handling), and loading into Redshift. Implemented incremental loading, decreasing processing time by 60%.",
                "Designed a Kimball-style dimensional model in Redshift, optimizing query performance through strategic use of distribution styles, sorting keys, and automated maintenance operations.",
                "Established a comprehensive Role-Based Access Control (RBAC) system, enhancing data governance and security compliance with granular access policies and audit logging.",
                "Developed and executed an extensive suite of data quality checks, implementing automated validations for completeness, consistency, and accuracy of data.",
                "Achieved significant improvements in data integrity, consistently monitoring over 500,000 records weekly, reducing data discrepancies by 85%, and fostering a culture of data quality across the organization."

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
            cgpa: "3.80/4.00",
            cpi: null,
            image: gujarat_technological_university_image,
            imageAlt: "TCET Logo and Text",
            transcriptLink: null,
            degreeCertiLink: null
        },
    ],
    skills: {
        technologies: ["R", "Python", "HTML", "CSS", "JavaScript", "SQL", "NoSQL", "SAS", "Shell Scripting"],
        tools: ["AWS", "GCP", "Docker", "Snowflake", "Databricks", "Tableau", "Power BI", "VS Code", "Anaconda", "MS Excel", "Gen AI" ],
        frameworks: ["Hadoop", "Hive", "Flink", "Airflow", "Spark", "REST Apis", "Kafka",  "React.js", "Express.js", "Node.js", "LangChain", "Terraform", "Jenkins", "OpenAI", "dbt(Data Build Tool)"],
        databases: ["PostgreSQL", "SQL Server", "MongoDB", "MySQL", "Neo4j", "Oracle", "Vector Databases", "SSMS"],
        cloudservices: ["S3", "EC2", "RDS", "Athena", "Redshift", "Kinesis", "EMR", "Lambda", "Glue", "Step Functions", "SQS", "SNS", "CloudFormation", "MWAA", "GCS", "BigQuery", "Compute ENgine", "Pub/Sub", "Dataproc", "Datafusion", "Cloud Composer"],
        industryKnowledge: ["Agile Methodologies", "Algorithms", "Continuous Integration and Continuous Delivery (CI/CD)", "Data Structures", "Data Modelling", "Extract Transform Load(ETL)", "Data Cleaning", "Data Orchestration", "Data Analysis", "Object-Oriented Programming (OOP)"],
        versionControl: ["Git", "GitHub", "GitLab", "AWS CodeBuild"]
    },
    projects: [
        {
            projectName: "Global Health Data ETL Pipleine",
            projectTechnologies: ["Python", "SQL", "Terraform", "Airflow", "dbt"],
            projectAWSTechnologies:null,
            projectGCPTechnologies: ["Compute Engine", "Cloud Storage", "BigQuery", "Looker Studio"],
            projectDuration: "December 2024",
            projectAbout: "This project implements an ELT (Extract, Load, Transform) data pipeline to process and analyze global health data using Google Cloud Platform (GCP), Apache Airflow, and dbt (data build tool). The pipeline extracts data from Google Cloud Storage (GCS), loads it into BigQuery, and applies transformations to create region-specific tables and views for analysis.",
            projectGitHubLink: "https://github.com/sreyas0304/Global_Disease_Analysis",
            projectDeploymentLink: null
        },
        {
            projectName: "Telecom Firm Churn Analysis",
            projectTechnologies: ["Python", "SQL", "Power BI"],
            projectAWSTechnologies:null,
            projectGCPTechnologies: null,
            projectDuration: "July 2024",
            projectAbout: "The End-to-End Churn Analysis project aims to tackle customer attrition by leveraging advanced data analytics and machine learning techniques. Focused on a telecom firm's customer data, the project encompasses creating a robust ETL process using SQL Server to manage and transform raw data. This data is then visualized through Power BI, offering insights at demographic, geographic, and service levels to understand customer behavior and identify churn patterns. The analysis extends to developing a churn prediction model using Random Forest in Python, enabling the anticipation of future churners. This comprehensive approach not only helps in visualizing and analyzing key metrics such as total customers, churn rate, and new joiners but also aids in strategic decision-making to enhance customer retention and loyalty across various industries.",
            projectGitHubLink: "https://github.com/sreyas0304/Telecom-Firm-Churn-Analysis.git",
            projectDeploymentLink: null
        },
        {
            projectName: "SmartCity Realtime Streaming Data Ingestion",
            projectTechnologies: ["Python", "Kafka", "Spark", "Docker", "AWS", "Tableau"],
            projectAWSTechnologies:null,
            projectGCPTechnologies: null,
            projectDuration: "June 2024",
            projectAbout: "Developed and optimized a real-time car travel data simulation system using Apache Kafka and Spark, achieving 50% increase in data processing speed. Utilized AWS S3, Glue, and Redshift for efficient data storage and transformation, enabling advanced analysis with Tableau.",
            projectGitHubLink: "https://github.com/sreyas0304/SmartCity-Realtime-Streaming-DataIngestion-.git",
            projectDeploymentLink: null
        },
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
            name: "AWS Data Engineer Associate",
            issuer: "Amazon Web Services",
            issueDate: "October 25, 2024",
            credentialId: null,
            credentialLink: "https://drive.google.com/file/d/1tRpihGXoXhT44NeyeRLIaE0XJM2R1Nz_/view?usp=drive_link",
        },
        {
            name: "AWS Cloud Practitioner Essentials",
            issuer: "Amazon Web Services",
            issueDate: "June 23, 2024",
            credentialId: null,
            credentialLink: "https://drive.google.com/file/d/1VD9NFQfAHpC6BJmFtZ7Svy3hUIqwaZTr/view?usp=drive_link",
        },
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