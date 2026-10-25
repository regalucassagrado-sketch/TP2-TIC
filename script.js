// ============ MODALES ============
const modales = {
    python: {
        titulo: "Python",
        texto: "Python es un lenguaje interpretado y de alto nivel, sumamente popular por la simplicidad y legibilidad de su sintaxis.<br><br>Ejemplo:<br><code>print('Hola Mundo')</code>"
    },
    javascript: {
        titulo: "JavaScript",
        texto: "JavaScript es un lenguaje de programación interpretado y de alto nivel, ampliamente utilizado para el desarrollo web.<br><br>Ejemplo:<br><code>console.log('Hola Mundo');</code>"
    },
    java: {
        titulo: "Java",
        texto: "Java es un lenguaje de programación orientado a objetos, ampliamente utilizado para el desarrollo de aplicaciones empresariales y móviles.<br><br>Ejemplo:<br><code>System.out.println(\"Hola Mundo\");</code>"
    },
    cplus: {
        titulo: "C++ / C#",
        texto: "C++ se usa en motores de videojuegos y software de alto rendimiento. C# se integra en el entorno de Microsoft y en Unity.<br><br>Ejemplo C++:<br><code>#include &lt;iostream&gt;<br>std::cout << \"Hola Mundo\";</code>"
    },
    php: {
        titulo: "PHP",
        texto: "PHP es un lenguaje de script del lado del servidor, ampliamente utilizado para el desarrollo web.<br><br>Ejemplo:<br><code>&lt;?php echo 'Hola Mundo'; ?&gt;</code>"
    },
    ruby: {
        titulo: "Ruby",
        texto: "Ruby es conocido por su framework Ruby on Rails, prioriza la simplicidad y la velocidad para crear aplicaciones web rápidamente.<br><br>Ejemplo:<br><code>puts 'Hola Mundo'</code>"
    }
};

