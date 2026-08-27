// Content sourced literally from CV_JuanPabloKuri_ES.pdf and
// CV_JuanPabloKuri_EN.pdf (master CVs, August 2026). Do not paraphrase or
// translate between languages here — each language block is copied from its
// own PDF.

export interface SelectedProject {
    title: string;
    meta: string;
    context: string;
    bullets: string[];
}

export interface OtherProject {
    title: string;
    body: string;
}

export interface SkillCategory {
    title: string;
    description: string;
}

export interface ResumeContent {
    lang: "es" | "en";
    name: string;
    role: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    linkedinHref: string;
    github: string;
    githubHref: string;
    site: string;
    siteHref: string;
    nav: {
        projects: string;
        education: string;
        contact: string;
        portfolio: string;
    };
    headings: {
        summary: string;
        selectedProjects: string;
        otherProjects: string;
        skills: string;
        softSkills: string;
        education: string;
        certifications: string;
        contact: string;
        emailLabel: string;
        locationLabel: string;
        downloadPdf: string;
    };
    summary: string;
    selectedProjects: SelectedProject[];
    otherProjects: OtherProject[];
    skills: SkillCategory[];
    softSkills: SkillCategory[];
    education: {
        title: string;
        institution: string;
        dates: string;
        details: string;
    };
    certifications: {
        technicalLabel: string;
        technical: string;
        crossFunctionalLabel: string;
        crossFunctional: string;
        languagesLabel: string;
        languages: string;
    };
    pdfHref: string;
    metaTitle: string;
    metaDescription: string;
}

