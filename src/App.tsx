import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Verify from './pages/Verify';
import Organisations from './pages/Organisations';
import AuthCallback from './pages/Auth/Callback';
import PublicProfile from './pages/Profile';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/organisations" element={<Organisations />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/profile/:handle" element={<PublicProfile />} />
      </Routes>
    </div>
  );
}

export default App;
