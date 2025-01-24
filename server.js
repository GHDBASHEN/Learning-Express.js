import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import errorhandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/posts', posts);

// Error handler
app.use(notFound);
app.use(errorhandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
