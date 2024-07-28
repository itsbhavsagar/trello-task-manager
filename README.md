# Trello-Style Task Management Application

This project is a web-based task management application similar to Trello. It allows users to sign up, log in, and manage their tasks across multiple columns such as "To-Do", "In Progress", "Under Review", and "Completed". The application is built using Next.js, TypeScript, Node.js, Express, MongoDB, and utilizes Redux for state management.

## Features

- **User Authentication:**

  - Signup and login functionality using email and password
  - Secure password storage and user session management

- **Task Board:**

  - Personal task board for each user upon logging in
  - Four columns: "To-Do", "In Progress", "Under Review", and "Completed"

- **Task Management:**

  - Create new tasks in any column
  - Tasks include title, description, status, priority, and deadline
  - Edit and delete tasks after creation

- **Drag and Drop Functionality:**

  - Move tasks between columns with drag and drop
  - Task status updates automatically when moved

- **Data Persistence:**
  - User data and tasks stored in a database
  - Each user can only see and manage their own tasks

## Technical Requirements

- **Frontend:** Next.js with TypeScript
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **State Management:** Redux or React Context API
- **Styling:** CSS

## Project Structure

trello-task-manager/
├── frontend/
│ ├── components/
│ │ ├── Task.tsx
│ │ ├── TaskBoard.tsx
│ ├── pages/
│ │ ├── \_app.tsx
│ │ ├── index.tsx
│ │ ├── login.tsx
│ │ ├── signup.tsx
│ │ └── dashboard.tsx
│ ├── styles/
│ │ ├── globals.css
│ │ └── dashboard.module.css
│ │ └── signup.module.css
│ ├── public/
│ ├── .env.local
│ ├── next.config.js
│ ├── package.json
│ └── tsconfig.json
├── backend/

- **Installation**
  Clone the repository:

## git clone https://github.com/yourusername/trello-task-manager.git

cd trello-task-manager
Install dependencies for the frontend:

cd frontend
npm install
Install dependencies for the backend:

cd backend
npm install
Set up the environment variables:

## Create a .env.local file in the frontend directory and add the following:

env

NEXT_PUBLIC_API_URL=http://localhost:5000/api
Create a .env file in the backend directory and add the following:

env

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Run the development server for the frontend:

cd frontend
npm run dev
Run the development server for the backend:

cd backend
npm run dev
Open your browser and navigate to:

http://localhost:3000
Deployment
Build the frontend:

cd frontend
npm run build
Deploy the backend and frontend using any free hosting service like Vercel, Netlify, Heroku, etc.

Provide the URL of the live, working application in the repository description.

License
This project is licensed under the MIT License. See the LICENSE file for details.

- **Contributing**
  1 Fork the repository
  2 Create your feature branch (git checkout -b feature/fooBar)
  3 Commit your changes (git commit -am 'Add some fooBar')
  4 Push to the branch (git push origin feature/fooBar)
  5 Create a new Pull Request

- **Acknowledgments**
- This project was inspired by Trello.
- Thanks to the open-source community for providing the tools and resources.

Make sure to customize the placeholders such as `yourusername`, `your_mongodb_connection_string`, and `your_jwt_secret` with your actual details. This `README.md` provides a comprehensive overview of your project, from features and technical requirements to installation and deployment instructions.
