🛒 E-Commerce Product API
📌 Project Title

E-Commerce Product Management REST API

🎯 Objective

The objective of this project is to design and implement a RESTful API using Node.js and Express.js to manage product data for an e-commerce platform using an in-memory JSON array.

This API performs:

Data retrieval (GET all products)

Dynamic route handling (GET by ID)

Category-based filtering

Adding new products (POST)

Replacing entire product (PUT)

Updating stock value

Updating price value

The API is deployed on Render and documented using Postman.

🛠️ Tech Stack

Node.js

Express.js

CORS

Render (Deployment)

Postman (API Documentation)

GitHub (Version Control)

📂 Project Structure

assignment-2/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

🚀 Implemented Routes

1️⃣ GET /
Returns server running message.

2️⃣ GET /products
Returns all products.

3️⃣ GET /products/:id
Returns product details by ID.

4️⃣ GET /products/category/:categoryName
Returns products from a specific category.

5️⃣ POST /products
Adds a new product.

6️⃣ PUT /products/:id
Replaces entire product except ID.

7️⃣ PUT /products/:id/stock
Updates only stock value.

8️⃣ PUT /products/:id/price
Updates only price value.

🌐 Sample API URLs (Deployed)

Base URL:
https://node-assignments-1-vthz.onrender.com

Example Endpoints:

https://node-assignments-1-vthz.onrender.com/

https://node-assignments-1-vthz.onrender.com/products

https://node-assignments-1-vthz.onrender.com/products/1

https://node-assignments-1-vthz.onrender.com/products/category/Electronics

https://node-assignments-1-vthz.onrender.com/products/2/stock

https://node-assignments-1-vthz.onrender.com/products/3/price

🧪 Expected Status Codes

200 → Successful GET / PUT request

201 → Resource Created (POST request)

404 → Resource Not Found

💻 Steps to Run Locally

1️⃣ Clone the repository:

git clone https://github.com/Dhvanitkanabar/node-assignments-.git

2️⃣ Navigate to project folder:

cd node-assignments-/assignment-2

3️⃣ Install dependencies:

npm install

4️⃣ Run the server:

node server.js

5️⃣ Open in browser:

http://localhost:3000

🌍 Deployment (Render)

The API is deployed on Render and publicly accessible.

Live API:
https://node-assignments-1-vthz.onrender.com

Note:
The application uses process.env.PORT to avoid hardcoded localhost in production.

📘 Postman Documentation

Public Postman Documentation Link:

https://documenter.getpostman.com/view/50840753/2sBXcGEzkT

The collection includes:

All required routes

Request method & URL

Sample responses

Proper status codes

Organized documentation

🔗 Submission Links

GitHub Repository:
https://github.com/Dhvanitkanabar/node-assignments-/tree/main/assignment-2

Postman Documentation:
https://documenter.getpostman.com/view/50840753/2sBXcGEzkT

Render Deployment:
https://node-assignments-1-vthz.onrender.com

📚 Learning Outcomes

After completing this project, I learned to:

Design RESTful GET, POST, and PUT routes

Handle dynamic route parameters

Implement filtering logic

Replace and update resources correctly using PUT

Return proper HTTP status codes

Deploy backend APIs on Render

Document APIs professionally using Postman

Manage projects using Git and GitHub

👨‍💻 Author

Dhvanit Kanabar
Node.js Backend Assignment – Assignment 2