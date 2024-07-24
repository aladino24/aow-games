import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./PlayerSelection.css"; // Pastikan nama file CSS benar

const PlayerSelection = ({
  selectedType,
  selectedPlayers,
  onPlayerChange,
  players,
  selectedMap,
  maps = [],
}) => {
  // Default empty array
  const imgClass = "img-fluid";

  const renderPlayerSelects = () => {
    const selectedMapImg =
      maps.find((map) => map.name === selectedMap)?.img ||
      "https://via.placeholder.com/150";

    if (selectedType === "2vs2") {
      return (
        <div className="row">
          <div className="col-4 text-center">
            <h6>Player 1</h6>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <select
                className="form-select"
                value={selectedPlayers[0]}
                onChange={(e) => onPlayerChange(0, e)}
              >
                <option value="">Pilih Player 1</option>
                {players.map((player, index) => (
                  <option key={index} value={player}>
                    {player}
                  </option>
                ))}
              </select>
            </div>
            <h6>Player 2</h6>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <select
                className="form-select"
                value={selectedPlayers[1]}
                onChange={(e) => onPlayerChange(1, e)}
              >
                <option value="">Pilih Player 2</option>
                {players.map((player, index) => (
                  <option key={index} value={player}>
                    {player}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-4 text-center">
            <img src={selectedMapImg} alt="Selected Map" className={imgClass} />
          </div>
          <div className="col-4 text-center">
            <h6>Player 3</h6>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <select
                className="form-select"
                value={selectedPlayers[2]}
                onChange={(e) => onPlayerChange(2, e)}
              >
                <option value="">Pilih Player 3</option>
                {players.map((player, index) => (
                  <option key={index} value={player}>
                    {player}
                  </option>
                ))}
              </select>
            </div>
            <h6>Player 4</h6>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <select
                className="form-select"
                value={selectedPlayers[3]}
                onChange={(e) => onPlayerChange(3, e)}
              >
                <option value="">Pilih Player 4</option>
                {players.map((player, index) => (
                  <option key={index} value={player}>
                    {player}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      );
    } else if (selectedType === "3vs3") {
      return (
        <div className="row">
          <div className="col-4 text-center">
            <h6>Player 1</h6>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <select
                className="form-select custom-select"
                value={selectedPlayers[0]}
                onChange={(e) => onPlayerChange(0, e)}
              >
                <option value="">Pilih Player 1</option>
                {players.map((player, index) => (
                  <option key={index} value={player}>
                    {player}
                  </option>
                ))}
              </select>
            </div>
            <h6>Player 2</h6>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <select
                className="form-select custom-select"
                value={selectedPlayers[1]}
                onChange={(e) => onPlayerChange(1, e)}
              >
                <option value="">Pilih Player 2</option>
                {players.map((player, index) => (
                  <option key={index} value={player}>
                    {player}
                  </option>
                ))}
              </select>
            </div>
            <h6>Player 3</h6>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <select
                className="form-select custom-select"
                value={selectedPlayers[2]}
                onChange={(e) => onPlayerChange(2, e)}
              >
                <option value="">Pilih Player 3</option>
                {players.map((player, index) => (
                  <option key={index} value={player}>
                    {player}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-4 text-center">
            <img src={selectedMapImg} alt="Selected Map" className={imgClass} />
          </div>
          <div className="col-4 text-center">
            <h6>Player 4</h6>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <select
                className="form-select custom-select"
                value={selectedPlayers[3]}
                onChange={(e) => onPlayerChange(3, e)}
              >
                <option value="">Pilih Player 4</option>
                {players.map((player, index) => (
                  <option key={index} value={player}>
                    {player}
                  </option>
                ))}
              </select>
            </div>
            <h6>Player 5</h6>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <select
                className="form-select custom-select"
                value={selectedPlayers[4]}
                onChange={(e) => onPlayerChange(4, e)}
              >
                <option value="">Pilih Player 5</option>
                {players.map((player, index) => (
                  <option key={index} value={player}>
                    {player}
                  </option>
                ))}
              </select>
            </div>
            <h6>Player 6</h6>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <select
                className="form-select custom-select"
                value={selectedPlayers[5]}
                onChange={(e) => onPlayerChange(5, e)}
              >
                <option value="">Pilih Player 6</option>
                {players.map((player, index) => (
                  <option key={index} value={player}>
                    {player}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      );
    } else if (selectedType.startsWith("FFA")) {
      const numberOfPlayers = parseInt(selectedType.replace("FFA", ""), 10);
      const half = Math.ceil(numberOfPlayers / 2);

      return (
        <div className="row">
          <div className={`col-${12 - 6} text-center`}>
            {Array.from({ length: half }, (_, index) => (
              <div key={index}>
                <h6>Player {index + 1}</h6>
                <div className="input-group mb-2">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <select
                    className="form-select"
                    value={selectedPlayers[index] || ""}
                    onChange={(e) => onPlayerChange(index, e)}
                  >
                    <option value="">Pilih Player {index + 1}</option>
                    {players.map((player, idx) => (
                      <option key={idx} value={player}>
                        {player}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
          <div className="col-4 text-center">
            <img src={selectedMapImg} alt="Selected Map" className={imgClass} />
          </div>
          <div className={`col-${6} text-center`}>
            {Array.from({ length: numberOfPlayers - half }, (_, index) => (
              <div key={index + half}>
                <h6>Player {index + half + 1}</h6>
                <div className="input-group mb-2">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <select
                    className="form-select"
                    value={selectedPlayers[index + half] || ""}
                    onChange={(e) => onPlayerChange(index + half, e)}
                  >
                    <option value="">Pilih Player {index + half + 1}</option>
                    {players.map((player, idx) => (
                      <option key={idx} value={player}>
                        {player}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-3 text-center">
            <h6>Player 1</h6>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <select
                className="form-select"
                value={selectedPlayers[0]}
                onChange={(e) => onPlayerChange(0, e)}
              >
                <option value="">Pilih Player 1</option>
                {players.map((player, index) => (
                  <option key={index} value={player}>
                    {player}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-6 text-center">
            <img src={selectedMapImg} alt="Selected Map" className={imgClass} />
          </div>
          <div className="col-3 text-center">
            <h6>Player 2</h6>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <select
                className="form-select"
                value={selectedPlayers[1]}
                onChange={(e) => onPlayerChange(1, e)}
              >
                <option value="">Pilih Player 2</option>
                {players.map((player, index) => (
                  <option key={index} value={player}>
                    {player}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="row text-center align-items-center">
      {renderPlayerSelects()}
    </div>
  );
};

export default PlayerSelection;
