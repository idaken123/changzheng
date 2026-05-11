let map;
let markers = [];
let polylines = {};
let animatedRouteLine = null;

function initMap() {
    map = L.map('map', {
        center: [31.2, 105.2],
        zoom: 5,
        minZoom: 4,
        maxZoom: 10,
        zoomControl: false
    });

    L.control.zoom({ position: 'bottomleft' }).addTo(map);

    const gaodeLayer = L.tileLayer('https://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
        attribution: '高德地图',
        maxZoom: 18
    });

    const topoLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'OpenStreetMap',
        maxZoom: 18
    });

    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Esri World Imagery',
        maxZoom: 18
    });

    L.control.layers({
        '高德地图': gaodeLayer,
        '开放街图': topoLayer,
        '卫星地图': satelliteLayer
    }, null, { position: 'bottomleft' }).addTo(map);

    gaodeLayer.addTo(map);
    renderAllRoutes();
    renderAnimatedRoute(1);
    renderMarkers();
    initRouteToggles();
    setActiveTimelineItem(1, { pan: false });
}

function renderAllRoutes() {
    Object.keys(armyRoutes).forEach(key => {
        const color = armyColors[key].color;
        const line = L.polyline(armyRoutes[key], {
            color,
            weight: key === 'red1' ? 5 : 4,
            opacity: key === 'red1' ? 0.28 : 0.52,
            dashArray: key === 'red1' ? '' : '8, 8',
            lineCap: 'round',
            lineJoin: 'round'
        }).addTo(map);

        line.bindTooltip(armyColors[key].name);
        polylines[key] = line;
    });
}

function renderAnimatedRoute(activeId) {
    const coordinates = longMarchData
        .filter(item => item.id <= activeId)
        .map(item => item.coordinates);

    if (animatedRouteLine) {
        animatedRouteLine.setLatLngs(coordinates);
        return;
    }

    animatedRouteLine = L.polyline(coordinates, {
        color: armyColors.red1.color,
        weight: 7,
        opacity: 0.96,
        lineCap: 'round',
        lineJoin: 'round'
    }).addTo(map);
}

function renderMarkers() {
    longMarchData.forEach((item, index) => {
        const markerIcon = L.divIcon({
            className: 'custom-marker',
            html: `<button class="marker-dot" style="--marker-color:${armyColors[item.army].color}" aria-label="${item.event}">${index + 1}</button>`,
            iconSize: [34, 34],
            iconAnchor: [17, 17]
        });

        const marker = L.marker(item.coordinates, { icon: markerIcon })
            .addTo(map)
            .bindPopup(createPopupContent(item), { closeButton: false });

        marker.on('click', () => {
            setActiveTimelineItem(item.id);
        });

        markers.push({ id: item.id, marker, data: item });
    });
}

function createPopupContent(item) {
    return `
        <div class="event-popup">
            <h3>${item.event}</h3>
            <div class="popup-date">${item.date}</div>
            <div class="popup-desc">${item.description}</div>
            <div class="popup-location">${item.location}</div>
            <button type="button" onclick="openEventModal(${item.id})">查看详情</button>
        </div>
    `;
}

function focusOnEvent(id, options = {}) {
    const itemData = longMarchData.find(d => d.id === id);
    if (!itemData || !map) return;

    if (options.pan !== false) {
        map.flyTo(itemData.coordinates, 7, { duration: 0.9 });
    }

    markers.forEach(m => {
        if (m.id === id) {
            m.marker.openPopup();
        }
    });

    renderAnimatedRoute(id);
}

function clearActiveMarkers() {
    markers.forEach(m => {
        const icon = m.marker.getElement();
        if (icon) {
            icon.classList.remove('marker-active');
        }
    });
}

function highlightMarker(id) {
    clearActiveMarkers();
    markers.forEach(m => {
        if (m.id === id) {
            const icon = m.marker.getElement();
            if (icon) {
                icon.classList.add('marker-active');
            }
        }
    });
}

function initRouteToggles() {
    document.querySelectorAll('.route-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const key = button.dataset.route;
            const line = polylines[key];
            if (!line) return;

            const isActive = button.classList.toggle('active');
            if (isActive) {
                line.addTo(map);
            } else {
                line.remove();
            }
        });
    });
}
