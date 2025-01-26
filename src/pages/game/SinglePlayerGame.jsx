/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import GameHeader from "./GameHeader";
import { useTimer } from "../../hooks/useTimer";
import { useGame } from "../../hooks/useGame";
import GameInfo from "../../components/Game/gameInfo";
import GameGrid from "../../components/Game/gameGrid";
import SinglePlayerGameOverDialog from "../../components/Game/dialog/SinglePlayerGameOverDialog";

/**
 * SinglePlayerGame component
 * 
 * This component renders the single-player game page.
 * It includes the game grid, game info, and dialogs for game over and menu.
 * 
 * @param {Object} settings - The game settings
 * @param {Function} goToSettings - Callback function to navigate to the settings page
 * 
 * @returns {JSX.Element} The rendered single-player game component
 */
const SinglePlayerGame = ({ settings, goToSettings }) => {
  const [isGameOverDialogOpen, setIsGameOverDialogOpen] = useState(false);
  const [dialogState, setDialogState] = useState({
    seconds: 0,
    moves: 0,
  });

  // Custom hook to manage the timer
  const { timerSeconds, setIsTimerRunning, resetTimer } = useTimer();

  // Custom hook to manage the timer
  const { state, isLocked, startNewGame, revealCard } = useGame(settings);

  useEffect(() => {
    // Check if all pairs are found
    if (state.pairsLeft === 0) {
      setIsTimerRunning(false);
      setDialogState({ seconds: timerSeconds, moves: state.moves });
      setIsGameOverDialogOpen(true);
    }
  }, [state.pairsLeft, state.moves, timerSeconds, setIsTimerRunning]);

  const onRestart = () => {
    resetTimer();
    startNewGame();
    setIsGameOverDialogOpen(false);
  };

  return (
    <>
      <SinglePlayerGameOverDialog
        open={isGameOverDialogOpen}
        seconds={dialogState.seconds}
        moves={dialogState.moves}
        onRestart={onRestart}
        onSetupNewGame={goToSettings}
      />

      <GameHeader onRestart={onRestart} goToSettings={goToSettings} />

      <div className="w-grid sm:w-grid-sm md:w-grid-md mx-auto flex flex-1 flex-col sm:px-[2rem] sm:pb-[0.7rem] md:px-[4.6rem]">
        <main className="flex flex-1 flex-col justify-center">
          <GameGrid
            cards={state.cards}
            gridSize={settings.grid}
            onCardClick={(index) => !isLocked && revealCard(index)}
            theme={settings.theme}
          />
        </main>

        <footer>
          <GameInfo seconds={timerSeconds} moves={state.moves} />
        </footer>
      </div>
    </>
  );
};

export default SinglePlayerGame;
