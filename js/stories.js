function renderStories() {
    const container = document.getElementById('storiesGrid');
    if (!container) return;

    const storyIcons = ['军', '盟', '火', '钩', '桥', '忠', '雪', '纪'];
    container.innerHTML = '';

    longMarchStories.forEach((story, index) => {
        const card = document.createElement('article');
        card.className = 'story-card';
        card.tabIndex = 0;
        card.onclick = () => openStoryModal(story.id);
        card.onkeydown = event => {
            if (event.key === 'Enter') openStoryModal(story.id);
        };

        const coverStyle = story.cover ? ` style="background-image: url('${story.cover}')"` : '';
        const coverContent = story.cover ? '' : `<span>${storyIcons[index] || '史'}</span>`;

        card.innerHTML = `
            <div class="story-image"${coverStyle}>${coverContent}</div>
            <div class="story-content">
                <span class="story-tag">${story.tag}</span>
                <h3 class="story-title">${story.title}</h3>
                <p class="story-excerpt">${story.excerpt}</p>
            </div>
            <div class="story-footer">
                <span class="story-location">${story.location}</span>
                <span class="story-read-more">阅读全文</span>
            </div>
        `;

        container.appendChild(card);
    });
}

let currentStoryId = null;

function openStoryModal(id) {
    currentStoryId = id;
    const story = longMarchStories.find(s => s.id === id);
    if (!story) return;

    const modal = document.getElementById('storyModal');
    if (!modal) return;

    document.getElementById('storyModalTitle').textContent = story.title;
    document.getElementById('storyModalTag').textContent = story.tag;
    document.getElementById('storyModalLocation').textContent = story.location;
    document.getElementById('storyModalContent').textContent = story.content;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeStoryModal() {
    const modal = document.getElementById('storyModal');
    if (modal) {
        modal.classList.remove('active');
    }
    document.body.style.overflow = '';
    currentStoryId = null;
}

document.addEventListener('DOMContentLoaded', () => {
    const storyModal = document.getElementById('storyModal');
    if (storyModal) {
        storyModal.addEventListener('click', event => {
            if (event.target === storyModal) {
                closeStoryModal();
            }
        });

        const closeBtn = storyModal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeStoryModal);
        }
    }

    renderStories();
});
