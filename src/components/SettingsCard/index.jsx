/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import OptionLabel from "../Options/optionLabel";
import OptionSelector from "../Options/optionSelector";
import { Button } from "../Button";
import { gridSettings, playersSettings, themeSettings } from "../../config";

/**
 * SettingsCard component
 *
 * This component renders a card with settings options for the memory game.
 * It includes options for selecting the theme, number of players, and grid size.
 *
 * @param {Object} props - The component props
 * @param {Function} onDone - Callback function to handle the start of the game with selected settings
 * @param {string} [className] - Additional class names for styling
 *
 * @returns {JSX.Element} The rendered settings card component
 */
const SettingsCard = ({ onDone, className, ...props }) => {
  const [theme, setTheme] = useState(themeSettings[0]);
  const [players, setPlayers] = useState(playersSettings[0]);
  const [multiplayersSettings, setMultiplayersSettings] = useState([
    { id: 1, name: "Player 1", isBot: false },
  ]);
  const [grid, setGrid] = useState(gridSettings[0]);

  const handlePlayerChange = (noOfPlayers) => {
    // Update the players state
    setPlayers(noOfPlayers);
    // Update the multiplayerPlayersSettings based on the number of players
    setMultiplayersSettings(
      Array.from({ length: noOfPlayers }, (_, index) => ({
        id: index + 1,
        name: "Player " + (index + 1),
        isBot: false,
      }))
    );
  };

  const handleMultiplayerPlayerChange = (id, isBot) => {
    // Update the multiplayerPlayersSettings based on the player ID and isBot value
    setMultiplayersSettings((prevPlayers) =>
      prevPlayers.map((player) => ({
        ...player,
        isBot: player.id === id ? isBot : player.isBot,
      }))
    );
  };

  // Handle the start button click
  const onStartClick = () => {
    onDone({ theme, players, multiplayersSettings, grid });
  };

  return (
    <div
      className={`flex flex-col rounded-xl bg-white px-6 pt-[1.3rem] pb-[1.5rem] tracking-tight sm:rounded-[1.25rem] sm:px-14 sm:pt-[3.6rem] sm:pb-[3.5rem] ${className}`}
      {...props}
    >
      {/* Theme selection */}
      <OptionLabel>Select Theme</OptionLabel>
      <OptionSelector
        name="theme"
        options={themeSettings}
        value={theme}
        onChange={setTheme}
        groupAriaLabel="Select theme"
      />

      {/* Players selection */}
      <OptionLabel>Number of Players</OptionLabel>
      <OptionSelector
        name="players"
        options={playersSettings}
        value={players}
        onChange={handlePlayerChange}
        groupAriaLabel="Select number of players"
      />

      {/* Multiplayer Players Settings selection */}
      <div
        className={`${
          players > 1 ? "h-[75px] sm:h-[95px]" : "h-0 mt-0"
        } mt-2 sm:mt-4 transition-height duration-300 ease-in-out overflow-hidden`}
      >
        <OptionLabel>Multiplayer Settings</OptionLabel>
        <OptionSelector
          name="multiplayer"
          options={multiplayersSettings}
          value={players}
          onChange={handleMultiplayerPlayerChange}
          groupAriaLabel="Select players settings"
        />
      </div>

      {/* Grid size selection */}
      <OptionLabel>Grid Size</OptionLabel>
      <OptionSelector
        name="grid"
        options={gridSettings}
        value={grid}
        onChange={setGrid}
        groupAriaLabel="Select grid size"
      />

      {/* Start button */}
      <Button onClick={onStartClick} className="mt-6">
        Start Game
      </Button>
    </div>
  );
};

export default SettingsCard;
