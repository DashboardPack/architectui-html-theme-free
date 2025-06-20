// Maps Implementation with Multiple Examples

$(document).ready(() => {

    // MapBox-Style Satellite Map Fallback (no external API needed)
    if (document.getElementById("map")) {
        createSatelliteMapFallback();
    }

    // Google Maps Example with Fallback
    if (document.getElementById('gmap-example')) {
        // Create a simple interactive map using Canvas/SVG as fallback
        createInteractiveMap();
    }

    // Additional Map Examples
    if (document.getElementById('map-multiple-markers')) {
        createMultipleMarkersMap();
    }

    if (document.getElementById('map-custom-styles')) {
        createCustomStyledMap();
    }

    if (document.getElementById('map-interactive-demo')) {
        createInteractiveDemoMap();
    }

});

// Satellite Map Fallback (looks like real satellite imagery)
function createSatelliteMapFallback() {
    const container = document.getElementById('map');
    if (!container) return;

    container.innerHTML = `
        <div style="width: 100%; height: 300px; background: #2d5a27; border-radius: 5px; position: relative; overflow: hidden; cursor: grab;">
            <!-- Satellite-style background layers -->
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; 
                        background: radial-gradient(circle at 20% 30%, #4a7c59 0%, transparent 40%), 
                                  radial-gradient(circle at 70% 60%, #3e6b47 0%, transparent 50%),
                                  radial-gradient(circle at 50% 80%, #2d5a27 0%, transparent 30%),
                                  linear-gradient(45deg, #1e4d23 0%, #2d5a27 25%, #4a7c59 50%, #2d5a27 75%, #1e4d23 100%);"></div>
            
            <!-- Terrain features -->
            <div style="position: absolute; top: 20%; left: 30%; width: 40px; height: 30px; 
                        background: #5a8a5a; border-radius: 50%; opacity: 0.8;"></div>
            <div style="position: absolute; top: 60%; left: 60%; width: 30px; height: 25px; 
                        background: #6b9b6b; border-radius: 40%; opacity: 0.7;"></div>
            <div style="position: absolute; top: 40%; left: 15%; width: 20px; height: 20px; 
                        background: #4a7c59; border-radius: 50%; opacity: 0.9;"></div>
            
            <!-- Water features -->
            <div style="position: absolute; top: 70%; left: 20%; width: 60px; height: 8px; 
                        background: #4a90e2; border-radius: 10px; opacity: 0.8;"></div>
            <div style="position: absolute; top: 30%; left: 70%; width: 40px; height: 6px; 
                        background: #357abd; border-radius: 8px; opacity: 0.7;"></div>
            
            <!-- Navigation controls (top-right) -->
            <div style="position: absolute; top: 10px; right: 10px; display: flex; flex-direction: column; gap: 2px;">
                <button style="width: 30px; height: 30px; background: rgba(255,255,255,0.9); border: 1px solid #ccc; 
                               border-radius: 3px; cursor: pointer; font-size: 16px; display: flex; align-items: center; justify-content: center;"
                        onclick="alert('Zoom In')" title="Zoom In">+</button>
                <button style="width: 30px; height: 30px; background: rgba(255,255,255,0.9); border: 1px solid #ccc; 
                               border-radius: 3px; cursor: pointer; font-size: 16px; display: flex; align-items: center; justify-content: center;"
                        onclick="alert('Zoom Out')" title="Zoom Out">-</button>
            </div>
            
            <!-- Location marker with popup -->
            <div id="satellite-marker" style="position: absolute; top: 45%; left: 45%; transform: translate(-50%, -50%); 
                        width: 15px; height: 15px; background: #ff4757; border-radius: 50%; 
                        border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.4); cursor: pointer; z-index: 10;
                        animation: satellitePulse 2s infinite;" title="Japan Mountain Region"></div>
            
            <!-- Info panel -->
            <div style="position: absolute; bottom: 10px; left: 10px; background: rgba(0,0,0,0.8); color: white; 
                        padding: 8px 12px; border-radius: 4px; font-size: 12px;">
                <div style="font-weight: bold;">📍 Japan Mountain Region</div>
                <div style="opacity: 0.9;">Lat: 36.2596, Lng: 137.9151</div>
                <div style="opacity: 0.7; margin-top: 2px;">Satellite View • Zoom: 9</div>
            </div>
            
            <!-- Attribution -->
            <div style="position: absolute; bottom: 5px; right: 5px; background: rgba(255,255,255,0.9); 
                        padding: 2px 6px; border-radius: 2px; font-size: 10px; color: #666;">
                Demo Satellite Map
            </div>
        </div>
        
        <style>
            @keyframes satellitePulse {
                0% { box-shadow: 0 0 0 0 rgba(255, 71, 87, 0.7); }
                70% { box-shadow: 0 0 0 8px rgba(255, 71, 87, 0); }
                100% { box-shadow: 0 0 0 0 rgba(255, 71, 87, 0); }
            }
            #map { user-select: none; }
            #map:active { cursor: grabbing; }
        </style>
    `;

    // Add click interaction for the marker
    const marker = container.querySelector('#satellite-marker');
    if (marker) {
        marker.addEventListener('click', function(e) {
            e.stopPropagation();
            alert('📍 Japan Mountain Region\\n🗾 Beautiful mountainous area\\n🌍 Coordinates: 36.2596, 137.9151\\n\\n🛰️ Satellite view with terrain features');
        });
    }

    // Add drag simulation
    let isDragging = false;
    container.addEventListener('mousedown', () => isDragging = true);
    container.addEventListener('mouseup', () => isDragging = false);
    container.addEventListener('mousemove', (e) => {
        if (isDragging) {
            container.style.cursor = 'grabbing';
        }
    });
    container.addEventListener('mouseleave', () => {
        isDragging = false;
        container.style.cursor = 'grab';
    });
}

