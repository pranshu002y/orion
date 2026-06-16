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
* Update Profile

### Admin Features

* View All Appointments
* Approve Appointments
* Reject Appointments
* Filter Appointments by Date and Status

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
* notes
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
