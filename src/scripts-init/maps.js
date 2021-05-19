// Maps

import mapboxgl from "mapbox-gl";

import GMaps from 'gmaps';

$(document).ready(() => {

    //MapBox-GL

  if (document.getElementById("map")) {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGFzaGJvYXJlZHBhY2siLCJhIjoiY2s5bWlhZHRqMDAxazNsbnlpbXhhdDcwMSJ9.YU6cxTiRujREOAIVO6iLmA";
    var map = new mapboxgl.Map({
      container: "map",
      zoom: 9,
      center: [137.9150899566626, 36.25956997955441],
      style: "mapbox://styles/mapbox/satellite-v9",
    });
  }

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