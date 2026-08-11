export const profile = {
  name: "Jarvis Dumas",
  location: "Orlando, Florida",
  email: "Jarvis.Dumas@Outlook.com",
  linkedin: "https://www.linkedin.com/in/jarvis-dumas-093b7558/",
  roles: ["Software Engineer", "SaaS Builder", "Odoo Developer", "Founder"],
  headline:
    "Building production software where business systems, data, and products meet.",
  summary:
    "Software engineer and founder focused on practical business systems, SaaS products, automation, and enterprise ERP. I move from problem to architecture, implementation, deployment, and real-world operation.",
  brand:
    "I founded Darter Solutions, an official Odoo Partner, and build independent products including Rival Roster, Project Atlas, and Ghost.",
  education: {
    school: "University of Central Florida",
    degree: "B.S., Information Technology",
    years: "2015 – 2020",
  },
} as const;

export const experience = [
  {
    company: "Darter Solutions",
    role: "Founder · Project Manager · Software Developer",
    period: "July 2023 – Present",
    location: "Orlando, Florida",
    points: [
      "Independent software company and official Odoo Partner delivering ERP implementation, customization, integrations, automation, and custom software.",
      "Own full implementation lifecycles from discovery through stabilization—prioritized with operators, staged rollouts, and delivery inside constrained windows.",
      "Deliver custom solutions, scripted automation, and UX adjustments for niche vertical needs across inventory, production, and integrations.",
      "Integrate ERP with payments, storefronts, shipping, telecom, and calendar systems into a coherent operating picture.",
    ],
  },
  {
    company: "Chronic Guru",
    role: "Project Manager · Software Developer",
    period: "May 2024 – May 2026",
    location: "Florida / North Carolina",
    points: [
      "Primary technical owner for a regulated multi-state retail and manufacturing operation spanning 6+ storefronts, warehouse, ecommerce, and in-house production.",
      "Led delivery across POS, inventory, manufacturing, ecommerce, and warehouse—sequencing work and keeping high-volume lanes stable.",
      "Extended the stack with custom POS behavior, operational notifications, checkout UX, manufacturing visibility, and multi-location inventory structure.",
      "Reworked access control, ran role-specific training, and authored SOP-aligned documentation for sustained adoption.",
    ],
  },
  {
    company: "Captivea",
    role: "ERP Consultant · Software Developer",
    period: "February 2022 – May 2023",
    location: "Orlando, Florida",
    points: [
      "Member of Captivea’s US delivery bench—an Odoo Gold Partner—implementing ERP for mid-market operators across industries.",
      "Ran discovery, blueprinting, master data readiness, pilots, production cutovers, and stabilization.",
      "Provided partner-grade configuration and development where native tools stopped, plus training and post-live support.",
    ],
  },
] as const;

export const darter = {
  name: "Darter Solutions",
  tagline: "Software company and official Odoo Partner",
  status: "Official Odoo Partner",
  focus:
    "ERP implementation, custom software, integrations, workflow automation, SaaS products, and technical consulting.",
  services: [
    "Odoo implementation and configuration",
    "Custom Odoo module development",
    "Third-party API and platform integrations",
    "ERP migration and Odoo.sh deployment",
    "Sales, Purchase, Inventory, Manufacturing, POS, CRM, Helpdesk, Planning, Quality, and Website workflows",
    "eCommerce and operational integrations",
    "Business process automation",
    "User training and ongoing support",
    "Custom web applications and SaaS development",
  ],
} as const;

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  name: string;
  kind: string;
  blurb: string;
  summary: string;
  website?: string;
  accent: string;
  cover?: string;
  images?: ProjectImage[];
  stack: string[];
  highlights: string[];
  details?: string[];
  result?: string;
};

