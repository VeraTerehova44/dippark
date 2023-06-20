import React from "react";

import classes from "./Mmap.module.scss";
import { Map, Placemark, SearchControl, YMaps } from "@pbe/react-yandex-maps";

const Mmap = () => {
  return (
    <div className={classes.background}>
      <div className={classes.title}>С нами уже сотрудничают</div>
      <YMaps>
        <Map
          className={classes.map}
          defaultState={{
            center: [57.767918, 40.926894],
            zoom: 13,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark
            modules={["geoObject.addon.balloon"]}
            defaultGeometry={[57.767918, 40.926894]}
            properties={{
              balloonContentBody: "Я первая парковка",
            }}
          />
          <Placemark
            modules={["geoObject.addon.balloon"]}
            defaultGeometry={[57.78797, 40.926894]}
            properties={{
              balloonContentBody: "Я вторая парковка",
            }}
          />
          <Placemark
            modules={["geoObject.addon.balloon"]}
            defaultGeometry={[57.77997, 40.925]}
            properties={{
              balloonContentBody: "Парковка!",
            }}
          />
          <SearchControl />
        </Map>
      </YMaps>
    </div>
  );
};

export default Mmap;
