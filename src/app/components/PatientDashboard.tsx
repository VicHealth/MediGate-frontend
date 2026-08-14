import { useState } from 'react';
import { AlertCircle, Eye, Key, FileText, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PatientDashboard() {
  const [emergencyMode, setEmergencyMode] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--surface)]">
      {/* Header */}
      <header className="bg-white border-b border-[var(--outline-variant)] px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
        </div>
        {emergencyMode && (
          <div className="bg-[var(--danger)] text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
            Emergency
          </div>
        )}
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6 pb-24">
        {/* Welcome Section */}
        <div className="mb-6">
          <h1 className="mb-1">Hello, Alexander</h1>
          <p className="text-[var(--on-surface-variant)]">Your sovereign health vault is secured.</p>
        </div>

        {/* Emergency Mode Card */}
        <div className="bg-white rounded-xl shadow-sm border border-[var(--outline-variant)] p-5 mb-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-[var(--on-surface)]">Break-Glass Access</h3>
            <button
              onClick={() => setEmergencyMode(!emergencyMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                emergencyMode ? 'bg-[var(--danger)]' : 'bg-[var(--switch-background)]'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  emergencyMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <p className="text-sm text-[var(--on-surface-variant)] mb-3">
            Allow emergency bypass of encryption.
          </p>
          {emergencyMode && (
            <div className="flex items-center gap-2 text-xs text-[var(--danger)] bg-[var(--error-container)] px-3 py-2 rounded-lg">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>Restricted to Level 1 Triage Only</span>
            </div>
          )}
        </div>

        {/* Active Provider Keys */}
        <div className="bg-white rounded-xl shadow-sm border border-[var(--outline-variant)] p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--primary)] text-white rounded-full flex items-center justify-center">
                3
              </div>
              <h3 className="text-[var(--on-surface)]">Active Provider Keys</h3>
            </div>
            <Link to="/keys">
              <Eye className="w-5 h-5 text-[var(--primary)]" />
            </Link>
          </div>

          <div className="space-y-3">
            {/* Provider 1 */}
            <div className="flex items-center gap-3 p-3 bg-[var(--surface-container)] rounded-lg">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-[var(--primary-container)] flex items-center justify-center text-[var(--primary)] font-semibold">
                  SC
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-[var(--on-surface)]">DR. SARAH CHEN</p>
                <p className="text-xs text-[var(--on-surface-variant)]">General Oncology • Heart Access</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-[var(--primary)] text-white rounded text-xs font-semibold">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                VERIFIED
              </div>
            </div>

            {/* Provider 2 */}
            <div className="flex items-center gap-3 p-3 bg-[var(--surface-container)] rounded-lg">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-[var(--primary-container)] flex items-center justify-center text-[var(--primary)] font-semibold">
                  SJ
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-[var(--on-surface)]">ST. JUDE RADIOLOGY</p>
                <p className="text-xs text-[var(--on-surface-variant)]">Imaging Records • 48h Access</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-[var(--primary)] text-white rounded text-xs font-semibold">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                VERIFIED
              </div>
            </div>

            {/* Provider 3 */}
            <div className="flex items-center gap-3 p-3 bg-[var(--surface-container)] rounded-lg">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-[var(--primary-container)] flex items-center justify-center text-[var(--primary)] font-semibold">
                  LC
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-[var(--on-surface)]">LABCORP CENTRAL</p>
                <p className="text-xs text-[var(--on-surface-variant)]">Biometrics • Read-only</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-[var(--primary)] text-white rounded text-xs font-semibold">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                VERIFIED
              </div>
            </div>
          </div>
        </div>

        {/* Recent Access Log */}
        <div className="bg-white rounded-xl shadow-sm border border-[var(--outline-variant)] p-5 mb-6">
          <h3 className="mb-4 text-[var(--on-surface)]">Recent Access Log</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-[var(--primary)] rounded-full mt-1.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-[var(--on-surface-variant)] mb-1">TODAY, 10:45 AM</p>
                <p className="text-sm font-medium text-[var(--on-surface)] mb-1">
                  Dr. Sarah Chen viewed MRI Scan Results
                </p>
                <p className="text-xs text-[var(--on-surface-variant)]">Decision Point • SmartHospital</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-2 h-2 bg-[var(--outline)] rounded-full mt-1.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-[var(--on-surface-variant)] mb-1">YESTERDAY</p>
                <p className="text-sm font-medium text-[var(--on-surface)] mb-1">
                  LabCorp Central updated CBC Panel
                </p>
                <p className="text-xs text-[var(--on-surface-variant)]">Data Sync • Black Verified</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-2 h-2 bg-[var(--outline)] rounded-full mt-1.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-[var(--on-surface-variant)] mb-1">2 DAYS AGO</p>
                <p className="text-sm font-medium text-[var(--on-surface)] mb-1">
                  Access Key created for St. Jude Radiology
                </p>
                <p className="text-xs text-[var(--on-surface-variant)]">48h TTL • Imaging Only</p>
              </div>
            </div>
          </div>

          <Link to="/audit">
            <button className="w-full mt-4 text-[var(--primary)] font-medium text-sm py-2 hover:bg-[var(--surface-container)] rounded-lg transition-colors">
              VIEW FULL AUDIT TRAIL
            </button>
          </Link>
        </div>

        {/* Data Integrity Banner */}
        <div className="bg-[var(--primary)] text-white rounded-xl p-5 flex items-start gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-1">Sovereign Data Integrity</h4>
            <p className="text-sm text-white/90 leading-relaxed">
              Your health records are encrypted on the Stellar-Soroban smart contract system. Including you — no party can modify your health vault without your approval.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <div className="bg-white/20 px-2 py-1 rounded-full text-xs">AES-256 ENCRYPTED</div>
              <div className="bg-white/20 px-2 py-1 rounded-full text-xs">STELLAR LEDGER</div>
              <div className="bg-white/20 px-2 py-1 rounded-full text-xs">ZERO-KNOWLEDGE PROOF</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--outline-variant)] px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-around">
          <Link to="/" className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs text-[var(--primary)] font-semibold">Dashboard</span>
          </Link>
          <Link to="/keys" className="flex flex-col items-center gap-1">
            <Key className="w-6 h-6 text-[var(--on-surface-variant)]" />
            <span className="text-xs text-[var(--on-surface-variant)]">Keys</span>
          </Link>
          <Link to="/audit" className="flex flex-col items-center gap-1">
            <FileText className="w-6 h-6 text-[var(--on-surface-variant)]" />
            <span className="text-xs text-[var(--on-surface-variant)]">Audit</span>
          </Link>
        </div>
      </nav>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-4 w-14 h-14 bg-[var(--primary)] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--primary-container)] transition-colors">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}
