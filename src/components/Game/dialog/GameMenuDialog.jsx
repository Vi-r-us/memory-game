/* eslint-disable react/prop-types */
import AppDialog from "../../AppDialog";
import { Button } from "../../Button";

/**
 * GameMenuDialog component
 *
 * This component renders a dialog with options to restart the game, start a new game, or resume the current game.
 *
 * @param {boolean} open - Whether the dialog is open
 * @param {Function} onClose - Callback function to handle closing the dialog
 * @param {Function} onRestart - Callback function to handle restarting the game
 * @param {Function} onNewGame - Callback function to handle starting a new game
 *
 * @returns {JSX.Element} The rendered game menu dialog component
 */
const GameMenuDialog = ({ open, onClose, onRestart, onNewGame }) => {
  return (
    <AppDialog open={open} onClose={onClose}>
      {/* Restart button */}
      <Button onClick={onRestart}>Restart</Button>
      {/* New game button */}
      <Button appearance="secondary" onClick={onNewGame} className="mt-3">
        New Game
      </Button>
      {/* Resume game button */}
      <Button appearance="secondary" onClick={onClose} className="mt-3">
        Resume Game
      </Button>
    </AppDialog>
  );
};

export default GameMenuDialog;
