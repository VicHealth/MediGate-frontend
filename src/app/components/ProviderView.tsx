import { useState } from 'react';
import { Activity, Key as KeyIcon, ExternalLink } from 'lucide-react';

export function ProviderView() {
  const [smartKey, setSmartKey] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activeTab, setActiveTab] = useState('medications');

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUnlocked(true);
  };

  return (
    <div className="min-h-screen bg-[var(--surface)]">
      {/* Header */}
      <header className="bg-white border-b border-[var(--outline-variant)] px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
        </div>
        <div className="bg-[var(--danger)] text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
          Emergency
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {!isUnlocked ? (
          <>
            {/* Patient Identity Banner */}
            <div className="bg-white rounded-xl border border-[var(--outline-variant)] p-5 mb-6">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-[var(--surface-container)] flex items-center justify-center overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-container)] flex items-center justify-center text-white text-xl font-bold">
                    JD
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="mb-1">Jonathan Doe, 72</h2>
                  <p className="text-sm text-[var(--on-surface-variant)] font-mono mb-2">
                    DID: 0x71C...892E
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 px-3 py-1 bg-[var(--success)]/10 text-[var(--success)] rounded-full text-xs font-semibold">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      VERIFIED ON LEDGER
                    </div>
                  </div>
                  <p className="text-xs text-[var(--on-surface-variant)] mt-2">Last Synced: 4m ago</p>
                </div>
              </div>
            </div>

            {/* Sovereign Access Card */}
            <div className="bg-white rounded-xl border border-[var(--outline-variant)] p-6 mb-6">
              <h3 className="mb-2">Sovereign Access</h3>
              <p className="text-sm text-[var(--on-surface-variant)] mb-4">
                Enter the patient's Smart Key to unlock encrypted clinical records.
              </p>

              <form onSubmit={handleUnlock}>
                <div className="mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter 12-digit key..."
                      value={smartKey}
                      onChange={(e) => setSmartKey(e.target.value)}
                      className="w-full pl-4 pr-12 py-3 bg-[var(--input-background)] border border-[var(--outline-variant)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent font-mono"
                      required
                    />
                    <KeyIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--on-surface-variant)]" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--primary)] text-white py-3 px-6 rounded-lg hover:bg-[var(--primary-container)] transition-colors font-semibold"
                >
                  UNLOCK FHIR RECORDS
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            {/* Patient Identity Banner - Unlocked */}
            <div className="bg-white rounded-xl border border-[var(--outline-variant)] p-5 mb-6">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-[var(--surface-container)] flex items-center justify-center overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-container)] flex items-center justify-center text-white text-xl font-bold">
                    JD
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="mb-1">Jonathan Doe, 72</h2>
                  <p className="text-sm text-[var(--on-surface-variant)] font-mono mb-2">
                    DID: 0x71C...892E
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 px-3 py-1 bg-[var(--success)]/10 text-[var(--success)] rounded-full text-xs font-semibold">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      VERIFIED ON LEDGER
                    </div>
                  </div>
                  <p className="text-xs text-[var(--on-surface-variant)] mt-2">Last Synced: 4m ago</p>
                </div>
              </div>
            </div>

            {/* Latest Vitals */}
            <div className="bg-white rounded-xl border border-[var(--outline-variant)] p-5 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[var(--on-surface)]">Latest Vitals</h3>
                <Activity className="w-5 h-5 text-[var(--primary)]" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[var(--surface-container)] rounded-lg p-4">
                  <p className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wide mb-1">
                    Blood Pressure
                  </p>
                  <p className="font-semibold mb-1">128/84</p>
                  <span className="text-xs text-[var(--success)] font-semibold">NORMAL</span>
                </div>

                <div className="bg-[var(--surface-container)] rounded-lg p-4">
                  <p className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wide mb-1">
                    Heart Rate
                  </p>
                  <p className="font-semibold mb-1">72 <span className="text-sm">bpm</span></p>
                  <span className="text-xs text-[var(--success)] font-semibold">STABLE</span>
                </div>

                <div className="bg-[var(--surface-container)] rounded-lg p-4">
                  <p className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wide mb-1">
                    O2 SAT
                  </p>
                  <p className="font-semibold mb-1">98%</p>
                  <span className="text-xs text-[var(--success)] font-semibold">NORMAL</span>
                </div>

                <div className="bg-[var(--surface-container)] rounded-lg p-4">
                  <p className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wide mb-1">
                    Temp
                  </p>
                  <p className="font-semibold mb-1">98.6°F</p>
                  <span className="text-xs text-[var(--success)] font-semibold">STABLE</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl border border-[var(--outline-variant)] overflow-hidden mb-6">
              <div className="border-b border-[var(--outline-variant)] flex">
                <button
                  onClick={() => setActiveTab('medications')}
                  className={`flex-1 py-3 px-4 font-semibold text-sm transition-colors ${
                    activeTab === 'medications'
                      ? 'border-b-2 border-[var(--primary)] text-[var(--primary)]'
                      : 'text-[var(--on-surface-variant)]'
                  }`}
                >
                  MEDICATIONS
                </button>
                <button
                  onClick={() => setActiveTab('labs')}
                  className={`flex-1 py-3 px-4 font-semibold text-sm transition-colors ${
                    activeTab === 'labs'
                      ? 'border-b-2 border-[var(--primary)] text-[var(--primary)]'
                      : 'text-[var(--on-surface-variant)]'
                  }`}
                >
                  LABS
                </button>
                <button
                  onClick={() => setActiveTab('diagnoses')}
                  className={`flex-1 py-3 px-4 font-semibold text-sm transition-colors ${
                    activeTab === 'diagnoses'
                      ? 'border-b-2 border-[var(--primary)] text-[var(--primary)]'
                      : 'text-[var(--on-surface-variant)]'
                  }`}
                >
                  DIAGNOSES
                </button>
              </div>

              <div className="p-5">
                {activeTab === 'medications' && (
                  <div className="space-y-3">
                    <div className="flex gap-4 p-4 bg-[var(--surface-container)] rounded-lg">
                      <div className="w-10 h-10 bg-[var(--primary-container)] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <p className="font-semibold text-[var(--on-surface)]">Lisinopril</p>
                            <p className="text-sm text-[var(--on-surface-variant)]">10mg</p>
                          </div>
                          <span className="px-2 py-1 bg-[var(--success)]/10 text-[var(--success)] rounded text-xs font-semibold">
                            ACTIVE
                          </span>
                        </div>
                        <p className="text-sm text-[var(--on-surface-variant)]">Oral Tablet • Once Daily</p>
                        <p className="text-xs text-[var(--on-surface-variant)] mt-1">Prescribed Oct 12, 2025</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 bg-[var(--surface-container)] rounded-lg">
                      <div className="w-10 h-10 bg-[var(--primary-container)] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <p className="font-semibold text-[var(--on-surface)]">Metformin 500mg</p>
                            <p className="text-sm text-[var(--on-surface-variant)]">500mg</p>
                          </div>
                          <span className="px-2 py-1 bg-[var(--success)]/10 text-[var(--success)] rounded text-xs font-semibold">
                            ACTIVE
                          </span>
                        </div>
                        <p className="text-sm text-[var(--on-surface-variant)]">Oral Tablet • Twice Daily with meals</p>
                        <p className="text-xs text-[var(--on-surface-variant)] mt-1">Prescribed Jan 05, 2024</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Clinical History Timeline */}
            <div className="bg-white rounded-xl border border-[var(--outline-variant)] p-5">
              <h3 className="mb-4 text-[var(--on-surface)]">Clinical History Timeline</h3>

              <div className="space-y-4">
                <div className="flex gap-4 border-l-2 border-[var(--primary)] pl-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-[var(--primary)] rounded-full" />
                      <span className="font-semibold text-sm">MARCH 14, 2024</span>
                    </div>
                    <p className="font-medium text-[var(--on-surface)] mb-1">Annual Physical Examination</p>
                    <p className="text-sm text-[var(--on-surface-variant)] mb-2">
                      St. Mary's General Hospital • Dr. Sarah Jenkins
                    </p>
                    <button className="flex items-center gap-1 text-[var(--primary)] text-sm font-semibold hover:underline">
                      VIEW FHIR JSON
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4 border-l-2 border-[var(--outline)] pl-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-[var(--outline)] rounded-full" />
                      <span className="font-semibold text-sm">JANUARY 22, 2024</span>
                    </div>
                    <p className="font-medium text-[var(--on-surface)] mb-1">Blood Panel: Metabolic Group</p>
                    <p className="text-sm text-[var(--on-surface-variant)] mb-2">
                      Quest Diagnostics • Laboratory Services
                    </p>
                    <button className="flex items-center gap-1 text-[var(--primary)] text-sm font-semibold hover:underline">
                      VIEW LAB RESULTS
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4 border-l-2 border-[var(--outline)] pl-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-[var(--outline)] rounded-full" />
                      <span className="font-semibold text-sm">DECEMBER 10, 2023</span>
                    </div>
                    <p className="font-medium text-[var(--on-surface)] mb-1">Chest X-Ray</p>
                    <p className="text-sm text-[var(--on-surface-variant)] mb-2">
                      City Imaging Center • Radiology Dept
                    </p>
                    <button className="flex items-center gap-1 text-[var(--primary)] text-sm font-semibold hover:underline">
                      VIEW IMAGING
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
