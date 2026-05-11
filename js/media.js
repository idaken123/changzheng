function renderMedia() {
    renderImages();
    renderVideos();
    renderAudios();
}

function renderImages() {
    const container = document.getElementById('imageGallery');
    if (!container) return;

    container.innerHTML = '';
    mediaResources.images.forEach((img, index) => {
        const item = document.createElement('article');
        item.className = 'media-item';
        const coverStyle = img.cover ? ` style="background-image: url('${img.cover}')"` : '';
        const coverText = img.cover ? '' : `<span>${img.title.slice(0, 2)}</span>`;
        item.innerHTML = `
            <a class="media-link" href="${img.url}" target="_blank" rel="noopener noreferrer">
                <div class="media-thumbnail media-thumb-${(index % 4) + 1}"${coverStyle}>
                    ${coverText}
                    <span class="media-play">▶</span>
                </div>
                <div class="media-info">
                    <h4>${img.title}</h4>
                    <p>${img.description}</p>
                    <p class="media-meta">${img.location}</p>
                    <p class="media-source">${img.source}</p>
                </div>
            </a>
        `;
        container.appendChild(item);
    });
}

function renderVideos() {
    const container = document.getElementById('videoList');
    if (!container) return;

    container.innerHTML = '';
    mediaResources.videos.forEach(video => {
        const item = document.createElement('a');
        item.className = 'video-item';
        item.href = video.url;
        item.target = '_blank';
        item.rel = 'noopener noreferrer';
        item.innerHTML = `
            <div class="video-play">▶</div>
            <div class="video-info">
                <h4>${video.title}</h4>
                <p>${video.description}</p>
                <p class="video-duration">${video.duration} | ${video.source}</p>
            </div>
        `;
        container.appendChild(item);
    });
}

function renderAudios() {
    const container = document.getElementById('audioList');
    if (!container) return;

    container.innerHTML = '';
    mediaResources.audios.forEach(audio => {
        const item = document.createElement('a');
        item.className = 'audio-item';
        item.href = audio.url;
        item.target = '_blank';
        item.rel = 'noopener noreferrer';
        item.innerHTML = `
            <div class="audio-icon">声</div>
            <div class="audio-info">
                <h4>${audio.title}</h4>
                <p>${audio.author} | ${audio.description}</p>
                <p class="media-source">${audio.source}</p>
            </div>
        `;
        container.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', renderMedia);
