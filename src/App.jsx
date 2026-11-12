import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { WelcomeHero } from './components/WelcomeHero';
import { StepBaniScanner } from './components/StepBaniScanner';
import { StepAeiouRadar } from './components/StepAeiouRadar';
import { StepDeconstruction2030 } from './components/StepDeconstruction2030';
import { StepOdysseyCanvas } from './components/StepOdysseyCanvas';
import { StepSerendipityHappenstance } from './components/StepSerendipityHappenstance';
import { StepExecutiveReport } from './components/StepExecutiveReport';
import { EmailModal } from './components/EmailModal';
import { UniversityDashboardModal } from './components/UniversityDashboardModal';
import { fetchCareerWithAI } from './services/geminiService';
import { findCareerOrGenerate } from './data/ovdiaKnowledgeBase';

export function App() {
  const [currentStep, setCurrentStep] = useState(0); // 0: Welcome, 1: BANI, 2: AEIOU, 3: Deconstruct, 4: Odyssey, 5: Serendipity, 6: Master Report
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  // Fair booth counter in localStorage
  const [fairStats, setFairStats] = useState(() => {
    const saved = localStorage.getItem('ovdia_fair_stats');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return { totalEvaluated: 142 };
  });

  // State collected along the student journey
  const [studentData, setStudentData] = useState({
    name: '',
    grade: '5.º Semestre de Bachillerato',
    email: '',
    career: 'Derecho y Ciencias Jurídicas'
  });

  const [baniData, setBaniData] = useState(null);
  const [aeiouData, setAeiouData] = useState(null);
  const [careerProfile, setCareerProfile] = useState(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Save fair stats on change
  useEffect(() => {
    localStorage.setItem('ovdia_fair_stats', JSON.stringify(fairStats));
  }, [fairStats]);

  // Handlers
  const handleStart = async (formData) => {
    setStudentData(formData);
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Fetch profile in parallel in background while student completes BANI & AEIOU
    setIsAiLoading(true);
    try {
      const profile = await fetchCareerWithAI(formData.career);
      setCareerProfile(profile);
    } catch (e) {
      console.warn('Error al obtener perfil de carrera:', e);
      setCareerProfile(findCareerOrGenerate(formData.career));
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleNextFromBani = (data) => {
    setBaniData(data);
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextFromAeiou = (data) => {
    setAeiouData(data);
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextFromDeconstruct = () => {
    setCurrentStep(4);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextFromOdyssey = () => {
    setCurrentStep(5);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextFromSerendipity = () => {
    setCurrentStep(6);
    // Increment booth counter when student reaches the end
    setFairStats(prev => ({ ...prev, totalEvaluated: prev.totalEvaluated + 1 }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setCurrentStep(0);
    setStudentData({
      name: '',
      grade: '5.º Semestre de Bachillerato',
      email: '',
      career: 'Derecho y Ciencias Jurídicas'
    });
    setBaniData(null);
    setAeiouData(null);
    setCareerProfile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Sticky Header with Progress & Fair Stand Mode */}
      <Header
        currentStep={currentStep}
        totalSteps={6}
        onReset={handleReset}
        onOpenDashboard={() => setIsDashboardOpen(true)}
        fairStats={fairStats}
      />

      {/* Main Content Viewport */}
      <main className="flex-1">
        {currentStep === 0 && (
          <WelcomeHero
            onStart={handleStart}
            initialData={studentData}
          />
        )}

        {currentStep === 1 && (
          <StepBaniScanner
            initialScore={baniData}
            onNext={handleNextFromBani}
            onBack={() => setCurrentStep(0)}
            studentName={studentData.name}
          />
        )}

        {currentStep === 2 && (
          <StepAeiouRadar
            initialAeiou={aeiouData}
            onNext={handleNextFromAeiou}
            onBack={() => setCurrentStep(1)}
            studentName={studentData.name}
          />
        )}

        {currentStep === 3 && (
          <StepDeconstruction2030
            careerName={studentData.career}
            careerProfile={careerProfile}
            studentName={studentData.name}
            onNext={handleNextFromDeconstruct}
            onBack={() => setCurrentStep(2)}
          />
        )}

        {currentStep === 4 && (
          <StepOdysseyCanvas
            careerName={studentData.career}
            careerProfile={careerProfile}
            studentName={studentData.name}
            onNext={handleNextFromOdyssey}
            onBack={() => setCurrentStep(3)}
          />
        )}

        {currentStep === 5 && (
          <StepSerendipityHappenstance
            onNext={handleNextFromSerendipity}
            onBack={() => setCurrentStep(4)}
            studentName={studentData.name}
          />
        )}

        {currentStep === 6 && (
          <StepExecutiveReport
            studentData={studentData}
            careerProfile={careerProfile}
            baniData={baniData}
            aeiouData={aeiouData}
            onOpenEmailModal={() => setIsEmailModalOpen(true)}
            onResetKiosk={handleReset}
          />
        )}
      </main>

      {/* Footer (Hidden when printing) */}
      <footer className="no-print border-t border-slate-900 bg-slate-950/80 py-6 px-4 text-center text-xs text-slate-400 space-y-1">
        <p className="font-semibold text-slate-300">
          OVDIA (Orientación Vocacional Disruptiva con Inteligencia Artificial) • Edición Kiosco 2026-2030
        </p>
        <p className="text-[11px] text-slate-400">
          Desarrollado y fundamentado por el Lic. Francisco Javier Robledo Zatarain (Tijuana, B.C., México)
        </p>
        <p className="text-[10px] text-slate-400 pt-1">
          Privacidad y Confidencialidad • Acompañamiento Humano • Metodología Stanford Life Design • Prospección al 2030
        </p>
      </footer>

      {/* Email Dispatch Modal */}
      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        studentData={studentData}
        baniData={baniData}
        aeiouData={aeiouData}
      />

      {/* University Stand / Rector Modal */}
      <UniversityDashboardModal
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
        fairStats={fairStats}
      />

    </div>
  );
}
export default App;
