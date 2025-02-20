# E-Commerce Application

This is a full-stack e-commerce application built with Node.js, Express, MongoDB, and React.

## 📂 Project Structure

```
/project
│── /backend
│   ├── /config
│   │   ├── db.js         # Database connection (MongoDB)
│   │   ├── config.js     # Configuration data (JWT secrets, DB URL)
│   ├── /models
│   │   ├── User.js       # User model (authentication, user data)
│   │   ├── Product.js    # Product model (product information)
│   │   ├── Review.js     # Review model (user reviews)
│   │   ├── Order.js      # Order model (purchase, status)
│   ├── /routes
│   │   ├── userRoutes.js    # User routes (registration, login)
│   │   ├── productRoutes.js # Product routes (CRUD operations)
│   │   ├── reviewRoutes.js  # Review routes (add, update)
│   │   ├── orderRoutes.js   # Order routes (create, update)
│   ├── /controllers
│   │   ├── userController.js    # User authentication logic
│   │   ├── productController.js # Product CRUD logic
│   │   ├── reviewController.js  # Review management
│   │   ├── orderController.js   # Order processing logic
│   ├── /middleware
│   │   ├── authMiddleware.js    # Authentication middleware
│   ├── server.js        # Main server entry point
│   ├── .env             # Environment variables (secrets, ports)
│
│── /frontend
│   ├── /public
│   │   ├── index.html   # Main HTML file
│   ├── /src
│   │   ├── /components
│   │   │   ├── Header.js       # Header component
│   │   │   ├── ProductList.js  # Product list component
│   │   │   ├── ProductCard.js  # Product card component
│   │   │   ├── ProductDetails.js # Product details page
│   │   │   ├── Cart.js         # Shopping cart component
│   │   │   ├── Checkout.js     # Checkout component
│   │   │   ├── Login.js        # Login page component
│   │   │   ├── Register.js     # Registration page component
│   │   │   ├── ReviewForm.js   # Review form component
│   │   ├── /pages
│   │   │   ├── HomePage.js     # Home page
│   │   │   ├── ProductPage.js  # Product page
│   │   │   ├── CartPage.js     # Cart page
│   │   │   ├── CheckoutPage.js # Checkout page
│   │   │   ├── LoginPage.js    # Login page
│   │   │   ├── RegisterPage.js # Registration page
│   │   ├── /utils
│   │   │   ├── api.js         # API utility (Axios or Fetch)
│   │   ├── App.js         # Main application component
│   │   ├── index.js       # React entry point
│
│── /node_modules
│── .gitignore       # Git ignored files
│── package.json     # Dependencies and project configuration
│── README.md        # Project documentation
```

## 🚀 Features

- **User Authentication** (Register, Login, JWT-based authentication)
- **Product Management** (CRUD operations for products)
- **Shopping Cart** (Add, remove, update cart items)
- **Order Processing** (Create and manage orders)
- **Reviews & Ratings** (Users can leave reviews for products)
- **Responsive UI** (Built with React)

## 🛠️ Tech Stack

**Backend:** Node.js, Express, MongoDB, Mongoose, JWT Authentication  
**Frontend:** React, React Router, Axios  
**Other:** dotenv, bcrypt.js, Redux (optional)

## 🏗️ Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/ecommerce-app.git
   cd ecommerce-app
   ```
2. **Install dependencies for backend & frontend:**
   ```sh
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. **Set up environment variables:**  
   Create a `.env` file inside the `backend` folder and add:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. **Run the backend server:**
   ```sh
   cd backend
   npm start
   ```
5. **Run the frontend React app:**
   ```sh
   cd frontend
   npm start
   ```
6. **Open the app in your browser:**
   ```
http://localhost:3000
```

## 📜 License

This project is licensed under the MIT License.

