
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const modules = [
    { title: 'Listening', score: 7.0, target: 8.5, desc: 'Master section 4 lectures and map questions.', color: 'blue' },
    { title: 'Reading', score: 6.5, target: 8.0, desc: 'Improve summary completion and speed reading.', color: 'emerald' },
    { title: 'Writing', score: 6.0, target: 7.5, desc: 'Focus on complex structures and task response.', color: 'amber' },
    { title: 'Speaking', score: 6.5, target: 8.0, desc: 'Develop lexical resource and fluency.', color: 'rose' },
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fadeIn">
      <header className="mb-10">
        <h2 className="text-4xl font-serif font-bold text-slate-800 mb-2">Welcome back, Scholar</h2>
        <p className="text-slate-500 max-w-2xl text-lg">
          You're currently on the "Bridge to 8.0" track. We've analyzed your weak spots in Writing and Reading. Let's tackle them today.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {modules.map((m) => (
          <div key={m.title} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
            <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-${m.color}-100 text-${m.color}-600 group-hover:scale-110 transition-transform`}>
              {m.title === 'Listening' && '🎧'}
              {m.title === 'Reading' && '📖'}
              {m.title === 'Writing' && '✍️'}
              {m.title === 'Speaking' && '🗣️'}
            </div>
            <h3 className="font-bold text-xl mb-1">{m.title}</h3>
            <div className="flex gap-4 items-center mb-4">
               <div>
                 <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Current</p>
                 <p className="font-bold text-slate-700">{m.score}</p>
               </div>
               <div className="w-px h-6 bg-slate-200" />
               <div>
                 <p className="text-[10px] text-amber-500 uppercase font-bold tracking-tighter">Target</p>
                 <p className="font-bold text-amber-600">{m.target}</p>
               </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">{m.desc}</p>
            <Link 
              to={`/${m.title.toLowerCase()}`}
              className="text-slate-900 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
            >
              Start Practice <span>→</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">The "Band 8" Checklist</h3>
            <ul className="space-y-4">
              {[
                "Use a range of complex sentence structures naturally",
                "Demonstrate precise vocabulary (idiomatic & topic-specific)",
                "Develop ideas fully with evidence-based reasoning",
                "Maintain perfect coherence even in lengthy responses"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded-xl transition-colors">
              Take Weekly Assessment
            </button>
          </div>
          <div className="absolute top-0 right-0 opacity-10 text-[10rem] font-bold pointer-events-none -mt-8 mr-4">8.0</div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
           <h3 className="text-xl font-bold mb-6 text-slate-800">Weekly Schedule</h3>
           <div className="space-y-6">
             {[
               { day: 'Mon', task: 'Writing Task 2 (Environment)', done: true },
               { day: 'Tue', task: 'Reading: True/False/NG Practice', done: true },
               { day: 'Wed', task: 'Listening: Section 4 Focused Lab', done: false },
               { day: 'Thu', task: 'Speaking: Mock Interview', done: false },
             ].map((item) => (
               <div key={item.day} className="flex gap-4 items-center">
                 <span className={`w-10 text-xs font-bold uppercase ${item.done ? 'text-slate-400' : 'text-amber-500'}`}>{item.day}</span>
                 <div className={`flex-1 p-3 rounded-lg text-sm border ${item.done ? 'bg-slate-50 border-slate-100 text-slate-400 line-through' : 'bg-amber-50 border-amber-100 text-slate-700'}`}>
                   {item.task}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
