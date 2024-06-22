## How to Run the Application

### Prerequisites:
- Node.js installed
- MongoDB installed or a MongoDB Atlas account

### Steps:
1. **Clone the repository:**
    git clone <repository-url>
    cd <repository-directory>

2. **Frontend:**
- Create a form with an input field and a submit button to add new to-dos.
- Display the list of to-dos with a delete button next to each to-do.
- Implement a counter that shows the total number of to-dos.
- Add Tailwind CSS for styling:
  - Install Tailwind CSS: `npm install -D tailwindcss`
  - Create a `tailwind.config.js` file: `npx tailwindcss init`
  - Add Tailwind to your CSS: Add `@tailwind base; @tailwind components; @tailwind utilities;` to your main CSS file.
  - Include the Tailwind CSS file in your `index.css` or equivalent CSS file.
    
3. **Install dependencies for backend:**
    cd backend
    npm install

4. **Install dependencies for frontend:**
    cd frontend
    npm install
   
5. **Set up MongoDB:**
    - If using MongoDB Atlas, create a new cluster and get the connection string.
    - If using a local MongoDB instance, make sure MongoDB is running.

6. **Configure environment variables:**
    - Create a `.env` file in the `backend` directory.
    - Add the following variables:
      MONGO_URI=<your-mongodb-uri>

7. **Start the backend server:**
    cd backend
    npm start
   
8. **Start the frontend server:**
    cd frontend
    npm start

### Notes:
- Ensure both the backend and frontend servers are running simultaneously.
- The backend server will handle API requests to add, delete, and fetch to-dos.
- The frontend will interact with the backend using Axios or Fetch API.
