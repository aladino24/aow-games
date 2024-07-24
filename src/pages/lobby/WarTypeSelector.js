import React from "react";

const WarTypeSelector = ({ selectedType, onTypeChange, warTypes }) => {
  return (
    <div className="mb-3">
      <label htmlFor="warType" className="form-label">
        Pilih Tipe Perang
      </label>
      <select
        id="warType"
        className="form-select"
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="">Pilih Tipe Perang</option>
        {warTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WarTypeSelector;