export const projects: Project[] = [
  {
    slug: "rival-roster",
    name: "Rival Roster",
    kind: "Sports simulation platform",
    blurb:
      "A multi-sport simulation engine for hypothetical matchups—powered by real sports data, not static stats.",
    summary:
      "Rival Roster lets fans explore player battles, fantasy matchups, and team simulations across NBA, NFL, NHL, and MLB. A custom engine models chemistry, momentum, fatigue, and sport-specific rules, then returns box scores, play-by-play, MVPs, and ELO tracking.",
    website: "https://RivalRoster.com",
    accent: "#1f6f8b",
    cover: "/projects/rival-roster/landing.png",
    images: [
      {
        src: "/projects/rival-roster/landing.png",
        alt: "Rival Roster landing page — Build Your Squad. Challenge Anyone.",
      },
      {
        src: "/projects/rival-roster/team-sphere.png",
        alt: "Rival Roster Team Sphere for browsing NBA teams",
      },
      {
        src: "/projects/rival-roster/battle-result.png",
        alt: "Rival Roster battle result with head-to-head player stats",
      },
      {
        src: "/projects/rival-roster/team-compare.png",
        alt: "Rival Roster NFL team comparison and win probability",
      },
    ],
    stack: [
      "Next.js",
      "React 18",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "NextAuth.js",
      "BallDontLie API",
    ],
    highlights: [
      "Player Battles, Player Fantasy, and Team Simulation modes",
      "Daily sports-stat ingestion through external APIs",
      "Ratings, matchup advantages, chemistry, and substitutions",
      "Box scores, MVP selection, and play-by-play generation",
    ],
  },
  {
    slug: "project-atlas",
    name: "Project Atlas",
    kind: "Quantitative trading engine",
    blurb:
      "A strategy-agnostic research and trading platform for generating, testing, ranking, and deploying ideas with risk controls.",
    summary:
      "Project Atlas combines market-data ingestion, event-driven backtesting, machine learning, paper trading, and scheduled autonomous cycles across stocks, crypto, and forex—built as a reusable engine rather than a single strategy.",
    accent: "#2f6b4f",
    cover: "/projects/atlas/chart-ticket.png",
    images: [
      {
        src: "/projects/atlas/chart-ticket.png",
        alt: "Project Atlas chart, setup coach, and order ticket",
      },
      {
        src: "/projects/atlas/desk-session.png",
        alt: "Project Atlas Forex Session Desk with positions and risk controls",
      },
      {
        src: "/projects/atlas/desk-mean-reversion.png",
        alt: "Project Atlas mean-reversion desk and setup coach",
      },
      {
        src: "/projects/atlas/ops-backtest.png",
        alt: "Project Atlas live prices, backtester, and operations health",
      },
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "SQLAlchemy",
      "pandas",
      "Polars",
      "XGBoost",
      "Polygon.io",
      "OpenAI API",
      "React",
      "Chart.js",
    ],
    highlights: [
      "Pluggable strategy SDK with Bayesian optimization and walk-forward validation",
      "XGBoost market-regime detection and LLM-assisted research",
      "Risk management, circuit breakers, and paper portfolios",
      "24/7 crypto monitoring with analytics REST endpoints and dashboards",
    ],
    details: [
      "Strategies tested include EMA Cross, RSI Mean Reversion, Opening Range Breakout, London Breakout, NY Open Reversal, and more.",
    ],
    result:
      "Verified AAPL backtest: 14.08% CAGR, 1.09 Sharpe, −6.80% max drawdown (historical backtest—not a promise of future performance).",
  },
  {
    slug: "ghost",
    name: "Ghost",
    kind: "Retail monitoring SaaS",
    blurb:
      "Restock monitor and checkout bot that runs on your PC—Discord alerts, subscriptions, and verified-store checkout.",
    summary:
      "Ghost helps collectors and resellers catch high-demand inventory at original retailers. The SaaS handles accounts and billing; monitoring and optional checkout run locally on the user’s machine with Discord alerts—not a shared cloud farm.",
    website: "https://project-gengar.onrender.com/",
    accent: "#3d4f5f",
    cover: "/projects/ghost/landing.png",
    images: [
      {
        src: "/projects/ghost/landing.png",
        alt: "Ghost landing page for restock monitoring and checkout",
      },
      {
        src: "/projects/ghost/pricing.png",
        alt: "Ghost pricing tiers — Starter, Pro, and Pro + Checkout",
      },
      {
        src: "/projects/ghost/monitor-live.png",
        alt: "Ghost monitor running with Nike and Bandai stock statuses",
      },
      {
        src: "/projects/ghost/monitor.png",
        alt: "Ghost monitor with IN STOCK, OUT, and CHECKING product slots",
      },
    ],
    stack: [
      "SaaS architecture",
      "Authentication",
      "Payments",
      "Licensing",
      "Discord",
      "Render",
    ],
    highlights: [
      "Local PC monitoring with Discord restock alerts",
      "Subscription tiers including Pro + Checkout for verified stores",
      "Monitor dashboard with stock status, slots, and event logs",
      "Separation of hosted account management from local execution",
    ],
  },
  {
    slug: "odoo-engineering",
    name: "Enterprise Odoo Engineering",
    kind: "ERP implementation & development",
    blurb:
      "Hands-on Odoo work from legacy 12 through current 15–19 environments—manufacturing, inventory, POS, ecommerce, helpdesk, upgrades, and integrations.",
    summary:
      "Enterprise ERP delivery spanning multi-location retail and manufacturing environments—custom modules, connectors, version upgrades and migrations to Odoo.sh, and day-to-day operational support for dozens of users.",
    accent: "#436291",
    cover: "/projects/odoo/apps-dashboard.png",
    stack: [
      "Odoo 12 → 19",
      "Odoo 15 / 16 / 17 / 18 / 19",
      "Legacy Odoo 12 upgrades",
      "Odoo.sh",
      "Python",
      "PostgreSQL",
      "XML / QWeb views",
      "OWL / JavaScript",
      "Custom module development",
      "ORM models & computed fields",
      "Server actions & cron jobs",
      "Automated workflows / SLA",
      "Access groups & record rules",
      "Multi-warehouse inventory",
      "Manufacturing / MRP / BoMs",
      "Shop Floor",
      "Point of Sale",
      "Helpdesk",
      "Planning & Project",
      "Barcode / warehouse ops",
      "XML-RPC / JSON-RPC APIs",
      "REST connectors",
      "WooCommerce",
      "ShipStation",
      "FedEx / UPS connectors",
      "Version upgrades & migrations",
      "Data migration & cutovers",
      "Staging → production rollout",
      "User training & SOP docs",
    ],
    highlights: [
      "Chronic Guru: primary Odoo developer for multi-location retail, warehouse, manufacturing, and ecommerce",
      "Manufacturing automation tied to Sales and POS, variant BoMs, barcode warehouse flows",
      "Aqua Treatment Services: led the upgrade from Odoo 12 to Odoo 16",
      "Ice Kream Manufacturing: migration from Odoo Online 17.4 toward Odoo.sh on Odoo 18",
      "Client work across Aqua Treatment Services, LiquidStack, Zaza THC, Juik LLC, and 360 Global",
      "Custom development where configuration ends—models, views, security, and partner-grade extensions",
      "End-to-end delivery: discovery, blueprinting, master data, pilots, go-live, and stabilization",
    ],
  },
];

