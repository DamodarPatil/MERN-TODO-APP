## How to Run the Application

### Prerequisites:
- Node.js installed
- MongoDB installed or a MongoDB Atlas account

### Steps:
1. **Clone the repository:**
    git clone <repository-url>
    cd <repository-directory>
    
2. **Install dependencies for backend:**
    cd backend
    npm install

3. **Install dependencies for frontend:**
    cd frontend
    npm install
   
4. **Set up MongoDB:**
    - If using MongoDB Atlas, create a new cluster and get the connection string.
    - If using a local MongoDB instance, make sure MongoDB is running.

5. **Configure environment variables:**
    - Create a `.env` file in the `backend` directory.
    - Add the following variables:
      MONGO_URI=<your-mongodb-uri>

6. **Start the backend server:**
    cd backend
    npm start
   
7. **Start the frontend server:**
    cd frontend
    npm start

### Notes:
- Ensure both the backend and frontend servers are running simultaneously.
- The backend server will handle API requests to add, delete, and fetch to-dos.
- The frontend will interact with the backend using Axios or Fetch API.
