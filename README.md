# Ambulance Dispatch System

## Project Overview
The Ambulance Dispatch System is an intelligent platform designed to efficiently manage and coordinate ambulance services. It aims to provide real-time tracking of ambulances, ensuring timely response to emergency calls and optimal resource allocation.

## Architecture
The system follows a microservices architecture, comprising several independent services that communicate with each other through APIs. Key components include:
- **User Service**: Manages user authentication and profiles.
- **Ambulance Service**: Handles the dispatch and tracking of ambulances.
- **Emergency Call Service**: Manages incoming emergency calls and routes them to the appropriate service.
- **Notification Service**: Sends alerts and notifications to users and responders.

## Tech Stack
- **Frontend**: React.js for building user interfaces.
- **Backend**: Node.js with Express for services.
- **Database**: MongoDB for storing data.
- **Real-time Communication**: Socket.io for live updates.
- **Deployment**: Docker for containerization; AWS for hosting.

## Getting Started
1. **Clone the repo**:
   ```bash
   git clone https://github.com/jumah377/ambulance-dispatch-system.git
   ```
2. **Install dependencies**:
   Navigate to the project directory and run:
   ```bash
   npm install
   ```
3. **Run the application**:
   Start the server with:
   ```bash
   npm start
   ```
4. **Access the application**:
   Open your browser and navigate to `http://localhost:3000` to view the application.

For detailed documentation, refer to the Wiki section of the repository.