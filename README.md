🧭 Career Path Analyzer

A full-stack app that identifies skill gaps, generates a career roadmap, and shows the latest tech news.

🔗 Live Frontend: https://career-path-app-phi.vercel.app

🔗 Live Backend: https://career-path-app.onrender.com

🚀 Features (Short)

Select target role + pick your skills

Skill gap analysis (matched, missing, recommendations)

Auto-generated 3-phase roadmap

Latest HackerNews tech stories

Clean responsive UI (Next.js + Tailwind + Shadcn)

Secure backend (Node.js + Express + Helmet + CORS)

🛠 Tech Stack

Frontend: Next.js, TailwindCSS, Shadcn, Redux Toolkit, Axios
Backend: Node.js, Express, Axios, Helmet, CORS, Rate Limiter

📦 API Endpoints

Skill Gap:

POST /api/skill-gap
{ "targetRole": "Backend Developer", "currentSkills": ["Java","SQL"] }


Roadmap:

POST /api/roadmap
{ "targetRole": "Full Stack Developer" }


News:

GET /api/news

🏗 Project Setup (Short)
Backend
cd backend
npm install
npm start


.env

PORT=4000
CORS_ORIGIN=http://localhost:3000
HACKERNEWS_BASE=https://hacker-news.firebaseio.com/v0

Frontend
cd frontend
npm install
npm run dev


.env

NEXT_PUBLIC_API_BASE_URL=http://localhost:4000

📸 Screenshots
[Home]
<img width="1036" height="898" alt="image" src="https://github.com/user-attachments/assets/68358dee-e9c9-4c28-bc4c-46dd6ec078c9" />

[Skill Gap]

<img width="788" height="794" alt="image" src="https://github.com/user-attachments/assets/421cd3f0-4323-4a17-a4d6-bbef652c3be2" />

[Roadmap]
<img width="752" height="795" alt="image" src="https://github.com/user-attachments/assets/b4200fa6-f754-4957-98a2-c61229bc17ff" />

[News]

<img width="1614" height="915" alt="image" src="https://github.com/user-attachments/assets/2f87ecbd-09ae-4976-ad29-bc15ff5405d0" />



👨‍💻 Author

Surjeet Kumar
MERN Developer | Java + DSA | Docker | AWS | Kubernetes
