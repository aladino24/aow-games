import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WarTypeSelector from "./WarTypeSelector";
import MapSelector from "./MapSelector";
import PlayerSelection from "./PlayerSelection";
import RulesInput from "./RulesInput";
import './lobby.css';

const Lobby = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedMap, setSelectedMap] = useState("");
  const [selectedPlayers, setSelectedPlayers] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [rules, setRules] = useState("");

  const warTypes = [
    "1vs1 (Konfrontasi)",
    "1vs1 (Dominasi)",
    "1vs1 (Manuver)",
    "2vs2",
    "3vs3",
    "FFA3",
    "FFA4",
    "FFA5",
    "FFA6",
  ];

  const maps = [
    { name: "Map1", img: "https://via.placeholder.com/150" },
    { name: "Map2", img: "https://via.placeholder.com/150" },
  ];

  const players = [
    "Player1",
    "Player2",
    "Player3",
    "Player4",
    "Player5",
    "Player6",
  ];

  const handlePlayerChange = (index, event) => {
    const newSelectedPlayers = [...selectedPlayers];
    newSelectedPlayers[index] = event.target.value;
    setSelectedPlayers(newSelectedPlayers);
  };

  const handleRulesChange = (event) => {
    setRules(event.target.value);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header text-center">
              <h2>Waiting Room</h2>
            </div>
            <div className="card-body">
              <WarTypeSelector
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                warTypes={warTypes}
              />
              <MapSelector
                selectedMap={selectedMap}
                onMapChange={setSelectedMap}
                maps={maps}
              />
              <PlayerSelection
                selectedType={selectedType}
                selectedPlayers={selectedPlayers}
                onPlayerChange={handlePlayerChange}
                players={players}
              />
              <RulesInput
                rules={rules}
                onRulesChange={handleRulesChange}
              />
              <div className="text-center mt-4">
                <button className="btn btn-primary" onClick={() => {}}>
                  Start Game
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
