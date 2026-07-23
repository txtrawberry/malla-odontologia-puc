// Definición completa de la malla de Odontología PUC
const semestersData = [
    {
        id: 1,
        title: "1° Semestre",
        courses: [
            { sigla: "ODO103", name: "INTRODUCCIÓN A LA ODONTOLOGÍA", cr: 5, req: [] },
            { sigla: "MED1030", name: "ANATOMÍA TOPOGRÁFICA Y EMBRIOLOGÍA I", cr: 10, req: [] },
            { sigla: "QIM201D", name: "QUÍMICA", cr: 10, req: [] },
            { sigla: "BIO2140", name: "BIOLOGÍA CELULAR I", cr: 10, req: [] },
            { sigla: "ODO104", name: "BIOESTADÍSTICA", cr: 10, req: [] }
        ]
    },
    {
        id: 2,
        title: "2° Semestre",
        courses: [
            { sigla: "ODO105", name: "HISTOLOGÍA", cr: 10, req: ["MED1030"] },
            { sigla: "MED1040", name: "ANATOMÍA TOPOGRÁFICA Y EMBRIOLOGÍA II", cr: 10, req: ["MED1030"] },
            { sigla: "FIS1090", name: "FÍSICA PARA ODONTOLOGÍA", cr: 10, req: [] },
            { sigla: "BIO2160", name: "BIOLOGÍA CELULAR II", cr: 10, req: ["BIO2140"] }
        ]
    },
    {
        id: 3,
        title: "3° Semestre",
        courses: [
            { sigla: "ODO205", name: "NEUROCIENCIAS, DOLOR Y OCLUSIÓN", cr: 10, req: ["ODO105", "MED1040"] },
            { sigla: "ODO206", name: "PRECLÍNICO DE ODONTOLOGÍA RESTAURADORA I", cr: 15, req: ["MED1040", "ODO105", "QIM201D", "FIS1090"] },
            { sigla: "BIO2540", name: "FISIOLOGÍA PARA ODONTOLOGÍA", cr: 15, req: ["BIO2160", "QIM201D", "ODO105"] },
            { sigla: "ODO207", name: "EPIDEMIOLOGÍA", cr: 5, req: ["ODO104"] }
        ]
    },
    {
        id: 4,
        title: "4° Semestre",
        courses: [
            { sigla: "ODO211", name: "INTRODUCCIÓN A LA CLÍNICA ODONTOLÓGICA", cr: 5, req: ["ODO103", "MED1040"] },
            { sigla: "ODO210", name: "PRECLÍNICO DE ODONTOLOGÍA RESTAURADORA II", cr: 15, req: ["FIS1090", "ODO206"] },
            { sigla: "ODO208", name: "MICROBIOLOGÍA", cr: 10, req: ["BIO2160", "ODO105"] },
            { sigla: "ODO212", name: "IMAGENOLOGÍA DIAGNÓSTICA I", cr: 5, req: ["MED1040", "FIS1090"] },
            { sigla: "ODO209", name: "PATOLOGÍA GENERAL", cr: 5, req: ["BIO2540", "BIO2160", "MED1040"] }
        ]
    },
    {
        id: 5,
        title: "5° Semestre",
        courses: [
            { sigla: "ODO309", name: "ODONTOLOGÍA CLÍNICA I", cr: 5, req: ["ODO211", "ODO210", "ODO212", "ODO209", "ODO208"] },
            { sigla: "ODO310", name: "PRECLÍNICO DE REHABILITACIÓN ORAL I", cr: 10, req: ["ODO211", "ODO210"] },
            { sigla: "ODO311", name: "PRECLÍNICO DE PERIODONCIA", cr: 5, req: ["ODO208", "ODO209", "ODO211", "ODO212"] },
            { sigla: "ODO314", name: "FARMACOLOGÍA", cr: 10, req: ["ODO209", "ODO208"] },
            { sigla: "ODO312", name: "FISIOPATOLOGÍA Y SEMIOLOGÍA", cr: 5, req: ["ODO209"] },
            { sigla: "ODO313", name: "PATOLOGÍA BUCOMAXILO-FACIAL I", cr: 5, req: ["ODO209"] }
        ]
    },
    {
        id: 6,
        title: "6° Semestre",
        courses: [
            { sigla: "ODO315", name: "ODONTOLOGÍA CLÍNICA II", cr: 5, req: ["ODO309", "ODO314", "ODO310", "ODO313"] },
            { sigla: "ODO316", name: "PRECLÍNICO DE REHABILITACIÓN ORAL II", cr: 10, req: ["ODO310"] },
            { sigla: "ODO319", name: "PRECLÍNICO DE ENDODONCIA", cr: 5, req: ["ODO314", "ODO313"] },
            { sigla: "ODO317", name: "SALUD PÚBLICA", cr: 5, req: ["ODO207"] },
            { sigla: "ODO318", name: "ÉTICA CLÍNICA", cr: 5, req: ["ODO309"] }
        ]
    },
    {
        id: 7,
        title: "7° Semestre",
        courses: [
            { sigla: "ODO418", name: "CLÍNICA INTEGRAL DEL NIÑO I", cr: 10, req: ["ODO315", "ODO317", "ODO318", "ODO319"] },
            { sigla: "ODO419", name: "CLÍNICA INTEGRAL DEL ADULTO I", cr: 15, req: ["ODO315", "ODO316", "ODO317", "ODO318", "ODO319"] },
            { sigla: "ODO420", name: "CIRUGÍA BUCAL I", cr: 10, req: ["ODO312", "ODO313", "ODO315", "ODO318"] },
            { sigla: "ODO421", name: "IMAGENOLOGÍA DIAGNÓSTICA II", cr: 5, req: ["ODO313", "ODO312"] }
        ]
    },
    {
        id: 8,
        title: "8° Semestre",
        courses: [
            { sigla: "ODO423", name: "CLÍNICA INTEGRAL DEL NIÑO II", cr: 10, req: ["ODO418", "ODO420", "ODO421"] },
            { sigla: "ODO424", name: "CLÍNICA INTEGRAL DEL ADULTO II", cr: 15, req: ["ODO419", "ODO420", "ODO421"] },
            { sigla: "ODO425", name: "CIRUGÍA BUCAL II", cr: 10, req: ["ODO421", "ODO420"] },
            { sigla: "ODO422", name: "PATOLOGÍA BUCOMAXILO-FACIAL II", cr: 5, req: ["ODO313", "ODO421"] }
        ]
    },
    {
        id: 9,
        title: "9° Semestre",
        courses: [
            { sigla: "ODO518", name: "CLÍNICA INTEGRAL DEL NIÑO III", cr: 10, req: ["ODO423"] },
            { sigla: "ODO519", name: "CLÍNICA INTEGRAL DEL ADULTO III", cr: 20, req: ["ODO424", "ODO422"] },
            { sigla: "ODO520", name: "CIRUGÍA BUCAL III", cr: 10, req: ["ODO425", "ODO422"] },
            { sigla: "ODO521", name: "ODONTOLOGÍA GERIÁTRICA I", cr: 5, req: ["ODO422", "ODO424", "ODO425"] },
            { sigla: "ODO522", name: "ODONTOLOGÍA LEGAL", cr: 5, req: ["ODO317"] }
        ]
    },
    {
        id: 10,
        title: "10° Semestre",
        courses: [
            { sigla: "ODO525", name: "CLÍNICA INTEGRAL DEL NIÑO IV", cr: 10, req: ["ODO518"] },
            { sigla: "ODO523", name: "CLÍNICA INTEGRAL DEL ADULTO IV", cr: 20, req: ["ODO519"] },
            { sigla: "ODO524", name: "CIRUGÍA BUCAL IV", cr: 10, req: ["ODO520"] },
            { sigla: "ODO526", name: "ODONTOLOGÍA GERIÁTRICA II", cr: 5, req: ["ODO521"] },
            { sigla: "ODO527", name: "ADMINISTRACIÓN EN SALUD", cr: 5, req: ["ODO522"] }
        ]
    },
    {
        id: 11,
        title: "11° Semestre",
        courses: [
            { sigla: "ODO619", name: "INTERNADO", cr: 50, req: ["ODO525", "ODO526", "ODO527", "ODO523", "ODO524"] }
        ]
    },
    {
        id: 12,
        title: "12° Semestre",
        courses: [
            { sigla: "ODO620", name: "CUIDADOS ESPECIALES EN ODONTOLOGÍA", cr: 5, req: ["ODO524", "ODO525", "ODO526", "ODO527"] },
            { sigla: "ODO621", name: "CLÍNICA PRÁCTICA AVANZADA", cr: 40, req: ["ODO527", "ODO620", "ODO525", "ODO526"] },
            { sigla: "ODO330X", name: "OPTATIVO", cr: 5, req: [] }
        ]
    },
    {
        id: 13,
        title: "Formación General",
        courses: [
            { sigla: "VRA100C", name: "EXAMEN COMUNICACIÓN ESCRITA", cr: 0, req: [] },
            { sigla: "VRA2000", name: "TEST INGLÉS", cr: 0, req: [] },
            { sigla: "FIL2001", name: "FILOSOFÍA: PARA QUE", cr: 10, req: [] },
            { sigla: "TEO-FG", name: "TEOLOGÍA", cr: 10, req: [] },
            { sigla: "HUM-FG", name: "HUMANIDADES", cr: 10, req: [] },
            { sigla: "CS-FG", name: "CIENCIAS SOCIALES", cr: 10, req: [] },
            { sigla: "ART-FG", name: "ARTES", cr: 10, req: [] },
            { sigla: "MAT-FG", name: "PENSAMIENTO MATEMÁTICO", cr: 10, req: [] },
            { sigla: "ECO-FG", name: "ECOLOGÍA INTEGRAL Y SUSTENTABILIDAD", cr: 10, req: [] },
            { sigla: "LIB-FG", name: "CRÉDITOS LIBRES", cr: 10, req: [] }
        ]
    }
];

