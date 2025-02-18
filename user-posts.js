async function fetchUserPosts() {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('id');
    if (!userId) return;
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        const posts = await response.json();
        document.getElementById('user-name').textContent = `User ${userId}`;
        const postsList = document.getElementById('posts-list');
        posts.forEach(post => {
            const div = document.createElement('div');
            div.classList.add('post-item');
            div.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button class="toggle-comments" data-id="${post.id}">ดูความคิดเห็น</button>
                <div class="comments" id="comments-${post.id}" style="display: none;"></div>
            `;
            postsList.appendChild(div);
        });
        document.querySelectorAll('.toggle-comments').forEach(button => {
            button.addEventListener('click', async function() {
                const postId = this.getAttribute('data-id');
                const commentsDiv = document.getElementById(`comments-${postId}`);
                if (commentsDiv.innerHTML === '') {
                    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
                    const comments = await commentsResponse.json();
                    commentsDiv.innerHTML = comments.map(c => `<p><strong>${c.name}:</strong> ${c.body}</p>`).join('');
                    commentsDiv.style.display = 'block';
                    this.textContent = 'ซ่อนความคิดเห็น';
                } else {
                    commentsDiv.style.display = commentsDiv.style.display === 'none' ? 'block' : 'none';
                    this.textContent = commentsDiv.style.display === 'none' ? 'ดูความคิดเห็น' : 'ซ่อนความคิดเห็น';
                }
            });
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}
document.addEventListener('DOMContentLoaded', fetchUserPosts);