mapboxgl.accessToken = 'pk.eyJ1IjoibmsyOTcwIiwiYSI6ImNreDR4ZTZ4dDBhbngydnF1dzBxNzJvMDkifQ.GXAfMWbXTZ7FOAj3rI2oIg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/nk2970/cl4kcpgry000j14qlsswpi1qq',
    zoom: 1,
    maxZoom:5,
    minZoom:1,
    center: [8.072, 32.445],
    projection: {
      name: 'naturalEarth',
      center: [0, 30],
      parallels: [30, 30]
      }
    
});

// map1
map.on("load", function () {
    map.addLayer(
      {
        id: "voting",
        type: "fill",
    source: {
      type: "geojson",
      data: "data/WomenRightToVote.geojson",
    },
    paint: {
      "fill-color": [
        "step",
        ["get", "year"],
        "#ffffff",
        0, "#edede9",
        1893,  "#3E027E",
        1915, "#7904F6",
        1946, "#8367C7",
        1976, "#B3E9C7",   
        2000, "#ffe45e", 
      ],
        "fill-outline-color": "#ffffff",
        "fill-opacity": 0.8
  
     
    },

      },
      // },

      "admin-0-boundary" 
    // Here's where we tell Mapbox where to slot this new layer
    ); 
    

  });



 // Create the popup
 map.on('click', 'voting', function (e) {
  var countryName = e.features[0].properties.name;
  var yearV = e.features[0].properties.year;
 

  new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML('<h2>'+countryName+'</h2>'
          +'<h4>Women got the right to vote in '+yearV+'</h4>'
          )
      .addTo(map);
});


// Change the cursor to a pointer when the mouse is over the us_states_elections layer.
map.on("mouseenter", "voting", function () {
  map.getCanvas().style.cursor = "pointer";
});
// Change it back to a pointer when it leaves.
map.on("mouseleave", "voting", function () {
  map.getCanvas().style.cursor = "";
});


// // define layer names
const layers = [
  '1893-',
  '1914-',
  '1946-',
  '1975-',
  '2000-',
  'Data not available'
  ];
  const colors = [
    "#3E027E",
    "#7904F6",
    "#8367C7",
    "#B3E9C7",
    "#ffe45e",
    "#edede9"
    
  ];



  // create legend
  const legend = document.getElementById('legend');
   
  layers.forEach((layer, i) => {
  const color = colors[i];
  const item = document.createElement('div');
  const key = document.createElement('span');
  key.className = 'legend-key';
  key.style.backgroundColor = color;
   
  const value = document.createElement('span');
  value.innerHTML = `${layer}`;
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
  });


  // // add slider

// map.addLayer({
//   'id': 'yearSlider',
//   'type': 'symbol',
//   'source': {
//     type: "geojson",
//     data: "data/WomenRightToVote.geojson",
//   },
//   'layout': {
//   'text-field': ['concat', ['to-string', ['get', 'mag']], 'm'],
//   'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
//   'text-size': 12
//   },
//   'paint': {
//   'text-color': 'rgba(0,0,0,0.5)'
//   }
//   });
   
//   // Set filter to first month of the year
//   // 0 = January
//   filterBy(0);
   
//   document.getElementById('slider').addEventListener('input', (e) => {
//   const month = parseInt(e.target.value, 10);
//   filterBy(month);
//   });
   


   


