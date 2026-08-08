import { useEffect, useState } from 'react';

interface User {
  id: number;
  fullName: string;
  email: string;
}

function App() {
  const [message, setMessage] = useState('Connecting to backend...');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setUsers(data.users || []);
      })
      .catch((err) => {
        console.error('Failed to fetch:', err);
        setMessage('❌ Error connecting to backend server.');
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700">
          <h1 className="text-3xl font-bold text-purple-400 mb-4">HireSphere</h1>

          <p className="text-slate-300">{message}</p>

          <div className="mt-6 text-left bg-slate-950 p-6 rounded-xl border border-slate-800">
            <h2 className="text-lg font-semibold mb-3 text-purple-300">Database Users:</h2>

            {users.length === 0 ? (
              <p className="text-slate-500 italic text-sm">
                No users registered in Neon PostgreSQL yet.
              </p>
            ) : (
              <ul className="space-y-2">
                {users.map((user) => (
                  <li
                    key={user.id}
                    className="text-slate-300 text-sm bg-slate-900 p-3 rounded border border-slate-800"
                  >
                    <span className="font-medium text-white">{user.fullName}</span>{' '}
                    —{' '}
                    <span className="text-slate-400">{user.email}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
