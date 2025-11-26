# 🌪️ Disaster Alert Application  
A MERN-based real-time disaster prediction and alerting system developed for VIT Hackathon.  
This application predicts risks based on weather patterns and sends SMS alerts to users using Twilio.

---

## 🚀 Features

### 🔹 Real-Time Weather Data  
- Fetches live weather information from external APIs  
- Stores weather trends in MongoDB for risk analysis  

### 🔹 ML-Based Risk Prediction  
- Simple rule-based or ML-engine logic  
- Predicts risk level (Low / Medium / High)  

### 🔹 SMS Alert System  
- Twilio integration to send disaster alerts  
- Supports admin phone alerts and user alerts  
- Automatically sends notifications when risk is detected  

### 🔹 User Authentication  
- Secure login and signup using JWT  
- Password hashing using bcrypt  

### 🔹 Tips & Safety Guidelines  
- Age-based safety tips  
- General disaster management recommendations  

---

## 🧱 Tech Stack

| Layer      | Technology |
|------------|------------|
| Frontend   | React.js Not yet used |
| Backend    | Node.js, Express.js |
| Database   | MongoDB Atlas |
| SMS Alerts | Twilio |
| Model/Logic| Custom ML/Rule-based engine |

---

## 📁 Folder Structure (Backend)

```
backend/
├── config/
│   ├── db.js
│   └── env.js
├── controllers/
│   ├── alertController.js
│   ├── authController.js
│   ├── dataController.js
│   ├── riskController.js
│   └── tipsController.js
├── cron/
│   └── predictionJob.js
├── models/
│   ├── AlertLog.js
│   ├── RiskResult.js
│   ├── User.js
│   └── WeatherData.js
├── routes/
│   ├── alertRoutes.js
│   ├── authRoutes.js
│   ├── dataRoutes.js
│   ├── riskRoutes.js
│   └── tipsRoutes.js
├── services/
│   ├── mlEngine.js
│   ├── notificationService.js
│   └── smsService.js
└── utils/
    ├── ageTips.js
    └── generateToken.js

app.js  
server.js  
.gitignore  
```

---

## 🔧 Environment Variables

Create a `.env` file in the backend root:


```
PORT=5000
MONGO_URI=your_mongo_connection_string

# Twilio
TWILIO_SID=your_twilio_sid
TWILIO_TOKEN=your_twilio_token
TWILIO_PHONE=your_twilio_number

# Admin
ADMIN_PHONE=+91xxxxxxxxxx

JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

⚠️ Do **NOT** push `.env` to GitHub.  
Ensure `.gitignore` contains:

```
.env
backend/.env
node_modules/
```

---

## ▶️ Running the Backend

```
cd backend
npm install
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 🌤 Weather  
`GET /api/data/latest` – Get latest weather  
`POST /api/data/add` – Add weather entry  

### ⚠️ Risk Analysis  
`GET /api/risk/predict` – Predict risk  
`POST /api/risk/log` – Save risk log  

### 📩 Alerts  
`POST /api/alert/send` – Trigger SMS alert  

### 🔐 Auth  
`POST /api/auth/register`  
`POST /api/auth/login`  

---

## 📝 Notes  
This project was built as part of **VIT Hackathon**, focusing on disaster preparedness and rapid communication during emergencies.

---

## 👥 Contributors  
- **Divya Dharshini D** – Developer 

---

## 🏆 License  
This project is for educational and hackathon use only @2025.
