export default function ResumeScanner() {
  return (
    <div className="space-y-6">
      
      <div>
        <h2 className="text-3xl font-bold text-white tracking-tight">ATS Resume Scanner</h2>
        <p className="text-slate-400 mt-1">Upload your resume to see how it matches with top tech company filters.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Upload Section */}
        <div className="lg:col-span-2 bg-slate-900/50 p-8 rounded-xl border-2 border-dashed border-slate-700 hover:border-blue-500 transition-colors flex flex-col items-center justify-center min-h-[350px]">
          <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <span className="text-4xl">📄</span>
          </div>
          <h3 className="text-xl font-semibold text-slate-200">Drag & Drop Resume (PDF)</h3>
          <p className="text-slate-500 mt-2 text-center max-w-sm">
            Ensure your file is under 5MB. We will instantly scan it against standard Applicant Tracking System parameters.
          </p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-blue-500/20">
            Browse Files
          </button>
        </div>

        {/* Mock Results Section */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md">
          <h3 className="text-lg font-semibold text-blue-300 mb-6">Last Scan Results</h3>
          
          <div className="flex items-center gap-5 mb-8">
            {/* Fake Circular Progress */}
            <div className="w-20 h-20 rounded-full border-4 border-slate-800 border-t-green-500 flex items-center justify-center rotate-45">
              <span className="text-2xl font-extrabold text-green-400 -rotate-45">85%</span>
            </div>
            <div>
              <p className="text-white font-bold text-lg">Strong Match</p>
              <p className="text-slate-400 text-sm">Role: Frontend Engineer</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">Keywords Found</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded text-xs font-medium">React.js</span>
                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded text-xs font-medium">TypeScript</span>
                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded text-xs font-medium">Tailwind CSS</span>
                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded text-xs font-medium">Git</span>
              </div>
            </div>
            <div>
              <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">Missing Keywords (Suggested)</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-1 rounded text-xs font-medium">GraphQL</span>
                <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-1 rounded text-xs font-medium">Jest / Testing</span>
                <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-1 rounded text-xs font-medium">Redux</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}