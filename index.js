document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    const translations = {
        en: {
            name: "Aymeric SOULAS",
            title: "Student at Telecom Saint-Etienne",
            contact: "Contact",
            about: "About Me",
            experience: "Professional Experience",
            education: "Education",
            skills: "Skills",
            "about-text": "I am a student looking to develop my professional experience and refine and discover skills in any field!",
            "contact-email": "Email: aymeric.soulas@yahoo.com",
            "contact-phone": "Phone: +33 06 31 66 43 75",
            "education-list-1": "Junior High School Diploma",
            "education-list-2": "General Baccalaureate in Mathematics, Digital Sciences/Computer Science with Physics",
            "education-list-3": "First year CITISE completed (combining DUT GEII, L2 Mathematics and DU CITISE)",
            "skills-title": "Skills",
            "skills-list-1": "Embedded electronics skills",
            "skills-list-2": "Component soldering",
            "skills-list-3": "Computer equipment and software handling",
            "skills-list-4": "Basic programming knowledge (C++, Python, C#, Java)",
            "skills-list-5": "Basic LaTeX usage",
            "skills-list-6": "Knowledge in music and audio equipment",
            "skills-list-7": "Electrical certification",
            "skills-list-8": "13 years of drums practice",
            "skills-list-9": "Driver's license",
            "skills-list-10": "English level B2",
            "skills-list-11": "Spanish level B1",
            "experience-list-1": "9th grade observation internship at XPO Logistics where I worked across different services and observed the complex functioning of its organization and administration.",
            "experience-list-2": "1.5-month fixed-term contract at E.Leclerc Andrézieux-Bouthéon as a cashier/multi-task seller in the technical department where I acquired skills such as shelf management and sales techniques.",
            "experience-list-3": "One-week replacement in the dairy department at E.Leclerc Andrézieux.",
            "experience-list-4": "Several contracts of a few weeks at IKEA (Steel Saint-Étienne) as a multi-task seller and for setting up new departments and sales areas.",
            "projects-title": "Projects",
            "projects-list-1": "Using an old computer to set up a web server communicating with ESP-32s displaying temperature.",
            "projects-list-2": "Server startup using an ESP-32 hosting a local HTTP server accessible via private VPN. This system saves energy even though it blocks access to its services, as this old computer is very power-consuming.",
            "projects-list-3": "Creating a web page for a portfolio using AI.",
            "projects-list-4": "Creating a robot capable of moving autonomously and avoiding obstacles as part of DUT SAE courses.",
            "projects-list-5": "Creating several games on the Numworks calculator in Python (Snake, Pac-Man, Minesweeper, Game of Life, Tic-tac-toe).",
            "volunteer-title": "Certification and Volunteering",
            "benevolat-list-1": "Participating in organizing events such as the annual Rivatière race.",
            "benevolat-list-2": "Setting up equipment for music festivals and EMUSMA music school auditions.",
            "benevolat-list-3": "Participating as a preparer and server during the reopening ceremony of Aveizieux gymnasium.",
            "benevolat-list-4": "Volunteer animation: Organizing meetings as a scout leader within the Coise group."
        },
        fr: {
            name: "Aymeric SOULAS",
            title: "Étudiant à Télécom Saint-Étienne",
            contact: "Contact",
            about: "À propos de moi",
            experience: "Mes expériences professionnelles",
            education: "Formation scolaire",
            skills: "Mes compétences",
            "about-text": "Je suis un étudiant qui cherche à développer son expérience professionnelle et à affiner et découvrir des compétences dans quelque domaine que ce soit !",
            "contact-email": "Email: aymeric.soulas@yahoo.com",
            "contact-phone": "Phone: +33 06 31 66 43 75",
            "education-list-1": "Brevet des collèges",
            "education-list-2": "Bac général option mathématiques, Numérique/Sciences de l'Informatique en terminale accompagné de Physique en première",
            "education-list-3": "Première année en CITISE réussie (formation réunissant un DUT GEII, une L2 de mathématiques ainsi que le DU CITISE)",
            "skills-title": "Compétences",
            "skills-list-1": "Compétences en électronique embarquée",
            "skills-list-2": "Soudure de composants",
            "skills-list-3": "Manipulation d'équipements et de logiciels informatiques",
            "skills-list-4": "Connaissances basiques en programmation (C++, Python, C#, Java)",
            "skills-list-5": "Utilisation basique de LaTeX",
            "skills-list-6": "Connaissances en musique et appareils audio",
            "skills-list-7": "Habilitation électrique",
            "skills-list-8": "13 ans de pratique de la batterie",
            "skills-list-9": "Permis de conduire",
            "skills-list-10": "Niveau B2 en anglais",
            "skills-list-11": "Niveau B1 en espagnol",
            "experience-list-1": "Stage d'observation de troisième effectué dans l'entreprise XPO Logistics où j'ai parcouru différents services et observé le fonctionnement complexe de son organisation et de son administration.",
            "experience-list-2": "CDD de 1 mois et demi au E.Leclerc d'Andrézieux-Bouthéon en tant que caissier/vendeur multitâche dans l'espace technique durant lequel j'ai pu acquérir des compétences comme la gestion de rayon ou encore les techniques de vente.",
            "experience-list-3": "Remplacement d'une semaine dans le rayon crèmerie du E.Leclerc d'Andrézieux.",
            "experience-list-4": "Plusieurs contrats de quelques semaines à IKEA (Steel Saint-Étienne) comme vendeur multitâche ainsi que pour la mise en place de nouveaux rayons et espaces de vente.",
            "projects-title": "Projets",
            "projects-list-1": "Utilisation d'un ancien ordinateur pour mettre en place un serveur web communiquant avec des ESP-32 affichant la température.",
            "projects-list-2": "Démarrage du serveur grâce à un ESP-32 lui-même hébergeant un serveur HTTP local accessible par VPN privé. Ce système sert à économiser de l'énergie même si cela bloque l'accès à ses services, cet ancien ordinateur étant très consommateur.",
            "projects-list-3": "Création d'une page web pour un portfolio grâce à l'IA.",
            "projects-list-4": "Création d'un robot pouvant se déplacer de manière autonome et éviter des obstacles dans le cadre des cours de SAÉ du DUT.",
            "projects-list-5": "Création de plusieurs jeux sur la calculatrice Numworks en Python (Snake, Pac-Man, Démineur, Jeu de la vie, morpion).",
            "volunteer-title": "Homologation et Bénévolat",
            "benevolat-list-1": "Participation à l'organisation d'événements comme la course de la Rivatière qui a lieu chaque année.",
            "benevolat-list-2": "Installation des équipements pour les fêtes de la musique et les auditions de l'école de musique EMUSMA.",
            "benevolat-list-3": "Participation comme préparateur et serveur lors de la cérémonie de réouverture du gymnase d'Aveizieux.",
            "benevolat-list-4": "Animation bénévole : Organisation de réunions en tant que chef scout au sein du groupe de la Coise."
        },
        es: {
            name: "Aymeric SOULAS",
            title: "Estudiante en Telecom Saint-Etienne",
            contact: "Contacto",
            about: "Sobre mí",
            experience: "Experiencia profesional",
            education: "Formación",
            skills: "Habilidades",
            "about-text": "¡Soy un estudiante que busca desarrollar su experiencia profesional y perfeccionar y descubrir habilidades en cualquier campo!",
            "contact-email": "Correo: aymeric.soulas@yahoo.com",
            "contact-phone": "Teléfono: +33 06 31 66 43 75",
            "education-list-1": "Diploma de educación secundaria",
            "education-list-2": "Bachillerato general con especialización en matemáticas, Ciencias digitales/Informática con Física",
            "education-list-3": "Primer año CITISE completado (combinando DUT GEII, L2 Matemáticas y DU CITISE)",
            "skills-title": "Habilidades",
            "skills-list-1": "Habilidades en electrónica integrada",
            "skills-list-2": "Soldadura de componentes",
            "skills-list-3": "Manejo de equipos y software informático",
            "skills-list-4": "Conocimientos básicos de programación (C++, Python, C#, Java)",
            "skills-list-5": "Uso básico de LaTeX",
            "skills-list-6": "Conocimientos en música y equipos de audio",
            "skills-list-7": "Certificación eléctrica",
            "skills-list-8": "13 años de práctica de batería",
            "skills-list-9": "Permiso de conducir",
            "skills-list-10": "Nivel B2 en inglés",
            "skills-list-11": "Nivel B1 en español",
            "experience-list-1": "Práctica de observación de tercero en XPO Logistics donde trabajé en diferentes servicios y observé el funcionamiento complejo de su organización y administración.",
            "experience-list-2": "Contrato temporal de 1,5 meses en E.Leclerc Andrézieux-Bouthéon como cajero/vendedor multitarea en el departamento técnico donde adquirí habilidades como gestión de estanterías y técnicas de venta.",
            "experience-list-3": "Sustitución de una semana en el departamento de lácteos de E.Leclerc Andrézieux.",
            "experience-list-4": "Varios contratos de algunas semanas en IKEA (Steel Saint-Étienne) como vendedor multitarea y para la instalación de nuevos departamentos y áreas de venta.",
            "projects-title": "Proyectos",
            "projects-list-1": "Uso de una computadora antigua para configurar un servidor web que se comunica con ESP-32 mostrando temperatura.",
            "projects-list-2": "Inicio del servidor usando un ESP-32 que aloja un servidor HTTP local accesible mediante VPN privada. Este sistema ahorra energía aunque bloquea el acceso a sus servicios, ya que esta computadora antigua consume mucha energía.",
            "projects-list-3": "Creación de una página web para un portafolio usando IA.",
            "projects-list-4": "Creación de un robot capaz de moverse de forma autónoma y evitar obstáculos como parte de los cursos SAE del DUT.",
            "projects-list-5": "Creación de varios juegos en la calculadora Numworks en Python (Snake, Pac-Man, Buscaminas, Juego de la vida, Tres en raya).",
            "volunteer-title": "Certificación y Voluntariado",
            "benevolat-list-1": "Participación en la organización de eventos como la carrera anual Rivatière.",
            "benevolat-list-2": "Instalación de equipos para festivales de música y audiciones de la escuela de música EMUSMA.",
            "benevolat-list-3": "Participación como preparador y camarero durante la ceremonia de reapertura del gimnasio de Aveizieux.",
            "benevolat-list-4": "Animación voluntaria: Organización de reuniones como jefe scout dentro del grupo Coise."
        }
    };

    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = translations[selectedLanguage][key];
        });
    });

    // Animation des formes géométriques
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const shapes = [];
    for (let i = 0; i < 30; i++) {  // Réduire le nombre de formes
        shapes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 10 + 5,  // Formes plus petites
            dx: Math.random() * 0.5 - 0.25,  // Mouvement plus lent
            dy: Math.random() * 0.5 - 0.25,
            opacity: Math.random() * 0.3 + 0.1  // Opacité réduite
        });
    }

    function drawShapes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        shapes.forEach(shape => {
            ctx.fillStyle = `rgba(100, 255, 218, ${shape.opacity})`;  // Couleur plus professionnelle
            ctx.beginPath();
            ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowColor = 'rgba(100, 255, 218, 0.3)';
            ctx.shadowBlur = 10;
        });
    }

    function updateShapes() {
        shapes.forEach(shape => {
            shape.x += shape.dx;
            shape.y += shape.dy;

            if (shape.x + shape.size > canvas.width || shape.x - shape.size < 0) {
                shape.dx *= -1;
            }

            if (shape.y + shape.size > canvas.height || shape.y - shape.size < 0) {
                shape.dy *= -1;
            }
        });
    }

    // Optimisation des performances de rendu
    let animationFrameId;
    let lastTime = 0;
    const FPS = 30;
    const frameDelay = 1000 / FPS;

    // Gestion du redimensionnement
    function handleResize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    // Throttle du redimensionnement
    let resizeTimeout;
    window.addEventListener('resize', () => {
        if (resizeTimeout) clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 250);
    });

    // Animation optimisée
    function animate(currentTime) {
        animationFrameId = requestAnimationFrame(animate);

        const deltaTime = currentTime - lastTime;
        if (deltaTime < frameDelay) return;

        lastTime = currentTime - (deltaTime % frameDelay);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawShapes();
        updateShapes();
    }

    // Nettoyage lors de la fermeture
    window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(animationFrameId);
    });

    // Initialisation langue par défaut du navigateur
    const userLang = navigator.language.split('-')[0];
    if (translations[userLang]) {
        languageSelector.value = userLang;
        const event = new Event('change');
        languageSelector.dispatchEvent(event);
    }

    animate(0);
});
