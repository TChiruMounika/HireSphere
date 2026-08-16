import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- 1. We import the navigation hook!

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // 2. We initialize the hook so we can use it to change pages
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 3. Our Mock Authentication Routing Engine
    const userEmail = email.toLowerCase();

    if (userEmail.includes("coordinator")) {
      navigate("/dashboard/coordinator"); // Send to Coordinator Portal
    } else if (userEmail.includes("dean") || userEmail.includes("admin")) {
      navigate("/dashboard/dean"); // Send to Dean Portal
    } else {
      navigate("/dashboard"); // Default to Student Workspace
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-slate-100">
      
      <div className="max-w-md w-full bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-purple-400 tracking-tight mb-2">Welcome Back</h1>
          <p className="text-slate-400 text-sm">Sign in to your HireSphere account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              placeholder="name@university.edu"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mt-4 shadow-lg shadow-purple-500/20"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Don't have an account? <span className="text-purple-400 hover:text-purple-300 cursor-pointer hover:underline" onClick={() => navigate("/signup")}>Sign up here</span>
        </p>

      </div>
    </div>
  );
}