import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import errorhandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
import logger from './middleware/logger.js';

const port = process.env.PORT || 3000;
const app = express();
//get directory name
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);

// Middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setup static folder
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/api/posts', posts);

// Error handler

app.use(notFound);
app.use(errorhandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