// Fallback Interactive Map (no external API required)
function createInteractiveMap() {
    const container = document.getElementById('gmap-example');
    if (!container) return;

    // Create a simple interactive map using HTML/CSS/JS
    container.innerHTML = `
        <div style="width: 100%; height: 300px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; position: relative; overflow: hidden; cursor: pointer;">
            <div style="position: absolute; top: 20px; left: 20px; background: rgba(255,255,255,0.9); padding: 10px; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <h5 style="margin: 0 0 5px 0; color: #333;">Interactive Demo Map</h5>
                <p style="margin: 0; color: #666; font-size: 12px;">Lima, Peru</p>
                <p style="margin: 0; color: #666; font-size: 12px;">Lat: -12.043333, Lng: -77.028333</p>
            </div>
            <div id="map-marker" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 20px; height: 20px; background: #ff4757; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3); cursor: pointer; animation: pulse 2s infinite;"></div>
            <div style="position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 5px 10px; border-radius: 3px; font-size: 12px;">
                Click to interact
            </div>
        </div>
        <style>
            @keyframes pulse {
                0% { box-shadow: 0 0 0 0 rgba(255, 71, 87, 0.7); }
                70% { box-shadow: 0 0 0 10px rgba(255, 71, 87, 0); }
                100% { box-shadow: 0 0 0 0 rgba(255, 71, 87, 0); }
            }
        </style>
    `;

    // Add click interaction
    const marker = container.querySelector('#map-marker');
    if (marker) {
        marker.addEventListener('click', function() {
            alert('📍 Location: Lima, Peru\\n🌍 Coordinates: -12.043333, -77.028333\\n\\nThis is a demo interactive map!');
        });
    }
}

