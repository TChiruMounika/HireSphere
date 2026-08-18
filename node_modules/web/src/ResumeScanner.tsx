import { useState } from "react";

export default function ResumeScanner() {
  const [file, setFile] = useState<File | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setScore(null); // Reset score on new upload
    }
  };

  const handleScan = () => {
    if (!file) return;
    setIsScanning(true);
    
    // Simulating backend processing time so we don't break the app
    setTimeout(() => {
      setIsScanning(false);
      // Generate a random mock score between 75 and 98
      setScore(Math.floor(Math.random() * (98 - 75 + 1)) + 75);
    }, 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800">
        <h2 className="text-2xl font-extrabold text-purple-400 mb-2">ATS Resume Scanner</h2>
        <p className="text-slate-400 text-sm mb-8">Upload your resume to see how well it matches industry standard filters.</p>
        
        {/* Upload Box */}
        <div className="border-2 border-dashed border-slate-700 rounded-xl p-10 text-center hover:border-purple-500 transition-colors bg-slate-950/50">
          <input 
            type="file" 
            id="resume-upload" 
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleFileChange}
          />
          <label htmlFor="resume-upload" className="cursor-pointer flex flex-col items-center">
            <span className="text-4xl mb-4">📄</span>
            <span className="text-slate-300 font-medium hover:text-purple-400 transition-colors">
              {file ? file.name : "Click to upload or drag and drop"}
            </span>
            <span className="text-slate-500 text-xs mt-2">PDF, DOC, DOCX (Max 5MB)</span>
          </label>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex justify-end">
          <button 
            onClick={handleScan}
            disabled={!file || isScanning}
            className={`px-6 py-3 rounded-lg font-bold transition-all shadow-lg ${
              !file || isScanning 
                ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
                : "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/20"
            }`}
          >
            {isScanning ? "Scanning Document..." : "Run ATS Scan"}
          </button>
        </div>
      </div>

      {/* Results Section */}
      {score !== null && !isScanning && (
        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 animate-in fade-in slide-in-from-bottom-4">
          <h3 className="text-lg font-semibold text-slate-200 mb-4">Scan Results</h3>
          <div className="flex items-center gap-8">
            
            {/* Score Circle */}
            <div className={`w-32 h-32 rounded-full flex flex-col items-center justify-center border-4 ${score >= 85 ? 'border-green-500 text-green-400' : 'border-yellow-500 text-yellow-400'} bg-slate-950`}>
              <span className="text-4xl font-extrabold">{score}</span>
              <span className="text-xs uppercase tracking-wider font-semibold mt-1 text-slate-400">Score</span>
            </div>

            {/* Mock Feedback */}
            <div className="flex-1 space-y-3">
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-sm text-slate-300">
                <span className="text-green-400 mr-2">✓</span> Formatting is clean and easily readable by automated systems.
              </div>
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-sm text-slate-300">
                <span className="text-green-400 mr-2">✓</span> Strong use of action verbs in experience section.
              </div>
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-sm text-slate-300">
                <span className="text-yellow-400 mr-2">!</span> Consider adding more quantifiable metrics (numbers/percentages).
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}