# Real-Time Analytics Dashboard

    A modern, real-time analytics dashboard built using Angular, Node.js, and Socket.IO.This project demonstrates live data streaming, interactive charts, and scalable UI architecture.

# ✨ Features

- Real-time updates using WebSockets (Socket.IO)
- Interactive charts (Line, Bar, Pie,Doughtnut) using ng2-charts
- Responsive design (mobile + desktop)
- Angular Material UI
- Modular and scalable architecture

# Tech Stack
# Frontend
    Angular (Standalone Components)
    Angular Material
    ng2-charts / Chart.js
# Backend
    Node.js
    Express.js
    Socket.IO
# DevOps
    GitHub
    Docker

# Project Structure
```
realtime-dashboard/
├── frontend/
│   ├── src/app/
│   │   ├── components/          # Dashboard components
│   │   │   └── dashboard/   
|   |   |   └── doughnut-chart/
│   │   │   └── orders-table/   
|   |   |   └── revenue-chart/
│   │   │   └── sessions-bar/   
|   |   |   └── summary-cards
|   |   |   └── traffic-pie
│   │   └── layout/          # Toolbar
│
├── backend/
│   ├── src/
│   │   ├── mock-data.ts/            # Mock data generator
│   │   └── server.ts                # Socket io logic
│
├── docker-compose.yml
└── README.md
```

# Setup
## Frontend
cd frontend
npm install
ng serve

## Backend
cd backend
npm install

# Access
Backend API: http://localhost:3000
Frontend: http://localhost:4200