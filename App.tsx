
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import WritingModule from './pages/WritingModule';
import SpeakingModule from './pages/SpeakingModule';
import ReadingModule from './pages/ReadingModule';
import ListeningModule from './pages/ListeningModule';
import { IELTSModule } from './types';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/listening', label: 'Listening', icon: '🎧' },
    { path: '/reading', label: 'Reading', icon: '📖' },
    { path: '/writing', label: 'Writing', icon: '✍️' },
    { path: '/speaking', label: 'Speaking', icon: '🗣️' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 hidden md:flex flex-col border-r border-slate-800">
      <div className="p-8">
        <h1 className="text-2xl font-serif font-bold tracking-tight text-amber-400">
          IELTS <span className="text-white">Elite</span>
        </h1>
        <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest font-semibold">Band 8 Mastery</p>
      </div>

      <nav className="flex-1 px-4 mt-6">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-900/20'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 bg-slate-800/50">
        <div className="bg-slate-700/50 rounded-lg p-4">
          <p className="text-xs text-slate-400 mb-2 font-medium">YOUR PROGRESS</p>
          <div className="flex justify-between items-end mb-1">
            <span className="text-2xl font-bold">6.5</span>
            <span className="text-slate-500 text-xs mb-1">Target: 8.0</span>
          </div>
          <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 w-[70%]" />
          </div>
        </div>
      </div>
    </aside>
  );
};

const MobileNav = () => (
  <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 flex justify-around p-4 z-50">
     <Link to="/" className="text-slate-400">📊</Link>
     <Link to="/listening" className="text-slate-400">🎧</Link>
     <Link to="/reading" className="text-slate-400">📖</Link>
     <Link to="/writing" className="text-slate-400">✍️</Link>
     <Link to="/speaking" className="text-slate-400">🗣️</Link>
  </nav>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex bg-slate-50">
        <Sidebar />
        <main className="flex-1 md:ml-64 p-4 md:p-8 pb-24 md:pb-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/writing" element={<WritingModule />} />
            <Route path="/speaking" element={<SpeakingModule />} />
            <Route path="/reading" element={<ReadingModule />} />
            <Route path="/listening" element={<ListeningModule />} />
          </Routes>
        </main>
        <MobileNav />
      </div>
    </Router>
  );
};

export default App;
