// Include the required modules and files
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { addPost, getPosts, updatePost, deletePost } = require('./posts.js');

const app = express();

// Middleware to parse the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to handle CORS
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API route for fetching all posts
app.get('/api/posts', (req, res) => {
    const posts = getPosts();
    res.json(posts);
});

// API route for creating a new post
app.post('/api/posts', (req, res) => {
    const { title, description, author } = req.body;
    const post = addPost(title, description, author);
    res.json(post);
});

// API route for updating an existing post
app.put('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedPostData = req.body;
    const updatedPost = updatePost(id, updatedPostData);

    if (updatedPost) {
        res.json(updatedPost);
    } else {
        res.status(404).send({ error: 'Post not found' });
    }
});

// API route for deleting a post
app.delete('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const deleted = deletePost(id);

    if (deleted) {
        res.json({ success: true });
    } else {
        res.status(404).send({ error: 'Post not found' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});