export const odooCases = [
  {
    name: "Chronic Guru",
    title: "Odoo ERP Engineering & Operations",
    body: "Primary Odoo developer for a multi-location operation with dozens of users—retail, warehouse, manufacturing, support, ecommerce, planning, and reporting.",
    items: [
      "Helpdesk with SLA and automation concepts",
      "POS sessions, returns, variants, and workflow customization",
      "Manufacturing automation from Sales and POS orders",
      "Variant-specific BoMs, replenishment, UoM, and quality control",
      "ShipStation, WooCommerce, barcode warehouse, and rewards concepts",
    ],
  },
  {
    name: "Filson Water",
    title: "Odoo Client Support",
    body: "Implementation and support for a focused small-business environment—proof of range from multi-user enterprise deployments to leaner ERP needs.",
    items: [],
  },
  {
    name: "Ice Kream Manufacturing",
    title: "Odoo Migration",
    body: "Migration planning from Odoo Online/SaaS 17.4 toward an Odoo.sh environment on an Odoo 18 branch—hosted SaaS to a more customizable deployment model.",
    items: [],
  },
  {
    name: "Aqua Treatment Services",
    title: "Odoo 12 → 16 Upgrade",
    body: "Led the upgrade of Aqua Treatment Service, Inc. from Odoo 12 to Odoo 16 for a water-treatment manufacturer—preserving operational continuity across supply chain, sales, finance, services, and shipping connectors while moving off a legacy platform.",
    items: [
      "Owned the Odoo 12 → 16 upgrade path end to end",
      "Supply chain, inventory, and purchasing workflows",
      "Sales, finance, and document management",
      "Services / timesheets and field-oriented operations",
      "Shipping connector support (FedEx / UPS)",
    ],
  },
  {
    name: "LiquidStack",
    title: "Data Center Cooling · Odoo ERP",
    body: "Odoo engagement supporting LiquidStack, a liquid-cooling manufacturer for hyperscale, edge, and high-performance computing—advanced manufacturing and ops on a mid-market ERP footprint.",
    items: [
      "Manufacturing and inventory-oriented ERP processes",
      "Sales-to-operations coordination for complex hardware products",
      "Environment support for a scaling 50–200 employee organization",
    ],
  },
  {
    name: "Zaza THC",
    title: "Cannabinoid Wholesale · Odoo Support",
    body: "Odoo support for a wholesale cannabinoid brand focused on lab-tested hemp-derived products (Delta-8 / Delta-10 and related SKUs)—inventory, order flow, and operational ERP needs for a product-driven wholesale business.",
    items: [],
  },
  {
    name: "Juik LLC",
    title: "Odoo Client Engagement",
    body: "Odoo implementation and support for Juik LLC—configuring and stabilizing business workflows so day-to-day operations run through a unified ERP rather than fragmented tools.",
    items: [],
  },
  {
    name: "360 Global",
    title: "High-Risk Ops · Systems & Integrations",
    body: "ERP and systems work aligned with 360 Global’s high-risk industry focus (CBD, kratom, and adjacent verticals)—helping operational tooling, payment-adjacent workflows, and business infrastructure stay coherent as the organization scales partners and clients.",
    items: [],
  },
] as const;

