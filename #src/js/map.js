// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 40.7590403, lng: -74.0392711 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}