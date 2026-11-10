// Generador Vectorial de Reporte Ejecutivo OVDIA 2030 (2 Páginas Ejecutivas de Alta Gama)
// Autor Metodológico: Lic. Francisco Javier Robledo Zatarain
// Diseñado para legibilidad perfecta, cero texto amontonado y cero corrupción tipográfica.

import { jsPDF } from 'jspdf';

// Limpia emojis o caracteres que no soporta la fuente Helvetica de jsPDF
function sanitize(str) {
  if (!str) return '';
  return String(str)
    .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}]/gu, '')
    .trim();
}

export function generateOvdiaPdf({ studentData, careerData, baniData, aeiouData, filename }) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'letter'
  });

  const pageWidth = doc.internal.pageSize.getWidth();   // ~215.9 mm
  const pageHeight = doc.internal.pageSize.getHeight(); // ~279.4 mm
  const marginX = 14;
  const contentWidth = pageWidth - marginX * 2;         // ~187.9 mm
  const footerY = pageHeight - 8;

  const studentName = sanitize(studentData?.name) || 'Aspirante Universitario';
  const grade = sanitize(studentData?.grade) || '5.º Semestre de Bachillerato';
  const careerName = sanitize(careerData?.name) || 'Orientación Vocacional 2030';
  const hybridRole = sanitize(careerData?.emergentRole2030) || 'Especialista Estratégico y Liderazgo Humano-IA';
  const disruption = careerData?.disruptionScore || 70;
  const rawSemaphore = baniData?.semaphore || 'SEMÁFORO VERDE';
  const attractor = sanitize(baniData?.attractor?.name) || 'Atractor Extraño (Complejidad y Resiliencia)';

  // Determinación de color del semáforo
  const isRed = rawSemaphore.includes('ROJO');
  const isYellow = rawSemaphore.includes('AMARILLO');
  const semText = isRed ? 'SEMÁFORO ROJO' : isYellow ? 'SEMÁFORO AMARILLO' : 'SEMÁFORO VERDE';
  const semColor = isRed ? [225, 29, 72] : isYellow ? [217, 119, 6] : [16, 185, 129];

  // Helper para dibujar pie de página
  const drawFooter = (pageNum) => {
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(marginX, footerY - 3, pageWidth - marginX, footerY - 3);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(148, 163, 184); // Slate 400
    doc.text('OVDIA 2030 • Orientación Vocacional Disruptiva con IA • Lic. Francisco Javier Robledo Zatarain', marginX, footerY);
    doc.text(`Página ${pageNum} de 2`, pageWidth - marginX, footerY, { align: 'right' });
  };

  // =========================================================================
  // PÁGINA 1: Diagnóstico de Viabilidad, Superpoderes y Brecha Curricular
  // =========================================================================
  let currentY = 12;

  // 1. Barra superior decorativa
  doc.setFillColor(15, 23, 42); // Slate 900
  doc.rect(0, 0, pageWidth, 5, 'F');
  doc.setFillColor(6, 182, 212); // Cyan 500
  doc.rect(0, 4, pageWidth * 0.45, 1.5, 'F');

  // Credencial y Fecha
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(6, 148, 162); // Cyan dark
  doc.text('CREDENCIAL OFICIAL DE NAVEGACIÓN VOCACIONAL • MODELO OVDIA', marginX, currentY);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  const dateStr = `Fecha: ${new Date().toLocaleDateString('es-MX')}`;
  doc.text(dateStr, pageWidth - marginX, currentY, { align: 'right' });

  currentY += 5;

  // Título Principal
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15.5);
  doc.setTextColor(15, 23, 42);
  doc.text('REPORTE EJECUTIVO DE PROSPECCIÓN Y EGRESO 2030', marginX, currentY);

  currentY += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text('Metodología avalada por el Lic. Francisco Javier Robledo Zatarain', marginX, currentY);

  // Badge del Semáforo sin caracteres rotos (círculo vectorial puro)
  doc.setFillColor(semColor[0], semColor[1], semColor[2]);
  doc.circle(pageWidth - marginX - 35, currentY - 1, 1.8, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(semColor[0], semColor[1], semColor[2]);
  doc.text(semText, pageWidth - marginX, currentY, { align: 'right' });

  currentY += 4;
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.4);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);

  currentY += 4.5;

  // 2. Ficha del Estudiante (Tarjeta amplia con 4 columnas balanceadas)
  const cardH = 18;
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(marginX, currentY, contentWidth, cardH, 2, 2, 'FD');

  const colW = contentWidth / 4;

  // Col 1: Estudiante
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.5);
  doc.setTextColor(100, 116, 139);
  doc.text('ESTUDIANTE / ASPIRANTE:', marginX + 3, currentY + 5);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text(doc.splitTextToSize(studentName, colW - 5), marginX + 3, currentY + 11);

  // Col 2: Nivel Académico
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.5);
  doc.setTextColor(100, 116, 139);
  doc.text('NIVEL ACADÉMICO:', marginX + colW + 2, currentY + 5);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);
  doc.text(doc.splitTextToSize(grade, colW - 4), marginX + colW + 2, currentY + 11);

  // Col 3: Plan A Universitario
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.5);
  doc.setTextColor(100, 116, 139);
  doc.text('PLAN A UNIVERSITARIO:', marginX + colW * 2 + 2, currentY + 5);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(6, 148, 162);
  doc.text(doc.splitTextToSize(careerName, colW - 4), marginX + colW * 2 + 2, currentY + 11);

  // Col 4: Rol Híbrido
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.5);
  doc.setTextColor(100, 116, 139);
  doc.text('ROL HÍBRIDO 2030:', marginX + colW * 3 + 2, currentY + 5);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(79, 70, 229);
  doc.text(doc.splitTextToSize(hybridRole, colW - 4), marginX + colW * 3 + 2, currentY + 10.5);

  currentY += cardH + 7;

  // 3. SECCIÓN 1: Diagnóstico de Viabilidad BANI (2030)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('1. DIAGNÓSTICO DE VIABILIDAD Y EXPOSICIÓN AL ENTORNO BANI (2030)', marginX, currentY);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(`Automatización Operativa Estimada: ${disruption}%`, pageWidth - marginX, currentY, { align: 'right' });

  currentY += 1.8;
  doc.setDrawColor(226, 232, 240);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);

  currentY += 4.5;

  // Caja de Diagnóstico BANI
  const diagText = sanitize(careerData?.summary2030) ||
    `El campo de ${careerName} experimentará una acelerada automatización del 70% de sus tareas repetitivas hacia el 2030. Su valor radicará en la orquestación ética, la empatía humana y la resolución de problemas complejos.`;
  const splitDiag = doc.splitTextToSize(diagText, contentWidth - 8);

  const diagBoxH = splitDiag.length * 4.2 + 13;
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(marginX, currentY, contentWidth, diagBoxH, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(51, 65, 85);
  doc.text(splitDiag, marginX + 4, currentY + 5.5);

  // Barra de atractor y semáforo dentro de la caja
  const atractorLineY = currentY + diagBoxH - 4.5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Dinámica Psicológica:', marginX + 4, atractorLineY);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text(`Operando bajo ${attractor} con estado de ${semText}.`, marginX + 35, atractorLineY);

  currentY += diagBoxH + 7;

  // 4. SECCIÓN 2: Matriz de Competencias Insustituibles (El 30% Estratégico)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('2. MATRIZ DE COMPETENCIAS INSUSTITUIBLES (EL 30% ESTRATÉGICO)', marginX, currentY);

  currentY += 1.8;
  doc.setDrawColor(226, 232, 240);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);
  currentY += 4;

  const superpowers = aeiouData?.humanSuperpowers || careerData?.humanSuperpowers?.slice(0, 3) || [
    'Empatía Relacional y Contención Afectiva en Crisis',
    'Creatividad Divergente y Narrativa de Sentido Humano',
    'Juicio Crítico y Criterio Ético Contextualizado'
  ];

  const powerColW = (contentWidth - 6) / 3;
  const powerCardH = 26;

  superpowers.slice(0, 3).forEach((power, idx) => {
    const pX = marginX + idx * (powerColW + 3);

    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(pX, currentY, powerColW, powerCardH, 1.5, 1.5, 'FD');

    // Header de cada tarjeta
    doc.setFillColor(6, 182, 212);
    doc.rect(pX, currentY, powerColW, 1.2, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.8);
    doc.setTextColor(6, 148, 162);
    doc.text(`SUPERPODER HUMANO #${idx + 1}`, pX + 3, currentY + 5.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.8);
    doc.setTextColor(15, 23, 42);
    const splitPower = doc.splitTextToSize(sanitize(power), powerColW - 6);
    doc.text(splitPower, pX + 3, currentY + 10.5);
  });

  currentY += powerCardH + 7;

  // 5. SECCIÓN 3: Auditoría de Brecha Curricular (Universidad vs Mercado)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('3. AUDITORÍA DE BRECHA CURRICULAR (CONTRASTE TEORÍA VS. MERCADO CORPORATIVO)', marginX, currentY);

  currentY += 1.8;
  doc.setDrawColor(226, 232, 240);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);
  currentY += 4;

  const dualW = (contentWidth - 5) / 2;
  const auditCardH = 46;

  // 3A: Materias universitarias en riesgo de desfase
  doc.setFillColor(255, 241, 242); // Rose 50
  doc.setDrawColor(254, 205, 211); // Rose 200
  doc.roundedRect(marginX, currentY, dualW, auditCardH, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(225, 29, 72); // Rose 600
  doc.text('MATERIAS UNIVERSITARIAS EN RIESGO DE DESFASE:', marginX + 4, currentY + 5.5);

  const obsoleteList = (careerData?.obsoleteSubjects || [
    'Memorización enciclopédica de datos teóricos que hoy la tecnología procesa en segundos.',
    'Elaboración manual de formatos impresos y trámites burocráticos ya digitalizados.',
    'Prácticas operativas aisladas que no fomentan el pensamiento crítico ni la colaboración en red.'
  ]).slice(0, 3);

  let obsY = currentY + 11;
  obsoleteList.forEach((item) => {
    doc.setFillColor(225, 29, 72);
    doc.circle(marginX + 5, obsY - 1, 0.9, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.2);
    doc.setTextColor(51, 65, 85);
    const splitObs = doc.splitTextToSize(sanitize(item), dualW - 10);
    doc.text(splitObs, marginX + 8, obsY);
    obsY += splitObs.length * 3.6 + 2.5;
  });

  // 3B: Exigencias del mercado corporativo (puntos ciegos)
  const box3bX = marginX + dualW + 5;
  doc.setFillColor(240, 253, 250); // Teal 50
  doc.setDrawColor(204, 251, 241); // Teal 200
  doc.roundedRect(box3bX, currentY, dualW, auditCardH, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(13, 148, 136); // Teal 600
  doc.text('EXIGENCIAS DEL MERCADO ACTUAL (PUNTOS CIEGOS):', box3bX + 4, currentY + 5.5);

  const blindList = (careerData?.curriculumBlindSpots || [
    'Uso ético y orquestación de herramientas de Inteligencia Artificial aplicada al sector.',
    'Estrategia Bimodal: sincronización de la carrera con certificaciones cortas de alto impacto.',
    'Habilidades de comunicación asertiva, Life Design y resolución pacífica de conflictos.'
  ]).slice(0, 3);

  let blindY = currentY + 11;
  blindList.forEach((item) => {
    doc.setFillColor(13, 148, 136);
    doc.circle(box3bX + 5, blindY - 1, 0.9, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.2);
    doc.setTextColor(51, 65, 85);
    const splitBlind = doc.splitTextToSize(sanitize(item), dualW - 10);
    doc.text(splitBlind, box3bX + 8, blindY);
    blindY += splitBlind.length * 3.6 + 2.5;
  });

  // Pie de Página 1
  drawFooter(1);

  // =========================================================================
  // PÁGINA 2: Ruta Bimodal, Alternativa de Alto Impacto y Gobernanza Familiar
  // =========================================================================
  doc.addPage();
  currentY = 12;

  // Barra superior decorativa Página 2
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, pageWidth, 5, 'F');
  doc.setFillColor(79, 70, 229); // Indigo 600
  doc.rect(0, 4, pageWidth * 0.45, 1.5, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(79, 70, 229);
  doc.text('HOJA DE RUTA ESTRATÉGICA Y GOBERNANZA FAMILIAR • MODELO OVDIA 2030', marginX, currentY);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(`Aspirante: ${studentName}`, pageWidth - marginX, currentY, { align: 'right' });

  currentY += 4.5;
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.4);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);

  currentY += 6;

  // 5. SECCIÓN 4: Estructura de Ruta Bimodal (Plan A + B Integrados)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('4. ESTRUCTURA DE RUTA BIMODAL (PLAN A + B INTEGRADOS)', marginX, currentY);

  currentY += 1.8;
  doc.setDrawColor(226, 232, 240);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);
  currentY += 4;

  const bimodalBoxH = 34;

  // 4A: Vía 1 (Universidad)
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(marginX, currentY, dualW, bimodalBoxH, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(6, 148, 162);
  doc.text('VÍA 1: EDUCACIÓN UNIVERSITARIA FORMAL (4 A 5 AÑOS)', marginX + 4, currentY + 5.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(51, 65, 85);
  const via1Text = sanitize(careerData?.bimodalPath?.via1) ||
    `Licenciatura o Ingeniería formal en ${careerName} (4 a 5 años en Universidad).`;
  const splitVia1 = doc.splitTextToSize(via1Text, dualW - 8);
  doc.text(splitVia1, marginX + 4, currentY + 11.5);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7);
  doc.setTextColor(100, 116, 139);
  doc.text('Aporta el título oficial, visión profunda y rigor científico.', marginX + 4, currentY + bimodalBoxH - 4);

  // 4B: Vía 2 (Microcredenciales)
  const box4bX = marginX + dualW + 5;
  doc.setFillColor(240, 253, 244); // Green 50
  doc.setDrawColor(187, 247, 208); // Green 200
  doc.roundedRect(box4bX, currentY, dualW, bimodalBoxH, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(22, 101, 52); // Green 800
  doc.text('VÍA 2: MICROCREDENCIALES Y ESPECIALIZACIÓN (3 A 6 MESES)', box4bX + 4, currentY + 5.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(51, 65, 85);
  const via2Text = sanitize(careerData?.bimodalPath?.via2) ||
    'Microcredenciales técnicas en herramientas digitales, analítica de datos y gestión con IA aplicada.';
  const splitVia2 = doc.splitTextToSize(via2Text, dualW - 8);
  doc.text(splitVia2, box4bX + 4, currentY + 11.5);

  const earlyInc = sanitize(careerData?.bimodalPath?.earlyIncome) || 'Inserción laboral temprana y proyectos remunerados desde 2.° año.';
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.8);
  doc.setTextColor(22, 101, 52);
  const splitInc = doc.splitTextToSize(`Ingresos tempranos: ${earlyInc}`, dualW - 8);
  doc.text(splitInc, box4bX + 4, currentY + bimodalBoxH - 6);

  currentY += bimodalBoxH + 7;

  // 6. SECCIÓN 5: Alternativa de Alto Impacto (Plan B Estratégico)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('5. ALTERNATIVA DE ALTO IMPACTO (PLAN B ESTRATÉGICO)', marginX, currentY);

  currentY += 1.8;
  doc.setDrawColor(226, 232, 240);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);
  currentY += 4;

  const planBBoxH = 28;
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(marginX, currentY, contentWidth, planBBoxH, 1.5, 1.5, 'FD');

  // Columna Izquierda: Plan B
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(79, 70, 229); // Indigo 600
  doc.text('ACELERADOR TÁCTICO DE EXPERIENCIA (PLAN B):', marginX + 4, currentY + 5.5);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.2);
  doc.setTextColor(15, 23, 42);
  const plan2Title = sanitize(careerData?.odysseyPlans?.plan2?.title) || `Ruta Híbrida Bimodal en ${careerName}`;
  doc.text(doc.splitTextToSize(plan2Title, colW * 2 - 6), marginX + 4, currentY + 11);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.2);
  doc.setTextColor(71, 85, 105);
  const plan2Desc = sanitize(careerData?.odysseyPlans?.plan2?.description) ||
    'Ruta afín de rápida inserción que capitaliza los tiempos de admisión sin pausa académica.';
  doc.text(doc.splitTextToSize(plan2Desc, colW * 2 - 6), marginX + 4, currentY + 17);

  // Columna Derecha: Prototipado Stanford
  const colRightX = marginX + colW * 2 + 4;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(6, 148, 162);
  doc.text('PROTOTIPADO RÁPIDO A 7 DÍAS (STANFORD LIFE DESIGN):', colRightX, currentY + 5.5);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(15, 23, 42);
  const protoTitle = sanitize(careerData?.rapidPrototype?.interviewTitle) ||
    `Conversación de Diseño Vocacional (15 min) con Profesional en ${careerName}`;
  doc.text(doc.splitTextToSize(protoTitle, colW * 2 - 8), colRightX, currentY + 11);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.2);
  doc.setTextColor(71, 85, 105);
  const microExp = sanitize(careerData?.rapidPrototype?.microExperience) ||
    'Realizar una micro-experiencia de 2 a 3 horas investigando casos reales del día a día.';
  doc.text(doc.splitTextToSize(microExp, colW * 2 - 8), colRightX, currentY + 17);

  currentY += planBBoxH + 7;

  // 7. SECCIÓN 6: Declaración de Sintonía y Compromiso Familiar
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('6. DECLARACIÓN DE SINTONÍA Y COMPROMISO FAMILIAR (ACUERDO A 30 DÍAS)', marginX, currentY);

  currentY += 1.8;
  doc.setDrawColor(226, 232, 240);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);
  currentY += 4;

  const familyH = 22;
  doc.setFillColor(254, 252, 232); // Amber 50
  doc.setDrawColor(254, 240, 138); // Amber 200
  doc.roundedRect(marginX, currentY, contentWidth, familyH, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.8);
  doc.setTextColor(120, 53, 15); // Amber 900
  const declText =
    '"Presento este reporte a mi familia como resultado de una investigación seria y basada en datos, comprometiéndome a actuar con disciplina, adaptabilidad y perseverancia. Acordamos dialogar bajo el protocolo de tregua de 30 días para evaluar la evidencia de campo y las microcredenciales antes de cualquier decisión apresurada."';
  const splitDecl = doc.splitTextToSize(declText, contentWidth - 8);
  doc.text(splitDecl, marginX + 4, currentY + 6);

  currentY += familyH + 10;

  // 8. BLOQUE OFICIAL DE FIRMAS TRIPARTITAS (Con espacio generoso y elegante)
  const sigW = contentWidth / 3;
  const sigLineY = currentY + 14;

  // Firma 1: Estudiante
  doc.setDrawColor(100, 116, 139);
  doc.setLineWidth(0.35);
  doc.line(marginX + 8, sigLineY, marginX + sigW - 8, sigLineY);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text(studentName, marginX + sigW / 2, sigLineY + 4.5, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(100, 116, 139);
  doc.text('Firma del Estudiante / Aspirante', marginX + sigW / 2, sigLineY + 8, { align: 'center' });

  // Firma 2: Padre, Madre o Tutor
  const sig2Center = marginX + sigW * 1.5;
  doc.line(marginX + sigW + 8, sigLineY, marginX + sigW * 2 - 8, sigLineY);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Padre, Madre o Tutor', sig2Center, sigLineY + 4.5, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(100, 116, 139);
  doc.text('Firma de Respaldo y Acompañamiento', sig2Center, sigLineY + 8, { align: 'center' });

  // Firma 3: Titular OVDIA
  const sig3Center = marginX + sigW * 2.5;
  doc.line(marginX + sigW * 2 + 8, sigLineY, marginX + contentWidth - 8, sigLineY);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Lic. Francisco Javier Robledo Zatarain', sig3Center, sigLineY + 4.5, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(100, 116, 139);
  doc.text('Sello Metodológico OVDIA', sig3Center, sigLineY + 8, { align: 'center' });

  // Pie de Página 2
  drawFooter(2);

  // Guardar y descargar automáticamente
  doc.save(filename || `${studentName}_Reporte_Ejecutivo_OVDIA_2030.pdf`);
}
