// Central source of truth for projects displayed on the Projects page.
// Update this list to add/remove projects.

import stockAi from "../Assets/stock-ai.png";
import financeAi from "../Assets/finance-ai.png";

const projects = [
  {
    title: "Enterprise Stock Portfolio Analytics Engine",
    description:
      "Production-grade portfolio analytics platform with real-time market data, sub-200ms API responses, secure JWT auth (bcrypt), SQL injection prevention, and automated schema provisioning. Features advanced performance tracking, gain/loss, historical trends, and interactive visualizations across multiple securities.",
    imgPath: stockAi,
    ghLink: "https://github.com/not0aag/StockAnalysis",
    demoLink: "",
  },
  {
    title: "AI-Powered Financial Intelligence Platform",
    description:
      "Next.js 15 + React 18 + TypeScript app that integrates OpenAI (GPT-4) for intelligent spending analysis, personalized budget optimization, and ML-driven predictive forecasting. Includes real-time dashboards, interactive trend analysis, category-based breakdowns, and polished UI with Framer Motion.",
    imgPath: financeAi,
    ghLink: "https://github.com/not0aag/AIFinanceAnalysis",
    demoLink: "",
  },
];

export default projects;
