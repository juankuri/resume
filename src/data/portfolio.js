/* ============================================================
   portfolio.js — Contenido del Portafolio (bilingüe es/en)
   El sitio renderiza `es` por defecto; el botón EN/ES del
   header intercambia los textos en el cliente.
   ============================================================ */

const WHATSAPP_NUMBER = "529381156464";
const EMAIL = "juankupa11@gmail.com";

export const mailHref = `mailto:${EMAIL}`;
export const email = EMAIL;

export const waHref = {
    es: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hola Juan, me interesa un sitio web para mi negocio."
    )}`,
    en: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi Juan, I am interested in a website for my business."
    )}`,
};

export const ui = {
    es: {
        langBtn: "EN",
        navCta: "Escríbeme",
        heroKicker: "Diseño y desarrollo web",
        heroTitle: "Creo sitios web que hacen crecer tu negocio",
        heroSub:
            "Páginas modernas, optimizadas y hechas a la medida de tu negocio local. Tú me cuentas tu idea y yo la convierto en un sitio del que te sentirás orgulloso.",
        heroCta1: "Hablemos por WhatsApp",
        heroCta2: "Ver proyectos",
        projKicker: "Proyectos",
        projTitle: "Trabajo que puedes ver funcionando",
        projSub:
            "Un proyecto real ya en línea y dos demos para que imagines cómo se vería el sitio de tu negocio.",
        benefitsLabel: "Lo que le da a tu negocio",
        viewLive: "Ver sitio en vivo",
        wantSimilar: "Quiero algo así",
        demosLabel: "Demos",
        askDemo: "Pregúntame por esta demo",
        howKicker: "Cómo trabajo",
        howTitle: "Así trabajamos juntos",
        incKicker: "Qué incluye",
        incTitle: "Qué incluye tu sitio",
        incNote:
            "¿Tienes otra idea en mente? Podemos platicarla y encontrar la mejor forma de resolverla, sin compromiso.",
        ctaTitle: "¿Listo para tener el sitio que tu negocio merece?",
        ctaSub: "Escríbeme por WhatsApp o correo. Te respondo pronto y sin compromiso.",
        emailBtn: "Enviar correo",
        rights: "© 2026 Kuri",
    },
    en: {
        langBtn: "ES",
        navCta: "Get in touch",
        heroKicker: "Web design & development",
        heroTitle: "I build websites that grow your business",
        heroSub:
            "Fast, clear pages built around your local business. You tell me your idea and I turn it into a site you will be proud of.",
        heroCta1: "Let's talk on WhatsApp",
        heroCta2: "See projects",
        projKicker: "Projects",
        projTitle: "Work you can see in action",
        projSub:
            "One real project already online and two demos so you can picture how your own business site would look.",
        benefitsLabel: "What it gives your business",
        viewLive: "View live site",
        wantSimilar: "I want one like this",
        demosLabel: "Demos",
        askDemo: "Ask me about this demo",
        howKicker: "How I work",
        howTitle: "How we work together",
        incKicker: "What's included",
        incTitle: "What your site includes",
        incNote:
            "Have another idea in mind? We can talk it through and find the best way to make it happen, no strings attached.",
        ctaTitle: "Ready for the website your business deserves?",
        ctaSub: "Reach me on WhatsApp or email. I reply quickly, no pressure.",
        emailBtn: "Send an email",
        rights: "© 2026 Kuri",
    },
};