export const resume: Record<"es" | "en", ResumeContent> = {
    es: {
        lang: "es",
        name: "Juan Pablo Kuri Ricárdez",
        role: "Ingeniería de Software, 7.º semestre · En busca de prácticas profesionales",
        location: "Orizaba, Veracruz, México",
        phone: "938 120 6950",
        email: "juankupa11@gmail.com",
        linkedin: "linkedin.com/in/juankuri",
        linkedinHref: "https://linkedin.com/in/juankuri",
        github: "github.com/juankuri",
        githubHref: "https://github.com/juankuri",
        site: "juankuri.pages.dev",
        siteHref: "https://juankuri.pages.dev",
        nav: {
            projects: "Proyectos",
            education: "Formación",
            contact: "Contacto",
            portfolio: "Portafolio",
        },
        headings: {
            summary: "Perfil",
            selectedProjects: "Proyectos principales",
            otherProjects: "Otros proyectos",
            skills: "Habilidades",
            softSkills: "Habilidades blandas",
            education: "Formación",
            certifications: "Certificaciones e idiomas",
            contact: "Contacto",
            emailLabel: "Email",
            locationLabel: "Ubicación",
            downloadPdf: "Descargar PDF",
        },
        summary:
            "Estudiante de Ingeniería de Software, 7.º semestre. Desarrollo solo, de los requisitos al código, el sistema de horarios de la Coordinación Académica de mi facultad: autenticación, siete catálogos y armado de horarios para dos roles, con Java, Spring Boot y PostgreSQL. Busco prácticas profesionales, en Orizaba, cercano a Orizaba o remoto. Mis prácticas profesionales formales empiezan en agosto de 2027.",
        selectedProjects: [
            {
                title: "Sistema de Gestión de Horarios Académicos",
                meta: "Feb 2026 – actualidad",
                context: "Proyecto extracurricular, responsable único. Cliente: Coordinación Académica de la Facultad",
                bullets: [
                    "Entrevisté al Coordinador Académico para identificar los conflictos de la asignación manual de horarios y traduje el problema a un SRS con casos de uso.",
                    "Diseñé el modelo de datos relacional y documenté la arquitectura con el modelo C4, usando PlantUML y draw.io.",
                    "Backend en Java con Spring Boot y PostgreSQL, migraciones con Flyway y autenticación con JWT. Interfaz en React y Vite.",
                    "Funcionando en entorno local: autenticación, siete catálogos (periodos académicos, carreras, planes educativos, materias, profesores, grupos y usuarios) y armado de horarios. Rol administrador sobre los catálogos y rol Coordinador con catálogos limitados y armado de horarios, validado con el cliente en cada iteración.",
                ],
            },
            {
                title: "Sitio web y portal de resultados para laboratorio clínico (DUOLAB)",
                meta: "2026",
                context: "Proyecto extracurricular para un laboratorio de análisis clínicos",
                bullets: [
                    "Levanté las necesidades del negocio con los responsables del laboratorio y definí el alcance de un portal de consulta de resultados para pacientes.",
                    "Desarrollé y desplegué el sitio público con Astro sobre Cloudflare Pages.",
                    "Acoté la entrega al sitio público y dejé el portal de resultados condicionado a resolver el marco legal del tratamiento de datos clínicos.",
                ],
            },
            {
                title: "Sistema de gestión de citas para consultorio dental",
                meta: "2026",
                context: "Taller de Prueba de Software, equipo de cinco personas",
                bullets: [
                    "Entrevisté a tres dentistas y a la responsable de una clínica con cuatro consultorios para entender el proceso de agendado y a sus actores.",
                    "Definí el problema, el alcance del MVP y las historias de usuario a partir de tres puntos de dolor priorizados: ausentismo a citas, administración ineficiente y saturada, y falta de seguimiento postratamiento.",
                    "Elaboro el documento de visión y alcance y la EDT, y reviso los casos de uso y los mockups que produce el equipo.",
                ],
            },
        ],
        otherProjects: [
            {
                title: "Sistema de seguimiento de empleados en tiempo real (académico en equipo, 2025).",
                body: "Diseñé el modelo entidad-relación y relacional, desarrollé la API REST con NestJS, TypeScript y PostgreSQL, y elaboré la documentación técnica y de arquitectura.",
            },
            {
                title: "Simulador de cajero automático con chat de soporte en LAN (académico en equipo, 2025).",
                body: "Implementé la comunicación cliente-servidor con sockets TCP en Java y el manejo de conexiones concurrentes.",
            },
            {
                title: "Clasificadores de texto y de tamizaje clínico (académicos, 2025, Python y scikit-learn).",
                body: "Clasificador de spam comparando Naive Bayes, regresión logística, Linear SVC y Random Forest. Clasificador AQ-10 en el que prioricé Recall sobre Precision por el costo clínico de un falso negativo, con balanceo de clases y ajuste de umbral.",
            },
            {
                title: "Manuales de usuario de un sistema de monitoreo de diabetes (2026).",
                body: "Redacté dos manuales diferenciados por audiencia, uno para pacientes en aplicación móvil y otro para médicos en plataforma web, revisados con los interesados del proyecto.",
            },
        ],
        skills: [
            { title: "Análisis y requisitos", description: "Entrevistas con stakeholders, SRS, casos de uso, historias de usuario, definición de alcance." },
            { title: "Backend", description: "Java (Spring Boot), TypeScript (NestJS), APIs REST, JWT." },
            { title: "Bases de datos", description: "PostgreSQL, SQL, modelado entidad-relación y relacional, migraciones con Flyway." },
            { title: "Arquitectura y modelado", description: "Modelo C4, PlantUML, draw.io." },
            { title: "Herramientas y entorno", description: "Git y GitHub, Linux, Cloudflare Pages." },
            { title: "Nivel básico", description: "Python con scikit-learn, Astro, React y Vite." },
        ],
        softSkills: [
            {
                title: "Comunicación clara",
                description: "Mantengo informados a clientes e interesados con actualizaciones constantes, desde las entrevistas de requisitos hasta las revisiones de cada iteración.",
            },
            {
                title: "Resolución de conflictos",
                description: "Escucho las necesidades de cada interesado antes de proponer una solución, y negocio un alcance que funcione para todos.",
            },
            {
                title: "Adaptabilidad",
                description: "Aprendo rápido nuevas herramientas y lenguajes cuando el proyecto lo exige, desde backends en Java hasta clasificadores en Python.",
            },
        ],
        education: {
            title: "Ingeniería de Software, Universidad Veracruzana",
            institution: "Facultad de Negocios y Tecnologías, Campus Ixtaczoquitlán, Veracruz.",
            dates: "Ago 2023 – Dic 2027",
            details: "7.º semestre, promedio 9.2. Servicio social en curso; prácticas profesionales a partir de agosto de 2027.",
        },
        certifications: {
            technicalLabel: "Técnicas",
            technical: "Código Facilito · Curso Profesional de Docker, Introducción a DevOps, Ciclo de vida del desarrollo de software. Kaggle (2025) · Introduction to Python, Introduction to Machine Learning. Cisco Networking Academy (2025) · Endpoint Security, Digital Safety and Security Awareness.",
            crossFunctionalLabel: "Habilidades transversales",
            crossFunctional: "IE University · Customer Centricity and Customer Experience. Santander Open Academy · Strategic Thinking & Strategic Mindset.",
            languagesLabel: "Idiomas",
            languages: "Español nativo. Inglés: lectura y redacción técnica fluidas, conversación funcional.",
        },
        pdfHref: "/CV_JuanPabloKuri_ES.pdf",
        metaTitle: "Juan Pablo Kuri Ricárdez — CV",
        metaDescription:
            "Estudiante de Ingeniería de Software, 7.º semestre. Desarrollo solo, de los requisitos al código, el sistema de horarios de la Coordinación Académica de mi facultad: autenticación, siete catálogos y armado de horarios para dos roles, con Java, Spring Boot y PostgreSQL.",
    },
    en: {
        lang: "en",
        name: "Juan Pablo Kuri Ricárdez",
        role: "Software Engineering student, 4th year · Seeking internship (Orizaba / remote)",
        location: "Orizaba, Veracruz, Mexico",
        phone: "+52 938 120 6950",
        email: "juankupa11@gmail.com",
        linkedin: "linkedin.com/in/juankuri",
        linkedinHref: "https://linkedin.com/in/juankuri",
        github: "github.com/juankuri",
        githubHref: "https://github.com/juankuri",
        site: "juankuri.pages.dev",
        siteHref: "https://juankuri.pages.dev",
        nav: {
            projects: "Projects",
            education: "Education",
            contact: "Contact",
            portfolio: "Portfolio",
        },
        headings: {
            summary: "Summary",
            selectedProjects: "Selected projects",
            otherProjects: "Other projects",
            skills: "Skills",
            softSkills: "Soft skills",
            education: "Education",
            certifications: "Certifications and languages",
            contact: "Contact",
            emailLabel: "Email",
            locationLabel: "Location",
            downloadPdf: "Download PDF",
        },
        summary:
            "Software Engineering student, 7th of 9 semesters. Building end to end, on my own, the class scheduling system for my faculty's academic coordination office: authentication, seven catalogs, and schedule generation for two roles, in Java, Spring Boot, and PostgreSQL. Open to internships in Orizaba, nearby, or remote. My formal degree-required internship starts August 2027.",
        selectedProjects: [
            {
                title: "Sistema de Gestión de Horarios Académicos",
                meta: "Feb 2026 – present",
                context: "Extracurricular project, sole person responsible. Client: Academic Coordination of the Faculty.",
                bullets: [
                    "Interviewed the academic coordinator to elicit pain points around manual schedule assignment and translated them into an SRS with use cases.",
                    "Designed the relational data model and documented the architecture with the C4 model, using PlantUML and draw.io.",
                    "Backend in Java with Spring Boot and PostgreSQL, database migrations with Flyway, and JWT authentication. Frontend in React and Vite.",
                    "Running locally end to end: authentication, seven catalogs (academic terms, majors, curricula, courses, professors, groups, and users), and schedule generation. Admin role covers full catalog management; academic coordinator role has scoped catalog access and drives schedule generation. Validated with the client every iteration.",
                ],
            },
            {
                title: "DUOLAB, clinical laboratory website and patient results portal",
                meta: "2026",
                context: "Extracurricular, for a clinical analysis laboratory",
                bullets: [
                    "Ran discovery with the lab's operations leads and defined the scope of a patient-facing results portal.",
                    "Built and deployed the public site with Astro on Cloudflare Pages.",
                    "Narrowed the delivery to the public site and put the results portal on hold until the legal framework for handling clinical data was resolved.",
                ],
            },
            {
                title: "Dental clinic appointment management system",
                meta: "2026",
                context: "Taller de Prueba de Software (Software Testing Workshop), team of five",
                bullets: [
                    "Ran discovery interviews with three dentists and the manager of a four-office clinic to map the scheduling process and its actors.",
                    "Framed the problem, scoped the MVP, and drafted user stories around three prioritized pain points: no-shows, overbooked and inefficient administration, and lack of post-treatment follow-up.",
                    "Author the vision and scope document and the work breakdown structure; review the use cases and mockups produced by the team.",
                ],
            },
        ],
        otherProjects: [
            {
                title: "Real-time employee tracking system (academic, team, 2025).",
                body: "Designed the ER and relational models, built the REST API with NestJS, TypeScript, and PostgreSQL, and authored the technical and architectural documentation.",
            },
            {
                title: "ATM simulator with LAN support chat (academic, team, 2025).",
                body: "Implemented client-server communication over TCP sockets in Java and concurrent connection handling.",
            },
            {
                title: "Text and clinical screening classifiers (academic, 2025, Python and scikit-learn).",
                body: "Spam classifier comparing Naive Bayes, logistic regression, Linear SVC, and Random Forest. AQ-10 screening classifier where I prioritized recall over precision given the clinical cost of a false negative, with class balancing and threshold tuning.",
            },
            {
                title: "User manuals for a diabetes monitoring system (2026).",
                body: "Wrote two audience-specific manuals, one for patients on the mobile app and one for physicians on the web platform, reviewed with project stakeholders.",
            },
        ],
        skills: [
            { title: "Analysis and requirements", description: "Stakeholder interviews, requirements elicitation, SRS, use cases, user stories, scope definition." },
            { title: "Backend", description: "Java (Spring Boot), TypeScript (NestJS), REST APIs, JWT." },
            { title: "Databases", description: "PostgreSQL, SQL, ER and relational modeling, migrations with Flyway." },
            { title: "Architecture and modeling", description: "C4 model, PlantUML, draw.io." },
            { title: "Tooling", description: "Git and GitHub, Linux, Cloudflare Pages." },
            { title: "Working knowledge", description: "Python with scikit-learn, Astro, React and Vite." },
        ],
        softSkills: [
            {
                title: "Clear communication",
                description: "I keep clients and stakeholders in the loop with regular updates, from requirements interviews to iteration reviews.",
            },
            {
                title: "Conflict Resolution",
                description: "I listen to every stakeholder's needs before proposing a solution, then negotiate a scope that works for everyone.",
            },
            {
                title: "Adaptability",
                description: "I pick up new languages and tools quickly when a project calls for them, from Java backends to Python classifiers.",
            },
        ],
        education: {
            title: "B.Eng. in Software Engineering, Universidad Veracruzana",
            institution: "Facultad de Negocios y Tecnologías, Ixtaczoquitlán campus, Veracruz, Mexico.",
            dates: "Aug 2023 – Dec 2027",
            details: "7th of 9 semesters, GPA 9.2/10. Mandatory community service (servicio social) in progress; degree-required internship starts August 2027.",
        },
        certifications: {
            technicalLabel: "Technical",
            technical: "Código Facilito · Professional Docker Course, Intro to DevOps, Software Development Lifecycle. Kaggle (2025) · Introduction to Python, Introduction to Machine Learning. Cisco Networking Academy (2025) · Endpoint Security, Digital Safety and Security Awareness.",
            crossFunctionalLabel: "Cross-functional",
            crossFunctional: "IE University · Customer Centricity and Customer Experience. Santander Open Academy · Strategic Thinking & Strategic Mindset.",
            languagesLabel: "Languages",
            languages: "Spanish, native. English: fluent technical reading and writing; conversational speaking.",
        },
        pdfHref: "/CV_JuanPabloKuri_EN.pdf",
        metaTitle: "Juan Pablo Kuri Ricárdez — Resume",
        metaDescription:
            "Software Engineering student, 7th of 9 semesters. Building end to end, on my own, the class scheduling system for my faculty's academic coordination office: authentication, seven catalogs, and schedule generation for two roles, in Java, Spring Boot, and PostgreSQL.",
    },
};
