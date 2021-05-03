var mymap = L.map('mapid').setView([51.505, -0.09], 13);

//adding tilelayer

//Super Mario Mapbox style inladen als Tilelayer
L.tileLayer(
  'https://api.mapbox.com/styles/v1/ikwillet/cknnbwg3f46r117p1bg3gfj2g/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWt3aWxsZXQiLCJhIjoiY2tubjd5a3VtMGJ2dDJvbGF6NXl4bTA2OCJ9.tflsVQCVhM4im9wS94mkHw',
  {
    attribution: 'Super Mario',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(mymap);

//geolocation
mymap.locate({ setView: true, maxZoom: 14 });

//markeren jouw locatie
function onLocationMarker(e) {
  L.marker(e.latlng, {
    icon: new L.icon({
      iconUrl: './icons/pointer.svg',
      iconSize: [30, 47.8],
    }),
  })
    .addTo(mymap)
    .bindPopup('Je bent hier')
    .openPopup();
}

mymap.on('locationfound', onLocationMarker);

//markeren jouw locatie en weergeven hoe dicht je bij de gemeten locatie bent
// function onLocationProximity(e) {
//     var radius = e.accuracy;

//     L.marker(e.latlng).addTo(mymap)
//         .bindPopup("Je bent binnen " + radius + " meter van dit punt").openPopup();

//     L.circle(e.latlng, radius).addTo(mymap);
// }

// mymap.on('locationfound', onLocationProximity);

//standaard marker
var marker = L.marker([52.048967, 4.291007]).addTo(mymap);
marker.bindPopup('<b>Hello Moerwijk!</b><br>Ik ben een popup.').openPopup();

//circle marker
var circle = L.circle([52.04534, 4.302811], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 100,
}).addTo(mymap);
circle.bindPopup('Ik ben een cirkel in Park Overvoorde.');

var castle = L.icon({
  iconUrl: './icons/castle.svg',
  iconSize: [40, 53],
});

L.marker([52.044139, 4.300987], { icon: castle }).addTo(mymap);

// naam
// Breedtegraad,
// Lengtegraad
// locatie icon
// scaledSize breedte,
// en hoogte
const markers = [
  //Moerwijk Markers
  ["Yoshi's House", 52.044794, 4.28005, './icons/yoshi_house.svg', 38, 31],
  ['Ghost House', 52.047566, 4.308938, './icons/ghosthouse.svg', 40, 48],
  ['Castle', 52.044139, 4.300987, './icons/castle.svg', 40, 53],
  ['Warp Pipe', 52.054328, 4.308512, './icons/pipe.svg', 38, 42.5],
  ['Star World', 52.054873, 4.288318, './icons/star.svg', 38, 38],
  ['Donut Plains', 52.055691, 4.263141, './icons/hill_with_eyes.svg', 50, 60.7],
];

//for loop om de markers op de kaart te zetten
for (let i = 0; i < markers.length; i++) {
  const currMarker = markers[i];

  //Marker neerzetten
  const marker = new L.marker([currMarker[1], currMarker[2]], {
    icon: new L.icon({
      iconUrl: currMarker[3],
      iconSize: [currMarker[4], currMarker[5]],
    }),
  })
    .addTo(mymap)
    .bindPopup(currMarker[0]);
}

//Polygon
var polygon = L.polygon([
  [52.05767787851548, 4.293661880894559],
  [52.05898522997547, 4.291735754728636],
  [52.0598553266971, 4.288154451700404],
  [52.0609354935163, 4.283224518435924],
  [52.06068818419129, 4.282262091862268],
  [52.05857011642244, 4.278234844517341],
  [52.05708929209503, 4.275900545049581],
  [52.05479201446987, 4.277150649087567],
  [52.05261887295439, 4.279248441971431],
  [52.04909029729211, 4.284070422140607],
  [52.05079328696786, 4.287878743185225],
  [52.05304035762863, 4.29165010967049],
  [52.05452074853039, 4.295667294629812],
  [52.05767787851548, 4.293661880894559],
]).addTo(mymap);
polygon.bindPopup('Ik ben een polygoon van het Zuiderpark.');

//losse popup
var popup = L.popup()
  .setLatLng([52.044544, 4.279845])
  .setContent('I am a standalone popup.')
  .openOn(mymap);

//click en krijg coördinaten terug
var popup1 = L.popup();

function onMapClick(e) {
  popup1
    .setLatLng(e.latlng)
    .setContent(
      'Je klikte op de kaart op deze coördinaten : ' + e.latlng.toString()
    )
    .openOn(mymap);
}

mymap.on('click', onMapClick);
