export default function CoordinatorDashboard() {
  return (
    <div className="space-y-6">
      
      <div>
        <h2 className="text-3xl font-bold text-white tracking-tight">Coordinator Portal</h2>
        <p className="text-slate-400 mt-1">Manage batches, track readiness, and monitor recruitment drives.</p>
      </div>

      {/* Top Row: Campus-Wide Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md">
          <h3 className="text-slate-400 text-sm font-medium">Placement Rate</h3>
          <p className="text-4xl font-extrabold text-green-400 mt-2">78%</p>
          <p className="text-xs text-slate-500 mt-2">+5% from last year</p>
        </div>
        
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md">
          <h3 className="text-slate-400 text-sm font-medium">Average CTC</h3>
          <p className="text-4xl font-extrabold text-blue-400 mt-2">8.5 LPA</p>
          <p className="text-xs text-slate-500 mt-2">Highest: 24 LPA</p>
        </div>
        
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md">
          <h3 className="text-slate-400 text-sm font-medium">Total Offers</h3>
          <p className="text-4xl font-extrabold text-purple-400 mt-2">342</p>
          <p className="text-xs text-slate-500 mt-2">Across 45 companies</p>
        </div>
      </div>

      {/* Middle Section: Tables and Lists */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* 1. Student Readiness Filter (Takes up 2 columns) */}
        <div className="xl:col-span-2 bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-blue-300">Student Readiness Filter</h3>
            <input 
              type="text" 
              placeholder="Search by skill or name..." 
              className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-sm">
                  <th className="pb-3 font-medium">Student Name</th>
                  <th className="pb-3 font-medium">Tech Stack</th>
                  <th className="pb-3 font-medium">ATS Score</th>
                  <th className="pb-3 font-medium">DSA Solved</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="py-4 text-white font-medium">Rahul Sharma</td>
                  <td className="py-4 text-slate-300">MERN, Next.js</td>
                  <td className="py-4 text-green-400 font-bold">92%</td>
                  <td className="py-4 text-white">350+</td>
                  <td className="py-4"><span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded text-xs font-semibold">Ready</span></td>
                </tr>
                <tr className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                  <td className="py-4 text-white font-medium">Priya Patel</td>
                  <td className="py-4 text-slate-300">Java, Spring Boot</td>
                  <td className="py-4 text-yellow-400 font-bold">75%</td>
                  <td className="py-4 text-white">120+</td>
                  <td className="py-4"><span className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-2 py-1 rounded text-xs font-semibold">Needs Prep</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. Recruitment Drive Manager */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md">
           <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-purple-300">Active Drives</h3>
            <button className="text-purple-400 text-sm hover:text-purple-300 font-medium">+ Add Drive</button>
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-medium">TCS Digital</h4>
                  <p className="text-slate-400 text-xs mt-1">Online Assessment</p>
                </div>
                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs px-2 py-1 rounded font-medium">Tomorrow</span>
              </div>
            </div>
            
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-medium">Infosys</h4>
                  <p className="text-slate-400 text-xs mt-1">Technical Interview</p>
                </div>
                <span className="bg-slate-800 text-slate-300 border border-slate-700 text-xs px-2 py-1 rounded font-medium">Aug 20</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}