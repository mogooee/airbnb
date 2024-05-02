/* eslint-disable camelcase */
import React, { useEffect, useRef, useState } from 'react';
import GNB from 'components/GNB/GNB';
import AccomodationListView, { type Accomodation } from 'components/accomodations/AccomodationListView';
import makeDummyData from 'utils/dummyDataUtil';
import {
  getCenterPos,
  getCurrentPos,
  getHTML,
  handleClickMarker,
  makeClusterer,
  makeMap,
  makeMarker,
  searchPlaces,
} from 'utils/mapUtil';
import * as S from './index.styles';

declare global {
  interface Window {
    kakao: any;
    // eslint-disable-next-line no-unused-vars
    clickOverlay: (args: HTMLElement) => void;
  }
}

export interface Pos {
  x: number;
  y: number;
}

// main에서 넘어와야 하는 state
const MIN_COST = 50000;
const MAX_COST = 100000;
const days = 5;

const ACCOMODATION_CODE = 'AD5';
const INIT_CENTER_POS = { x: 127.033417, y: 37.490821 };
const MAP_LEVEL = 5;

export default function Search(): JSX.Element {
  const { kakao } = window;
  const mapRef = useRef<HTMLDivElement>(null);
  const [centerPos, setCenterPos] = useState<Pos>(INIT_CENTER_POS);
  const [accomodations, setAccomodations] = useState<Accomodation[]>([]);
  const [mapLevel, setMapLevel] = useState<number>(MAP_LEVEL);

  window.clickOverlay = (overlay: HTMLElement) => {
    const selectedAd = accomodations.find((e) => e.id === overlay.dataset.id);
    if (!selectedAd) return;

    const className = 'modal-ad';
    const modal = getHTML.modalAd(className, { ...selectedAd }, days * selectedAd.cost);

    handleClickMarker({ overlay, content: modal, className });
  };

  useEffect(() => {
    const mapContainer = mapRef.current;
    if (!mapContainer) return;

    const map = makeMap(mapContainer, centerPos, mapLevel);

    kakao.maps.event.addListener(map, 'zoom_changed', () => {
      const level = map.getLevel();
      setMapLevel(level);
    });

    const clusterer = makeClusterer(map, MAP_LEVEL);

    const searchSuccessCallback = (data) => {
      const newAccomodations = makeDummyData(data, MIN_COST, MAX_COST);
      setAccomodations(newAccomodations);

      const markers = newAccomodations.map((e) => {
        const content = getHTML.marker(e);
        const position = new kakao.maps.LatLng(e.y, e.x);
        const marker = makeMarker(position, content);
        return marker;
      });

      clusterer.addMarkers(markers);
    };
    searchPlaces(map, ACCOMODATION_CODE, searchSuccessCallback);

    getCenterPos(map, setCenterPos);
  }, [kakao, centerPos, mapLevel]);

  const locationLoadSuccess = (pos) => {
    setCenterPos({ x: pos.La, y: pos.Ma });
  };

  return (
    <main>
      <S.Header>
        <GNB />
      </S.Header>
      <div style={{ display: 'flex', height: '100vh', paddingTop: 98, overflow: 'hidden' }}>
        {accomodations.length > 0 ? (
          <AccomodationListView
            accomodations={accomodations}
            days={days}
            setCenterPos={setCenterPos}
            setMapLevel={setMapLevel}
          />
        ) : (
          <div>Loading...</div>
        )}
        <div style={{ flex: 1 }}>
          <S.Map id="map" ref={mapRef} />
          <S.CurrentPositionBtn
            style={{ backgroundColor: '#fff', position: 'absolute', top: 110, right: 10 }}
            type="button"
            onClick={() => getCurrentPos(locationLoadSuccess)}
          >
            현재 위치
          </S.CurrentPositionBtn>
        </div>
      </div>
    </main>
  );
}
