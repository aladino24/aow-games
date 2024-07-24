import React from "react";

const RulesInput = ({ rules, onRulesChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="rules" className="form-label">
        Aturan Perang
      </label>
      <textarea
        id="rules"
        className="form-control"
        rows="4"
        value={rules}
        onChange={onRulesChange}
      />
    </div>
  );
};

export default RulesInput;
