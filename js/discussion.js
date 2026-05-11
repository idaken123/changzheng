const commentStorageKey = 'longMarchComments';

function getStoredComments() {
    try {
        return JSON.parse(localStorage.getItem(commentStorageKey)) || [];
    } catch (error) {
        return [];
    }
}

function saveComments(comments) {
    localStorage.setItem(commentStorageKey, JSON.stringify(comments));
}

function initDiscussion() {
    const form = document.getElementById('commentForm');
    if (!form) return;

    form.addEventListener('submit', event => {
        event.preventDefault();
        const nameInput = document.getElementById('commentName');
        const textInput = document.getElementById('commentText');
        const name = nameInput.value.trim();
        const text = textInput.value.trim();
        if (!name || !text) return;

        const comments = getStoredComments();
        comments.unshift({
            id: Date.now(),
            name,
            text,
            time: new Date().toLocaleString('zh-CN', { hour12: false })
        });
        saveComments(comments.slice(0, 50));
        form.reset();
        renderComments();
    });

    renderComments();
}

function renderComments() {
    const list = document.getElementById('commentList');
    const count = document.getElementById('commentCount');
    if (!list || !count) return;

    const comments = getStoredComments();
    count.textContent = `${comments.length} 条评论`;

    if (!comments.length) {
        list.innerHTML = '<div class="comment-empty">暂无评论</div>';
        return;
    }

    list.innerHTML = comments.map(comment => `
        <article class="comment-item">
            <div class="comment-head">
                <strong>${escapeHtml(comment.name)}</strong>
                <span>${escapeHtml(comment.time)}</span>
            </div>
            <p>${escapeHtml(comment.text)}</p>
        </article>
    `).join('');
}

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

document.addEventListener('DOMContentLoaded', initDiscussion);
