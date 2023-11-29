Chatbot Application README

Description
This Chatbot Application offers real-time communication between users and an AI-powered chatbot. The project is structured into two main components: a Node.js backend and a React frontend.
Features
- Real-time chat interaction with an AI chatbot.
- User authentication system including signup and login.
- Persistent chat history stored in a MongoDB database.
- Responsive and interactive UI built with React.
Technology Stack
- **Backend:** Node.js, Express, MongoDB, Mongoose, Socket.IO, Passport.js
- **Frontend:** React, React Router, Socket.IO-Client
- **Other Dependencies:** dotenv for environment variable management, bcrypt for password hashing, axios for HTTP requests.
Getting Started
### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Installation
1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Install backend dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     MONGO_URI=<your_mongodb_uri>
     OPENAI_API_KEY=<your_openai_api_key>
     ```

4. **Install frontend dependencies:**
   ```
   cd client
   npm install
   ```

5. **Start the backend and frontend servers:**
   - In the root directory, start the backend server:
     ```
     npm start
     ```
   - In a new terminal, go to the `client` directory and start the React development server:
     ```
     npm start
     ```
Usage
After starting the servers, access the application through `http://localhost:3000` on your browser.

License
Distributed under the MIT License. See `LICENSE` for more information.

Contact
Your Name –2022mt93657@wilp.bits-pilani.ac.in

Project Link: https://github.com/vinayshivaram30/AI_Chatbot
