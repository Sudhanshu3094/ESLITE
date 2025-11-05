🎓 ESLITE – Client (Frontend)

ESLITE is a modern and responsive frontend web application built with React for an upcoming e-learning platform.
Currently, this repository contains only the client-side code. The backend (API and database) is under development and will be integrated in the future.

🧠 Overview

The ESLITE Client provides the user interface for learners and instructors.
It includes pages and components for:

Browsing courses

Viewing lessons (future feature)

Authentication UI (Login / Signup)

Dashboard and progress tracking (to be linked with backend API later)

Once the backend is complete, ESLITE will become a full-stack learning platform.

🧩 Project Status

⚠️ Backend not yet available
All frontend pages, routes, and components are functional using mock data or placeholders.
API integration will be added once the backend is developed.

✨ Features

⚛️ Built with React.js and Vite

💅 Styled with Tailwind CSS

🧭 React Router for navigation

📱 Fully responsive design

🔄 Ready for API integration (Axios setup included)

🧠 Component-based architecture

🧰 Clean and modular project structure

🛠️ Tech Stack
Layer	Technology
Frontend	React.js (Vite)
Styling	Tailwind CSS
Routing	React Router DOM
API Client	Axios (future use)
State Management	React Hooks / Context
Deployment	Netlify / Vercel (recommended)
📁 Folder Structure
Client/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── CourseCard.jsx
│   │   └── Loader.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   ├── services/
│   │   └── api.js        # Future API integration
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── package.json
└── README.md

⚙️ Installation & Setup

Clone the Repository

git clone https://github.com/Sudhanshu3094/ESLITE.git
cd ESLITE/Client


Install Dependencies

npm install


Create an Environment File
Create a file named .env in the root of the Client folder:

# Example (for future backend connection)
VITE_API_BASE_URL=http://localhost:5000/api


Run the Development Server

npm run dev


Open in Browser

http://localhost:5173

🧠 Future Backend Integration

Once the backend is complete, it will provide endpoints for:

Feature	API Endpoint (planned)
User Login	/api/auth/login
Register	/api/auth/register
Get Courses	/api/courses
Get Course Details	/api/courses/:id
Track Progress	/api/users/:id/progress



🧪 Temporary Mock Setup (Optional)

You can simulate API responses with a local JSON server for development:

npm install -g json-server
json-server --watch mock/db.json --port 5000


Then set:

VITE_API_BASE_URL=http://localhost:5000

✅ Scripts
Command	Description
npm run dev	Start development server
npm run build	Build for production
npm run preview	Preview production build
🌐 Deployment

You can deploy the client easily to:

Vercel

Netlify

GitHub Pages

Example (Vercel CLI):

npm run build
vercel deploy

🤝 Contributing

Contributions are always welcome!

Fork the repository

Create your feature branch (git checkout -b feature/your-feature)

Commit your changes

Push to your branch

Open a Pull Request

🧾 License

This project is licensed under the MIT License.

👨‍💻 Author

Sudhanshu Ranjan
Frontend Developer | React Enthusiast