export const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "SQL", "C# (foundation)"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React 18", "Tailwind CSS", "Chart.js"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "FastAPI", "Uvicorn", "RESTful APIs"],
  },
  {
    category: "Data & Databases",
    items: [
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "SQLAlchemy",
      "Alembic",
      "pandas",
      "Polars",
      "SQL Server",
    ],
  },
  {
    category: "Machine Learning",
    items: ["scikit-learn", "XGBoost", "OpenAI API"],
  },
  {
    category: "ERP & Odoo",
    items: [
      "Odoo 12 → 19",
      "Odoo 15 / 16 / 17 / 18 / 19",
      "Legacy upgrades (12 → 16)",
      "Odoo.sh",
      "Sales",
      "Purchase",
      "Inventory",
      "Manufacturing",
      "POS",
      "CRM",
      "Helpdesk",
      "Planning",
      "Quality",
      "Website / eCommerce",
    ],
  },
  {
    category: "Integrations",
    items: [
      "WooCommerce",
      "ShipStation",
      "FedEx / UPS connectors",
      "Polygon.io",
      "BallDontLie",
      "Discord",
      "NextAuth.js",
    ],
  },
  {
    category: "Platforms & Practice",
    items: [
      "Render",
      "Supabase",
      "APScheduler",
      "SaaS architecture",
      "Workflow automation",
      "Production deployment",
      "Technical training",
    ],
  },
] as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
