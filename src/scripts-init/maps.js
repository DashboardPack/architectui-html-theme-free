// Maps

import 'jvectormap-next';

import GMaps from 'gmaps';

import '../assets/components/maps/maps-word-map.js';

$(document).ready(() => {

    // Vector Maps

    $(function () {
        var gdpData = {
            'AF': 16.63,
            'AL': 11.58,
            'DZ': 158.97,
        };
        setTimeout(function () {
            $('#world-map-gdp').vectorMap({
                map: 'world_mill',
                series: {
                    regions: [{
                        values: gdpData,
                        scale: ['#C8EEFF', '#0071A4'],
                        normalizeFunction: 'polynomial'
                    }]
                },
                onRegionTipShow: function (e, el, code) {
                    el.html(el.html() + ' (GDP - ' + gdpData[code] + ')');
                }
            });
        }, 2000);
    });

    // gMaps

    if (document.getElementById('gmap-example')) {

        var map = new GMaps({
            el: '#gmap-example',
            lat: -12.043333,
            lng: -77.028333,
            width: '100%',
            height: '300px'
        });

    }

});