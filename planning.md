/result-processing-system-reactjs-frontend
├── node_modules/
├── public/                # Static assets (images, favicon, etc.)
├── src/
│   ├── api/               # API clients/functions (e.g., axios instances, TanStack Query config)
│   │   ├── axiosClient.js
│   │   └── results.js     # API calls related to results
│   ├── assets/            # Local images, fonts, icons (non-public)
│   ├── components/        # Highly reusable UI elements (Button, Card, Modal, etc.)
│   │   ├── Button.jsx
│   │   └── Card.jsx
│   ├── features/          # Group by business domain (e.g., student, course, result)
│   │   ├── Auth/
│   │   │   ├── components/ # Local components for this feature
│   │   │   └── pages/      # Top-level route components for this feature (Login.jsx, Register.jsx)
│   │   ├── Results/
│   │   │   ├── ResultTable.jsx
│   │   │   └── ResultsPage.jsx
│   ├── hooks/             # Custom hooks (e.g., useFetchResults.js)
│   ├── layouts/           # Page structures (e.g., MainLayout.jsx, AuthLayout.jsx)
│   ├── App.jsx            # Main app component (often contains layout/routing logic)
│   ├── main.jsx           # Entry point (ReactDOM.createRoot, QueryClientProvider, Router)
│   └── index.css          # Global styles (Tailwind directives)
├── .env.development       # Environment variables
├── Dockerfile             # Docker build instructions
├── docker-compose.yml     # Multi-container setup (frontend + backend)
├── package.json
└── ... (other config files: vite.config.js, tailwind.config.js, etc.)