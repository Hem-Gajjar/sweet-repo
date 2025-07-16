Here’s a cleaner, more professional version of your README with improved structure, formatting, and clarity — suitable for a GitHub project:

---

````markdown
# 🍬 Sweet Shop Management System

A full-stack inventory management system for a sweet shop, built using the **MERN stack (MongoDB, Express, React, Node.js)** and following **Test-Driven Development (TDD)** principles.

---

## 📦 Features

### ✅ Core Functionalities
- **➕ Add Sweets:** Add new sweets with name, category, price, and quantity.
- **📋 View Sweets:** Display all sweets in a searchable, filterable table.
- **🗑️ Delete Sweets:** Remove sweets from the inventory.
- **🛒 Purchase Sweets:** Purchase sweets and automatically reduce stock.
- **📦 Restock Sweets:** Refill inventory by increasing sweet quantities.
- **🔎 Search & Filter:** Filter sweets by name, category, or price range.

---

## ⚙️ Tech Stack

| Layer       | Technology                |
|-------------|---------------------------|
| Frontend    | React, Bootstrap Icons    |
| Backend     | Node.js, Express.js       |
| Database    | MongoDB (with Mongoose)   |
| Testing     | Jest, Supertest (Backend) |
| Versioning  | Git & GitHub              |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Hem-Gajjar/sweet_shop_management.git
cd sweet_shop_management
````

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

📝 **Create a `.env` file** inside the `backend/` directory with the following content:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

🔗 App runs at: `http://localhost:3000`

---

## 🧪 Testing (Backend Only)

```bash
cd backend
npm test
```

> ✅ **Jest** and **Supertest** are used for API testing:

* `GET /api/sweets` — Get all sweets
* `POST /api/sweets` — Add a new sweet
* `DELETE /api/sweets/:id` — Delete a sweet
* `PUT /api/sweets/purchase/:id` — Purchase (reduce stock)
* `PUT /api/sweets/restock/:id` — Restock (increase stock)

---

## 📁 Folder Structure

```
sweet_shop_management/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── tests/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       └── App.js
└── README.md
```

> ❗ `frontend/src/__tests__` is **not** included as frontend testing is out of scope.

---

## 📜 API Reference

**Base URL:** `http://localhost:5000/api/sweets`

| Method | Endpoint        | Description                  |
| ------ | --------------- | ---------------------------- |
| GET    | `/`             | Get all sweets               |
| POST   | `/`             | Add a new sweet              |
| DELETE | `/:id`          | Delete a sweet by ID         |
| PUT    | `/purchase/:id` | Purchase sweet (reduce qty)  |
| PUT    | `/restock/:id`  | Restock sweet (increase qty) |

---

## 📝 Notes

* `.env` is **excluded** via `.gitignore`
* Follows **Test-Driven Development** — tests are written **before** features
* Every feature commit is atomic and documented

---

## 🙋‍♂️ Author

**Hem Gajjar**
🔗 GitHub: [@Hem-Gajjar](https://github.com/Hem-Gajjar)

---

## 📜 License

This project is for educational/assessment purposes only. Strictly no plagiarism.

```

---

Let me know if you'd like:
- A `.md` file version to download
- A lighter version (without emojis)
- Added screenshots or live demo instructions
```
