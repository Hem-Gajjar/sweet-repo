# 🍬 Sweet Shop Management System

A simple full-stack application for managing sweets inventory, built with the MERN stack (MongoDB, Express, React, Node.js) using **Test-Driven Development (TDD)**.

---

## 📌 Features

### ✅ Core Functionalities
- **Add Sweets:** Add new sweets with name, category, price, and quantity.
- **View Sweets:** View all available sweets in a table with filtering options.
- **Delete Sweets:** Remove sweets from the inventory.
- **Purchase Sweets:** Decrease stock when a sweet is purchased.
- **Restock Sweets:** Increase stock quantity.
- **Search & Filter:** Filter sweets by name, category, and price range.

### ⚙️ Tech Stack
- **Frontend:** React, Bootstrap Icons
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Testing (Backend):** Jest, Supertest
- **Version Control:** Git + GitHub

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
git clone https://github.com/Hem-Gajjar/sweet_shop_management.git
cd sweet_shop_management
### 2️⃣ Set Up Backend
bash
Copy
Edit
cd backend
npm install
Create a .env file in backend directory:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
bash
Copy
Edit
npm start
### 3️⃣ Set Up Frontend
bash
Copy
Edit
cd ../frontend
npm install
npm start
App runs at: http://localhost:3000

### 🧪 Testing (Backend Only)
bash
Copy
Edit
cd backend
npm test
Uses Jest and Supertest to validate API behavior such as:

GET /api/sweets

POST /api/sweets

DELETE /api/sweets/:id

PUT /api/sweets/purchase/:id

PUT /api/sweets/restock/:id

### 📁 Folder Structure
pgsql
Copy
Edit
sweet_shop_management/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── tests/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   └── App.js
│   └── package.json
└── README.md

### 📜 API Endpoints
Base URL: http://localhost:5000/api/sweets
Method	Endpoint	Description
GET	/	Get all sweets
POST	/	Add a new sweet
DELETE	/:id	Delete a sweet
PUT	/purchase/:id	Purchase (reduce stock)
PUT	/restock/:id	Restock (increase stock)
