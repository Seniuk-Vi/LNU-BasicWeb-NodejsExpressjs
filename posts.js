class Post {
    constructor(id, title, description, author) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
    }
}

const posts = [];

const addPost = (title, description, author) => {
    const id = posts.length + 1;
    const post = new Post(id, title, description, author);
    posts.push(post);
    return post;
};

const getPosts = () => {
    return posts;
};

const updatePost = (id, updatedPostData) => {
    const index = posts.findIndex(post => post.id === id);
    if (index !== -1) {
        const updatedPost = { ...posts[index], ...updatedPostData };
        posts[index] = updatedPost;
        return updatedPost;
    }

    return null;
};

const deletePost = (id) => {
    const index = posts.findIndex(post => post.id === id);
    if (index !== -1) {
        posts.splice(index, 1);
        return true;
    }

    return false;
};

module.exports = {
    addPost,
    getPosts,
    updatePost,
    deletePost
};