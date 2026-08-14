import { useState } from 'react';
import { Lock, Shield } from 'lucide-react';

export function Login({ onLogin }: { onLogin: (role: 'patient' | 'provider') => void }) {
  const [role, setRole] = useState<'patient' | 'provider'>('patient');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(role);
  };

  return (
    <div className="min-h-screen bg-[var(--surface)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Shield className="h-12 w-12 text-[var(--primary)]" />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-[var(--outline-variant)] p-6 md:p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--surface-container)] rounded-full mb-4">
              <Lock className="w-8 h-8 text-[var(--primary)]" />
            </div>
            <h1 className="mb-2">Access Your Health Vault</h1>
            <p className="text-[var(--on-surface-variant)]">
              Sovereign data management secured by medical-grade encryption.
            </p>
          </div>

          <div className="mb-6">
            <label className="block mb-3 text-[var(--on-surface-variant)] uppercase tracking-wider">
              Identity Profile
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole('patient')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 transition-all ${
                  role === 'patient'
                    ? 'bg-[var(--primary-container)] border-[var(--primary)] text-[var(--primary)]'
                    : 'bg-white border-[var(--outline-variant)] text-[var(--on-surface-variant)] hover:border-[var(--outline)]'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Patient
              </button>
              <button
                type="button"
                onClick={() => setRole('provider')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 transition-all ${
                  role === 'provider'
                    ? 'bg-[var(--primary-container)] border-[var(--primary)] text-[var(--primary)]'
                    : 'bg-white border-[var(--outline-variant)] text-[var(--on-surface-variant)] hover:border-[var(--outline)]'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Provider
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@medical-provider.com"
                className="w-full px-4 py-3 bg-[var(--input-background)] border border-[var(--outline-variant)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                required
              />
            </div>

            <div className="mb-6 p-4 bg-[var(--surface-container)] rounded-lg">
              <div className="flex gap-3">
                <Shield className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm mb-1">SEP-30 Recovery Protocol</p>
                  <p className="text-xs text-[var(--on-surface-variant)] leading-relaxed">
                    Your health keys are safe with your email. We use threshold signatures to ensure your records remain accessible only to you, even if you lose your primary device.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--primary)] text-white py-3 px-6 rounded-lg hover:bg-[var(--primary-container)] transition-colors flex items-center justify-center gap-2"
            >
              Continue to MediGate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <p className="text-xs text-center text-[var(--on-surface-variant)] mt-4">
              By continuing, you agree to the <a href="#" className="text-[var(--primary)] hover:underline">Sovereign Data Agreement</a>
            </p>
          </form>
        </div>

        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-[var(--on-surface-variant)]">
            <Shield className="w-4 h-4" />
            <span className="uppercase tracking-wider">Blockchain Verified Ledger System</span>
          </div>
          <p className="text-xs text-[var(--on-surface-variant)] mt-2">
            © 2026 MediGate Security Architecture. All health data is encrypted and self-custodied.
          </p>
        </div>
      </div>
    </div>
  );
}
