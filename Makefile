osmtogeojson center_london.osm > center_london.js

[51.5153, -0.0841],[51.5105, -0.0930]
minlat="51.5106000" minlon="-0.0930300" maxlat="51.5153000" maxlon="-0.0841700"

[51.5105,-0.0841700],[51.5106000,-0.0930300]
featuretool --bbox [[51.5105,-0.0841700],[51.5106000,-0.0930300]] --streets center_london.js


featuretool --bbox [[39.9058,-86.0910],[39.8992,-86.1017]] --streets map_data.json



osmtogeojson center_london.osm > center_london.js