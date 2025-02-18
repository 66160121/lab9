async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const userList = document.getElementById('user-list');
        users.forEach(user => {
            const div = document.createElement('div');
            div.classList.add('user-item');
            div.innerHTML = `<a href="user-detail.html?id=${user.id}">${user.name}</a>`;
            userList.appendChild(div);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}
document.addEventListener('DOMContentLoaded', fetchUsers);