// Multiple Markers Example
function createMultipleMarkersMap() {
    const container = document.getElementById('map-multiple-markers');
    if (!container) return;

    const cities = [
        {name: 'New York', lat: 40.7128, lng: -74.0060, color: '#ff6b6b'},
        {name: 'London', lat: 51.5074, lng: -0.1278, color: '#4ecdc4'},
        {name: 'Tokyo', lat: 35.6762, lng: 139.6503, color: '#45b7d1'},
        {name: 'Sydney', lat: -33.8688, lng: 151.2093, color: '#96ceb4'}
    ];

    let html = `
        <div style="width: 100%; height: 300px; background: #2c3e50; border-radius: 8px; position: relative; overflow: hidden;">
            <h4 style="position: absolute; top: 10px; left: 15px; color: white; margin: 0; z-index: 10;">World Cities</h4>
    `;

    cities.forEach((city, index) => {
        const x = 20 + (index * 20);
        const y = 50 + (index * 15);
        html += `
            <div style="position: absolute; top: ${y}%; left: ${x}%; transform: translate(-50%, -50%); 
                        width: 12px; height: 12px; background: ${city.color}; border-radius: 50%; 
                        border: 2px solid white; cursor: pointer; z-index: 5;"
                 onclick="alert('📍 ${city.name}\\n🌍 ${city.lat}, ${city.lng}')"
                 title="${city.name}"></div>
            <div style="position: absolute; top: ${y + 5}%; left: ${x}%; transform: translateX(-50%); 
                        color: white; font-size: 10px; text-align: center; pointer-events: none;">
                ${city.name}
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

// Custom Styled Map
function createCustomStyledMap() {
    const container = document.getElementById('map-custom-styles');
    if (!container) return;

    container.innerHTML = `
        <div style="width: 100%; height: 300px; background: linear-gradient(45deg, #1a1a2e, #16213e, #0f3460); 
                    border-radius: 8px; position: relative; overflow: hidden; border: 2px solid #4ecdc4;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; 
                        background-image: radial-gradient(circle at 30% 40%, rgba(78, 205, 196, 0.3) 0%, transparent 50%),
                                        radial-gradient(circle at 70% 80%, rgba(255, 107, 107, 0.3) 0%, transparent 50%);"></div>
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                        text-align: center; color: white;">
                <h4 style="margin: 0 0 10px 0;">Custom Styled Map</h4>
                <p style="margin: 0; opacity: 0.8;">Beautiful gradient design</p>
                <div style="margin-top: 15px;">
                    <span style="display: inline-block; width: 8px; height: 8px; background: #4ecdc4; 
                                 border-radius: 50%; margin: 0 5px; animation: blink 1.5s infinite;"></span>
                    <span style="display: inline-block; width: 8px; height: 8px; background: #ff6b6b; 
                                 border-radius: 50%; margin: 0 5px; animation: blink 1.5s infinite 0.3s;"></span>
                    <span style="display: inline-block; width: 8px; height: 8px; background: #45b7d1; 
                                 border-radius: 50%; margin: 0 5px; animation: blink 1.5s infinite 0.6s;"></span>
                </div>
            </div>
        </div>
        <style>
            @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0.3; } }
        </style>
    `;
}

// Interactive Demo Map
function createInteractiveDemoMap() {
    const container = document.getElementById('map-interactive-demo');
    if (!container) return;

    container.innerHTML = `
        <div style="width: 100%; height: 300px; background: #ecf0f1; border-radius: 8px; position: relative; 
                    border: 1px solid #bdc3c7; overflow: hidden;">
            <div style="position: absolute; top: 10px; left: 10px; right: 10px; 
                        background: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <h5 style="margin: 0 0 10px 0;">Interactive Controls</h5>
                <button onclick="changeMapView('satellite')" style="margin-right: 5px; padding: 5px 10px; 
                                background: #3498db; color: white; border: none; border-radius: 3px; cursor: pointer;">Satellite</button>
                <button onclick="changeMapView('terrain')" style="margin-right: 5px; padding: 5px 10px; 
                                background: #27ae60; color: white; border: none; border-radius: 3px; cursor: pointer;">Terrain</button>
                <button onclick="changeMapView('street')" style="padding: 5px 10px; 
                                background: #e74c3c; color: white; border: none; border-radius: 3px; cursor: pointer;">Street</button>
            </div>
            <div id="demo-map-view" style="position: absolute; top: 80px; left: 20px; right: 20px; bottom: 20px; 
                                          background: linear-gradient(135deg, #74b9ff, #0984e3); border-radius: 5px; 
                                          display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
                Satellite View Active
            </div>
        </div>
    `;

    // Add global function for map view changes
    window.changeMapView = function(type) {
        const view = document.getElementById('demo-map-view');
        if (view) {
            const styles = {
                satellite: { background: 'linear-gradient(135deg, #74b9ff, #0984e3)', text: 'Satellite View Active' },
                terrain: { background: 'linear-gradient(135deg, #00b894, #00a085)', text: 'Terrain View Active' },
                street: { background: 'linear-gradient(135deg, #fd79a8, #e84393)', text: 'Street View Active' }
            };
            view.style.background = styles[type].background;
            view.textContent = styles[type].text;
        }
    };
}