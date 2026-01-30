
import React, { useState } from 'react';
import { evaluateEssay } from '../geminiService';
import { Feedback } from '../types';

const WritingModule: React.FC = () => {
  const [essay, setEssay] = useState('');
  const [task, setTask] = useState('Some people believe that the best way to reduce crime is to increase the length of prison sentences. Others, however, believe there are better ways to help reduce crime. Discuss both views and give your own opinion.');
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (essay.length < 50) return alert('Please write a more substantial response first.');
    setLoading(true);
    try {
      const result = await evaluateEssay(essay, task);
      setFeedback(result);
    } catch (error) {
      console.error(error);
      alert('Error evaluating essay. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const wordCount = essay.trim().split(/\s+/).filter(word => word.length > 0).length;

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-serif font-bold text-slate-800">Writing Lab</h2>
          <p className="text-slate-500 italic">Targeting Band 8: Precise Argumentation & Lexical Diversity</p>
        </div>
        <div className="bg-amber-50 px-4 py-2 rounded-lg border border-amber-100">
           <span className="text-amber-700 font-bold text-sm">PRO TIP:</span>
           <span className="text-slate-600 text-sm ml-2">Use 'substantially', 'nevertheless', and 'consequently'.</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">The Task</h3>
            <p className="text-slate-700 font-medium leading-relaxed">{task}</p>
          </div>

          <div className="relative">
            <textarea
              value={essay}
              onChange={(e) => setEssay(e.target.value)}
              placeholder="Start writing your essay here (minimum 250 words)..."
              className="w-full h-[400px] p-6 rounded-2xl border border-slate-200 bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all shadow-sm resize-none text-lg leading-relaxed text-slate-800 font-mono"
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-4">
               <span className={`text-sm font-bold ${wordCount < 250 ? 'text-rose-500' : 'text-emerald-500'}`}>
                 {wordCount} words
               </span>
               <button
                 onClick={handleSubmit}
                 disabled={loading || wordCount < 50}
                 className={`px-6 py-2 rounded-xl font-bold transition-all ${
                   loading ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-slate-800 active:scale-95'
                 }`}
               >
                 {loading ? 'Analyzing...' : 'Submit for Grading'}
               </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {feedback ? (
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm animate-slideUp">
              <div className="flex justify-between items-center mb-8 pb-8 border-b border-slate-100">
                 <div>
                   <h3 className="text-2xl font-serif font-bold text-slate-800">Performance Review</h3>
                   <p className="text-slate-400 text-sm">Examiner AI Assessment</p>
                 </div>
                 <div className="w-20 h-20 rounded-full border-4 border-amber-500 flex items-center justify-center">
                    <span className="text-3xl font-black text-slate-800">{feedback.score}</span>
                 </div>
              </div>

              <div className="grid grid-cols-1 gap-6 mb-8">
                {Object.entries(feedback.criteria).map(([key, val]) => (
                  <div key={key}>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </h4>
                    <p className="text-slate-700 text-sm italic border-l-2 border-amber-200 pl-4">{val}</p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
                 <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                   💡 Improvement Path
                 </h4>
                 <ul className="space-y-2">
                   {feedback.suggestions.map((s, i) => (
                     <li key={i} className="text-sm text-slate-600 flex gap-2">
                       <span className="text-amber-500">•</span> {s}
                     </li>
                   ))}
                 </ul>
              </div>

              {feedback.sampleModelAnswer && (
                <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                  <h4 className="font-bold text-emerald-800 mb-3 text-sm">BAND 9 MODEL REWRITE:</h4>
                  <p className="text-emerald-700 text-sm italic leading-relaxed">
                    "{feedback.sampleModelAnswer}"
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center bg-slate-100/50 rounded-2xl border-2 border-dashed border-slate-200">
               <div className="text-4xl mb-4 opacity-40">📝</div>
               <h3 className="text-slate-400 font-bold mb-2">Awaiting your masterpiece</h3>
               <p className="text-slate-400 text-sm max-w-xs">Submit your essay to receive detailed feedback on Task Response, Cohesion, Lexical Resource, and Grammar.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WritingModule;
