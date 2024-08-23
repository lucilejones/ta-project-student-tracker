# ta-project-student-tracker

A MERN stack app that allows users to track student progress over time.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)

## Features

- Add, edit, and delete student information.
- Record progress data for each student, including current level and progress point.
- Authentication and authorization for user access.
- Responsive design for mobile and desktop.

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone git@github.com:lucilejones/ta-project-student-tracker.git
cd ta-project-student-tracker
```

2. **Install backend dependencies:**

```bash
npm install
```

3. **Install client dependencies:**

```bash
cd client
npm install
```

4. **Create a '.env' file in the project directory with the following:**

```env
MONGO_URI=<your-mongodb-uri>
PORT=<your-port>
SECRET=<your-jwt-secret>
```

5. **Update the target in the vite.config.js file in the client folder to match your port.**

6. **Run the application:**

```bash
# Start the server
nodemon server

#Start the client
cd client
npm run dev
```

7. **Open the browser and visit the localhost address given.**

## Usage

- Sign up for an account.
- Log in to access a user's profile page.
- Add a new student with the input form.
- Update and delete student information.
- View a list of all students and their assigned instructors on the public page.

## Technologies Used

- MongoDB, Express, Mongoose, JWT, Bcrypt, React, React Router, Axios

## API Endpoints

- Get all students: GET /api/main/students/allStudents
- Get a user/instructor's students: GET /api/main/students/byInstructor
- Add a new student: POST /api/main/students
- Update a student: PUT /api/main/students/:studentId
- Delete a student: DELETE /api/main/students/:studentId
- Signup a new user: POST /api/auth/signup
- Login a new user: POST /api/auth/login
