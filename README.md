# 💸Money tracker

A full-stack Money tracker  Built using **React**, **Node.js**, **Express**, **MySql**.

---

## 🌐 Live Demo

 **Click:**  [https://collect-feedback.netlify.app](https://money-trackery.netlify.app/) 
 
 ---

## 🚀 Features

### Add Transactions
Users can add income or expense entries.
Inputs include:
Name of transaction (e.g., "Salary", "Groceries")
Description
Price (positive for income, negative for expense)
Date & Time

---

###  List All Transactions
Fetches and displays all transactions from the backend.
Shows:
Transaction title
Description
Date & time
Price (color-coded: green for income, red for expense)

---

### 3. Real-Time Balance Calculation
Dynamically calculates and displays the total balance based on all transactions.

---

### 4. Delete Transactions
Users can remove any transaction.
Confirmation is asked before deletion.
UI updates in real-time after deletion.

---

## 🛠 Tech Stack

### 🔹 Frontend
- React (CRA)
- React Router DOM

### 🔹 Backend
- Node.js
- Express.js
- Mysql

---

## 📁 Project Structure

Feedback-Collection-System/
├── fronted/ # React frontend
├── backend/ # Express backend
├── README.md


---

## ⚙️ Installation (Local)

### 1. Clone the repo

git clone https://github.com/kirankuma274/Money-tracker.git

cd Money-tracker

### 2. Setup Backend
cd backend
npm install
cp .env.example .env

### Fill in your values for env file:
- DB_HOST=
- DB_PORT=
- DB_USER=
- DB_PASSWORD=
- DB_NAME=


### run command
 node index.js

### 3. Setup Frontend
cd ../fronted
npm install
cp .env.example .env

### Set:
REACT_APP_BASE_URL= your backend URL

### run command
npm start
