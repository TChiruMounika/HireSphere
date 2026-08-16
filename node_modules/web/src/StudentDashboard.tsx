export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      
      <div>
        <h2 className="text-3xl font-bold text-white tracking-tight">Student Workspace</h2>
        <p className="text-slate-400 mt-1">Track your prep, scan your resume, and manage applications.</p>
      </div>

      {/* Top Row: DSA Tracker & ATS Scanner */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* 1. DSA Tracker & Streak Graph */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md flex flex-col">
          <h3 className="text-lg font-semibold text-purple-300 mb-4">DSA Tracker & Streak</h3>
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-slate-400 text-sm">LeetCode</p>
              <p className="text-2xl font-bold text-white">142</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">GeeksforGeeks</p>
              <p className="text-2xl font-bold text-white">89</p>
            </div>
            <div className="bg-orange-500/10 px-4 py-2 rounded-lg border border-orange-500/30">
              <p className="text-orange-400 text-sm font-bold flex items-center gap-2">
                🔥 12 Day Streak
              </p>
            </div>
          </div>
          
          {/* Fake Progress Bar */}
          <div className="w-full bg-slate-950 rounded-full h-3 mt-auto border border-slate-800">
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 h-3 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-right">65% of weekly goal completed</p>
        </div>

        {/* 2. ATS X-Ray Tool */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-blue-300">ATS X-Ray Tool</h3>
            <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded border border-blue-500/20">Beta</span>
          </div>
          
          {/* Drag and Drop Zone */}
          <div className="flex-1 border-2 border-dashed border-slate-700 hover:border-blue-500 hover:bg-slate-800/50 transition-colors rounded-lg flex flex-col items-center justify-center cursor-pointer p-6">
            <div className="w-12 h-12 bg-slate-950 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">📄</span>
            </div>
            <p className="text-slate-300 font-medium">Upload Resume (PDF)</p>
            <p className="text-slate-500 text-sm mt-1 text-center">Drag and drop or click to browse for keyword analysis.</p>
          </div>
        </div>

      </div>

      {/* 3. Off-Campus CRM Kanban Board */}
      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md">
        
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-green-300">Off-Campus Application CRM</h3>
          <button className="bg-green-600/20 hover:bg-green-600/30 text-green-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-green-500/20">
            + Add Job
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Column 1: Applied */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 min-h-[200px]">
            <h4 className="text-slate-400 text-sm font-bold mb-4 flex items-center justify-between">
              Applied <span className="bg-slate-800 px-2 py-0.5 rounded text-xs">2</span>
            </h4>
            <div className="bg-slate-900 p-3 rounded-lg mb-3 border border-slate-700 shadow-sm cursor-grab hover:border-slate-500 transition-colors">
              <p className="text-white text-sm font-medium">Software Engineer Intern</p>
              <p className="text-slate-400 text-xs mt-1">Google • Applied 2d ago</p>
            </div>
            <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 shadow-sm cursor-grab hover:border-slate-500 transition-colors">
              <p className="text-white text-sm font-medium">Frontend Developer</p>
              <p className="text-slate-400 text-xs mt-1">Amazon • Applied 5d ago</p>
            </div>
          </div>
          
          {/* Column 2: Interview */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 min-h-[200px]">
            <h4 className="text-slate-400 text-sm font-bold mb-4 flex items-center justify-between">
              Interviewing <span className="bg-slate-800 px-2 py-0.5 rounded text-xs">1</span>
            </h4>
            <div className="bg-slate-900 p-3 rounded-lg border border-blue-500/50 shadow-sm cursor-grab hover:border-blue-400 transition-colors relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
              <p className="text-white text-sm font-medium pl-2">UI/UX Engineer</p>
              <p className="text-slate-400 text-xs mt-1 pl-2">Microsoft • Tech Round 1</p>
            </div>
          </div>
          
          {/* Column 3: Offered */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 min-h-[200px] flex flex-col">
            <h4 className="text-slate-400 text-sm font-bold mb-4 flex items-center justify-between">
              Offered <span className="bg-slate-800 px-2 py-0.5 rounded text-xs">0</span>
            </h4>
            <div className="flex-1 border-2 border-dashed border-slate-800 rounded-lg flex items-center justify-center">
              <p className="text-slate-600 text-xs font-medium">Drag jobs here</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}