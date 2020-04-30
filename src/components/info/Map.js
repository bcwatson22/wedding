import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import './Map.scss';

const Map = () => {
  const [mapbox, setMapbox] = useState(null);
  const container = useRef(null);
  const marker = useRef(null);

  useEffect(() => {

    // mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmN3YXRzb24yMiIsImEiOiJjazltaGpnc3IwMDB3M3VwNHVjY2s0ZjI0In0.P603X9dgsSlFC38vmKvXXQ';

    const initMap = ({ setMap, container }) => {
      const map = new mapboxgl.Map({
        container: container.current,
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: [-1.8101, 53.0778],
        zoom: 10
      });

      map.on('load', () => {
        setMapbox(map);
        map.resize();
        map.addControl(new mapboxgl.NavigationControl());
        new mapboxgl.Marker(marker.current).setLngLat([-1.8095, 53.0785]).addTo(map);
      });
    };

    if (!mapbox) initMap({ setMapbox, container });

  }, [mapbox]);

  return (
    <section className={`map${mapbox ? ' map--loaded' : ''}`}>
      <article className="map__container" ref={container} />
      <span className="map__pin" ref={marker} />
    </section>
  );
};

export default Map;
