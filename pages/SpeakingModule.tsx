
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

const SpeakingModule: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState('Tell me about a city you enjoyed visiting.');
  
  // Simulated interaction logic for speaking
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // In a real implementation, we would use the Live API or a similar tool
      // Here we simulate the AI thinking and asking a follow-up
      setTimeout(() => {
        setTranscript(prev => [...prev, "Candidate: I really enjoyed visiting Paris because of its architectural beauty..."]);
      }, 1500);
    }
  };

  const questions = [
    "Tell me about a city you enjoyed visiting.",
    "Do you think architecture is important to a city's identity?",
    "How have modern buildings changed the way we live in urban areas?",
    "Should old buildings be preserved even if they are no longer useful?"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-serif font-bold text-slate-800">Speaking Practice</h2>
          <p className="text-slate-500 italic">Full Part 1, 2, and 3 simulation.</p>
        </div>
        <div className="flex gap-2">
           <div className="px-3 py-1 bg-rose-100 text-rose-600 rounded text-xs font-bold uppercase tracking-widest">Live Coaching</div>
        </div>
      </div>

      <div className="bg-white p-12 rounded-3xl border border-slate-100 shadow-xl flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mb-8 relative">
           <span className="text-4xl">🤖</span>
           {isRecording && (
             <div className="absolute inset-0 rounded-full border-4 border-amber-500 animate-ping opacity-25" />
           )}
        </div>
        
        <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Examiner Question</h3>
        <p className="text-2xl font-serif font-bold text-slate-800 max-w-2xl mb-12">
          "{currentQuestion}"
        </p>

        <div className="flex gap-4">
           <button 
             onClick={toggleRecording}
             className={`px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all ${
               isRecording ? 'bg-rose-500 text-white shadow-lg shadow-rose-200' : 'bg-slate-900 text-white hover:bg-slate-800'
             }`}
           >
             {isRecording ? (
               <>
                 <span className="w-3 h-3 bg-white rounded-full animate-pulse" />
                 Stop Recording
               </>
             ) : (
               <>
                 <span className="text-xl">🎙️</span>
                 Record Answer
               </>
             )}
           </button>
           <button 
             onClick={() => setCurrentQuestion(questions[Math.floor(Math.random() * questions.length)])}
             className="px-8 py-4 bg-slate-100 text-slate-700 rounded-2xl font-bold hover:bg-slate-200 transition-all"
           >
             Next Question
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
           <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
             📝 Transcript
           </h4>
           <div className="space-y-4 max-h-[200px] overflow-y-auto pr-4">
             {transcript.length > 0 ? transcript.map((t, i) => (
               <p key={i} className="text-sm text-slate-600 border-l-2 border-slate-100 pl-4">{t}</p>
             )) : (
               <p className="text-slate-400 italic text-sm">Your answer will appear here...</p>
             )}
           </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
           <h4 className="font-bold text-amber-400 mb-4 relative z-10 flex items-center gap-2">
             ⚡ Band 8 Upgrade
           </h4>
           <div className="space-y-4 relative z-10">
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Lexical Enrichment</p>
                <p className="text-sm text-slate-300">Replace "very beautiful" with "aesthetically pleasing" or "architecturally sublime".</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Fluency Tip</p>
                <p className="text-sm text-slate-300">Avoid "umm" and "like". Use fillers: "To put it simply...", "I'm inclined to believe..."</p>
              </div>
           </div>
           <div className="absolute top-0 right-0 text-amber-500/10 text-8xl font-black -mr-4 -mt-4 select-none">VOCAB</div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingModule;
