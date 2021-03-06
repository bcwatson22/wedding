import React, { useState, useEffect, useRef, useContext } from 'react';

import { InView } from 'react-intersection-observer';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import LoadingContext from './../../context/LoadingContext';

import { isInBrowser } from './../../services/utils';

import './Map.scss';

const Map = () => {
  const [mapbox, setMapbox] = useState(null);
  const [ready, setReady] = useState(null);
  const container = useRef(null);
  const marker = useRef(null);
  const { hideLoading } = useContext(LoadingContext);

  const loadPolyfills = async () => {

    if (isInBrowser && typeof window.IntersectionObserver === 'undefined') await import('intersection-observer');

    setReady(true);

  }

  const createMap = () => {

    mapboxgl.accessToken = process.env.MAPBOX_KEY;

    const initMap = ({ setMapbox, container }) => {
      const map = new mapboxgl.Map({
        container: container.current,
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: [-1.8101, 53.0778],
        zoom: 9.5
      });

      map.on('load', () => {
        setMapbox(map);
        map.resize();
        map.addControl(new mapboxgl.NavigationControl());
        new mapboxgl.Marker(marker.current).setLngLat([-1.8095, 53.0785]).addTo(map);
        hideLoading();
      });
    };

    if (!mapbox) initMap({ setMapbox, container });

  }

  useEffect(() => {

    loadPolyfills();

  }, []);

  return (
    <>
      {ready &&
        <InView as="section" className={`map map--${mapbox ? 'loaded' : 'loading'}`} onChange={(inView, entry) => inView ? createMap() : hideLoading()}>
          <article className="map__container" ref={container} />
          <span className="map__pin" ref={marker} />
        </InView>
      }
    </>
  );
};

export default Map;
