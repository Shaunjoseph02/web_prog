// JavaScript to add interactivity

// Display alert when button is clicked
document.getElementById('welcome-btn').addEventListener('click', function() {
    alert('Hello, welcome to my page!');
});

// Change background color when hovering over profile picture
document.getElementById('profile-pic').addEventListener('mouseover', function() {
    document.body.style.backgroundColor = '#d3e0ea';
});

document.getElementById('profile-pic').addEventListener('mouseout', function() {
    document.body.style.backgroundColor = '#f4f4f4';
});
