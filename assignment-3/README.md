# 🌍 State Statistics Management API  

## 📌 Project Title  
State Statistics Management REST API  

---

## 🎯 Objective  

The objective of this project is to design and implement a complete RESTful API using **Node.js** and **Express.js** to manage statistical data of Indian states using an in-memory JSON array.

This API performs:

- Data retrieval  
- Dynamic route handling  
- Server-side aggregation (Highest GDP)  
- Full resource replacement (PUT)  
- Partial resource updates (PATCH)  
- Targeted field updates  
- Case-insensitive deletion  
- Bulk deletion using filtering logic  
- Proper HTTP status code handling  

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

assignment-3/  
│  
├── server.js  
├── package.json  
├── package-lock.json  
├── .gitignore  
└── README.md  

---

# 🚀 Implemented Routes  

## 🔹 GET Routes  

1️⃣ GET /states  
Returns all states with full statistics.

2️⃣ GET /states/:id  
Returns a single state by ID.

3️⃣ GET /states/highest-gdp  
Returns the state having the highest GDP (server-side aggregation using reduce).

---

## 🔹 POST Route  

4️⃣ POST /states  
Creates a new state record with auto-generated ID.

---

## 🔹 PUT Routes  

5️⃣ PUT /states/:id  
Replaces the entire state record (except ID).

6️⃣ PUT /states/:id/budget  
Updates annual budget only.

7️⃣ PUT /states/:id/population  
Updates population value only.

---

## 🔹 PATCH Routes  

8️⃣ PATCH /states/:id/literacy  
Updates literacy rate.

9️⃣ PATCH /states/:id/gdp  
Updates GDP value.

🔟 PATCH /states/:id  
Partially updates any provided fields.

---

## 🔹 DELETE Routes  

1️⃣1️⃣ DELETE /states/:id  
Deletes state by ID.

1️⃣2️⃣ DELETE /states/name/:stateName  
Deletes state by name (case-insensitive).

1️⃣3️⃣ DELETE /states/low-literacy/:percentage  
Deletes all states with literacyRate lower than given value.

---

# 🌐 Live API (Render Deployment)

## 🚀 Base URL  
https://node-assignments-2-d828.onrender.com/

### Example Endpoints

https://node-assignments-2-d828.onrender.com/states  
https://node-assignments-2-d828.onrender.com/states/3  
https://node-assignments-2-d828.onrender.com/states/highest-gdp  
https://node-assignments-2-d828.onrender.com/states/5/budget  
https://node-assignments-2-d828.onrender.com/states/3/literacy  
https://node-assignments-2-d828.onrender.com/states/low-literacy/70  

---

# 🧪 Expected Status Codes  

200 → Successful request  
201 → Resource created successfully  
204 → Resource deleted (No content returned)  
404 → Resource not found  

---

# ⚖️ PUT vs PATCH (Important Concept)

PUT  
- Replaces entire resource  
- All fields must be sent  
- Full overwrite  

PATCH  
- Updates only provided fields  
- Only required fields are sent  
- Partial modification  

---

# 💻 Steps to Run Locally  

1️⃣ Clone Repository  

git clone https://github.com/Dhvanitkanabar/node-assignments-.git  

2️⃣ Navigate to Folder  

cd node-assignments-/assignment-3  

3️⃣ Install Dependencies  

npm install  

4️⃣ Run Server  

node server.js  

5️⃣ Open in Browser  

http://localhost:3000/states  

---

# 🌍 Deployment Details  

The API is deployed on Render and uses:

process.env.PORT

This avoids hardcoded localhost in production and ensures proper deployment configuration.

---

# 📘 Postman Documentation  

Postman Documentation Link:  
(To be updated)

The collection includes:

- All 13 routes  
- Sample request bodies  
- Sample responses  
- Proper status codes  
- Organized route structure  

---

# 🔗 Submission Links  

GitHub Repository:  
https://github.com/Dhvanitkanabar/node-assignments-/tree/main/assignment-3  

Render Deployment:  
https://node-assignments-2-d828.onrender.com/  

Postman Documentation:  
(To be updated)

---

# 📚 Learning Outcomes  

After completing this project, I learned to:

- Build a full REST API using Express.js  
- Handle dynamic route parameters  
- Perform server-side aggregation  
- Implement correct PUT and PATCH semantics  
- Apply filtering logic for bulk deletion  
- Maintain proper HTTP status codes  
- Deploy backend APIs on Render  
- Document APIs professionally using Postman  
- Manage version control using Git & GitHub  

---

# 👨‍💻 Author  

Dhvanit Kanabar  
Node.js Backend Assignment – Assignment 3  