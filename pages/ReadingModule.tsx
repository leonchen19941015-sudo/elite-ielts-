
import React from 'react';

const ReadingModule: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <div>
        <h2 className="text-3xl font-serif font-bold text-slate-800">Reading Strategy</h2>
        <p className="text-slate-500 italic">Speed, Accuracy, and the "Band 8" Mindset.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: '🔍', title: 'Skimming', desc: 'Read the first and last sentence of each paragraph for the main gist.' },
          { icon: '🎯', title: 'Scanning', desc: 'Look for keywords like dates, names, or technical terms in the question.' },
          { icon: '⚖️', title: 'T/F/NG', desc: 'If the text says the opposite, it\'s False. If information is missing, it\'s Not Given.' }
        ].map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:translate-y-[-4px] transition-all">
            <div className="text-3xl mb-4">{s.icon}</div>
            <h4 className="font-bold text-slate-800 mb-2">{s.title}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center text-sm">1</span>
          Active Reading Passage: "The Future of Urban Vertical Farming"
        </h3>
        
        <div className="prose prose-slate max-w-none mb-8 text-slate-700 leading-relaxed">
          <p>
            As the global population is projected to reach nine billion by 2050, traditional agriculture faces unprecedented challenges. 
            <strong> Urban vertical farming</strong>, a concept that once existed only in science fiction, has emerged as a viable solution 
            to the impending food security crisis. Unlike conventional farming, which is subject to seasonal changes and natural disasters, 
            vertical farms operate in strictly controlled environments...
          </p>
        </div>

        <div className="space-y-4">
           <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Question set</p>
           {[
             "Vertical farming is independent of weather conditions. (TRUE/FALSE/NOT GIVEN)",
             "Vertical farms are more expensive than traditional farms. (TRUE/FALSE/NOT GIVEN)",
             "The concept of vertical farming was first proposed in 2050. (TRUE/FALSE/NOT GIVEN)"
           ].map((q, i) => (
             <div key={i} className="flex gap-4 items-center p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 font-bold">{i+1}.</span>
                <span className="flex-1 font-medium text-slate-700">{q}</span>
                <input type="text" className="w-24 p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none" placeholder="Answer..." />
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ReadingModule;
