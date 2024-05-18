# Chat Web App

This project is a real-time chat web application built using the MERN stack, Socket.IO, JWT for authentication, Tailwind CSS for styling, and Zustand for state management.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Real-time messaging with Socket.IO
- User authentication with JWT
- Responsive UI with Tailwind CSS
- State management with Zustand
- Persistent chat history

## Tech Stack

- **Frontend:**
  - React
  - Zustand (State Management)
  - Tailwind CSS (Styling)
  - Socket.IO (Real-time communication)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Database)
  - Socket.IO (Real-time communication)
  - JWT (Authentication)

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v12 or later)
- MongoDB

### Clone the repository

```bash
git clone https://github.com/vnitin08/chat-app.git
cd chat-app
```

### Install dependencies

#### Backend

```bash
cd chat-app
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

### Environment Variables

Create a `.env` file in the `root` directory and add the following variables:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
SOCKET_PORT=your_socket_port
```

## Usage

### Running the Server

```bash
cd chat-app
npm start
```

The backend server will start on `http://localhost:5000`.

### Running the Frontend

Open a new terminal window and run:

```bash
cd frontend  
npm run dev
```

The frontend will start on `http://localhost:3000`.

### Accessing the Application

Open your browser and navigate to `http://localhost:3000` to access the chat application.
