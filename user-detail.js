document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();
    document.getElementById("user-detail").innerHTML = `<h2>${user.name}</h2><p>${user.email}</p>`;
    document.getElementById("view-posts").addEventListener("click", () => {
        window.location.href = `user-posts.html?id=${user.id}`;
    });
});