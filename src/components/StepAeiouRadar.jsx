import React, { useState } from 'react';
import { Compass, Flame, BatteryCharging, Sparkles, ArrowRight, ArrowLeft, Heart, Shield, Cpu, Users } from 'lucide-react';

export function StepAeiouRadar({ initialAeiou, onNext, onBack, studentName }) {
  const activityOptions = [
    { id: 'escuchar', label: 'Escuchar y Acompañar a Otros', icon: Heart },
    { id: 'crear', label: 'Diseñar o Crear Soluciones Visuales', icon: Sparkles },
    { id: 'tecnologia', label: 'Resolver Problemas Técnicos o Código', icon: Cpu },
    { id: 'liderar', label: 'Liderar y Convencer en Equipos', icon: Users },
    { id: 'investigar', label: 'Investigar Datos y Leer a Fondo', icon: Compass },
    { id: 'construir', label: 'Reparar y Construir con las Manos', icon: BatteryCharging }
  ];

  // Store activity IDs for bulletproof matching
  const [selectedActivityIds, setSelectedActivityIds] = useState(() => {
    if (initialAeiou?.activityIds && Array.isArray(initialAeiou.activityIds)) {
      return initialAeiou.activityIds;
    }
    if (initialAeiou?.activities && Array.isArray(initialAeiou.activities)) {
      // map any existing label to id
      const matched = initialAeiou.activities.map(act => {
        const found = activityOptions.find(o => o.label === act || o.id === act);
        return found ? found.id : null;
      }).filter(Boolean);
      return matched.length > 0 ? matched : ['escuchar', 'crear'];
    }
    return ['escuchar', 'crear'];
  });

  const [selectedEnvironment, setSelectedEnvironment] = useState(
    initialAeiou?.environment || 'Espacio Remoto Digital / Autónomo'
  );
  const [selectedInteraction, setSelectedInteraction] = useState(
    initialAeiou?.interaction || 'Interacción Cercana 1 a 1'
  );
  
  // Dual energy gauges (0-100%)
  const [flowScore, setFlowScore] = useState(initialAeiou?.flowScore || 85);
  const [energyScore, setEnergyScore] = useState(initialAeiou?.energyScore || 90);

  const environmentOptions = [
    'Espacio Remoto Digital / Autónomo',
    'Laboratorio o Consultorio Silencioso',
    'Taller o Planta Dinámica con Acción',
    'Al Aire Libre o en la Comunidad'
  ];

  const interactionOptions = [
    'Interacción Cercana 1 a 1 (diálogo íntimo)',
    'Colaboración Ágil en Equipos Pequeños',
    'Trabajo Autónomo en Solitario',
    'Liderazgo frente a Audiencias y Grupos'
  ];

  const toggleActivity = (id) => {
    if (selectedActivityIds.includes(id)) {
      if (selectedActivityIds.length > 1) {
        setSelectedActivityIds(selectedActivityIds.filter(a => a !== id));
      }
    } else {
      if (selectedActivityIds.length < 3) {
        setSelectedActivityIds([...selectedActivityIds, id]);
      }
    }
  };

  // Derive 3 Human Superpowers dynamically based on selections
  const deriveSuperpowers = () => {
    const list = [];
    if (selectedActivityIds.includes('escuchar')) {
      list.push('Empatía Relacional y Contención Afectiva en Crisis');
    }
    if (selectedActivityIds.includes('crear')) {
      list.push('Creatividad Divergente y Narrativa de Sentido Humano');
    }
    if (selectedActivityIds.includes('tecnologia') || selectedActivityIds.includes('investigar')) {
      list.push('Juicio Crítico y Arquitectura de Soluciones Complejas');
    }
    if (selectedActivityIds.includes('liderar')) {
      list.push('Negociación Compleja y Resolución Pacífica de Conflictos');
    }
    if (selectedActivityIds.includes('construir')) {
      list.push('Pensamiento Sistémico Práctico y Destreza de Campo');
    }

    // Default fallbacks to guarantee 3 robust powers
    if (!list.includes('Juicio Ético y Criterio Contextualizado')) list.push('Juicio Ético y Criterio Contextualizado');
    if (list.length < 3) list.push('Escucha Activa y Lectura de Lenguaje No Verbal');
    return list.slice(0, 3);
  };

  const humanSuperpowers = deriveSuperpowers();

  const handleContinue = () => {
    const activityLabels = selectedActivityIds.map(
      id => activityOptions.find(o => o.id === id)?.label || id
    );

    onNext({
      activityIds: selectedActivityIds,
      activities: activityLabels,
      environment: selectedEnvironment,
      interaction: selectedInteraction,
      flowScore,
      energyScore,
      humanSuperpowers
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <span>Bloque I • Jugada 1.2</span>
          <span>•</span>
          <span>Bitácora AEIOU (Stanford Life Design)</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-black">
          Tu Brújula de Flujo: <span className="text-cyan-400">Energía Real vs. Compromiso</span>
        </h2>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          La IA no tiene cuerpo ni biografía. Para que te entregue proyecciones de alto valor al 2030, necesita tus patrones reales de flujo (cuándo se te pasa el tiempo volando y qué te llena de vitalidad).
        </p>
      </div>

      {/* Activities Selector (A de AEIOU) */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 backdrop-blur-md shadow-xl">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center text-xs font-bold">A</span>
            Actividades de Alto Flujo (Elige hasta 3 donde se te pasa el tiempo volando)
          </label>
          <span className="text-xs text-cyan-400 font-semibold px-2.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-800/60">
            {selectedActivityIds.length} de 3 seleccionadas
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {activityOptions.map((opt) => {
            const isSelected = selectedActivityIds.includes(opt.id);
            const Icon = opt.icon;
            return (
              <button
                type="button"
                key={opt.id}
                onClick={() => toggleActivity(opt.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-950/70 border-cyan-400 text-white shadow-md shadow-cyan-500/10'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className={`p-2 rounded-xl mt-0.5 ${isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-400'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-xs font-semibold leading-snug">
                  {opt.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* E & I Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800/80">
          
          {/* E (Entorno) */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-indigo-950 text-indigo-400 border border-indigo-800 flex items-center justify-center text-[10px] font-bold">E</span>
              Entorno Físico o Digital Preferido
            </label>
            <div className="space-y-1.5">
              {environmentOptions.map((env) => (
                <button
                  type="button"
                  key={env}
                  onClick={() => setSelectedEnvironment(env)}
                  className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all ${
                    selectedEnvironment === env
                      ? 'bg-indigo-950/70 border-indigo-400 text-indigo-200 font-semibold'
                      : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {env}
                </button>
              ))}
            </div>
          </div>

          {/* I (Interacciones) */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-sky-950 text-sky-400 border border-sky-800 flex items-center justify-center text-[10px] font-bold">I</span>
              Dinámica de Interacción Social
            </label>
            <div className="space-y-1.5">
              {interactionOptions.map((int) => (
                <button
                  type="button"
                  key={int}
                  onClick={() => setSelectedInteraction(int)}
                  className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all ${
                    selectedInteraction === int
                      ? 'bg-sky-950/70 border-sky-400 text-sky-200 font-semibold'
                      : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {int}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Dual Energy & Engagement Gauges (Good Time Journal) */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 pt-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-200">
            <span className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" />
              Compromiso / Flow en tus momentos pico: {flowScore}%
            </span>
            <span className="text-[11px] text-slate-400">¿Qué tan absorto te sientes?</span>
          </div>
          <input
            type="range"
            min="40"
            max="100"
            value={flowScore}
            onChange={(e) => setFlowScore(Number(e.target.value))}
            className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />

          <div className="flex items-center justify-between text-xs font-bold text-slate-200 pt-2 border-t border-slate-900">
            <span className="flex items-center gap-2">
              <BatteryCharging className="w-4 h-4 text-emerald-400" />
              Vitalidad y Energía resultante al terminar: {energyScore}%
            </span>
            <span className="text-[11px] text-slate-400">¿Sales energizado o drenado?</span>
          </div>
          <input
            type="range"
            min="40"
            max="100"
            value={energyScore}
            onChange={(e) => setEnergyScore(Number(e.target.value))}
            className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
        </div>

      </div>

      {/* Extracted Superpowers Card */}
      <div className="bg-gradient-to-r from-cyan-950/40 via-slate-900/80 to-indigo-950/40 border border-cyan-500/30 rounded-3xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Tus 3 Superpoderes Humanos Insustituibles al 2030 (Extraídos de tu Flujo):</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          {humanSuperpowers.map((power, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/90 text-xs space-y-1.5">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                Superpoder #{idx + 1}
              </span>
              <p className="font-semibold text-slate-100 text-xs leading-snug">
                {power}
              </p>
              <p className="text-[11px] text-slate-400">
                Ninguna IA generativa o algoritmo puede emular esta competencia corporal y relacional.
              </p>
            </div>
          ))}
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
          onClick={handleContinue}
          className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 text-sm font-heading font-black tracking-wide shadow-lg shadow-cyan-500/20 transition-all transform active:scale-95 cursor-pointer"
        >
          <span>Deconstruir Profesión 2030 (Regla 70/30)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
