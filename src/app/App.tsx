import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './components/Login';
import { PatientDashboard } from './components/PatientDashboard';
import { KeysManager } from './components/KeysManager';
import { AuditTrail } from './components/AuditTrail';
import { ProviderView } from './components/ProviderView';

export default function App() {
  const [userRole, setUserRole] = useState<'patient' | 'provider' | null>(null);

  const handleLogin = (role: 'patient' | 'provider') => {
    setUserRole(role);
  };

  if (!userRole) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <Routes>
        {userRole === 'patient' ? (
          <>
            <Route path="/" element={<PatientDashboard />} />
            <Route path="/keys" element={<KeysManager />} />
            <Route path="/audit" element={<AuditTrail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<ProviderView />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}