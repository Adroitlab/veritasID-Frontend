VeritasID — Frontend
Your contributions, verified. Your identity, yours.

Table of Contents
·	Project Overview
·	Aim
·	Objectives
·	Tech Stack
·	Project Structure
·	Getting Started
·	Environment Variables
·	Available Scripts
·	Contributing
·	License

Project Overview
VeritasID is a contribution-gated reputation and credentialing protocol built on the Stellar network. The frontend is a modern React application that serves as the primary interface through which developers connect their GitHub identity to their Stellar wallet, view their on-chain credential portfolio, and share a public verifiable profile with employers, DAOs, and grant committees.
Each credential in a developer's VeritasID profile represents a real, verified open-source contribution — a merged pull request, a resolved bug, a security audit, or a documentation contribution — encoded as a non-transferable on-chain attestation following the W3C Verifiable Credentials standard. No resumes. No endorsements. Only proof.

Aim
To provide developers with a seamless, trustworthy interface for building and showcasing a sovereign, on-chain professional identity rooted entirely in the verifiable reality of their open-source contributions — positioning VeritasID as the industry-standard credentialing layer for OSS developers across the Stellar ecosystem and beyond.

Objectives
·	Deliver a frictionless onboarding experience by linking GitHub OAuth accounts to Stellar wallet addresses in a single flow
·	Display a developer's full credential portfolio with filtering by contribution type, repository, impact score, and issuance date
·	Render publicly shareable contributor profile pages that require no authentication to view, enabling use as a professional reference
·	Provide a credential verification interface where any third party can independently verify the authenticity of a credential against the on-chain registry
·	Visualise reputation scores derived from the cumulative weight of on-chain credentials, with transparent scoring breakdowns
·	Support W3C Verifiable Credential export so developers can present credentials in external systems
·	Enable organisations and DAOs to configure contribution-gated access rules and verify applicants against the VeritasID registry
·	Ensure full wallet-native interaction via Freighter and the Stellar Wallets Kit, with no custody of private keys at any point
·	Maintain a fully accessible, responsive UI consistent across desktop and mobile viewports

Tech Stack
Core Framework
Technology	Version	Purpose
React	18.x	UI component framework
TypeScript	5.x	Type safety and developer experience
Vite	5.x	Build tool and development server

Routing & State Management
Technology	Version	Purpose
React Router	6.x	Client-side routing
Zustand	4.x	Lightweight global state management
TanStack Query	5.x	Server state, caching, and async data fetching

Data Visualisation
Technology	Version	Purpose
Recharts	2.x	Reputation score trends and contribution timeline charts
D3.js	7.x	Custom credential network and contribution graph rendering

Styling
Technology	Version	Purpose
Tailwind CSS	3.x	Utility-first styling system
shadcn/ui	latest	Accessible, composable UI component primitives
Framer Motion	11.x	Credential card animations and page transitions
Lucide React	latest	Icon system

Blockchain & Wallet Integration
Technology	Version	Purpose
Stellar SDK (JS)	12.x	Stellar network interaction and transaction construction
Freighter API	latest	Primary Stellar wallet connection
@stellar/stellar-wallets-kit	latest	Multi-wallet support (Freighter, Albedo, xBull)
Passkey Kit	latest	Passkey-based smart wallet support for web2 onboarding

Credential Standards
Technology	Purpose
W3C Verifiable Credentials (VC Data Model 2.0)	Credential schema and export format standard
DID Core	Decentralised identifier standard for profile URIs

Authentication
Technology	Purpose
GitHub OAuth 2.0	Developer identity linking
JWT (via backend)	Session management

Testing
Technology	Version	Purpose
Vitest	1.x	Unit and integration testing
React Testing Library	14.x	Component behaviour testing
Playwright	1.x	End-to-end and credential verification flow testing
MSW	2.x	API mocking for isolated component tests

Tooling & Quality
Technology	Purpose
ESLint + Prettier	Code linting and formatting
Husky + lint-staged	Pre-commit hooks
GitHub Actions	CI/CD pipeline


Project Structure
veritasid-frontend/
├── public/                         # Static assets and favicons
├── src/
│   ├── assets/                     # Images, fonts, brand assets
│   ├── components/
│   │   ├── ui/                     # Base UI primitives (shadcn)
│   │   ├── credentials/            # Credential card, badge, and detail components
│   │   ├── profile/                # Public and private profile page components
│   │   ├── verification/           # Third-party credential verification UI
│   │   ├── reputation/             # Reputation score display and breakdown
│   │   ├── wallet/                 # Wallet connect and session components
│   │   └── layout/                 # App shell, navigation, and sidebar
│   ├── hooks/                      # Custom React hooks
│   ├── lib/
│   │   ├── api/                    # TanStack Query hooks and REST/GraphQL client
│   │   ├── stellar/                # Stellar SDK helpers, wallet utilities
│   │   ├── credentials/            # W3C VC formatting and export utilities
│   │   └── utils/                  # Shared utility functions
│   ├── pages/
│   │   ├── Home.tsx                # Landing and protocol introduction
│   │   ├── Onboarding.tsx          # GitHub + wallet linking flow
│   │   ├── Dashboard.tsx           # Authenticated developer credential portfolio
│   │   ├── Profile/                # Public shareable contributor profile
│   │   ├── Verify.tsx              # Public credential verification page
│   │   ├── Organisations.tsx       # DAO and employer gating configuration
│   │   └── Auth/                   # OAuth callback handlers
│   ├── store/                      # Zustand state slices
│   ├── types/                      # Global TypeScript type definitions
│   ├── App.tsx
│   └── main.tsx
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .env.example
├── .eslintrc.cjs
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── package.json


Getting Started
Prerequisites
·	Node.js >= 20.x
·	npm >= 10.x or pnpm >= 9.x
·	A registered GitHub OAuth App
·	Freighter wallet browser extension installed for local testing
·	VeritasID Backend running locally or pointed to a staging environment
Installation
# Clone the repository
git clone https://github.com/your-org/veritasid-frontend.git
cd veritasid-frontend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start the development server
npm run dev

The app will be available at http://localhost:5173.

Environment Variables
VITE_API_BASE_URL=http://localhost:4000/api/v1
VITE_GITHUB_CLIENT_ID=your_github_oauth_client_id
VITE_STELLAR_NETWORK=testnet                            # testnet | mainnet
VITE_STELLAR_RPC_URL=https://soroban-testnet.stellar.org
VITE_CREDENTIAL_REGISTRY_CONTRACT_ID=your_contract_id
VITE_APP_ENV=development


Available Scripts
npm run dev            # Start Vite dev server with HMR
npm run build          # Production build
npm run preview        # Preview production build locally
npm run test           # Run Vitest unit tests
npm run test:e2e       # Run Playwright end-to-end tests
npm run lint           # Run ESLint
npm run format         # Run Prettier
npm run type-check     # TypeScript compiler check (no emit)


Contributing
Contributions are welcome. Please read the root-level CONTRIBUTING.md and ensure all tests pass before opening a pull request. Branch naming convention: feat/, fix/, chore/, docs/.

License
Apache 2.0
