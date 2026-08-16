export default function DeanDashboard() {
  return (
    <div className="space-y-6">
      
      <div>
        <h2 className="text-3xl font-bold text-white tracking-tight">Dean & Admin Portal</h2>
        <p className="text-slate-400 mt-1">Master controls, global student search, and live system health.</p>
      </div>

      {/* Top Row: System Health (Developer Dashboard Features) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-slate-400 text-sm font-medium">Node.js API Status</h3>
            <p className="text-2xl font-bold text-white mt-1">Online</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
            <span className="text-green-400 text-xl">🟢</span>
          </div>
        </div>
        
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-slate-400 text-sm font-medium">Database (Neon PG)</h3>
            <p className="text-2xl font-bold text-white mt-1">Connected</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
             <span className="text-blue-400 text-xl">🗄️</span>
          </div>
        </div>
        
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-slate-400 text-sm font-medium">Avg Response Time</h3>
            <p className="text-2xl font-bold text-white mt-1">124ms</p>
          </div>
          <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
             <span className="text-purple-400 text-xl">⚡</span>
          </div>
        </div>
      </div>

      {/* Middle Section: Master Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Master Schedule Manager */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-orange-300">Master Schedule Controls</h3>
            <button className="bg-orange-600/20 text-orange-400 text-sm px-3 py-1.5 rounded hover:bg-orange-600/30 transition-colors border border-orange-500/20 font-medium">
              + New Event
            </button>
          </div>
          <div className="space-y-3">
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex justify-between items-center">
              <div>
                <h4 className="text-white font-medium">Wipro Phase 1 Assessment</h4>
                <p className="text-slate-400 text-xs mt-1">Sept 12 • All Branches</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-slate-400 hover:text-blue-400 transition-colors px-2 text-sm">✏️ Edit</button>
                <button className="text-slate-400 hover:text-red-400 transition-colors px-2 text-sm">🗑️ Remove</button>
              </div>
            </div>
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex justify-between items-center">
              <div>
                <h4 className="text-white font-medium">Aptitude Training Batch B</h4>
                <p className="text-slate-400 text-xs mt-1">Sept 15 • CS/IT Only</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-slate-400 hover:text-blue-400 transition-colors px-2 text-sm">✏️ Edit</button>
                <button className="text-slate-400 hover:text-red-400 transition-colors px-2 text-sm">🗑️ Remove</button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Student Tracker */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md">
          <h3 className="text-lg font-semibold text-pink-300 mb-4">Global Student Tracker</h3>
          <div className="flex gap-2 mb-4">
            <input 
              type="text" 
              placeholder="Enter University Roll No. or Name..." 
              className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-pink-500 transition-colors"
            />
            <button className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-pink-700 transition-colors shadow-lg shadow-pink-500/20">
              Search
            </button>
          </div>
          <div className="h-32 border-2 border-dashed border-slate-800 rounded-lg flex items-center justify-center text-slate-500 text-sm px-6 text-center">
            Search for any student across the campus to instantly view or edit their complete profile, attendance, and exam results.
          </div>
        </div>

      </div>

    </div>
  );
}