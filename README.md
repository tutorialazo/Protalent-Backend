# Protalent Backend

## Prerequisites

- **Node.js** v18 or later
- **MySQL** running instance

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the project root with the following variables:
   ```env
   PORT=5000 # optional
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=your_database
   DB_USER=your_user
   DB_PASSWORD=your_password
   JWT_SECRET=your_secret_key
   ```
3. Ensure MySQL is running and accessible using the credentials above.

## Running the server

- For development with automatic reload:
  ```bash
  npm run dev
  ```
- For production/standard execution:
  ```bash
  npm start
  ```

The server listens on the port defined by `PORT` (defaults to `5000`) and connects to MySQL using the details from `.env`.