export const featured = {
    es: {
        tag: "Proyecto real",
        title: "Sitio web para un laboratorio de análisis clínicos",
        desc:
            "DúoLab necesitaba que sus pacientes entendieran sus servicios y pudieran contactarlos sin complicaciones. Hoy tiene un sitio que responde dudas antes de que lleguen.",
        features: [
            "Botón de WhatsApp en cada sección",
            "Preguntas frecuentes que resuelven dudas",
            "Ubicación con Google Maps integrado",
            "Se ve perfecto en el celular",
        ],
        demoHref: "https://laboratoriosduolab.com",
    },
    en: {
        tag: "Live project",
        title: "Website for a clinical analysis lab",
        desc:
            "DúoLab needed patients to understand their services and reach them easily. Now they have a site that answers questions before people even arrive.",
        features: [
            "WhatsApp button in every section",
            "FAQ that clears up common doubts",
            "Location with built-in Google Maps",
            "Looks perfect on the phone",
        ],
        demoHref: "https://laboratoriosduolab.com",
    },
};

export const demos = {
    es: [
        {
            id: "psychology",
            tag: "Demo",
            title: "Sitio web para consultorio de psicología",
            desc:
                "Una página que transmite calidez y confianza, y facilita que un paciente nuevo agende su primera sesión.",
            features: [
                "Agenda tu primera sesión en un clic",
                "Servicios explicados con claridad",
                "Testimonios y ubicación del consultorio",
            ],
            demoHref: "https://psychology-clinic-demo.pages.dev/",
        },
        {
            id: "qr-menu",
            tag: "Demo",
            title: "Menú QR para cafeterías",
            desc:
                "Un menú digital que los clientes abren con la cámara del celular. Sin apps, sin papel y siempre actualizado.",
            features: [
                "Se actualiza cuando cambias precios",
                "Fotos de tus productos",
                "Sin reimprimir menús",
            ],
            demoHref: "https://gud-cofi.pages.dev/",
        },
    ],
    en: [
        {
            id: "psychology",
            tag: "Demo",
            title: "Website for a psychology practice",
            desc:
                "A page that feels warm and trustworthy, and makes it easy for a new patient to book their first session.",
            features: [
                "Book your first session in one click",
                "Services explained clearly",
                "Testimonials and practice location",
            ],
            demoHref: "https://psychology-clinic-demo.pages.dev/",
        },
        {
            id: "qr-menu",
            tag: "Demo",
            title: "QR menu for coffee shops",
            desc:
                "A digital menu customers open with their phone camera. No apps, no paper, always up to date.",
            features: [
                "Updates when you change prices",
                "Photos of your products",
                "No reprinting menus",
            ],
            demoHref: "https://gud-cofi.pages.dev/",
        },
    ],
};

export const steps = {
    es: [
        { n: "1", title: "Platicamos sobre tu negocio", body: "Me cuentas qué haces y qué necesitas. Sin tecnicismos." },
        { n: "2", title: "Preparo un prototipo", body: "Te muestro una primera versión para que la veas y la sientas." },
        { n: "3", title: "La ajustamos juntos", body: "Cambiamos lo que quieras hasta que quede como la imaginas." },
        { n: "4", title: "Publico tu sitio", body: "Dejo todo funcionando y te explico cómo usarlo." },
    ],
    en: [
        { n: "1", title: "We talk about your business", body: "You tell me what you do and what you need. No jargon." },
        { n: "2", title: "I build a prototype", body: "I show you a first version so you can see and feel it." },
        { n: "3", title: "We refine it together", body: "We change whatever you want until it looks how you imagined." },
        { n: "4", title: "I publish your site", body: "I leave everything running and show you how to use it." },
    ],
};

export const included = {
    es: [
        "Diseño que se ve bien en el celular",
        "Botón de WhatsApp integrado",
        "Ubicación con Google Maps",
        "Carga rápida",
        "Diseño profesional a tu medida",
        "Te oriento con el hosting",
        "Configuración de dominio (opcional)",
        "Podemos platicar cualquier idea que tengas",
    ],
    en: [
        "Design that looks great on mobile",
        "Built-in WhatsApp button",
        "Location with Google Maps",
        "Fast loading",
        "Professional, tailored design",
        "Guidance with hosting",
        "Domain setup (optional)",
        "We can talk through any idea you have",
    ],
};
