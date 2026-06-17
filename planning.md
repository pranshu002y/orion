# Appointment Booking System(ORION)

## Problem Statement

Many small businesses and service providers struggle to manage appointments manually, leading to scheduling conflicts and poor customer experience.

## Solution

Appointment Booking System is a SaaS web application that enables users to schedule appointments online while allowing administrators to manage bookings efficiently.

## Features

### User Features

* User Registration
* User Login
* Book Appointment
* View My Appointments
* Cancel Appointment
### Upcoming Features
* Wattsapp Notification for confirmation
* AI powered summary regarding the slot booking
* Profile updation
* Games and Dates table booking system 

### Admin Features

* View All Appointments
* Approve Appointments
* Reject Appointments
* Create Slots For Booking

## Technical Architecture

Frontend:

* React.js
* React Router
* Axios
* Tailwind CSS

Backend:

* Node.js
* Express.js
* JWT Authentication
* NodeMailer

Database:

* MongoDB Atlas

Deployment:

* Frontend: Vercel
* Backend: Render

## Database Design

Users Collection:

* id
* name
* email
* password
* role

Appointments Collection:

* id
* userId
* appointmentDate
* timeSlot
* status
* createdAt

## Milestones

1. Project Planning
2. Project Setup
3. Authentication Module
4. Appointment CRUD APIs
5. User Dashboard
6. Admin Dashboard
7. Deployment
8. Documentation


### AI Journal
* CHAT GPT used-
PROMPT :
Create a project plan for a SaaS Appointment Booking System using React, Node.js, Express, MongoDB, and JWT authentication.
MANUAL CHANGES :
Adjusted features scope and simplified appointment workflow.
Project planning and repository initialized.

### LIVE LINKS
FrontEnd : https://orionvirid.vercel.app/login
BackEnd : https://backend-orion.onrender.com

### Command Line for FrontEnd Setup Locally
npm create vite@latest client -- --template react
cd client
npm install
npm install react-router-dom react-icons axios
npm run dev

### Command Line for BackEnd Setup Locally
mkdir server
cd server
npm init -y
npm install express mongoose cors dotenv bcryptjs jsonwebtoken
npm install nodemon --save-dev
nodemon server.js