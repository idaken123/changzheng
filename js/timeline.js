let activeEventId = 1;
let isPlaying = false;
let playInterval = null;

function renderTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;

    timeline.innerHTML = '';

    longMarchData.forEach((item, index) => {
        const itemEl = document.createElement('article');
        itemEl.className = 'timeline-item';
        itemEl.id = `timeline-item-${item.id}`;
        itemEl.innerHTML = `
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-event">${String(index + 1).padStart(2, '0')} ${item.event}</div>
            <div class="timeline-location">${item.location}</div>
            <p>${item.description}</p>
            <button class="timeline-btn-detail" type="button" onclick="openEventModal(${item.id})">查看详情</button>
        `;

        itemEl.addEventListener('click', event => {
            if (event.target.classList.contains('timeline-btn-detail')) return;
            setActiveTimelineItem(item.id);
        });

        timeline.appendChild(itemEl);
    });
}

function setActiveTimelineItem(id, options = {}) {
    activeEventId = id;

    document.querySelectorAll('.timeline-item').forEach(el => {
        el.classList.remove('active');
    });

    const activeItem = document.getElementById(`timeline-item-${id}`);
    if (activeItem && options.scroll !== false) {
        activeItem.classList.add('active');
        activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else if (activeItem) {
        activeItem.classList.add('active');
    }

    if (typeof focusOnEvent === 'function') {
        focusOnEvent(id, options);
    }
    if (typeof highlightMarker === 'function') {
        highlightMarker(id);
    }

    updateProgressBar(id);
}

function updateProgressBar(id) {
    const progressBar = document.getElementById('timelineProgress');
    if (progressBar) {
        progressBar.style.width = `${(id / longMarchData.length) * 100}%`;
    }

    const progressText = document.getElementById('progressText');
    if (progressText) {
        progressText.textContent = `${id} / ${longMarchData.length}`;
    }
}

function playTimeline() {
    if (isPlaying) {
        stopTimeline();
        return;
    }

    isPlaying = true;
    updatePlayButton();
    if (activeEventId >= longMarchData.length) {
        activeEventId = 1;
        setActiveTimelineItem(activeEventId);
    }

    playInterval = setInterval(() => {
        if (activeEventId < longMarchData.length) {
            setActiveTimelineItem(activeEventId + 1);
        } else {
            stopTimeline();
        }
    }, 4000);
}

function stopTimeline() {
    isPlaying = false;
    updatePlayButton();
    if (playInterval) {
        clearInterval(playInterval);
        playInterval = null;
    }
}

function updatePlayButton() {
    const playBtn = document.getElementById('playBtn');
    if (playBtn) {
        playBtn.textContent = isPlaying ? '暂停' : '播放';
    }
}

function prevEvent() {
    stopTimeline();
    if (activeEventId > 1) {
        setActiveTimelineItem(activeEventId - 1);
    }
}

function nextEvent() {
    stopTimeline();
    if (activeEventId < longMarchData.length) {
        setActiveTimelineItem(activeEventId + 1);
    }
}
