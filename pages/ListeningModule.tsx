
import React from 'react';

const ListeningModule: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <div>
        <h2 className="text-3xl font-serif font-bold text-slate-800">Listening Masterclass</h2>
        <p className="text-slate-500 italic">Advanced decoding of section 4 academic lectures.</p>
      </div>

      <div className="bg-slate-900 p-8 rounded-3xl text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
        <div className="w-32 h-32 bg-amber-500 rounded-2xl flex items-center justify-center text-5xl animate-pulse">
           🎧
        </div>
        <div className="flex-1 space-y-4 relative z-10">
          <h3 className="text-2xl font-bold">Lab 04: Academic Signposting</h3>
          <p className="text-slate-400 max-w-lg">
            Candidates often miss Section 4 answers because they lose track of the speaker's logic. 
            Learn to listen for "signpost words" like <em>'Furthermore'</em>, <em>'Turning now to'</em>, and <em>'In contrast'</em>.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-slate-900 px-6 py-2 rounded-xl font-bold hover:bg-slate-100 transition-colors">Play Lecture</button>
            <button className="border border-slate-700 px-6 py-2 rounded-xl font-bold hover:bg-slate-800 transition-colors">View Script</button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 text-[10rem] font-bold text-slate-800 select-none pointer-events-none -mb-10 -mr-4">04</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
           <h4 className="font-bold text-slate-800 mb-6 border-b border-slate-100 pb-2">Common Distractors at 7.0+</h4>
           <ul className="space-y-4">
             <li className="flex gap-3">
               <span className="w-6 h-6 bg-rose-100 text-rose-600 rounded flex items-center justify-center text-xs">!</span>
               <div>
                 <p className="text-sm font-bold text-slate-700">Self-Correction</p>
                 <p className="text-xs text-slate-500">"The meeting is on Tuesday... oh wait, sorry, it's actually been moved to Wednesday."</p>
               </div>
             </li>
             <li className="flex gap-3">
               <span className="w-6 h-6 bg-rose-100 text-rose-600 rounded flex items-center justify-center text-xs">!</span>
               <div>
                 <p className="text-sm font-bold text-slate-700">Paraphrased Synonyms</p>
                 <p className="text-xs text-slate-500">Question says "affordable", speaker says "doesn't put too much strain on the budget".</p>
               </div>
             </li>
           </ul>
        </div>

        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
           <h4 className="font-bold text-amber-800 mb-4">The "Prediction" Drill</h4>
           <p className="text-sm text-amber-900/70 mb-4 italic">
             Read the notes below. Before playing the audio, guess what part of speech (noun, verb, adj) fits in each blank.
           </p>
           <div className="bg-white p-4 rounded-xl border border-amber-200 text-slate-700 text-sm space-y-3">
             <p>1. The initial phase of the project requires heavy ____________ (predict: noun).</p>
             <p>2. Locals were ____________ about the new industrial park. (predict: adj/feeling).</p>
             <p>3. Increased noise levels might ____________ the local bird population. (predict: verb).</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ListeningModule;
