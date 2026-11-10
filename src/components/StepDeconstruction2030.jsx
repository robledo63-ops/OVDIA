import React, { useState } from 'react';
import { Cpu, UserCheck, ArrowRight, ArrowLeft, AlertOctagon, CheckCircle2, ShieldCheck, Sparkles, BookOpen, Layers } from 'lucide-react';
import { findCareerOrGenerate } from '../data/ovdiaKnowledgeBase';

export function StepDeconstruction2030({ careerName, careerProfile, studentName, onNext, onBack }) {
  const careerData = careerProfile || findCareerOrGenerate(careerName);
  const [activeTab, setActiveTab] = useState('7030'); // '7030' or 'curriculum'

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Bloque II • Jugada 2.1</span>
          <span>•</span>
          <span>Deconstrucción Ocupacional al 2030</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-black">
          Auditoría de Futuro: <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">{careerData.name}</span>
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          {studentName}, la IA no eliminará tu carrera completa: automatizará las tareas mecánicas. Quien compite memorizando pierde; quien colabora con la máquina usando juicio ético y empatía se vuelve insustituible.
        </p>
      </div>

      {/* Emergent 2030 Hybrid Role Pill */}
      <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/80 via-slate-900/90 to-indigo-950/80 border border-cyan-500/40 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 block">
            Rol Híbrido Emergente al 2030 (El Perfil que Contratará el Mercado):
          </span>
          <span className="text-lg md:text-xl font-heading font-black text-white">
            {careerData.emergentRole2030}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {careerData.fromAI && (
            <div className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-indigo-950 border border-indigo-600/70 text-indigo-300 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Deconstruido con {careerData.aiProvider || 'IA en Vivo'}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-950 border border-cyan-800 text-cyan-300">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Disrupción Operativa: {careerData.disruptionScore}%</span>
          </div>
        </div>
      </div>

      {/* Tabs Switcher: 70/30 Split vs Curriculum Audit */}
      <div className="flex gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 max-w-md">
        <button
          type="button"
          onClick={() => setActiveTab('7030')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === '7030'
              ? 'bg-cyan-500 text-slate-950 shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Regla de Deconstrucción 70/30</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('curriculum')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'curriculum'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Auditoría de Malla (Puntos Ciegos)</span>
        </button>
      </div>

      {/* Tab 1: The 70 / 30 Deconstruction Matrix */}
      {activeTab === '7030' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          
          {/* Left Column: 70% Operativo Automatizable (IA) */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4 backdrop-blur-md">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800 text-slate-300">
              <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Territorio de la Máquina</span>
                <h3 className="font-heading font-black text-base text-white">70% Operativo Automatizable</h3>
              </div>
            </div>
            
            <p className="text-xs text-slate-400">
              Tareas repetitivas, mecánicas o de procesamiento de datos que la IA hace y hará en segundos. Si tu formación se limita a esto, tu perfil estará en riesgo:
            </p>

            <ul className="space-y-2.5 pt-1">
              {careerData.automatedTasks.map((task, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                  <span className="text-cyan-400 font-bold mt-0.5">✕</span>
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: 30% Superpoderes Humanos Insustituibles */}
          <div className="bg-gradient-to-b from-indigo-950/50 to-slate-900/80 border border-indigo-500/40 rounded-3xl p-6 space-y-4 backdrop-blur-md shadow-lg shadow-indigo-950/30">
            <div className="flex items-center gap-2 pb-3 border-b border-indigo-900/60 text-slate-200">
              <div className="p-2 rounded-xl bg-indigo-950 border border-indigo-800 text-indigo-400">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">Tu Ventaja Competitiva</span>
                <h3 className="font-heading font-black text-base text-white">30% Superpoderes Humanos</h3>
              </div>
            </div>

            <p className="text-xs text-indigo-200">
              Habilidades afectivas, éticas y de negociación que exigen cuerpo, biografía, dilema moral y presencia real. Esto es lo que justificará honorarios altos al 2030:
            </p>

            <ul className="space-y-2.5 pt-1">
              {careerData.humanSuperpowers.map((power, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-100 bg-slate-950/80 p-3 rounded-xl border border-indigo-800/60 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{power}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      )}

      {/* Tab 2: University Curriculum Audit */}
      {activeTab === 'curriculum' && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 backdrop-blur-md animate-fadeIn">
          <div>
            <h3 className="font-heading font-black text-xl text-white">
              Auditoría de Rezagos y Puntos Ciegos Universitarios
            </h3>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              La mayoría de los planes de estudio en América Latina tardan entre 5 y 10 años en actualizarse. El estudiante OVDIA audita su carrera antes de inscribirse para saber qué debe aprender por su cuenta:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Obsolete subjects */}
            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                <AlertOctagon className="w-4 h-4" />
                <span>Materias Tradicionales con Alto Riesgo de Obsolescencia:</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {careerData.obsoleteSubjects.map((sub, idx) => (
                  <li key={idx} className="p-2.5 rounded-xl bg-slate-950/80 border border-rose-900/30 flex items-start gap-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum Blind Spots */}
            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-800/40 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Puntos Ciegos (Lo que el Mercado Exige y la Escuela No Enseña):</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {careerData.curriculumBlindSpots.map((blind, idx) => (
                  <li key={idx} className="p-2.5 rounded-xl bg-slate-950/80 border border-cyan-800/30 flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>{blind}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
            <strong className="text-cyan-400 block mb-1">💡 La Solución OVDIA: Estrategia Bimodal</strong>
            No te quejes de que la universidad no actualice el plan; cursa la licenciatura formal (Vía 1) mientras obtienes microcredenciales ágiles de 3 meses (Vía 2) para cubrir estos puntos ciegos.
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-sm font-medium transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Atrás</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 text-sm font-heading font-black tracking-wide shadow-lg shadow-cyan-500/20 transition-all transform active:scale-95 cursor-pointer"
        >
          <span>Diseñar mis 3 Planes Odisea & Ruta Bimodal</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
