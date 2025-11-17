// Maps Implementation with Google Maps Embed (No API Key Required)
// Uses Google Maps iframe embeds with Google watermarks

$(document).ready(() => {

    // Google Maps Satellite View
    if (document.getElementById("map")) {
        createSatelliteMap();
    }

    // Google Maps Standard View
    if (document.getElementById('gmap-example')) {
        createStandardMap();
    }

    // Multiple Locations Map
    if (document.getElementById('map-multiple-markers')) {
        createMultipleLocationsMap();
    }

    // Custom Location Map
    if (document.getElementById('map-custom-styles')) {
        createCustomLocationMap();
    }

    // Terrain Map
    if (document.getElementById('map-interactive-demo')) {
        createTerrainMap();
    }

});

// Satellite Map - Tokyo, Japan
function createSatelliteMap() {
    const container = document.getElementById('map');
    if (!container) return;

    container.innerHTML = `
        <iframe
            width="100%"
            height="300"
            style="border:0; border-radius: 5px;"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207137.03984875698!2d139.55641632812503!3d35.67619900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e1!3m2!1sen!2sus!4v1647360000000!5m2!1sen!2sus">
        </iframe>
    `;
}

// Standard Map - New York, USA
function createStandardMap() {
    const container = document.getElementById('gmap-example');
    if (!container) return;

    container.innerHTML = `
        <iframe
            width="100%"
            height="300"
            style="border:0; border-radius: 5px;"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976395!3d40.697403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1647360000000!5m2!1sen!2sus">
        </iframe>
    `;
}

// Multiple Locations - London, UK
function createMultipleLocationsMap() {
    const container = document.getElementById('map-multiple-markers');
    if (!container) return;

    container.innerHTML = `
        <iframe
            width="100%"
            height="300"
            style="border:0; border-radius: 5px;"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.72810035922!2d-0.26640568708495507!3d51.52876993862334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1647360000000!5m2!1sen!2sus">
        </iframe>
    `;
}

// Custom Location - Paris, France
function createCustomLocationMap() {
    const container = document.getElementById('map-custom-styles');
    if (!container) return;

    container.innerHTML = `
        <iframe
            width="100%"
            height="300"
            style="border:0; border-radius: 5px;"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167997.3185423057!2d2.1965403!3d48.85885999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b005%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1647360000000!5m2!1sen!2sus">
        </iframe>
    `;
}

// Terrain Map - San Francisco, USA
function createTerrainMap() {
    const container = document.getElementById('map-interactive-demo');
    if (!container) return;

    container.innerHTML = `
        <iframe
            width="100%"
            height="300"
            style="border:0; border-radius: 5px;"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555405679!2d-122.52000005!3d37.757815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1647360000000!5m2!1sen!2sus">
        </iframe>
    `;
}
