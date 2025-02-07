# Player Management API

This is a simple Express.js API for managing player data. It allows users to search for players by ID, retrieve all players, add new players, and check the API health status.

## Features
- Retrieve all players
- Search for a player by ID
- Add a new player
- Health check endpoint

## Installation

1. Clone the repository:
   ```sh
   git clone <repository_url>
   cd <repository_name>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

### Start the Server
   ```sh
   npm start
   ```
   The server will start on `http://localhost:4000` by default.

## API Endpoints

### Get All Players
**Endpoint:** `GET /`

**Response:**
```json
[
  {
    "id": "player_id",
    "name": "Player Name",
    "age": 25,
    "team": "Team Name"
  }
]
```

### Get Player by ID
**Endpoint:** `GET /:id`

**Response:**
```json
{
  "id": "player_id",
  "name": "Player Name",
  "age": 25,
  "team": "Team Name"
}
```

**If player is not found:**
```json
{
  "message": "Player not found"
}
```

### Add a New Player
**Endpoint:** `POST /`

**Request Body:**
```json
{
  "name": "New Player",
  "age": 30,
  "team": "New Team"
}
```

**Response:**
```json
{
  "id": "generated_id",
  "name": "New Player",
  "age": 30,
  "team": "New Team"
}
```

### Health Check
**Endpoint:** `GET /health`

**Response:**
```json
{
  "status": "OK"
}
```

## Configuration
The server runs on port `4000` by default. You can change this by setting the `PORT` environment variable.

## Dependencies
- `express`
- `morgan`
- `cors`
- `shortid`
- `fs/promises`
- `path`

## License
This project is licensed under the MIT License.

