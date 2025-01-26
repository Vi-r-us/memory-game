/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import GameHeader from "./GameHeader";
import GameGrid from "../../components/Game/gameGrid";
import PlayerList from "../../components/Game/playerList";
import GameMenuDialog from "../../components/Game/dialog/GameMenuDialog";
import MultiPlayerGameOverDialog from "../../components/Game/dialog/MultiPlayerGameOverDialog";
import { useGame } from "../../hooks/useGame";

/**
 * MultiPlayerGame component
 * 
 * This component renders the multiplayer game page.
 * It includes the game grid, player list, and dialogs for game over and menu.
 * 
 * @param {Object} settings - The game settings
 * @param {Function} goToSettings - Callback function to navigate to the settings page
 * 
 * @returns {JSX.Element} The rendered multiplayer game component
 */
const MultiPlayerGame = ({ settings, goToSettings }) => {
  const [isGameOverDialogOpen, setIsGameOverDialogOpen] = useState(false);
  const [isMenuDialogOpen, setIsMenuDialogOpen] = useState(false);
  const { state, isLocked, startNewGame, revealCard } = useGame(settings);
  const [dialogState, setDialogState] = useState({ players: state.players });

  useEffect(() => {
    if (state.pairsLeft === 0) {
      setDialogState({ players: state.players });
      setIsGameOverDialogOpen(true);
    }
  }, [state.pairsLeft, state.players]);

  const onRestart = () => {
    setIsGameOverDialogOpen(false);
    setIsMenuDialogOpen(false);
    startNewGame();
  };

  return (
    <>
      <GameMenuDialog
        open={isMenuDialogOpen}
        onClose={() => setIsMenuDialogOpen(false)}
        onRestart={onRestart}
        onNewGame={goToSettings}
      />

      <MultiPlayerGameOverDialog
        open={isGameOverDialogOpen}
        onRestart={onRestart}
        onSetupNewGame={goToSettings}
        players={dialogState.players}
      />

      <GameHeader onRestart={onRestart} goToSettings={goToSettings} />

      <main className="w-grid sm:w-grid-sm md:w-grid-md mx-auto flex flex-1 flex-col justify-center sm:px-[4.6rem]">
        <GameGrid
          cards={state.cards}
          gridSize={settings.grid}
          onCardClick={(index) => !isLocked && revealCard(index)}
          theme={settings.theme}
        />
      </main>

      <footer>
        <PlayerList
          players={state.players}
          currentPlayer={state.currentPlayer}
        />
      </footer>
    </>
  );
};

export default MultiPlayerGame;
