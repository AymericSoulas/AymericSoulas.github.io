document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    const translations = {
        en: {
            name: "Aymeric SOULAS",
            title: "Data Engineering Student at Telecom Saint-Etienne",
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
            "education-list-3": "Completed CITISE 2 at Telecom Saint-Etienne (Integrated preparatory class with diploma, notably with a DUT GEII)",
            "education-list-4": "Admitted to Telecom Saint-Etienne in Data Engineering Apprenticeship program",
            "skills-title": "Skills",
            "skills-list-1": "Embedded electronics skills",
            "skills-list-2": "Component soldering",
            "skills-list-3": "Use of Git, VS-code, Office suite, Docker, VS Community, Musescore",
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
            "experience-list-5": "10-week internship at SOLIHA Loire Puy de Dôme to reorganize servers and perform some IT interventions.",
            "projects-title": "Projects",
            "projects-list-1": "Remote computer startup system using ESP-32s that can turn on a computer and send temperature data to a server.",
            "projects-list-2": "Creating a web page for a portfolio using AI.",
            "projects-list-3": "Creating a robot capable of moving autonomously and avoiding obstacles as part of DUT SAE courses.",
            "projects-list-4": "Creating several games on the Numworks calculator in Python (Snake, Pac-Man, Minesweeper, Game of Life, Tic-tac-toe). Click to view on GitHub!",
            "projects-list-5": "Home automation server hosted on Raspberry Pi with ASP.NET Core and PostgreSQL database. User interface developed in C# for data visualization. Click to view on GitHub!",
            "volunteer-title": "Volunteering",
            "benevolat-list-1": "Participating in organizing events such as the annual Rivatière race.",
            "benevolat-list-2": "Setting up equipment for music festivals and EMUSMA music school auditions.",
            "benevolat-list-3": "Participating as a preparer and server during the reopening ceremony of Aveizieux gymnasium.",
            "benevolat-list-4": "Volunteer animation: Organizing meetings as a scout leader within the Coise group."
        },
        fr: {
            name: "Aymeric SOULAS",
            title: "Étudiant en Data Engineering à Télécom Saint-Étienne",
            contact: "Contact",
            about: "À propos de moi",
            experience: "Mes expériences professionnelles",
            education: "Formation scolaire",
            skills: "Mes compétences",
            "about-text": "Je suis un étudiant qui cherche à développer son expérience professionnelle et à affiner et découvrir des compétences dans quelque domaine que ce soit !",
            "contact-email": "Email: aymeric.soulas@yahoo.com",
            "contact-phone": "Téléphone: +33 06 31 66 43 75",
            "education-list-1": "Brevet des collèges",
            "education-list-2": "Bac général option mathématiques, Numérique/Sciences de l'Informatique en terminale accompagné de Physique en première",
            "education-list-3": "CITISE 2 terminée à Télécom Saint-Etienne (Classe préparatoire intégrée diplomante, notamment avec un DUT GEII)",
            "education-list-4": "Admissible à Télécom Saint-Etienne dans la formation Data Engineering en Alternance",
            "skills-title": "Compétences",
            "skills-list-1": "Compétences en électronique embarquée",
            "skills-list-2": "Soudure de composants",
            "skills-list-3": "Utilisation de Git, VS-code, la suite Office, Docker, VS Community, Musescore",
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
            "experience-list-5": "Stage de 10 semaines à SOLIHA Loire Puy de Dôme pour réorganiser les serveurs et effectuer quelques interventions informatiques.",
            "projects-title": "Projets",
            "projects-list-1": "Système de démarrage à distance d'ordinateur utilisant des ESP-32 pouvant allumer un ordinateur et envoyer des données de température à un serveur.",
            "projects-list-2": "Création d'une page web pour un portfolio grâce à l'IA.",
            "projects-list-3": "Création d'un robot pouvant se déplacer de manière autonome et éviter des obstacles dans le cadre des cours de SAÉ du DUT.",
            "projects-list-4": "Création de plusieurs jeux sur la calculatrice Numworks en Python (Snake, Pac-Man, Démineur, Jeu de la vie, morpion). Cliquez pour voir sur GitHub !",
            "projects-list-5": "Serveur de domotique hébergé sur Raspberry Pi avec ASP.NET Core et base de données PostgreSQL. Interface utilisateur développée en C# pour la visualisation des données. Cliquez pour voir sur GitHub !",
            "volunteer-title": "Bénévolat",
            "benevolat-list-1": "Participation à l'organisation d'événements comme la course de la Rivatière qui a lieu chaque année.",
            "benevolat-list-2": "Installation des équipements pour les fêtes de la musique et les auditions de l'école de musique EMUSMA.",
            "benevolat-list-3": "Participation comme préparateur et serveur lors de la cérémonie de réouverture du gymnase d'Aveizieux.",
            "benevolat-list-4": "Animation bénévole : Organisation de réunions en tant que chef scout au sein du groupe de la Coise."
        },
        es: {
            name: "Aymeric SOULAS",
            title: "Estudiante en Data Engineering en Telecom Saint-Etienne",
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
            "education-list-3": "CITISE 2 completado en Telecom Saint-Etienne (Clase preparatoria integrada con diploma, especialmente con un DUT GEII)",
            "education-list-4": "Admitido en Telecom Saint-Etienne en el programa de Data Engineering en Alternancia",
            "skills-title": "Habilidades",
            "skills-list-1": "Habilidades en electrónica integrada",
            "skills-list-2": "Soldadura de componentes",
            "skills-list-3": "Uso de Git, VS-code, suite Office, Docker, VS Community, Musescore",
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
            "experience-list-5": "Prácticas de 10 semanas en SOLIHA Loire Puy de Dôme para reorganizar servidores y realizar algunas intervenciones informáticas.",
            "projects-title": "Proyectos",
            "projects-list-1": "Sistema de arranque remoto de computadora usando ESP-32 que pueden encender una computadora y enviar datos de temperatura a un servidor.",
            "projects-list-2": "Creación de una página web para un portafolio usando IA.",
            "projects-list-3": "Creación de un robot capaz de moverse de forma autónoma y evitar obstáculos como parte de los cursos SAE del DUT.",
            "projects-list-4": "Creación de varios juegos en la calculadora Numworks en Python (Snake, Pac-Man, Buscaminas, Juego de la vida, Tres en raya). ¡Haz clic para ver en GitHub!",
            "projects-list-5": "Servidor de domótica alojado en Raspberry Pi con ASP.NET Core y base de datos PostgreSQL. Interfaz de usuario desarrollada en C# para visualización de datos. ¡Haz clic para ver en GitHub!",
            "volunteer-title": "Voluntariado",
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
    const particleCount = 30; // Un peu plus de particules pour plus de dynamisme
    const geometricShapes = []; // Nouvelles formes géométriques
    
    // Création des particules
    for (let i = 0; i < particleCount; i++) {
        shapes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2.5 + 0.8,
            dx: (Math.random() - 0.5) * 0.6,
            dy: (Math.random() - 0.5) * 0.6,
            opacity: Math.random() * 0.4 + 0.1,
            color: Math.random() > 0.6 ? 'rgba(6, 182, 212, ' : Math.random() > 0.3 ? 'rgba(139, 92, 246, ' : 'rgba(16, 185, 129, ',
            life: Math.random() * 100 + 50,
            maxLife: Math.random() * 100 + 50
        });
    }
    
    // Création des formes géométriques
    for (let i = 0; i < 8; i++) {
        geometricShapes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 40 + 20,
            dx: (Math.random() - 0.5) * 0.3,
            dy: (Math.random() - 0.5) * 0.3,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.02,
            opacity: Math.random() * 0.15 + 0.05,
            type: Math.floor(Math.random() * 4), // 0: triangle, 1: rectangle, 2: hexagone, 3: losange
            color: Math.random() > 0.5 ? 'rgba(6, 182, 212, ' : 'rgba(139, 92, 246, ',
            life: Math.random() * 200 + 100,
            maxLife: Math.random() * 200 + 100
        });
    }

    function drawShapes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Dessiner les formes géométriques
        geometricShapes.forEach(shape => {
            const currentOpacity = shape.opacity * (shape.life / shape.maxLife);
            ctx.save();
            ctx.translate(shape.x, shape.y);
            ctx.rotate(shape.rotation);
            ctx.fillStyle = `${shape.color}${currentOpacity})`;
            ctx.strokeStyle = `${shape.color}${currentOpacity * 0.5})`;
            ctx.lineWidth = 1.5;
            
            ctx.beginPath();
            switch(shape.type) {
                case 0: // Triangle
                    ctx.moveTo(0, -shape.size/2);
                    ctx.lineTo(-shape.size/2, shape.size/2);
                    ctx.lineTo(shape.size/2, shape.size/2);
                    ctx.closePath();
                    break;
                case 1: // Rectangle
                    ctx.rect(-shape.size/2, -shape.size/2, shape.size, shape.size);
                    break;
                case 2: // Hexagone
                    for (let i = 0; i < 6; i++) {
                        const angle = (i * Math.PI) / 3;
                        const x = Math.cos(angle) * shape.size/2;
                        const y = Math.sin(angle) * shape.size/2;
                        if (i === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.closePath();
                    break;
                case 3: // Losange
                    ctx.moveTo(0, -shape.size/2);
                    ctx.lineTo(shape.size/3, 0);
                    ctx.lineTo(0, shape.size/2);
                    ctx.lineTo(-shape.size/3, 0);
                    ctx.closePath();
                    break;
            }
            ctx.stroke();
            ctx.restore();
        });
        
        // Dessiner les particules
        shapes.forEach(shape => {
            const pulseSize = shape.size + Math.sin(Date.now() * 0.0015 + shape.x) * 0.3;
            const currentOpacity = shape.opacity * (shape.life / shape.maxLife);
            
            ctx.fillStyle = `${shape.color}${currentOpacity})`;
            ctx.shadowColor = `${shape.color}0.4)`;
            ctx.shadowBlur = 10;
            
            ctx.beginPath();
            ctx.arc(shape.x, shape.y, pulseSize, 0, Math.PI * 2);
            ctx.fill();
            
            // Connexions entre particules proches
            shapes.forEach(otherShape => {
                const distance = Math.sqrt(
                    Math.pow(shape.x - otherShape.x, 2) + 
                    Math.pow(shape.y - otherShape.y, 2)
                );
                
                if (distance < 90 && distance > 0) {
                    ctx.strokeStyle = `rgba(6, 182, 212, ${0.08 * (1 - distance / 90)})`;
                    ctx.lineWidth = 0.4;
                    ctx.beginPath();
                    ctx.moveTo(shape.x, shape.y);
                    ctx.lineTo(otherShape.x, otherShape.y);
                    ctx.stroke();
                }
            });
        });
        
        ctx.shadowBlur = 0; // Reset shadow for performance
    }

    function updateShapes() {
        // Mise à jour des particules
        shapes.forEach(shape => {
            shape.x += shape.dx;
            shape.y += shape.dy;
            shape.life -= 0.4;
            
            if (shape.x + shape.size > canvas.width || shape.x - shape.size < 0) {
                shape.dx *= -0.9;
            }
            if (shape.y + shape.size > canvas.height || shape.y - shape.size < 0) {
                shape.dy *= -0.9;
            }
            
            if (shape.life <= 0) {
                shape.x = Math.random() * canvas.width;
                shape.y = Math.random() * canvas.height;
                shape.dx = (Math.random() - 0.5) * 0.6;
                shape.dy = (Math.random() - 0.5) * 0.6;
                shape.life = shape.maxLife;
                shape.opacity = Math.random() * 0.4 + 0.1;
            }
        });
        
        // Mise à jour des formes géométriques
        geometricShapes.forEach(shape => {
            shape.x += shape.dx;
            shape.y += shape.dy;
            shape.rotation += shape.rotationSpeed;
            shape.life -= 0.2;
            
            // Rebond pour les formes géométriques
            if (shape.x + shape.size/2 > canvas.width || shape.x - shape.size/2 < 0) {
                shape.dx *= -1;
            }
            if (shape.y + shape.size/2 > canvas.height || shape.y - shape.size/2 < 0) {
                shape.dy *= -1;
            }
            
            // Régénération des formes géométriques
            if (shape.life <= 0) {
                shape.x = Math.random() * canvas.width;
                shape.y = Math.random() * canvas.height;
                shape.dx = (Math.random() - 0.5) * 0.3;
                shape.dy = (Math.random() - 0.5) * 0.3;
                shape.rotation = Math.random() * Math.PI * 2;
                shape.rotationSpeed = (Math.random() - 0.5) * 0.02;
                shape.life = shape.maxLife;
                shape.opacity = Math.random() * 0.15 + 0.05;
                shape.type = Math.floor(Math.random() * 4);
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

    // Gestion des clics sur les projets
    const clickableProjects = document.querySelectorAll('.clickable-project');
    clickableProjects.forEach(project => {
        project.addEventListener('click', (e) => {
            const url = project.getAttribute('data-url');
            if (url) {
                // Effet visuel de clic
                project.style.transform = 'scale(0.98)';
                project.style.filter = 'brightness(1.2)';
                
                // Animation de transition
                setTimeout(() => {
                    window.open(url, '_blank', 'noopener,noreferrer');
                    
                    // Reset de l'effet visuel
                    setTimeout(() => {
                        project.style.transform = '';
                        project.style.filter = '';
                    }, 200);
                }, 150);
            }
        });

        // Effet de survol amélioré
        project.addEventListener('mouseenter', () => {
            project.style.cursor = 'pointer';
        });
    });

    animate(0);
});
