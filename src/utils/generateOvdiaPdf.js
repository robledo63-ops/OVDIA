import { jsPDF } from 'jspdf';

export function generateOvdiaPdf({ studentData, careerData, baniData, aeiouData, filename }) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'letter'
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // ~215.9 mm
  const pageHeight = doc.internal.pageSize.getHeight(); // ~279.4 mm
  const marginX = 14;
  const contentWidth = pageWidth - marginX * 2; // ~187.9 mm
  let currentY = 14;

  const studentName = studentData?.name ? studentData.name.trim() : 'Estudiante';
  const grade = studentData?.grade || '5.º Semestre de Bachillerato';
  const careerName = careerData?.name || 'Orientación Vocacional 2030';
  const hybridRole = careerData?.emergentRole2030 || 'Especialista Estratégico y Colaborador Humano-IA';
  const disruption = careerData?.disruptionScore || 70;
  const semaphore = baniData?.semaphore || '🟢 SEMÁFORO VERDE';
  const attractor = baniData?.attractor?.name || 'Atractor Extraño (Complejidad y Resiliencia)';

  // 1. Top Decorative Bar
  doc.setFillColor(15, 23, 42); // Slate 900
  doc.rect(0, 0, pageWidth, 5, 'F');
  doc.setFillColor(6, 182, 212); // Cyan 500
  doc.rect(0, 4, pageWidth * 0.45, 1.5, 'F');

  // Header Credential
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(6, 148, 162); // Cyan dark
  doc.text('CREDENCIAL OFICIAL DE NAVEGACIÓN VOCACIONAL • MODELO OVDIA', marginX, currentY);
  
  // Date & Badge on Right
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139); // Slate 500
  const dateStr = `Fecha: ${new Date().toLocaleDateString('es-MX')}`;
  doc.text(dateStr, pageWidth - marginX, currentY, { align: 'right' });
  
  currentY += 5;

  // Main Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(15, 23, 42); // Slate 900
  doc.text('REPORTE EJECUTIVO DE PROSPECCIÓN Y EGRESO 2030', marginX, currentY);

  currentY += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text('Metodología avalada por el Lic. Francisco Javier Robledo Zatarain', marginX, currentY);
  
  // Semaphore status on right
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  if (semaphore.includes('ROJO')) {
    doc.setTextColor(225, 29, 72); // Rose 600
  } else if (semaphore.includes('AMARILLO')) {
    doc.setTextColor(217, 119, 6); // Amber 600
  } else {
    doc.setTextColor(16, 185, 129); // Emerald 500
  }
  doc.text(semaphore, pageWidth - marginX, currentY, { align: 'right' });

  currentY += 4;
  doc.setDrawColor(203, 213, 225); // Slate 300
  doc.setLineWidth(0.4);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);

  currentY += 4;

  // 2. Student Info Card
  doc.setFillColor(248, 250, 252); // Slate 50
  doc.setDrawColor(226, 232, 240); // Slate 200
  doc.roundedRect(marginX, currentY, contentWidth, 16, 2, 2, 'FD');

  const colWidth = contentWidth / 4;
  
  // Col 1: Student
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(100, 116, 139);
  doc.text('ESTUDIANTE / ASPIRANTE:', marginX + 3, currentY + 4.5);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text(doc.splitTextToSize(studentName, colWidth - 5), marginX + 3, currentY + 10);

  // Col 2: Grade
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(100, 116, 139);
  doc.text('NIVEL ACADÉMICO:', marginX + colWidth + 2, currentY + 4.5);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);
  doc.text(doc.splitTextToSize(grade, colWidth - 4), marginX + colWidth + 2, currentY + 9.5);

  // Col 3: Career
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(100, 116, 139);
  doc.text('PLAN A UNIVERSITARIO:', marginX + colWidth * 2 + 2, currentY + 4.5);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(6, 148, 162);
  doc.text(doc.splitTextToSize(careerName, colWidth - 4), marginX + colWidth * 2 + 2, currentY + 9.5);

  // Col 4: Hybrid Role
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(100, 116, 139);
  doc.text('ROL HÍBRIDO 2030:', marginX + colWidth * 3 + 2, currentY + 4.5);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(79, 70, 229); // Indigo 600
  doc.text(doc.splitTextToSize(hybridRole, colWidth - 4), marginX + colWidth * 3 + 2, currentY + 8.5);

  currentY += 20;

  // 3. Section 1: Diagnóstico de Viabilidad y Exposición al Entorno BANI (2030)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('1. DIAGNÓSTICO DE VIABILIDAD Y EXPOSICIÓN AL ENTORNO BANI (2030)', marginX, currentY);
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text(`Automatización Operativa: ${disruption}%`, pageWidth - marginX, currentY, { align: 'right' });

  currentY += 1.5;
  doc.setDrawColor(226, 232, 240);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);

  currentY += 3.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);
  const diagText = `${careerData?.summary2030 || ''} El estudiante presenta una clasificación de ${semaphore} operando bajo la dinámica del ${attractor}.`;
  const splitDiag = doc.splitTextToSize(diagText, contentWidth);
  doc.text(splitDiag, marginX, currentY);
  currentY += splitDiag.length * 3.8 + 3;

  // 4. Section 2: Matriz de Competencias Insustituibles (El 30% Estratégico)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('2. MATRIZ DE COMPETENCIAS INSUSTITUIBLES (EL 30% ESTRATÉGICO)', marginX, currentY);
  
  currentY += 1.5;
  doc.setDrawColor(226, 232, 240);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);
  currentY += 3;

  const superpowers = aeiouData?.humanSuperpowers || careerData?.humanSuperpowers?.slice(0, 3) || [];
  const cardWidth = (contentWidth - 6) / 3;

  superpowers.slice(0, 3).forEach((power, idx) => {
    const cardX = marginX + idx * (cardWidth + 3);
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(cardX, currentY, cardWidth, 14, 1.5, 1.5, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(6, 148, 162);
    doc.text(`SUPERPODER #${idx + 1}`, cardX + 2.5, currentY + 3.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(15, 23, 42);
    const splitPower = doc.splitTextToSize(power, cardWidth - 5);
    doc.text(splitPower, cardX + 2.5, currentY + 7.5);
  });

  currentY += 17.5;

  // 5. Section 3: Auditoría de Brecha Curricular
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('3. AUDITORÍA DE BRECHA CURRICULAR (CONTRASTE TEORÍA VS. MERCADO)', marginX, currentY);

  currentY += 1.5;
  doc.setDrawColor(226, 232, 240);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);
  currentY += 3;

  const dualWidth = (contentWidth - 4) / 2;
  
  // Box 3A: Materias en riesgo de desfase
  doc.setFillColor(255, 241, 242); // Rose 50
  doc.setDrawColor(254, 205, 211); // Rose 200
  doc.roundedRect(marginX, currentY, dualWidth, 18, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(225, 29, 72); // Rose 600
  doc.text('MATERIAS UNIVERSITARIAS EN RIESGO DE DESFASE:', marginX + 3, currentY + 4);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.2);
  doc.setTextColor(51, 65, 85);
  const obsText = (careerData?.obsoleteSubjects || []).join(' • ');
  doc.text(doc.splitTextToSize(obsText, dualWidth - 6), marginX + 3, currentY + 8);

  // Box 3B: Requerimientos reales del mercado (puntos ciegos)
  doc.setFillColor(240, 253, 250); // Teal 50
  doc.setDrawColor(204, 251, 241); // Teal 200
  doc.roundedRect(marginX + dualWidth + 4, currentY, dualWidth, 18, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(13, 148, 136); // Teal 600
  doc.text('EXIGENCIAS DEL MERCADO LABORAL ACTUAL (PUNTOS CIEGOS):', marginX + dualWidth + 7, currentY + 4);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.2);
  doc.setTextColor(51, 65, 85);
  const blindText = (careerData?.curriculumBlindSpots || []).join(' • ');
  doc.text(doc.splitTextToSize(blindText, dualWidth - 6), marginX + dualWidth + 7, currentY + 8);

  currentY += 21.5;

  // 6. Section 4: Estructura de Ruta Bimodal (Plan A + B Integrados)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('4. ESTRUCTURA DE RUTA BIMODAL (PLAN A + B INTEGRADOS)', marginX, currentY);

  currentY += 1.5;
  doc.setDrawColor(226, 232, 240);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);
  currentY += 3;

  // Box 4A: Via 1
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(marginX, currentY, dualWidth, 17, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(6, 148, 162);
  doc.text('VÍA 1: EDUCACIÓN UNIVERSITARIA FORMAL (4-5 AÑOS)', marginX + 3, currentY + 4);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  const via1Text = careerData?.bimodalPath?.via1 || 'Formación universitaria tradicional con sólida base científica y ética.';
  doc.text(doc.splitTextToSize(via1Text, dualWidth - 6), marginX + 3, currentY + 8.5);

  // Box 4B: Via 2
  doc.setFillColor(240, 253, 244); // Green 50
  doc.setDrawColor(187, 247, 208); // Green 200
  doc.roundedRect(marginX + dualWidth + 4, currentY, dualWidth, 17, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(22, 101, 52); // Green 800
  doc.text('VÍA 2: ESPECIALIZACIÓN TÉCNICA EN PARALELO (3-6 MESES)', marginX + dualWidth + 7, currentY + 4);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  const via2Text = careerData?.bimodalPath?.via2 || 'Certificaciones ágiles de alta demanda en herramientas digitales e IA.';
  doc.text(doc.splitTextToSize(via2Text, dualWidth - 6), marginX + dualWidth + 7, currentY + 8.5);

  currentY += 20.5;

  // 7. Section 5: Alternativa de Alto Impacto (Plan B Estratégico)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('5. ALTERNATIVA DE ALTO IMPACTO (PLAN B ESTRATÉGICO)', marginX, currentY);

  currentY += 1.5;
  doc.setDrawColor(226, 232, 240);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);
  currentY += 3;

  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(marginX, currentY, contentWidth, 13, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(79, 70, 229);
  doc.text('ACELERADOR TÁCTICO DE EXPERIENCIA (PLAN B):', marginX + 3, currentY + 4);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  doc.text(careerData?.odysseyPlans?.plan2?.title || 'Ruta Bimodal de Inserción Rápida', marginX + 3, currentY + 8.5);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(6, 148, 162);
  doc.text('PROTOTIPADO RÁPIDO A 7 DÍAS (STANFORD):', marginX + colWidth * 2, currentY + 4);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  const protoTitle = careerData?.rapidPrototype?.interviewTitle || 'Conversación de diseño con profesionista (15 min)';
  doc.text(doc.splitTextToSize(protoTitle, colWidth * 2 - 4), marginX + colWidth * 2, currentY + 8.5);

  currentY += 16.5;

  // 8. Section 6: Declaración de Sintonía Familiar & Firmas Oficiales
  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(0.4);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);
  currentY += 3;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(15, 23, 42);
  doc.text('DECLARACIÓN DE SINTONÍA Y COMPROMISO FAMILIAR (ACUERDO A 30 DÍAS):', marginX, currentY);

  currentY += 3.5;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.2);
  doc.setTextColor(71, 85, 105);
  const declText = '"Presento este reporte a mi familia como resultado de una investigación seria y basada en datos, comprometiéndome a actuar con disciplina, adaptabilidad y perseverancia. Acordamos dialogar bajo el protocolo de tregua de 30 días para evaluar la evidencia de campo antes de cualquier decisión apresurada."';
  const splitDecl = doc.splitTextToSize(declText, contentWidth);
  doc.text(splitDecl, marginX, currentY);

  currentY += splitDecl.length * 3.2 + 8;

  // Signatures
  const sigColWidth = contentWidth / 3;
  const sigY = currentY;

  // Sig 1: Student
  doc.setDrawColor(100, 116, 139);
  doc.setLineWidth(0.3);
  doc.line(marginX + 6, sigY, marginX + sigColWidth - 6, sigY);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(15, 23, 42);
  doc.text(studentName, marginX + sigColWidth / 2, sigY + 3.5, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Firma del Estudiante', marginX + sigColWidth / 2, sigY + 6.5, { align: 'center' });

  // Sig 2: Parents
  doc.line(marginX + sigColWidth + 6, sigY, marginX + sigColWidth * 2 - 6, sigY);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Padre, Madre o Tutor', marginX + sigColWidth * 1.5, sigY + 3.5, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Firma de Respaldo Familiar', marginX + sigColWidth * 1.5, sigY + 6.5, { align: 'center' });

  // Sig 3: Counselor / OVDIA Seal
  doc.line(marginX + sigColWidth * 2 + 6, sigY, marginX + contentWidth - 6, sigY);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Lic. F. J. Robledo Zatarain', marginX + sigColWidth * 2.5, sigY + 3.5, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Sello Metodológico OVDIA', marginX + sigColWidth * 2.5, sigY + 6.5, { align: 'center' });

  // Trigger browser download directly!
  doc.save(filename || 'Reporte_Ejecutivo_OVDIA_2030.pdf');
}