function abrirModal(lang) {
    const datos = modales[lang];
    if (!datos) return;
    document.getElementById('modal-titulo').textContent = datos.titulo;
    document.getElementById('modal-texto').innerHTML = datos.texto;
    document.getElementById('modal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// ============ MÁQUINA DE ESCRIBIR ============
const textoTitulo = "PROGRAMACIÓN";
let i = 0;
function maquinaEscribir() {
    if (i < textoTitulo.length) {
        document.getElementById('maquina').textContent += textoTitulo.charAt(i);
        i++;
        setTimeout(maquinaEscribir, 150);
    }
}

// ============ BOTÓN SUBIR ============
function subirArriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
    const btn = document.getElementById('subir');
    if (btn) {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    }
};

// ============ MENÚ ACTIVO ============
function resaltarActivo() {
    const ruta = window.location.pathname;
    const enlaces = document.querySelectorAll('#encabezado ul li a');
    enlaces.forEach(enlace => {
        const href = enlace.getAttribute('href');
        if (ruta.endsWith(href)) {
            enlace.classList.add('active');
        } else {
            enlace.classList.remove('active');
        }
    });
}

// ============ QUIZ ============
const preguntasQuiz = [
    {
        pregunta: "¿Qué lenguaje se usa principalmente para el desarrollo web frontend?",
        opciones: ["Python", "JavaScript", "C++", "Java"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál de estos es un lenguaje interpretado y de alto nivel conocido por su simplicidad?",
        opciones: ["Assembly", "C", "Python", "COBOL"],
        correcta: 2
    },
    {
        pregunta: "¿Qué lenguaje se usa principalmente para ciencia de datos e IA?",
        opciones: ["PHP", "Ruby", "Python", "C#"],
        correcta: 2
    },
    {
        pregunta: "¿Qué lenguaje fue creado por Bjarne Stroustrup?",
        opciones: ["Java", "C++", "Python", "JavaScript"],
        correcta: 1
    },
    {
        pregunta: "¿Qué lenguaje es conocido por 'Write Once, Run Anywhere'?",
        opciones: ["C#", "Python", "Java", "Ruby"],
        correcta: 2
    },
    {
        pregunta: "¿Qué lenguaje se ejecuta en el navegador web?",
        opciones: ["Python", "Java", "JavaScript", "C++"],
        correcta: 2
    },
    {
        pregunta: "¿Qué lenguaje es orientado a objetos y se usa en Unity?",
        opciones: ["JavaScript", "Python", "C#", "PHP"],
        correcta: 2
    },
    {
        pregunta: "¿Qué significa HTML?",
        opciones: ["HyperText Markup Language", "HighText Machine Language", "HyperTabular Markup Language", "None"],
        correcta: 0
    },
    {
        pregunta: "¿Qué lenguaje es un supersete de JavaScript?",
        opciones: ["Python", "TypeScript", "Ruby", "Go"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál de estos es un lenguaje de bajo nivel?",
        opciones: ["Python", "Java", "Assembly", "JavaScript"],
        correcta: 2
    }
];

let respuestasUsuario = [];

function abrirQuiz() {
    const modal = document.getElementById('quiz-modal');
    if (!modal) return;
    respuestasUsuario = [];
    document.getElementById('quiz-resultado').innerHTML = '';
    document.getElementById('btn-resultado').style.display = 'none';
    renderizarPreguntas();
    modal.style.display = 'block';
}

function cerrarQuiz() {
    const modal = document.getElementById('quiz-modal');
    if (modal) modal.style.display = 'none';
}

function renderizarPreguntas() {
    const contenedor = document.getElementById('quiz-contenido');
    if (!contenedor) return;
    contenedor.innerHTML = '';
    preguntasQuiz.forEach((p, index) => {
        const div = document.createElement('div');
        div.className = 'pregunta';
        div.innerHTML = `<h4>${index + 1}. ${p.pregunta}</h4>`;
        p.opciones.forEach((opcion, opIndex) => {
            div.innerHTML += `
                <label class="opcion">
                    <input type="radio" name="q${index}" value="${opIndex}" onchange="seleccionarRespuesta(${index}, ${opIndex})">
                    ${opcion}
                </label>
            `;
        });
        contenedor.appendChild(div);
    });
}

function seleccionarRespuesta(preguntaIndex, opcionIndex) {
    respuestasUsuario[preguntaIndex] = opcionIndex;
    const todasRespondidas = respuestasUsuario.filter(r => r !== undefined).length === preguntasQuiz.length;
    document.getElementById('btn-resultado').style.display = todasRespondidas ? 'block' : 'none';
}

function mostrarResultado() {
    let aciertos = 0;
    preguntasQuiz.forEach((p, index) => {
        if (respuestasUsuario[index] === p.correcta) aciertos++;
    });
    const resultado = document.getElementById('quiz-resultado');
    let mensaje = '';
    let clase = '';
    if (aciertos >= 9) {
        mensaje = `¡Experto! Obtuviste ${aciertos}/${preguntasQuiz.length}`;
        clase = 'excelente';
    } else if (aciertos >= 7) {
        mensaje = `¡Muy bien! Obtuviste ${aciertos}/${preguntasQuiz.length}`;
        clase = 'excelente';
    } else if (aciertos >= 5) {
        mensaje = `Bien, pero puedes mejorar. Obtuviste ${aciertos}/${preguntasQuiz.length}`;
        clase = 'bien';
    } else {
        mensaje = `Necesitas estudiar más. Obtuviste ${aciertos}/${preguntasQuiz.length}`;
        clase = 'mal';
    }
    resultado.innerHTML = `<span class="${clase}">${mensaje}</span>`;
    resultado.style.display = 'block';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    const quizModal = document.getElementById('quiz-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    if (event.target === quizModal) {
        quizModal.style.display = 'none';
    }
};

// ============ INICIALIZACIÓN ============
maquinaEscribir();
resaltarActivo();
