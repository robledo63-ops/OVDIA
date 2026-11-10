import React, { useState } from 'react';
import { Compass, Shield, Zap, Sparkles, ArrowRight, ArrowLeft, CheckCircle2, Sliders, AlertCircle } from 'lucide-react';
import { findCareerOrGenerate } from '../data/ovdiaKnowledgeBase';

export function StepOdysseyCanvas({ careerName, careerProfile, studentName, onNext, onBack }) {
  const careerData = careerProfile || findCareerOrGenerate(careerName);
  const [selectedPlanTab, setSelectedPlanTab] = useState('plan1'); // 'plan1', 'plan2', 'plan3'

  // Stanford gauges state
  const [gauges, setGauges] = useState({
    resources: careerData.odysseyPlans.coherence.resources || 80,
    like: careerData.odysseyPlans.coherence.like || 90,
    confidence: careerData.odysseyPlans.coherence.confidence || 85,
    coherence: careerData.odysseyPlans.coherence.coherence || 95
  });

  const plans = [
    {
      id: 'plan1',
      title: 'Plan 1: Ruta Principal',
      subtitle: 'Aquello que ya tienes en mente',
      data: careerData.odysseyPlans.plan1,
      tag: 'Por Defecto',
      tagColor: 'bg-cyan-950 text-cyan-400 border-cyan-800'
    },
    {
      id: 'plan2',
      title: 'Plan 2: Ruta Bimodal',
      subtitle: '¿Qué harías si la Opción 1 muta o se satura?',
      data: careerData.odysseyPlans.plan2,
      tag: 'Blindaje Técnico',
      tagColor: 'bg-indigo-950 text-indigo-400 border-indigo-800'
    },
    {
      id: 'plan3',
      title: 'Plan 3: Ruta Salvaje / Radical',
      subtitle: 'Sin límites de dinero ni juicio social',
      data: careerData.odysseyPlans.plan3,
      tag: 'Creatividad Pura',
      tagColor: 'bg-amber-950 text-amber-400 border-amber-800'
    }
  ];

  const activePlan = plans.find(p => p.id === selectedPlanTab) || plans[0];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Bloque III • Jugada 3.1</span>
          <span>•</span>
          <span>Los 3 Planes Odisea (Stanford Life Design)</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-black">
          Tus 3 Vidas Posibles a 5 Años
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          Apostar todo a una sola carta te llena de pánico. Dentro de ti existen tres versiones viables y valiosas de futuro. Examínalas año por año:
        </p>
      </div>

      {/* Plan Selector Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {plans.map((p) => {
          const isSelected = selectedPlanTab === p.id;
          return (
            <button
              type="button"
              key={p.id}
              onClick={() => setSelectedPlanTab(p.id)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-b from-cyan-950/70 to-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${p.tagColor}`}>
                  {p.tag}
                </span>
                {isSelected && <span className="text-xs text-cyan-400 font-bold">Activo</span>}
              </div>
              <h3 className="font-heading font-black text-sm text-white">
                {p.title}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                {p.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Odyssey 5-Year Timeline Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 backdrop-blur-md shadow-xl">
        <div className="border-b border-slate-800 pb-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
            Lienzo Odisea a 5 Años
          </span>
          <h3 className="text-xl md:text-2xl font-heading font-black text-white">
            {activePlan.data.title}
          </h3>
          <p className="text-xs md:text-sm text-slate-300 mt-1">
            {activePlan.data.description}
          </p>
        </div>

        {/* 5-Year Stepper */}
        <div className="space-y-3 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-800 before:z-0">
          {[
            { year: 'Año 1', text: activePlan.data.year1, sub: 'Inicio y primeros retos' },
            { year: 'Año 2', text: activePlan.data.year2, sub: 'Consolidación de habilidades' },
            { year: 'Año 3', text: activePlan.data.year3, sub: 'Prácticas y vinculación' },
            { year: 'Año 4', text: activePlan.data.year4, sub: 'Proyecto integrador / titulación' },
            { year: 'Año 5', text: activePlan.data.year5, sub: 'Consolidación profesional 2030' },
          ].map((item, idx) => (
            <div key={idx} className="relative z-10 flex items-start gap-4 p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80">
              <div className="w-8 h-8 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-xs text-cyan-300">{item.year}:</span>
                  <span className="text-[10px] text-slate-500">{item.sub}</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Spark to rescue for Plan 3 */}
        {selectedPlanTab === 'plan3' && activePlan.data.sparkToRescue && (
          <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-600/40 text-xs space-y-1">
            <span className="text-amber-400 font-bold uppercase tracking-wider block">
              ✨ Chispa a Rescatar para tu Plan 1:
            </span>
            <p className="text-slate-200 leading-relaxed">
              {activePlan.data.sparkToRescue}
            </p>
          </div>
        )}

        {/* 4 Stanford Coherence Gauges */}
        <div className="pt-4 border-t border-slate-800 space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-200">
            <span className="flex items-center gap-1.5 text-cyan-400 uppercase tracking-wider">
              <Sliders className="w-4 h-4" />
              Los 4 Medidores de Coherencia de Stanford (Life Design Gauges):
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {/* Resources */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex justify-between font-bold text-slate-300">
                <span>Recursos</span>
                <span className="text-cyan-400">{gauges.resources}%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${gauges.resources}%` }} />
              </div>
              <span className="text-[10px] text-slate-500 block">Tiempo, salud, dinero</span>
            </div>

            {/* Like it */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex justify-between font-bold text-slate-300">
                <span>Gusto</span>
                <span className="text-emerald-400">{gauges.like}%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${gauges.like}%` }} />
              </div>
              <span className="text-[10px] text-slate-500 block">Alineación con AEIOU</span>
            </div>

            {/* Confidence */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex justify-between font-bold text-slate-300">
                <span>Confianza</span>
                <span className="text-indigo-400">{gauges.confidence}%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-400 h-full rounded-full" style={{ width: `${gauges.confidence}%` }} />
              </div>
              <span className="text-[10px] text-slate-500 block">Autoeficacia real</span>
            </div>

            {/* Coherence */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex justify-between font-bold text-slate-300">
                <span>Coherencia</span>
                <span className="text-amber-400">{gauges.coherence}%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full rounded-full" style={{ width: `${gauges.coherence}%` }} />
              </div>
              <span className="text-[10px] text-slate-500 block">Valores y propósito</span>
            </div>
          </div>
        </div>

      </div>

      {/* Synthesis of Bimodal Strategy (Vía 1 + Vía 2) */}
      <div className="p-5 rounded-3xl bg-indigo-950/30 border border-indigo-500/30 space-y-3">
        <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs uppercase tracking-wider">
          <Zap className="w-4 h-4 text-indigo-400" />
          <span>Estrategia Bimodal de Empleabilidad (Tu Blindaje OVDIA):</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-200">
          <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
            <strong className="text-cyan-400 block mb-1">🏛️ Vía 1: Universidad Tradicional (4 a 5 Años)</strong>
            {careerData.bimodalPath.via1}
          </div>
          <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
            <strong className="text-emerald-400 block mb-1">⚡ Vía 2: Microcredenciales Rápidas (3 a 6 Meses)</strong>
            {careerData.bimodalPath.via2}
          </div>
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
          <span>Activar Serendipia Planificada & Ruleta</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
