import React, { useState } from 'react';
import { Compass, Sparkles, Shuffle, ShieldCheck, ArrowRight, ArrowLeft, Sun, Flame, CheckCircle2 } from 'lucide-react';
import { SERENDIPITY_COMPETENCIES, SERENDIPITY_SCENARIOS } from '../data/serendipityEngine';

export function StepSerendipityHappenstance({ onNext, onBack, studentName }) {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const scenario = SERENDIPITY_SCENARIOS[currentScenarioIndex];

  const handleSpin = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setCurrentScenarioIndex((prev) => (prev + 1) % SERENDIPITY_SCENARIOS.length);
      setIsSpinning(false);
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Pilar II Metodológico</span>
          <span>•</span>
          <span>Serendipia Planificada (John Krumboltz, Stanford)</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-black">
          El 80% del Éxito nace de <span className="text-cyan-400">Sucesos Fortuitos</span>
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          {studentName}, la orientación tradicional pretendía que trazaras una línea recta a 40 años. Krumboltz demostró que los imprevistos son inevitables: tu superpoder es transformarlos en oportunidades.
        </p>
      </div>

      {/* 5 Competencies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {SERENDIPITY_COMPETENCIES.map((comp, idx) => (
          <div key={idx} className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-1">
            <span className="text-[10px] text-cyan-400 font-mono font-bold block">{comp.english}</span>
            <span className="text-xs font-bold text-white block">{comp.name}</span>
            <span className="text-[10px] text-slate-400 block leading-tight">{comp.desc}</span>
          </div>
        ))}
      </div>

      {/* Interactive Scenario Card & Spin Button */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 backdrop-blur-md shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 block">
              Simulador de Giros Inesperados de la Realidad
            </span>
            <h3 className="text-xl md:text-2xl font-heading font-black text-white mt-1">
              {scenario.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={handleSpin}
            disabled={isSpinning}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-950 hover:bg-cyan-900 border border-cyan-700 text-cyan-300 text-xs font-bold transition-all shadow-sm cursor-pointer disabled:opacity-50"
          >
            <Shuffle className={`w-4 h-4 ${isSpinning ? 'animate-spin' : ''}`} />
            <span>Girar Ruleta de Giro Inesperado</span>
          </button>
        </div>

        {/* The Event */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-200">
          <strong className="text-cyan-400 block mb-1">⚡ El Suceso no Planificado:</strong>
          {scenario.event}
        </div>

        {/* Contrast: Traditional reaction vs OVDIA Pivot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/40 text-xs space-y-2">
            <span className="text-rose-400 font-bold uppercase tracking-wider block">
              {scenario.traditionalReaction.split(':')[0]}
            </span>
            <p className="text-slate-300 leading-relaxed italic">
              {scenario.traditionalReaction.split(':')[1]}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-600/40 text-xs space-y-2">
            <span className="text-emerald-400 font-bold uppercase tracking-wider block">
              {scenario.ovdiaPivot.split(':')[0]}
            </span>
            <p className="text-slate-200 leading-relaxed font-medium">
              {scenario.ovdiaPivot.split(':')[1]}
            </p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs flex items-center justify-between">
          <span className="text-slate-400">Competencias OVDIA que se activaron:</span>
          <span className="font-bold text-cyan-400">{scenario.competencyActivated}</span>
        </div>
      </div>

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
          <span>Generar mi Reporte Ejecutivo 2030 (1 Página)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
