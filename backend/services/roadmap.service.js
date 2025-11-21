// backend/services/roadmap.service.js

const ROADMAP = {
  "backend developer": [
    { phase: "Phase 1 (1-2 months)", items: ["Language fundamentals (Java/Python/Node)", "OOP & Data Structures basics", "Git & basic CLI"] },
    { phase: "Phase 2 (2 months)", items: ["Web frameworks (Spring Boot / Express)", "Relational Databases (SQL)", "RESTful APIs & Authentication"] },
    { phase: "Phase 3 (1-2 months)", items: ["Microservices & Design Patterns", "Containerization (Docker)", "Deployment, Monitoring, System Design basics"] },
  ],

  "frontend developer": [
    { phase: "Phase 1 (1-2 months)", items: ["HTML, CSS fundamentals", "Vanilla JavaScript & DOM", "Responsive design"] },
    { phase: "Phase 2 (2 months)", items: ["React (or framework of choice)", "State management, routing, forms", "TypeScript basics"] },
    { phase: "Phase 3 (1-2 months)", items: ["Performance & accessibility", "Testing (unit & integration)", "Build real projects & deployment"] },
  ],

  "full stack developer": [
    { phase: "Phase 1 (1-2 months)", items: ["Frontend basics (HTML/CSS/JS)", "Backend language basics (Node/Java/Python)", "Git & project setup"] },
    { phase: "Phase 2 (2 months)", items: ["React + Node/Express or equivalent", "Databases (SQL + NoSQL)", "Auth, File uploads, APIs"] },
    { phase: "Phase 3 (1-2 months)", items: ["Dockerize apps", "CI/CD basics", "End-to-end projects & deployment"] },
  ],

  "data analyst": [
    { phase: "Phase 1 (1 month)", items: ["Excel proficiency", "SQL basics", "Statistics fundamentals"] },
    { phase: "Phase 2 (2 months)", items: ["Python (Pandas, NumPy)", "Data cleaning & EDA", "Dashboarding (Power BI / Tableau)"] },
    { phase: "Phase 3 (1-2 months)", items: ["Storytelling with data", "Automating reports", "Portfolio projects"] },
  ],

  "data scientist": [
    { phase: "Phase 1 (1-2 months)", items: ["Python & Math fundamentals", "Statistics & Probability", "Data wrangling (Pandas)"] },
    { phase: "Phase 2 (2-3 months)", items: ["Machine Learning basics (sklearn)", "Model evaluation & validation", "Feature engineering"] },
    { phase: "Phase 3 (2 months)", items: ["Deep learning intro (TensorFlow/PyTorch)", "Model deployment basics", "End-to-end ML project"] },
  ],

  "machine learning engineer": [
    { phase: "Phase 1 (1-2 months)", items: ["Python & ML fundamentals", "Linear algebra & probability refresh", "Data preprocessing"] },
    { phase: "Phase 2 (2-3 months)", items: ["Deep learning (CNN, RNN, transformers)", "Model optimization & scaling", "Experiment tracking"] },
    { phase: "Phase 3 (2 months)", items: ["Model deployment (TF Serving, TorchServe)", "MLOps basics (CI/CD for ML)", "Monitoring & retraining pipelines"] },
  ],

  "devops engineer": [
    { phase: "Phase 1 (1-2 months)", items: ["Linux fundamentals", "Networking basics", "Git & basic scripting"] },
    { phase: "Phase 2 (2 months)", items: ["Docker & container basics", "CI/CD pipelines (GitHub Actions/Jenkins)", "Infrastructure as Code (Terraform)"] },
    { phase: "Phase 3 (1-2 months)", items: ["Kubernetes fundamentals", "Monitoring & logging (Prometheus/Grafana)", "Cost, security, resilience"] },
  ],

  "site reliability engineer": [
    { phase: "Phase 1 (1-2 months)", items: ["Linux & networking", "Scripting (Python/Bash)", "Observability basics"] },
    { phase: "Phase 2 (2 months)", items: ["SRE principles (SLIs/SLOs)", "Incident response & runbooks", "Capacity planning basics"] },
    { phase: "Phase 3 (1-2 months)", items: ["Automation & playbooks", "Chaos engineering basics", "On-call readiness & tooling"] },
  ],

  "security engineer": [
    { phase: "Phase 1 (1-2 months)", items: ["Networking and OS fundamentals", "Common vulnerabilities (OWASP Top 10)", "Secure coding basics"] },
    { phase: "Phase 2 (2 months)", items: ["Authentication & authorization", "Container & cloud security basics", "Threat modelling"] },
    { phase: "Phase 3 (1-2 months)", items: ["Security testing (SAST/DAST)", "Incident handling basics", "Hardening and monitoring"] },
  ],

  "cloud engineer": [
    { phase: "Phase 1 (1-2 months)", items: ["Cloud fundamentals (AWS/GCP/Azure)", "Linux & networking basics", "Storage and compute basics"] },
    { phase: "Phase 2 (2 months)", items: ["IaaS & PaaS services", "Infrastructure as Code (Terraform)", "Identity & access management"] },
    { phase: "Phase 3 (1-2 months)", items: ["Serverless basics", "Cost optimization", "Monitoring & resilience"] },
  ],

  "mobile app developer": [
    { phase: "Phase 1 (1-2 months)", items: ["Platform fundamentals (Android/iOS)", "Language basics (Kotlin/Swift/Flutter)", "UI fundamentals"] },
    { phase: "Phase 2 (2 months)", items: ["Native framework (Android Studio/SwiftUI) or Flutter basics", "API integration & local storage", "Testing and debugging"] },
    { phase: "Phase 3 (1-2 months)", items: ["Publishing to stores", "Performance optimizations", "Real-world projects"] },
  ],

  "qa engineer": [
    { phase: "Phase 1 (1 month)", items: ["Testing fundamentals", "Manual test case writing", "Bug lifecycle"] },
    { phase: "Phase 2 (1-2 months)", items: ["Automation basics (Selenium/Playwright)", "API testing (Postman)", "Test design techniques"] },
    { phase: "Phase 3 (1-2 months)", items: ["CI integration for tests", "Performance testing basics", "Building QA portfolio"] },
  ],

  "product manager": [
    { phase: "Phase 1 (1 month)", items: ["Product thinking & user research basics", "Roadmapping fundamentals", "Stakeholder communication"] },
    { phase: "Phase 2 (2 months)", items: ["Metric-driven decision making", "Prioritization frameworks (RICE/MoSCoW)", "Writing clear PRDs"] },
    { phase: "Phase 3 (1-2 months)", items: ["Go-to-market basics", "Working with engineering teams", "Iterating based on feedback"] },
  ],

  "site reliability engineer (sre)": [
    { phase: "Phase 1 (1-2 months)", items: ["Systems & networking fundamentals", "Linux & scripting", "Monitoring basics"] },
    { phase: "Phase 2 (2 months)", items: ["SRE practices (SLIs/SLOs/SLAs)", "Incident management", "Automation"] },
    { phase: "Phase 3 (1-2 months)", items: ["Scalability & capacity planning", "Chaos engineering basics", "Resilience design"] },
  ],

  // add more roles as needed
};

function normalizeRoleKey(input) {
  if (!input || typeof input !== "string") return "";
  return input.toLowerCase().replace(/\s+/g, " ").trim();
}

exports.getRoadmap = (targetRole) => {
  if (!targetRole || typeof targetRole !== "string") {
    throw new Error("Role required");
  }

  const key = normalizeRoleKey(targetRole);

  const foundKey = Object.keys(ROADMAP).find((k) => normalizeRoleKey(k) === key);

  if (!foundKey) {
    throw new Error(`Roadmap not found for role: ${targetRole}`);
  }

  return { role: foundKey, roadmap: ROADMAP[foundKey] };
};
