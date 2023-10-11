// script.js

// Sample blog post data
const blogPosts = [
    { title: 'Post 1', content: 'Content of post 1.' },
    { title: 'Post 2', content: 'Content of post 2.' },
    { title: 'Post 3', content: 'Content of post 3.' },
];

document.addEventListener('DOMContentLoaded', function() {
    const blogPostsContainer = document.getElementById('blog-posts');
    const newsletterForm = document.getElementById('newsletter-form');

    // Populate the latest blog posts
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });

    // Handle newsletter signup
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = event.target.email.value;
        // Send the email to your backend for processing or use an external service.
        // You can also provide feedback to the user.
        alert(`Subscribed with email: ${email}`);
        event.target.reset();
    });
});