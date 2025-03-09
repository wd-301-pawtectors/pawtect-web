# Pawtect Backend API

## Overview
The Pawtect Backend API is designed to support the Pawtect web application by providing a backend service for managing animal data. This API connects to a MongoDB Atlas database and offers functionalities such as fetching, searching, and filtering animals.

## Project Structure
```
pawtect-backend-api
├── src
│   ├── controllers
│   │   └── animalsController.js
│   ├── models
│   │   └── animalModel.js
│   ├── routes
│   │   └── animalsRoutes.js
│   ├── app.js
│   └── server.js
├── package.json
├── .env
└── README.md
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd pawtect-backend-api
   ```

2. **Install Dependencies**
   Ensure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

4. **Run the Application**
   Start the server using:
   ```bash
   npm start
   ```

5. **API Endpoints**
   - `GET /api/animals`: Fetch all animals
   - `GET /api/animals/search`: Search for animals by type, age, or size

## Usage
You can interact with the API using tools like Postman or cURL. Ensure your server is running before making requests.

## License
This project is licensed under the MIT License.