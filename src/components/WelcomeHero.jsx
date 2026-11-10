import React, { useState } from 'react';
import { Compass, Sparkles, ArrowRight, ShieldCheck, Mail, User, BookOpen, Brain, Zap, HelpCircle } from 'lucide-react';
import { CAREER_DATABASE } from '../data/ovdiaKnowledgeBase';
import { PromptsLabModal } from './PromptsLabModal';

export function WelcomeHero({ onStart, initialData }) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    grade: initialData?.grade || '5.º Semestre de Bachillerato',
    email: initialData?.email || '',
    career: initialData?.career || '',
    customCareer: ''
  });

  const [showCustomInput, setShowCustomInput] = useState(false);
  const [isPromptsOpen, setIsPromptsOpen] = useState(false);

  const popularCareers = [
    'Derecho y Ciencias Jurídicas',
    'Medicina General',
    'Ingeniería en Software',
    'Psicología y Salud Mental',
    'Diseño Gráfico & UX/UI',
    'Biotecnología Genómica',
    'Ingeniería Mecatrónica',
    'Administración de Empresas'
  ];

  const handleSelectCareer = (careerName) => {
    setShowCustomInput(false);
    setFormData(prev => ({ ...prev, career: careerName, customCareer: '' }));
  };

  const handleCustomCareerToggle = () => {
    setShowCustomInput(true);
    setFormData(prev => ({ ...prev, career: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalCareer = showCustomInput && formData.customCareer.trim() 
      ? formData.customCareer.trim() 
      : (formData.career || 'Orientación General 2030');

    onStart({
      ...formData,
      career: finalCareer,
      name: formData.name.trim() || 'Aspirante Universitario'
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      
      {/* Provocative Header & Manifesto */}
      <div className="text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-cyan-300 text-xs font-semibold tracking-wide shadow-sm animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Feria Universitaria 2026-2030 • Módulo de Innovación Vocacional</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight leading-tight">
          <span className="block">Diseña tu Futuro</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent mt-1">
            en la Era BANI
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Olvida los tests aburridos de opción múltiple del siglo pasado. Descubre cómo la <strong className="text-cyan-400 font-semibold">Inteligencia Artificial</strong> automatizará el 70% de las tareas rutinarias y potencia tus <strong className="text-indigo-400 font-semibold">Superpoderes Humanos Insustituibles</strong> hacia el 2030.
        </p>

        {/* 4 Pillars Badge */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 max-w-2xl mx-auto text-xs">
          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center justify-center gap-1.5 font-medium">
            <span className="text-cyan-400 font-bold">1.</span> Teoría del Caos
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center justify-center gap-1.5 font-medium">
            <span className="text-cyan-400 font-bold">2.</span> Serendipia Activa
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center justify-center gap-1.5 font-medium">
            <span className="text-cyan-400 font-bold">3.</span> Stanford Life Design
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center justify-center gap-1.5 font-medium">
            <span className="text-cyan-400 font-bold">4.</span> Ruta Bimodal
          </div>
        </div>
      </div>

      {/* Main Kiosk Card Form */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        {/* Decorative corner glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name / Pseudonym */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  Tu Nombre o Seudónimo
                </span>
                <span className="text-[10px] text-slate-500">Privacidad Anónima</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Ej. Sofía / Alex (o seudónimo)"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700/80 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
              />
            </div>

            {/* Email for deliverable */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  Correo para enviarte tu Reporte 2030
                </span>
                <span className="text-[10px] text-slate-500">Directo a tu bandeja</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="tu.correo@ejemplo.com"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700/80 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
              />
            </div>
          </div>

          {/* Academic Level */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              Nivel Académico Actual
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {['5.º Semestre de Bachillerato', '6.º Semestre (Aspirante)', 'Egresado de Preparatoria'].map((level) => (
                <button
                  type="button"
                  key={level}
                  onClick={() => setFormData(prev => ({ ...prev, grade: level }))}
                  className={`px-3 py-2 text-xs rounded-xl font-medium border transition-all text-left ${
                    formData.grade === level
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-sm'
                      : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Career Selection */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-cyan-400" />
                ¿Qué carrera o área tienes en mente auditar al horizonte 2030?
              </span>
              <span className="text-[10px] text-slate-400">Selecciona o escribe</span>
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {popularCareers.map((c) => {
                const isSelected = !showCustomInput && formData.career === c;
                return (
                  <button
                    type="button"
                    key={c}
                    onClick={() => handleSelectCareer(c)}
                    className={`p-2.5 text-xs rounded-xl font-medium border text-left transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-cyan-900/60 to-indigo-900/60 border-cyan-400 text-white shadow-md shadow-cyan-500/10'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            {/* Custom Career option & Pre-activation Prompts Helper */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              {!showCustomInput ? (
                <button
                  type="button"
                  onClick={handleCustomCareerToggle}
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 underline underline-offset-4 cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5" />
                  ¿Tu carrera no está en la lista? Escríbela aquí manualmente
                </button>
              ) : (
                <div className="space-y-2 animate-fadeIn w-full">
                  <input
                    type="text"
                    autoFocus
                    value={formData.customCareer}
                    onChange={(e) => setFormData(prev => ({ ...prev, customCareer: e.target.value }))}
                    placeholder="Escribe el nombre de la carrera (ej. Criminología, Arquitectura, Enfermería...)"
                    className="w-full px-4 py-3 bg-slate-950 border border-cyan-500/60 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCustomInput(false)}
                    className="text-xs text-slate-500 hover:text-slate-400"
                  >
                    ← Volver a opciones predefinidas
                  </button>
                </div>
              )}

              <button
                type="button"
                onClick={() => setIsPromptsOpen(true)}
                className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/40 border border-indigo-800/50 cursor-pointer self-start sm:self-auto"
                title="Abre las plantillas de Activación Previa si aún no sabes qué estudiar"
              >
                <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
                <span>¿Aún indeciso? Actívate con IA</span>
              </button>
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:via-sky-400 hover:to-indigo-500 text-slate-950 font-heading font-black text-base md:text-lg tracking-wide shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 group transition-all duration-300 transform active:scale-[0.99] cursor-pointer"
            >
              <span>Comenzar Diagnóstico Vocacional OVDIA 2030</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          {/* Ethical Governance Footer */}
          <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-2 border-t border-slate-800/80">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Protocolo Anonymity-by-Design
            </span>
            <span>•</span>
            <span>Gobernanza Human-in-the-Loop</span>
            <span>•</span>
            <span>Validado con Cohorte de 240 Alumnos</span>
          </div>

        </form>
      </div>

      {/* Prompts Lab Modal for Undecided Students */}
      <PromptsLabModal
        isOpen={isPromptsOpen}
        onClose={() => setIsPromptsOpen(false)}
        careerName={formData.career || 'Orientación Vocacional'}
        studentName={formData.name}
        initialTab="activacion"
      />

    </div>
  );
}
