# 🎓 Student Management API

## 📌 Project Title
Student Management REST API

---

## 🎯 Objective

The objective of this project is to design and implement a RESTful API using Node.js and Express.js to manage student data.

This API performs:
- Data retrieval
- Dynamic route handling
- Filtering
- Aggregation (average CGPA)
- Topper identification
- Branch-wise filtering

The API is deployed on Render and documented using Postman.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- CORS
- Render (Deployment)
- Postman (API Documentation)
- GitHub (Version Control)

---

## 📂 Project Structure

assignment-1/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

---

## 🚀 Implemented Routes

1️⃣ GET /
Returns welcome message.

2️⃣ GET /students
Returns all students.

3️⃣ GET /students/topper
Returns student with highest CGPA.

4️⃣ GET /students/average
Returns average CGPA of all students.

5️⃣ GET /students/count
Returns total number of students.

6️⃣ GET /students/:id
Returns student details by ID.

7️⃣ GET /students/branch/:branchname
Returns students from a specific branch.

---

## 🌐 Sample API URLs (Deployed)

Base URL:
https://node-assignments-x5z1.onrender.com

Example Endpoints:

https://node-assignments-x5z1.onrender.com/
https://node-assignments-x5z1.onrender.com/students
https://node-assignments-x5z1.onrender.com/students/topper
https://node-assignments-x5z1.onrender.com/students/average
https://node-assignments-x5z1.onrender.com/students/count
https://node-assignments-x5z1.onrender.com/students/1
https://node-assignments-x5z1.onrender.com/students/branch/CSE

---

## 🧪 Expected Status Codes

- 200 → Successful Request
- 404 → Resource Not Found
- 500 → Internal Server Error

---

## 💻 Steps to Run Locally

1️⃣ Clone the repository:

git clone https://github.com/Dhvanitkanabar/node-assignments-.git

2️⃣ Navigate to project folder:

cd node-assignments-/assignment-1

3️⃣ Install dependencies:

npm install

4️⃣ Run the server:

npm run dev

OR

node server.js

5️⃣ Open in browser:

http://localhost:3000

---

## 🌍 Deployment (Render)

The API is deployed on Render and publicly accessible.

Live API:
https://node-assignments-x5z1.onrender.com

Note:
The application uses `process.env.PORT` to avoid hardcoded localhost in production.

---

## 📘 Postman Documentation

Public Postman Documentation Link:

https://documenter.getpostman.com/view/50840753/2sBXcGCeNs

The collection includes:
- All required routes
- Request method & URL
- Sample responses
- Expected status codes
- Organized documentation

---

## 🔗 Submission Links

GitHub Repository:
https://github.com/Dhvanitkanabar/node-assignments-/tree/main/assignment-1

Postman Documentation:
https://documenter.getpostman.com/view/50840753/2sBXcGCeNs

Render Deployment:
https://node-assignments-x5z1.onrender.com

---

## 📚 Learning Outcomes

After completing this project, I learned to:

- Design RESTful GET routes
- Handle dynamic route parameters
- Perform server-side filtering and aggregation
- Return structured JSON responses
- Deploy backend APIs professionally
- Document APIs properly using Postman
- Manage version control using Git and GitHub

---

## 👨‍💻 Author

Dhvanit Kanabar  
Node.js Backend Assignment