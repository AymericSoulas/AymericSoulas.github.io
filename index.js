document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    const translations = {
        en: {
            name: "Aymeric SOULAS",
            title: "Student at Telecom Saint-Etienne",
            contact: "Contact",
            about: "About Me",
            experience: "My Experiences",
            education: "My Education",
            skills: "My Skills",
            "about-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "experience-data": "Company XYZ - Software Engineer (2015-2020)",
            "education-data": "University ABC - BSc Computer Science (2010-2014)",
            "skills-data": "JavaScript, HTML, CSS, React, Node.js"
        },
        fr: {
            name: "Aymeric SOULAS",
            title: "Étudiant à Telecom Saint-Etienne",
            contact: "Contact",
            about: "À mon propos",
            experience: "Mes expériences",
            education: "Mes formations",
            skills: "Mes compétences",
            "about-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "experience-data": "Company XYZ - Ingénieur Logiciel (2015-2020)",
            "education-data": "Université ABC - Licence Informatique (2010-2014)",
            "skills-data": "JavaScript, HTML, CSS, React, Node.js"
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
    for (let i = 0; i < 50; i++) {
        shapes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 20 + 10,
            dx: Math.random() * 2 - 1,
            dy: Math.random() * 2 - 1,
            opacity: Math.random() * 0.5 + 0.5
        });
    }

    function drawShapes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        shapes.forEach(shape => {
            ctx.fillStyle = `rgba(0, 123, 255, ${shape.opacity})`;
            ctx.beginPath();
            ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowColor = 'rgba(0, 123, 255, 0.5)';
            ctx.shadowBlur = 20;
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

    function animate() {
        drawShapes();
        updateShapes();
        requestAnimationFrame(animate);
    }

    animate();
});