// Estado global de cursos aprobados (guardado en localStorage)
let approvedCourses = JSON.parse(localStorage.getItem('puc_odontologia_approved')) || [];

function saveState() {
    localStorage.setItem('puc_odontologia_approved', JSON.stringify(approvedCourses));
}

// Verificar si un curso está desbloqueado
function isCourseAvailable(course) {
    if (approvedCourses.includes(course.sigla)) return false; // ya aprobado
    if (course.req.length === 0) return true; // sin requisitos
    
    // Todos los requisitos deben estar en approvedCourses
    return course.req.every(reqSigla => approvedCourses.includes(reqSigla));
}

function renderMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = '';

    let totalCr = 0;
    let totalRamosAprobados = 0;
    let totalRamosCount = 0;

    semestersData.forEach(sem => {
        const col = document.createElement('div');
        col.className = 'semester-column';

        let semCr = 0;
        sem.courses.forEach(c => {
            totalRamosCount++;
            if (approvedCourses.includes(c.sigla)) {
                totalCr += c.cr;
                totalRamosAprobados++;
                semCr += c.cr;
            }
        });

        col.innerHTML = `
            <div class="semester-header">
                <span>${sem.title}</span>
                <span class="semester-badge">${semCr} CR</span>
            </div>
            <div class="courses-list" id="sem-list-${sem.id}"></div>
        `;

        const listContainer = col.querySelector('.courses-list');

        sem.courses.forEach(course => {
            const isApproved = approvedCourses.includes(course.sigla);
            const isAvailable = isCourseAvailable(course);
            
            let statusClass = 'locked';
            if (isApproved) statusClass = 'approved';
            else if (isAvailable) statusClass = 'available';

            const card = document.createElement('div');
            card.className = `course-card ${statusClass}`;
            card.dataset.sigla = course.sigla;

            let reqText = course.req.length > 0 ? `Req: ${course.req.join(', ')}` : 'Sin requisitos';

            card.innerHTML = `
                <div class="course-header-row">
                    <span class="course-sigla">${course.sigla}</span>
                    <span class="course-cr">${course.cr} CR</span>
                </div>
                <div class="course-name">${course.name}</div>
                <div class="course-requisitos">${reqText}</div>
            `;

            // Evento click para alternar estado
            card.addEventListener('click', () => {
                if (isApproved) {
                    approvedCourses = approvedCourses.filter(s => s !== course.sigla);
                } else if (isAvailable) {
                    approvedCourses.push(course.sigla);
                } else {
                    card.style.transform = 'scale(1.02)';
                    setTimeout(() => card.style.transform = 'none', 150);
                    return;
                }
                saveState();
                renderMalla();
            });

            listContainer.appendChild(card);
        });

        container.appendChild(col);
    });

    // Actualizar estadísticas globales
    document.getElementById('total-cr').innerText = totalCr;
    document.getElementById('total-ramos').innerText = `${totalRamosAprobados} / ${totalRamosCount}`;
}

document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm("¿Estás segura de que deseas reiniciar toda la malla?")) {
        approvedCourses = [];
        saveState();
        renderMalla();
    }
});

// Inicializar al cargar
renderMalla();
