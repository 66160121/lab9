document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const userList = document.getElementById("user-list");
    userList.innerHTML = users.map(user => `<div><a href="user-detail.html?id=${user.id}">${user.name}</a></div>`).join("");
});