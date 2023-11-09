// Get DOM elements
const createPostForm = document.getElementById('create-post-form');
const postsContainer = document.getElementById('posts-container');
const serverUrl = 'http://localhost:3000';
// Add these lines to get the new modal elements
const editPostModal = document.getElementById('edit-post-modal');
const editPostForm = document.getElementById('edit-post-form');
const modalCloseBtn = document.getElementById('modal-close');
// Load all posts and render them when the page loads
window.addEventListener('DOMContentLoaded', () => {
    fetchPosts().then(renderPosts);
    setInterval(() => {
        fetchPosts().then(renderPosts);
    }, 3000); // 5000 milliseconds = 5 second
});

// Handle create post form submission
createPostForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = createPostForm.title.value;
    const description = createPostForm.description.value;
    const author = createPostForm.author.value;

    createPost(title, description, author).then(() => {
        // Clear the form after successful submission
        createPostForm.reset();

        // Reload and render the updated list of posts
        fetchPosts().then(renderPosts);
    });
});

// Fetch all posts from the server
function fetchPosts() {
    return fetch(serverUrl+'/api/posts').then(response => response.json());
}

// Create a new post on the server
function createPost(title, description, author) {
    return fetch(serverUrl+'/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, author })
    }).then(response => response.json());
}

// Update an existing post on the server
function updatePost(id, updatedData) {
    return fetch(serverUrl+`/api/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    }).then(response => response.json());
}

// Delete a post on the server
function deletePost(id) {
    return fetch(serverUrl+`/api/posts/${id}`, {
        method: 'DELETE'
    }).then(response => response.json());
}

function openEditModal(postData) {
    editPostModal.style.display = 'block';
    editPostForm.id.value = postData.id;
    editPostForm.title.value = postData.title;
    editPostForm.description.value = postData.description;
    editPostForm.author.value = postData.author;
}

function closeEditModal() {
    editPostModal.style.display = 'none';
}
// Render the posts in the UI
function renderPosts(posts) {
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.className = 'post-item';
        postItem.dataset.id = post.id;

        postItem.innerHTML = `
            <h3>${post.title}</h3>
            <div class="description">${post.description}</div>
            <div class="author">By: ${post.author}</div>
            <div class="actions">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;

        postItem.querySelector('.edit').addEventListener('click', () => {
            const postId = parseInt(postItem.dataset.id, 10);
            const postData = posts.find(p => p.id === postId);
            openEditModal(postData);
        });

        postItem.querySelector('.delete').addEventListener('click', () => {
            const postId = parseInt(postItem.dataset.id, 10);

            deletePost(postId).then(() => {
                // Remove the post from the UI
                postItem.remove();
            });
        });

        postsContainer.appendChild(postItem);
    });
}
// Add event listeners to handle modal actions
modalCloseBtn.addEventListener('click', closeEditModal);

// Handle edit post form submission
editPostForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const postId = parseInt(editPostForm.id.value, 10);
    const title = editPostForm.title.value;
    const description = editPostForm.description.value;
    const author = editPostForm.author.value;

    updatePost(postId, { title, description, author }).then(() => {
        // Close the edit modal after successful submission
        closeEditModal();

        // Reload and render the updated list of posts
        fetchPosts().then(renderPosts);
    });
});