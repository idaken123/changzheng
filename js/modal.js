let modalEventId = null;

function openEventModal(id) {
    modalEventId = id;
    const event = longMarchData.find(d => d.id === id);
    if (!event) return;

    const modal = document.getElementById('eventModal');
    if (!modal) return;

    const index = longMarchData.findIndex(d => d.id === id);

    document.getElementById('modalTitle').textContent = event.event;
    document.getElementById('modalDate').textContent = `${event.date} | ${event.location}`;
    document.getElementById('modalDetails').textContent = event.details;
    document.getElementById('modalSignificance').textContent = event.significance;
    document.getElementById('modalQuote').textContent = event.quote;

    event.stats.forEach((stat, statIndex) => {
        const value = document.getElementById(`stat${statIndex + 1}Value`);
        const label = document.getElementById(`stat${statIndex + 1}Label`);
        if (value) value.textContent = stat.value;
        if (label) label.textContent = stat.label;
    });

    const prevBtn = document.getElementById('prevEventBtn');
    const nextBtn = document.getElementById('nextEventBtn');

    if (prevBtn) {
        prevBtn.disabled = index <= 0;
        prevBtn.onclick = () => {
            if (index > 0) {
                openEventModal(longMarchData[index - 1].id);
                setActiveTimelineItem(longMarchData[index - 1].id);
            }
        };
    }

    if (nextBtn) {
        nextBtn.disabled = index >= longMarchData.length - 1;
        nextBtn.onclick = () => {
            if (index < longMarchData.length - 1) {
                openEventModal(longMarchData[index + 1].id);
                setActiveTimelineItem(longMarchData[index + 1].id);
            }
        };
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeEventModal() {
    const modal = document.getElementById('eventModal');
    if (modal) {
        modal.classList.remove('active');
    }
    document.body.style.overflow = '';
    modalEventId = null;
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('eventModal');
    if (modal) {
        modal.addEventListener('click', event => {
            if (event.target === modal) {
                closeEventModal();
            }
        });

        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeEventModal);
        }
    }

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeEventModal();
            closeStoryModal();
        }

        if (!modalEventId) return;
        const index = longMarchData.findIndex(d => d.id === modalEventId);
        if (event.key === 'ArrowLeft' && index > 0) {
            const prev = longMarchData[index - 1].id;
            openEventModal(prev);
            setActiveTimelineItem(prev);
        }
        if (event.key === 'ArrowRight' && index < longMarchData.length - 1) {
            const next = longMarchData[index + 1].id;
            openEventModal(next);
            setActiveTimelineItem(next);
        }
    });
});
