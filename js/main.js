let currentTab = 'map';

function initApp() {
    renderTimeline();
    initMap();
    initNavigation();
}

function initNavigation() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.dataset.tab);
        });
    });
}

function switchTab(tabName) {
    currentTab = tabName;

    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });

    document.querySelectorAll('.panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `${tabName}Panel`);
    });

    if (tabName === 'map' && map) {
        setTimeout(() => map.invalidateSize(), 120);
    }
}

document.addEventListener('DOMContentLoaded', initApp);
