import { useState } from 'react';
import { Search, Key, FileText, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function KeysManager() {
  const [searchQuery, setSearchQuery] = useState('');

  const providers = [
    {
      id: 1,
      name: 'Dr. Aris Thorne',
      role: 'Cardiology Specialist',
      facility: 'St. Jude Medical',
      permissions: ['Full Records', 'Imaging Data'],
      expiresIn: '14:22:05',
      avatar: 'AT',
    },
    {
      id: 2,
      name: 'Dr. Elena Rodriguez',
      role: 'General Practitioner',
      facility: 'City Wellness',
      permissions: ['Vitals Only'],
      expiresIn: '72:00:00',
      avatar: 'ER',
    },
    {
      id: 3,
      name: 'Dr. Marcus Chen',
      role: 'Pathologist',
      facility: 'Central Lab Systems',
      permissions: ['Lab Results Only', 'Blood Panels'],
      expiresIn: '01:05:33',
      avatar: 'MC',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--surface)] pb-24">
      {/* Header */}
      <header className="bg-white border-b border-[var(--outline-variant)] px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
        </div>
        <div className="bg-[var(--danger)] text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
          Emergency
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="mb-2">Key Management</h1>
          <p className="text-[var(--on-surface-variant)]">
            Control sovereign access to your medical vault.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--on-surface-variant)]" />
            <input
              type="text"
              placeholder="Search by provider name or facility..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-[var(--outline-variant)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
            />
          </div>
        </div>

        {/* Provider Cards */}
        <div className="space-y-4">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded-xl shadow-sm border border-[var(--outline-variant)] p-5"
            >
              <div className="flex gap-4 mb-4">
                <div className="w-14 h-14 bg-[var(--surface-container)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[var(--primary)] font-semibold text-lg">{provider.avatar}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-[var(--on-surface)]">{provider.name}</h3>
                    <div className="flex items-center gap-1 px-2 py-1 bg-[var(--success)]/10 text-[var(--success)] rounded text-xs font-semibold">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      VERIFIED
                    </div>
                  </div>
                  <p className="text-sm text-[var(--on-surface-variant)]">
                    {provider.role} • {provider.facility}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {provider.permissions.map((permission, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[var(--primary-container)] text-[var(--primary)] rounded-full text-xs font-semibold"
                  >
                    {permission}
                  </span>
                ))}
              </div>

              <div className="bg-[var(--error-container)] px-4 py-3 rounded-lg mb-4">
                <div className="flex items-center gap-2 text-[var(--error)]">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-semibold">EXPIRES IN: {provider.expiresIn}</span>
                </div>
              </div>

              <button className="w-full py-3 border-2 border-[var(--error)] text-[var(--error)] rounded-lg font-semibold hover:bg-[var(--error-container)] transition-colors">
                Revoke Access
              </button>
            </div>
          ))}
        </div>

        {/* Transaction Ledger Button */}
        <div className="mt-6 bg-[var(--primary)] text-white rounded-xl p-5 cursor-pointer hover:bg-[var(--primary-container)] transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-0.5">TRANSACTION LEDGER</h4>
                <p className="text-sm text-white/90">
                  View the immutable audit trail of all key grants and revocations.
                </p>
              </div>
            </div>
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--outline-variant)] px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-around">
          <Link to="/" className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6 text-[var(--on-surface-variant)]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs text-[var(--on-surface-variant)]">Dashboard</span>
          </Link>
          <Link to="/keys" className="flex flex-col items-center gap-1">
            <Key className="w-6 h-6 text-[var(--primary)]" />
            <span className="text-xs text-[var(--primary)] font-semibold">Keys</span>
          </Link>
          <Link to="/audit" className="flex flex-col items-center gap-1">
            <FileText className="w-6 h-6 text-[var(--on-surface-variant)]" />
            <span className="text-xs text-[var(--on-surface-variant)]">Audit</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
