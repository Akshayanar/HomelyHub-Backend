

Homelyhub backend readme · MD
# HomelyHub — Backend
 
Backend API server for **HomelyHub**, an AI-powered stay-booking web application built during the MERN Stack Internship (Batch B8) at **WebStack Academy**.
 
This is the backend service only. The frontend (React) repository can be found here: [HomelyHub](https://github.com/Akshayanar/HomelyHub) · Live app: [homely-hub-beta.vercel.app](https://homely-hub-beta.vercel.app)
 
---
 
## 🛠️ Tech Stack
 
- **Runtime:** Node.js
- **Framework:** Express.js (ES Modules syntax)
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens), stored via HTTP-only cookies (`cookie-parser`)
- **Security:** Bcrypt (password hashing), Validator (input validation)
- **Middleware:** CORS (configured for cross-origin requests with credentials), `dotenv` for environment config
- **AI Integration:** Groq API (AI-assisted trip planning / property descriptions)
- **Deployment:** Render
---
 
## ✨ Features
 
- User authentication — signup, login, and session persistence via JWT stored in HTTP-only cookies
- Role-based access (`user` / `admin`)
- Property listing management (create, fetch, filter)
- Booking system with date-based availability handling
- AI-powered trip planning / content generation via the Groq API
- CORS configured to securely accept authenticated requests from the deployed frontend (Vercel)
*(Update this list to match exactly what's implemented and remove anything not yet complete.)*
 
---
 
## 📂 Project Structure
 
```
HomelyHub-Backend/
├── src/
│   ├── models/          # Mongoose schemas (User, Property, Booking, etc.)
│   ├── controllers/     # Route handler logic
│   ├── routes/          # Express route definitions
│   ├── middleware/       # Auth checks, error handling, etc.
│   ├── utils/            # Helpers (DB connection, token generation, etc.)
│   └── index.js          # App entry point
├── package.json
└── README.md
```
 
> Update this tree to match your actual `src/` folder layout.
 
---
 
## 🔌 API Endpoints
 
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| GET | `/` | Health check — verify backend is running | No |
| POST | `/api/v1/users/signup` | Register a new user | No |
| POST | `/api/v1/users/login` | Login and issue JWT cookie | No |
| GET | `/api/v1/users/me` | Get currently logged-in user (restores session) | Yes |
| POST | `/api/v1/users/logout` | Clear auth cookie | Yes |
| GET | `/api/v1/properties` | Fetch all properties (supports filters) | No |
| GET | `/api/v1/properties/:id` | Get single property details | No |
| POST | `/api/v1/properties` | Create a new property listing | Yes (host/admin) |
| POST | `/api/v1/bookings` | Create a new booking | Yes |
| GET | `/api/v1/bookings` | Get bookings for logged-in user | Yes |
| POST | `/api/v1/ai/trip-plan` | Generate an AI trip plan (Groq) | Yes |
 
> Update paths, methods, and auth requirements to match your actual routes.
 
---
 
## ⚙️ Setup & Installation
 
### 1. Clone the repository
```bash
git clone https://github.com/Akshayanar/HomelyHub-Backend.git
cd HomelyHub-Backend
```
 
### 2. Install dependencies
```bash
npm install
```
 
### 3. Configure environment variables
Create a `.env` file in the root directory:
 
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
COOKIE_EXPIRES_IN=7
CLIENT_URL=https://homely-hub-beta.vercel.app
GROQ_API_KEY=your_groq_api_key
```
 
### 4. Run the development server
```bash
npm run dev
```
 
The server will start on `http://localhost:5000` (or your configured `PORT`).
 
---
 
## 🌐 Deployment
 
This backend is deployed on **Render**, with environment variables configured in the Render dashboard. CORS is set up to allow credentialed requests only from the deployed frontend origin (`CLIENT_URL`), and cookies are issued as HTTP-only for secure, cross-origin authentication with the Vercel-hosted frontend.
 
---
 
## 🔗 Related Repositories
 
- Frontend: [HomelyHub](https://github.com/Akshayanar/HomelyHub)
- Live App: [homely-hub-beta.vercel.app](https://homely-hub-beta.vercel.app)
---
 
## 🎓 Acknowledgment
 
Built as part of the **MERN Stack Internship (Batch B8)** at **WebStack Academy**.
 
---
 
## 📬 Contact
 
**Author:** [Your Name]
**GitHub:** [@Akshayanar](https://github.com/Akshayanar)
 

Claude finished the response
