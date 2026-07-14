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
        "Hola, me interesa un sitio web para mi negocio."
    )}`,
    en: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi, I am interested in a website for my business."
    )}`,
};

export const ui = {
    es: {
        langBtn: "EN",
        navCta: "Escríbame",
        heroKicker: "Diseño y desarrollo web",
        heroTitle: "Creo sitios web que hacen crecer su negocio",
        heroSub:
            "Páginas modernas, optimizadas y hechas a la medida de su negocio local. Usted me cuenta su idea y yo la convierto en un sitio del que se sentirá orgulloso.",
        heroCta1: "Hablemos por WhatsApp",
        heroCta2: "Ver proyectos",
        projKicker: "Proyectos",
        projTitle: "Trabajo que puede ver funcionando",
        projSub:
            "Un proyecto real ya en línea y dos demos para que visualice cómo se vería el sitio de su negocio.",
        benefitsLabel: "Lo que le da a su negocio",
        viewLive: "Ver sitio en vivo",
        wantSimilar: "Quiero algo así",
        demosLabel: "Demos",
        askDemo: "Pregúnteme por esta demo",
        howKicker: "Cómo trabajo",
        howTitle: "Así trabajamos juntos",
        incKicker: "Qué incluye",
        incTitle: "Qué incluye su sitio",
        incNote:
            "¿Tiene otra idea en mente? Podemos platicarla y encontrar la mejor forma de resolverla, sin compromiso.",
        ctaTitle: "¿Listo para tener el sitio que su negocio merece?",
        ctaSub: "Escríbame por WhatsApp o correo. Le respondo pronto y sin compromiso.",
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
        title: "Sitio web para un laboratorio de análisis clínicos",
        desc:
            "DúoLab necesitaba que sus pacientes entendieran sus servicios y pudieran contactarlos sin complicaciones. Hoy tiene un sitio que responde dudas antes de que lleguen.",
        features: [
            "Botón de WhatsApp en cada sección",
            "Claridad con sus clientes",
            "integrac ubicación con Google Maps",
            "Diseño para cualquier celular",
        ],
        demoHref: "https://laboratoriosduolab.com",
    },
    en: {
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
                "Una página que transmite calidez y confianza, además facilita que un paciente nuevo agende su primera sesión.",
            features: [
                "Agende su primera sesión a partir de un clic",
                "Servicios explicados con claridad",
                "Testimonios y ubicación del consultorio",
            ],
            demoHref: "https://psychology-clinic-demo.pages.dev/",
        },
        {
            id: "qr-menu",
            tag: "Demo",
            title: "Menú online para cafeterías",
            desc:
                "Un menú digital que los clientes abren con la cámara del celular. Sin apps, sin papel y siempre actualizado.",
            features: [
                "Se actualiza cuando usted cambia precios",
                "Fotos de sus productos",
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
        { n: "1", title: "Platicamos sobre su negocio", body: "Usted me cuenta qué hace y qué necesita. Yo propongo la solución, sin tecnicismos." },
        { n: "2", title: "Preparo un prototipo", body: "Le muestro una primera versión para que la vea y la use de verdad." },
        { n: "3", title: "Lo ajustamos juntos", body: "Cambiamos lo que usted quiera hasta que quede como lo imagina." },
        { n: "4", title: "Publico su sitio", body: "Dejo todo funcionando y le explico cómo usarlo." },
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
        "Diseño profesional a su medida",
        "Lo oriento con el alojamiento en la nube",
        "Compra y configuración del dominio",
        "Podemos platicar cualquier idea que usted tenga",
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