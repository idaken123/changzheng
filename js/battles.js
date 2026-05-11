function renderBattles() {
    const container = document.getElementById('battlesGrid');
    if (!container) return;

    container.innerHTML = '';

    battleNarrations.forEach((battle, index) => {
        const card = document.createElement(battle.link ? 'a' : 'article');
        card.className = 'battle-card';
        if (battle.link) {
            card.href = battle.link;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
        }
        const linkArea = battle.link ? '点击观看解说' : '链接待补充';

        card.innerHTML = `
            <div class="battle-index">${String(index + 1).padStart(2, '0')}</div>
            <div class="battle-body">
                <p class="battle-meta">${battle.time} | ${battle.location}</p>
                <h3>${battle.title}</h3>
                <p>${battle.summary}</p>
                <div class="battle-link"><span class="${battle.link ? 'battle-ready' : 'battle-empty'}">${linkArea}</span></div>
            </div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderBattles);
