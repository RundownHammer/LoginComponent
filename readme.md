# Full Stack Login Assignment

This repository contains a full-stack login application built with:

- **Frontend:** React + TypeScript, React Hook Form, Zod, React Query  
- **Backend:** Node.js + Express + TypeScript, Prisma ORM, PostgreSQL

---

## Installation

### Prerequisites

- Node.js (v18 or higher)  
- npm (v8 or higher)  
- Git  
- postgres

---

### Backend Setup

1. **Navigate to the backend folder**  
   ```bash
   cd backend

2. **Install dependencies**
    ```bash
    npm install

2. **Configure environment**
Create a .env file in backend/ with:
    ```bash
    DATABASE_URL="file:./dev.db"
    ```
    Or point to your PostgreSQL/MySQL database:
    ```bash
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB_NAME"  

2. **Run Prisma migrations & generate client**
Create a .env file in backend/ with:
    ```bash
    npx prisma migrate dev --name init
    npx prisma generate

2. **Start the development server**
Create a .env file in backend/ with:
    ```bash
    npm run dev
    ```
    The backend will be available at: http://localhost:5000

### Frontend Setup

1. **Navigate to the frontend folder**
    ```bash
    cd frontend
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Start the development server**
    ```bash
    npm run dev
    ```

    The frontend will be available at: http://localhost:5173

### Test User Credentials

Use the following credentials to test the login flow:

    Email: test@example.com

    Password: 123456