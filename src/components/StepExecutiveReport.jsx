import React, { useEffect, useState } from 'react';
import { Mail, Printer, Download, Sparkles, CheckCircle2, ShieldCheck, Heart, User, Compass, ArrowRight, RotateCcw, Loader2, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { findCareerOrGenerate } from '../data/ovdiaKnowledgeBase';
import { generateOvdiaPdf } from '../utils/generateOvdiaPdf';

export function StepExecutiveReport({
  studentData,
  careerProfile,
  baniData,
  aeiouData,
  onOpenEmailModal,
  onResetKiosk
}) {
  const careerData = careerProfile || findCareerOrGenerate(studentData?.career);
  const [showFamilyModal, setShowFamilyModal] = useState(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const studentCleanName = studentData?.name 
    ? studentData.name.trim().replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]/g, '').replace(/\s+/g, '_')
    : 'Estudiante';

  const defaultPdfFilename = `${studentCleanName}_Reporte_Ejecutivo_OVDIA_2030.pdf`;

  useEffect(() => {
    // Dynamic document title so browser print dialog defaults to student name
    const originalTitle = document.title;
    if (studentData?.name) {
      document.title = `${studentData.name.trim()} - Reporte Ejecutivo OVDIA 2030`;
    }
    return () => {
      document.title = originalTitle;
    };
  }, [studentData]);

  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  }, []);

  // Native Browser Print Dialog
  const handlePrint = () => {
    if (studentData?.name) {
      document.title = `${studentData.name.trim()} - Reporte Ejecutivo OVDIA 2030`;
    }
    setTimeout(() => {
      window.print();
    }, 100);
  };

  // 100% Pure Vector PDF Direct Download (Zero DOM clutter, zero library freeze)
  const handleDownloadPdf = () => {
    setIsDownloadingPdf(true);
    setDownloadSuccess(false);

    try {
      generateOvdiaPdf({
        studentData,
        careerData,
        baniData,
        aeiouData,
        filename: defaultPdfFilename
      });
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    } catch (error) {
      console.error('Error generating PDF:', error);
      handlePrint();
    } finally {
      setIsDownloadingPdf(false);
    }
  };

  const currentDate = new Date().toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-8 animate-fadeIn">
      
      {/* Top Banner Actions (Hidden when printing) */}
      <div className="no-print bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-md space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-700/60 text-emerald-300 text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>¡Investigación Vocacional Completada!</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-black text-white mt-1">
              Reporte Ejecutivo de Prospección 2030
            </h2>
            <p className="text-xs md:text-sm text-slate-300">
              Generado formalmente bajo el modelo OVDIA para presentar en casa y tomar decisiones estratégicas.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Direct Vector PDF Download Button */}
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={isDownloadingPdf}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 text-xs font-heading font-black shadow-lg shadow-emerald-500/20 transition-all cursor-pointer disabled:opacity-50"
            >
              {isDownloadingPdf ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                  <span>Generando PDF...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-slate-950" />
                  <span>¡PDF Descargado!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-slate-950" />
                  <span>Descargar Archivo PDF</span>
                </>
              )}
            </button>

            {/* Email Modal Button */}
            <button
              type="button"
              onClick={onOpenEmailModal}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-heading font-black shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Enviar a mi Correo</span>
            </button>

            {/* Family Kit Button */}
            <button
              type="button"
              onClick={() => setShowFamilyModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-950 hover:bg-indigo-900 border border-indigo-700 text-indigo-300 text-xs font-bold transition-all cursor-pointer"
            >
              <Heart className="w-4 h-4" />
              <span>Kit Familiar</span>
            </button>

            {/* Print Fallback */}
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-bold transition-all cursor-pointer"
              title="Abrir diálogo de impresión de la computadora"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir</span>
            </button>
          </div>
        </div>

        {/* Dynamic filename pill */}
        <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <span>Nombre asignado al archivo:</span>
            <strong className="text-cyan-400 font-mono bg-slate-950 px-2 py-0.5 rounded border border-slate-800">{defaultPdfFilename}</strong>
          </span>
          <span className="text-slate-500 text-[10px]">Identificado con el nombre del alumno para su portafolio escolar y familiar</span>
        </div>
      </div>

      {/* THE OFFICIAL EXECUTIVE REPORT CANVAS */}
      <div 
        id="executive-report-canvas"
        className="bg-slate-950 text-slate-100 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl space-y-6 relative overflow-hidden font-sans print:border-none print:shadow-none print:p-0 print:m-0 print:space-y-4 print:text-black print:bg-white"
      >
        {/* Subtle background glow */}
        <div className="no-print absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Official Header (Never breaks) */}
        <div className="print-avoid-break border-b-2 border-slate-800 print:border-black pb-4 print:pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 print:text-slate-600 block">
              Credencial Oficial de Navegación Vocacional • Modelo OVDIA
            </span>
            <h1 className="text-2xl md:text-3xl print:text-xl font-heading font-black tracking-tight text-white print:text-black">
              REPORTE EJECUTIVO DE PROSPECCIÓN Y EGRESO 2030
            </h1>
            <p className="text-xs print:text-[10px] text-slate-400 print:text-slate-600">
              Metodología avalada por el Lic. Francisco Javier Robledo Zatarain
            </p>
          </div>

          <div className="text-left sm:text-right text-xs print:text-[10px] space-y-0.5 print:text-black">
            <div className="font-bold text-slate-200 print:text-black">
              Fecha: {currentDate}
            </div>
            <div className="text-slate-400 print:text-slate-700 text-[11px] print:text-[9px]">
              Expediente: OVDIA-2026
            </div>
            <div className="text-emerald-400 print:text-black font-semibold text-[11px] print:text-[9.5px]">
              {baniData?.semaphore || '🟢 SEMÁFORO VERDE'}
            </div>
          </div>
        </div>

        {/* Student & Target Details (Never breaks) */}
        <div className="print-avoid-break grid grid-cols-2 md:grid-cols-4 gap-3 print:gap-2 p-4 print:p-3 rounded-2xl print:rounded-xl bg-slate-900/60 print:bg-slate-50 print:border print:border-slate-300 border border-slate-800 text-xs print:text-[10px]">
          <div>
            <span className="text-[10px] print:text-[9px] text-slate-400 print:text-slate-600 block font-semibold">Estudiante / Aspirante:</span>
            <span className="font-bold text-white print:text-black text-sm print:text-xs">{studentData?.name || 'Aspirante OVDIA'}</span>
          </div>
          <div>
            <span className="text-[10px] print:text-[9px] text-slate-400 print:text-slate-600 block font-semibold">Nivel Académico:</span>
            <span className="font-medium text-slate-200 print:text-black">{studentData?.grade || '5.º Semestre'}</span>
          </div>
          <div>
            <span className="text-[10px] print:text-[9px] text-slate-400 print:text-slate-600 block font-semibold">Plan A Universitario:</span>
            <span className="font-bold text-cyan-400 print:text-black text-sm print:text-xs block">{careerData.name}</span>
            {careerData.fromAI && (
              <span className="text-[9px] text-indigo-300 font-semibold no-print flex items-center gap-1 mt-0.5">
                <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                {careerData.aiProvider || 'IA OpenAI en Vivo'}
              </span>
            )}
          </div>
          <div>
            <span className="text-[10px] print:text-[9px] text-slate-400 print:text-slate-600 block font-semibold">Rol Híbrido 2030:</span>
            <span className="font-medium text-indigo-300 print:text-black text-[11px] print:text-[9.5px] leading-tight block">{careerData.emergentRole2030}</span>
          </div>
        </div>

        {/* 2. Diagnóstico de Viabilidad y Exposición al Entorno BANI (2030) */}
        <div className="print-avoid-break space-y-1.5">
          <div className="flex items-center justify-between text-xs print:text-[10px] font-bold border-b border-slate-800 print:border-slate-300 pb-1">
            <span className="text-cyan-400 print:text-black uppercase tracking-wider">
              1. Diagnóstico de Viabilidad y Exposición al Entorno BANI (2030)
            </span>
            <span className="text-[11px] print:text-[9px] text-slate-400 print:text-slate-600 font-mono">
              Automatización Estimada: {careerData.disruptionScore}%
            </span>
          </div>
          <p className="text-xs print:text-[10px] text-slate-300 print:text-black leading-relaxed">
            {careerData.summary2030} El estudiante presenta una clasificación de <strong className="text-cyan-300 print:text-black">{baniData?.semaphore}</strong> bajo la dinámica del <strong className="text-indigo-300 print:text-black">{baniData?.attractor?.name}</strong>.
          </p>
        </div>

        {/* 3. Matriz de Competencias Insustituibles (30%) */}
        <div className="print-avoid-break space-y-2">
          <div className="text-xs print:text-[10px] font-bold text-cyan-400 print:text-black uppercase tracking-wider border-b border-slate-800 print:border-slate-300 pb-1">
            2. Matriz de Competencias Insustituibles (El 30% Estratégico)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs print:text-[9.5px]">
            {(aeiouData?.humanSuperpowers || careerData.humanSuperpowers.slice(0, 3)).map((power, idx) => (
              <div key={idx} className="p-2.5 print:p-2 rounded-xl bg-slate-900/60 print:bg-slate-50 print:border print:border-slate-300 border border-slate-800 space-y-0.5">
                <span className="text-[10px] print:text-[8.5px] font-bold text-cyan-400 print:text-black block">Competencia #{idx + 1}:</span>
                <span className="font-medium text-slate-100 print:text-black leading-tight block">{power}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Auditoría de Brecha Curricular (Contraste Teoría vs. Mercado) */}
        <div className="print-avoid-break space-y-1.5">
          <div className="text-xs print:text-[10px] font-bold text-cyan-400 print:text-black uppercase tracking-wider border-b border-slate-800 print:border-slate-300 pb-1">
            3. Auditoría de Brecha Curricular (Contraste Teoría Tradicional vs. Mercado Real)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 print:gap-2 text-xs print:text-[9.5px]">
            <div className="p-3.5 print:p-2 rounded-xl bg-slate-900/40 print:bg-slate-50 print:border print:border-slate-300 border border-slate-800 space-y-2">
              <strong className="text-rose-400 print:text-black block text-[11px] print:text-[9px]">Materias Universitarias en Riesgo de Desfase:</strong>
              <ul className="space-y-1.5 text-slate-300 print:text-black">
                {careerData.obsoleteSubjects.map((sub, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-3.5 print:p-2 rounded-xl bg-slate-900/40 print:bg-slate-50 print:border print:border-slate-300 border border-slate-800 space-y-2">
              <strong className="text-emerald-400 print:text-black block text-[11px] print:text-[9px]">Requerimientos Reales del Mercado Actual (Puntos Ciegos):</strong>
              <ul className="space-y-1.5 text-slate-300 print:text-black">
                {careerData.curriculumBlindSpots.map((blind, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    <span>{blind}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 5. Estructura de Ruta Bimodal (Plan A + B Integrados) */}
        <div className="print-avoid-break space-y-1.5">
          <div className="text-xs print:text-[10px] font-bold text-cyan-400 print:text-black uppercase tracking-wider border-b border-slate-800 print:border-slate-300 pb-1">
            4. Estructura de Ruta Bimodal (Plan A + B Integrados)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 print:gap-2 text-xs print:text-[9.5px]">
            <div className="p-3 print:p-2 rounded-xl bg-slate-900/60 print:bg-slate-50 print:border print:border-slate-300 border border-slate-800">
              <strong className="text-cyan-400 print:text-black block mb-1 text-[11px] print:text-[9px]">🏛️ Vía 1: Universidad Tradicional Formal (Plan A - 4 a 5 Años)</strong>
              <span className="text-slate-300 print:text-black leading-relaxed block">{careerData.bimodalPath.via1}</span>
            </div>
            <div className="p-3 print:p-2 rounded-xl bg-slate-900/60 print:bg-slate-50 print:border print:border-slate-300 border border-slate-800">
              <strong className="text-emerald-400 print:text-black block mb-1 text-[11px] print:text-[9px]">⚡ Vía 2: Especialización Técnica en Paralelo (3 a 6 Meses)</strong>
              <span className="text-slate-300 print:text-black leading-relaxed block">{careerData.bimodalPath.via2}</span>
            </div>
          </div>
        </div>

        {/* 6. Alternativa de Alto Impacto (Plan B Estratégico) */}
        <div className="print-avoid-break space-y-1.5">
          <div className="text-xs print:text-[10px] font-bold text-cyan-400 print:text-black uppercase tracking-wider border-b border-slate-800 print:border-slate-300 pb-1">
            5. Alternativa de Alto Impacto (Plan B Estratégico de Inserción Rápida)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 print:gap-2 text-xs print:text-[9.5px]">
            <div className="p-3 print:p-2 rounded-xl bg-slate-900/40 print:bg-slate-50 print:border print:border-slate-300 border border-slate-800">
              <strong className="text-indigo-400 print:text-black block text-[11px] print:text-[9px]">Acelerador Táctico de Experiencia:</strong>
              <span className="text-slate-300 print:text-black leading-relaxed block">{careerData.odysseyPlans.plan2.title}</span>
            </div>
            <div className="p-3 print:p-2 rounded-xl bg-slate-900/40 print:bg-slate-50 print:border print:border-slate-300 border border-slate-800">
              <strong className="text-cyan-400 print:text-black block text-[11px] print:text-[9px]">Prototipado Rápido a 7 Días (Stanford):</strong>
              <span className="text-slate-300 print:text-black leading-relaxed block">{careerData.rapidPrototype.interviewTitle}</span>
            </div>
          </div>
        </div>

        {/* 7. Dictamen de Sintonía Familiar & Firmas Oficiales (Never breaks) */}
        <div className="print-avoid-break pt-3 space-y-3 border-t-2 border-slate-800 print:border-black">
          <div className="text-xs print:text-[9.5px] space-y-1">
            <strong className="text-slate-200 print:text-black block font-heading">
              Declaración de Sintonía y Compromiso Familiar (Acuerdo de Exploración a 30 Días):
            </strong>
            <p className="text-[11px] print:text-[9px] text-slate-400 print:text-slate-700 leading-relaxed italic">
              "Presento este reporte a mi familia como resultado de una investigación seria y basada en datos, comprometiéndome a actuar con disciplina, adaptabilidad y perseverancia. Acordamos dialogar bajo el protocolo de tregua de 30 días para evaluar la evidencia de campo antes de cualquier decisión apresurada."
            </p>
          </div>

          {/* Signature Boxes */}
          <div className="grid grid-cols-3 gap-6 print:gap-4 pt-4 text-center text-xs print:text-[9px] print:text-black">
            <div className="border-t border-slate-700 print:border-black pt-1">
              <span className="font-bold text-slate-300 print:text-black block">{studentData?.name || 'Estudiante'}</span>
              <span className="text-[10px] print:text-[8px] text-slate-500 print:text-slate-600">Firma del Estudiante</span>
            </div>
            <div className="border-t border-slate-700 print:border-black pt-1">
              <span className="font-bold text-slate-300 print:text-black block">Padre, Madre o Tutor</span>
              <span className="text-[10px] print:text-[8px] text-slate-500 print:text-slate-600">Firma de Respaldo Familiar</span>
            </div>
            <div className="border-t border-slate-700 print:border-black pt-1">
              <span className="font-bold text-slate-300 print:text-black block">Lic. F. J. Robledo Zatarain</span>
              <span className="text-[10px] print:text-[8px] text-slate-500 print:text-slate-600">Sello Metodológico OVDIA</span>
            </div>
          </div>
        </div>

      </div>

      {/* Reset for next student button (Booth flow) */}
      <div className="no-print pt-4 text-center">
        <button
          type="button"
          onClick={onResetKiosk}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs font-semibold transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reiniciar Kiosco para el Siguiente Estudiante en Fila</span>
        </button>
      </div>

      {/* Family Kit Modal Popup */}
      {showFamilyModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                <Heart className="w-4 h-4" />
                <span>Kit de Sintonía Familiar • Guion de Diálogo en 3 Pasos</span>
              </div>
              <button
                onClick={() => setShowFamilyModal(false)}
                className="text-slate-500 hover:text-slate-300 text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              <p className="text-sm font-semibold text-white">
                Las Tres Reglas de Oro para hablar con tus padres en la cena familiar:
              </p>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <strong className="text-cyan-400 block font-heading">PASO 1: Validación Afectiva (Desactiva la defensa)</strong>
                <p className="italic text-slate-200">
                  "{careerData.familyKit.empathicValidation}"
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <strong className="text-emerald-400 block font-heading">PASO 2: Presentación con Datos y Ruta Bimodal</strong>
                <p className="italic text-slate-200">
                  "{careerData.familyKit.dataDefense}"
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                <strong className="text-indigo-400 block font-heading">PASO 3: Propuesta del Acuerdo a 30 Días</strong>
                <p className="italic text-slate-200">
                  "{careerData.familyKit.agreementCommitment}"
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowFamilyModal(false)}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all cursor-pointer"
            >
              Cerrar Kit Familiar
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
