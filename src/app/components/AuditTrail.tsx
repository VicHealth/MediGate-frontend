import { Key, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import medigateLogo from '../../imports/MediGate.png';

export function AuditTrail() {
  const events = [
    {
      id: 1,
      action: 'Data Accessed: Diagnostic Imaging',
      timestamp: '2025-10-24 14:12:01.084 UTC',
      provider: 'did:health:8f2c...bb4ar (Dr. Sarah Chen, General Hospital)',
      blockHash: '0x7adc...fd32ce9d',
      verified: true,
    },
    {
      id: 2,
      action: 'Consent Shared: Medication History',
      timestamp: '2025-10-23 08:45:12.842 UTC',
      provider: 'did:health:4e1a...20bf (City Health Pharmacy)',
      blockHash: '0x9c51...33afc87',
      verified: true,
    },
    {
      id: 3,
      action: 'Data Accessed: Lab Results',
      timestamp: '2025-10-22 17:18:55.321 UTC',
      provider: 'did:health:c4b9...4e59 (Northwest Lab Services)',
      blockHash: '0xf8c...99c4aa27',
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--surface)] pb-24">
      {/* Header */}
      <header className="bg-white border-b border-[var(--outline-variant)] px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <img src={medigateLogo} alt="MediGate" className="h-8 w-auto" />
        </div>
        <div className="bg-[var(--danger)] text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
          Emergency
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Title Section */}
        <div className="mb-6">
          <h2 className="mb-2">Immutable Audit Trail</h2>
          <p className="text-sm text-[var(--on-surface-variant)] leading-relaxed">
            A permanent, blockchain-verified record of every interaction with your clinical data. These entries are mathematically locked and cannot be altered.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-[var(--outline-variant)] p-4">
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wide">Total Events</span>
            </div>
            <p className="font-semibold">1,284</p>
          </div>

          <div className="bg-white rounded-xl border border-[var(--outline-variant)] p-4">
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wide">Node Status</span>
            </div>
            <p className="font-semibold">Synced</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[var(--outline-variant)] p-4 mb-6">
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-4 h-4 text-[var(--error)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs text-[var(--error)] uppercase tracking-wide">Active DID</span>
          </div>
          <p className="text-sm text-[var(--on-surface)] font-mono break-all">4 Active</p>
        </div>

        {/* Event Timeline */}
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl border border-[var(--outline-variant)] p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full" />
                  <span className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wide">Action</span>
                </div>
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

              <p className="font-semibold text-[var(--on-surface)] mb-2">{event.action}</p>

              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wide">
                    Ledger Timestamp
                  </span>
                  <p className="text-[var(--on-surface)] font-mono">{event.timestamp}</p>
                </div>

                <div>
                  <span className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wide">
                    Provider DID
                  </span>
                  <p className="text-[var(--primary)] break-all">{event.provider}</p>
                </div>

                <div>
                  <span className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wide">
                    Block Hash
                  </span>
                  <p className="text-[var(--on-surface)] font-mono break-all">{event.blockHash}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blockchain Guarantee Banner */}
        <div className="mt-6 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-container)] rounded-xl p-6 text-white">
          <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
            <svg className="w-20 h-20 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <h4 className="font-semibold mb-2">Your Sovereign Data Guarantee</h4>
          <p className="text-sm text-white/90 leading-relaxed mb-4">
            MediGate utilizes a private distributed ledger to ensure that no party — including us — can modify your health vault without your approval. The Who, What, When, and Why of your data are immutable.
          </p>

          <div className="flex flex-wrap gap-2">
            <div className="bg-white/20 px-3 py-1.5 rounded-full text-xs font-semibold">
              AES-256 ENCRYPTED
            </div>
            <div className="bg-white/20 px-3 py-1.5 rounded-full text-xs font-semibold">
              STELLAR LEDGER
            </div>
            <div className="bg-white/20 px-3 py-1.5 rounded-full text-xs font-semibold">
              ZERO-KNOWLEDGE PROOF
            </div>
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
            <Key className="w-6 h-6 text-[var(--on-surface-variant)]" />
            <span className="text-xs text-[var(--on-surface-variant)]">Keys</span>
          </Link>
          <Link to="/audit" className="flex flex-col items-center gap-1">
            <FileText className="w-6 h-6 text-[var(--primary)]" />
            <span className="text-xs text-[var(--primary)] font-semibold">Audit</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
