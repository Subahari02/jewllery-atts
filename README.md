Jewellery Admin Panel

A modern admin panel for managing jewellery products, featuring **JWT-based user authentication** (login/register) and a **responsive UI** built with React, CSS, and Bootstrap.

## 🚀 Features

- ✅ **User Authentication**
  - Register and Login with Email & Password
  - Secure JWT token-based authentication
- 🛡️ **Protected Routes**
  - Only authenticated users can access the dashboard and product pages
- 📦 **Product Management**
  - Add, view, edit, and delete products
- 🎨 **Modern UI**
  - Clean and responsive layout using Bootstrap and custom CSS
- 🌐 **React Router**
  - Seamless navigation between pages

## 🔐 Authentication Flow

- Users can register using their name, email, and password.
- On successful login, a **JWT token** is stored in `localStorage`.
- Authenticated users are redirected to the **dashboard**.
- Unauthenticated users are redirected to the **login page** if they try to access protected routes.
## 🧰 Tech Stack

- **Frontend**: React, React Router, Bootstrap, CSS
- **Auth**: JWT (JSON Web Token)
- **Backend**: Node.js + Express (for APIs)
- **Database**: MongoDB (Mongoose).
- **File Upload**: Multer (Single Image).

  ## Setup Instructions

- Clone the repository
- Run npm install to install dependencies
- Run npm run dev to start the development server
  
## API Routes (if backend used):

- POST /api/register — Register new user
- POST /api/login — Authenticate and get JWT
- GET /api/products — Fetch all products
- POST /api/products — Add new product
- PUT /api/products/:id — Update product
- DELETE /api/products/:id — Delete product



