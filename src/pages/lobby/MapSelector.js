import React from "react";

const MapSelector = ({ selectedMap, onMapChange, maps }) => {
  return (
    <div className="mb-3">
      <label htmlFor="map" className="form-label">
        Pilih Map
      </label>
      <select
        id="map"
        className="form-select"
        value={selectedMap}
        onChange={(e) => onMapChange(e.target.value)}
      >
        <option value="">Pilih Map</option>
        {maps.map((map, index) => (
          <option key={index} value={map.name}>
            {map.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MapSelector;
