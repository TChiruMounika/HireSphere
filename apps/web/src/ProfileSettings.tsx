import { useState, useEffect } from "react";
import { useAuthStore } from "./store/authStore";

export default function ProfileSettings() {
  const activeUser = useAuthStore((state: any) => state.user);

  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");

  // Cleaned up Form States (No duplicates!)
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Set initial name from user email
    if (activeUser?.email) {
      setFullName(activeUser.email.split("@")[0]);
    }
    
    // Load saved theme on mount
    const savedTheme = localStorage.getItem("hiresphere_theme") || "dark";
    setTheme(savedTheme);
  }, [activeUser]);

  // Instantly shift colors when the dropdown changes
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("hiresphere_theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage("");

    // Simulate a database update delay
    setTimeout(() => {
      setIsSaving(false);
      setMessage("Profile and settings updated successfully!");
      setTimeout(() => setMessage(""), 3000);
    }, 1500);
  };

  if (!activeUser) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 transition-colors duration-300">
      
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl border border-slate-300 dark:border-slate-700 shadow-xl flex items-center gap-6 transition-colors duration-300">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-3xl font-bold text-white shadow-lg border-4 border-white dark:border-slate-900">
          {fullName ? fullName.substring(0, 2).toUpperCase() : "U"}
        </div>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white capitalize">
            {fullName || "User"}
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mt-1">
            {activeUser.email} •{" "}
            <span className="uppercase text-xs font-bold text-purple-700 dark:text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
              {activeUser.role}
            </span>
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-colors duration-300">
        
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 transition-colors duration-300">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
            Profile Settings
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Update your contact details, public bio, and app preferences.
          </p>
        </div>

        <form onSubmit={handleSave} className="p-8 space-y-6">
          
          {message && (
            <div className="mb-6 bg-green-500/10 border border-green-500/50 text-green-600 dark:text-green-400 p-4 rounded-lg text-sm text-center font-medium animate-in fade-in slide-in-from-top-2">
              {message}
            </div>
          )}

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors capitalize"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              About Me (Bio)
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              placeholder="Tell recruiters a little bit about your skills and goals..."
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
            ></textarea>
          </div>

          {/* Professional Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">LinkedIn URL</label>
              <input
                type="url"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="https://linkedin.com/in/username"
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">GitHub URL</label>
              <input
                type="url"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                placeholder="https://github.com/username"
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-colors"
              />
            </div>
          </div>

          {/* App Preferences */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Theme Appearance</label>
              <select
                value={theme}
                onChange={(e) => handleThemeChange(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors cursor-pointer"
              >
                <option value="dark">Dark Mode</option>
                <option value="light">Light Mode</option>
              </select>
            </div>
          </div>

          <div className="pt-8 flex justify-end">
            <button
              type="submit"
              disabled={isSaving}
              className={`px-8 py-3 rounded-lg font-bold transition-all shadow-lg ${
                isSaving
                  ? "bg-slate-200 dark:bg-slate-800 text-slate-500 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/20"
              }`}
            >
              {isSaving ? "Saving..." : "Save All Changes"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}