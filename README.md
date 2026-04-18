# 🧮 MERN Stack Calculator with History

A modern, full-stack calculator application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. This project not only performs real-time calculations but also stores and displays calculation history using a MongoDB database, all wrapped in an attractive and responsive UI.

---

## 🚀 Features

* 🔢 Perform basic arithmetic operations (Addition, Subtraction, Multiplication, Division)
* ⚡ Real-time calculation updates
* 🗂️ Stores calculation history in MongoDB
* 📜 View previous calculations with timestamps
* 🎨 Attractive and responsive UI
* 🌙 Dark mode / modern UI design (optional enhancement)
* 🔄 REST API integration between frontend and backend
* 📱 Mobile-friendly design

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* CSS / Tailwind CSS / Bootstrap (based on your implementation)

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB (for storing calculation history)

---

## 📁 Project Structure

```
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/mern-calculator.git
cd mern-calculator
```

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start backend:

```bash
npm start
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm start
```

---

## 🔗 API Endpoints

### ➕ Add Calculation

```
POST /api/calculations
```

Body:

```json
{
  "expression": "5 + 3",
  "result": "8"
}
```

### 📜 Get History

```
GET /api/calculations
```

---

## 🧠 How It Works

1. User inputs a calculation in the frontend
2. React processes and sends data to backend API
3. Backend stores the expression and result in MongoDB
4. History is fetched and displayed in the UI
5. Users can view previous calculations anytime

---

## 🎨 UI Highlights

* Clean and minimal design
* Interactive calculator buttons
* Smooth animations
* Scrollable history panel
* Responsive layout for all devices

---

## 📌 Future Improvements

* ✏️ Edit/Delete history
* 🔐 User authentication
* ☁️ Deploy on cloud (Vercel + Render / Railway)
* 📊 Advanced scientific calculator features
* 📥 Export history as PDF

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create your branch (`git checkout -b feature-name`)
3. Commit changes
4. Push and create a PR

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 💡 Author

**Kaviya Sai S**
B.Tech IT Student | MERN Developer 🚀

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!

---
