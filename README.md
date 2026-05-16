<div align="center">
  <img src="MediGate_logo.png" alt="MediGate Logo" width="200"/>

  # 🏥 MediGate Frontend

  **Patient-Owned EHR Gateway — React UI**

  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![React](https://img.shields.io/badge/React-18-61DAFB)](https://reactjs.org)
  [![Vite](https://img.shields.io/badge/Vite-6-646CFF)](https://vitejs.dev)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4)](https://tailwindcss.com)
  [![Stellar](https://img.shields.io/badge/Stellar-Soroban-7B1FA2)](https://stellar.org)

  *"Putting the keys to health data back in the hands of the patient."*

</div>

---

## 📋 Overview

The MediGate Frontend is a **React application** that provides the patient and provider interfaces for interacting with the MediGate ecosystem. It communicates with the [MediGate Backend](https://github.com/VicHealth/MediGate-Backend) which orchestrates calls to the [Soroban smart contracts](https://github.com/VicHealth/MediGate-contract) on Stellar testnet.

### Key UI Features

| Feature | Description |
|---------|-------------|
| **Patient Dashboard** | Health access summary, emergency mode toggle |
| **Key Manager** | Granular list of active permissions with countdown timers |
| **Grant New Access** | Step-by-step wizard for generating smart keys |
| **Emergency Settings** | Break-Glass configuration and guardian management |
| **Access Audit Trail** | Read-only timeline of all access events |
| **Provider Portal** | Smart key input and FHIR clinical dashboard |

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/) (recommended)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm run dev
```

The development server starts at **`http://localhost:5173`**.

### Build for Production

```bash
pnpm run build
```

---

## 📁 Project Structure

```
src/
├── main.tsx                  # Application entry point
├── App.tsx                   # Root application component
├── app/
│   ├── components/
│   │   ├── AuditTrail.tsx    # Access audit trail view
│   │   ├── KeysManager.tsx   # Key management interface
│   │   ├── Login.tsx         # Authentication
│   │   ├── PatientDashboard.tsx  # Patient home view
│   │   ├── ProviderView.tsx  # Provider portal
│   │   └── figma/            # Figma design components
│   └── components/ui/        # shadcn/ui component library
└── styles/
    ├── globals.css           # Global CSS
    ├── theme.css             # Theme variables
    ├── tailwind.css          # Tailwind imports
    └── index.css             # Main stylesheet
```

---

## 🔗 Related Repositories

| Repository | Description |
|-----------|-------------|
| [MediGate-Backend](https://github.com/VicHealth/MediGate-Backend) | Express orchestrator API |
| [MediGate-contract](https://github.com/VicHealth/MediGate-contract) | Soroban smart contracts |

---

## 🎨 Design System

| Element | Value |
|---------|-------|
| **Primary Color** | `#0052CC` |
| **Secondary** | `#F4F5F7` |
| **Danger** | `#FF5252` |
| **Success** | `#36B37E` |
| **Typography** | Merriweather, Serif |
| **Border Radius** | 12px |

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit your changes:** `git commit -m 'Add amazing feature'`
4. **Push to the branch:** `git push origin feature/amazing-feature`
5. **Open a Pull Request**

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <strong>MediGate</strong> — *Decentralizing the gateway to medical records, one key at a time.*
</div>
