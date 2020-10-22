const mapa = document.getElementById("mapa");
const leafletMapa = L.map(mapa, { center: [-21.2013666, -47.79695], zoom: 15 });

const baseMap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {} ); 

baseMap.addTo(leafletMapa);