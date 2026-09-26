# Slotify API

Slotify is a backend REST API for managing appointment slots.

It provides user authentication, slot management, booking and cancellation, availability checking, conflict prevention, and user booking history.

## Features

- User registration and login
- Password hashing using bcryptjs
- JWT-based authentication
- Protected routes
- Create, read, update, and delete slots
- Book appointment slots
- Prevent double-booking
- Cancel bookings
- Check available slots
- Prevent overlapping slots
- View current user's bookings
- MongoDB Atlas database

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- JSON Web Token (JWT)
- Postman
- Git & GitHub

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login and receive JWT token |
| GET | `/auth/me` | Get logged-in user |

### Slots

| Method | Endpoint | Description |
|---|---|---|
| GET | `/slots` | Get all slots |
| GET | `/slots?available=true` | Get available slots |
| GET | `/slots/:id` | Get slot by ID |
| POST | `/slots` | Create a slot |
| PUT | `/slots/:id` | Update a slot |
| DELETE | `/slots/:id` | Delete a slot |
| POST | `/slots/:id/book` | Book a slot |
| POST | `/slots/:id/cancel` | Cancel a booking |
| GET | `/slots/bookings/me` | Get current user's bookings |

## Authentication

Protected endpoints require a JWT token:

```text
Authorization: Bearer JWT_TOKEN