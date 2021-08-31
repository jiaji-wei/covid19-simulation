convertOsm:
	# osmtogeojson ./data/map/london.osm > ./src/static/map/london/map_data.json
	osmtogeojson ./data/map/melbouren.osm > ./src/static/map/melbourne/map_data.json
	osmtogeojson ./data/map/newyork.osm > ./src/static/map/newyork/map_data.json
	osmtogeojson ./data/map/phoenix.osm > ./src/static/map/phoenix/map_data.json
	osmtogeojson ./data/map/sydney.osm > ./src/static/map/sydney/map_data.json