document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const posts = await response.json();
    document.getElementById("user-name").textContent = `User ${userId}`;
    document.getElementById("posts-list").innerHTML = posts.map(post => `<div><h3>${post.title}</h3><p>${post.body}</p></div>`).join("");
});