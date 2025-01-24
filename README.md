# Learning Express.js

A simple Express.js project for learning middleware, routing, and error handling.

## Features

- Basic CRUD operations for managing posts
- Middleware for request logging (`logger`)
- Error handling middleware
- Modular routes


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GHDBASHEN/Learning-Express.js.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Learning-Express.js
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Server
To start the development server with auto-restart on changes:
```bash
npm run dev
```

### Production Server
To start the server in production mode:
```bash
npm run test
```

The server will run at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Base URL: `/api/posts`

#### Get All Posts
**GET** `/`
- Query Parameters:
  - `limit` (optional): Number of posts to return
- Example:
  ```bash
  curl http://localhost:3000/api/posts
  ```

#### Get a Single Post
**GET** `/:id`
- Example:
  ```bash
  curl http://localhost:3000/api/posts/1
  ```

#### Create a Post
**POST** `/`
- Body:
  ```json
  {
    "title": "New Post",
    "content": "This is a new post"
  }
  ```
- Example:
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"title": "New Post", "content": "This is a new post"}' http://localhost:3000/api/posts
  ```

#### Update a Post
**PUT** `/:id`
- Body:
  ```json
  {
    "title": "Updated Post",
    "content": "This post has been updated"
  }
  ```
- Example:
  ```bash
  curl -X PUT -H "Content-Type: application/json" -d '{"title": "Updated Post", "content": "This post has been updated"}' http://localhost:3000/api/posts/1
  ```

#### Delete a Post
**DELETE** `/:id`
- Example:
  ```bash
  curl -X DELETE http://localhost:3000/api/posts/1
  ```

## Middleware

### Logger Middleware
Located in `middleware/logger.js`, this middleware logs all incoming requests with the method, protocol, host, and URL.

Example log:
```
GET http://localhost:3000/api/posts
```

### Error Handler Middleware
Located in `middleware/error.js`, this middleware handles errors and returns a JSON response with the error message.

Example error response:
```json
{
  "msg": "A post with the id 10 was not found"
}
```

## Dependencies

- [Express](https://expressjs.com/) `^4.21.2`

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the ISC License.

## Author

Developed by GHDBASHEN
