import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function DashboardLayout() {
  // 1. Temporary state to simulate a logged-in user's role
  const [role, setRole] = useState("student");
  
  // 2. This hook tells us exactly what URL the browser is currently on
  const location = useLocation();

  // 3. Our dynamic routing dictionary!
  // 3. Our dynamic routing dictionary!
  const navigation = {
    student: [
      { name: "My Workspace", path: "/dashboard", icon: "🎓" },
      { name: "Resume Scanner", path: "/dashboard/scanner", icon: "📄" }, // <-- Make sure this path is updated!
      { name: "Job Tracker", path: "#", icon: "📊" },
    ],
    coordinator: [
      { name: "Coordinator Portal", path: "/dashboard/coordinator", icon: "👥" },
      { name: "Student Database", path: "#", icon: "🗂️" },
      { name: "Active Drives", path: "#", icon: "🏢" },
    ],
    dean: [
      { name: "Admin Dashboard", path: "/dashboard/dean", icon: "⚙️" },
      { name: "Master Schedule", path: "#", icon: "📅" },
      { name: "System Logs", path: "#", icon: "🖥️" },
    ]
  };

  // 4. Grab only the links allowed for the current role
  const currentLinks = navigation[role as keyof typeof navigation];

  return (
    <div className="min-h-screen bg-slate-950 flex text-slate-100">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col shadow-xl z-10">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-extrabold text-purple-400 tracking-tight">HireSphere</h2>
          <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Campus Portal</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {currentLinks.map((link) => {
            // Check if the current browser URL matches the link's path to highlight it!
            const isActive = location.pathname === link.path;
            
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-purple-600/10 text-purple-400 font-medium border border-purple-500/20" 
                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-slate-800">
          <Link to="/login" className="block w-full text-center px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors">
            Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 flex items-center px-8 justify-between">
          <h1 className="text-lg font-semibold text-slate-200">Overview</h1>
          
          <div className="flex items-center space-x-4">
            
            {/* DEV TOOL: Temporary Role Switcher */}
            <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Test Role:</span>
              <select 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
                className="bg-transparent text-sm text-purple-400 font-medium focus:outline-none cursor-pointer"
              >
                <option value="student">Student</option>
                <option value="coordinator">Coordinator</option>
                <option value="dean">Dean</option>
              </select>
            </div>

            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-sm font-bold shadow-lg">
              JS
            </div>
          </div>
        </header>
        
        {/* Scrollable Content (Where child pages will render) */}
        <div className="flex-1 p-8 overflow-auto bg-slate-950">
          <Outlet />
        </div>
        
      </main>
    </div>
  );
}