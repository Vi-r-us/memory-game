/* eslint-disable react/prop-types */
import { formatTime } from "../../../utils/time";
import GameOverDialog from "./GameOverDialog";
import InfoListItem from "./InfoListItem";

/**
 * SinglePlayerGameOverDialog component
 *
 * This component renders a dialog that appears when the single-player game is over.
 * It includes information about the game duration and the number of moves taken.
 *
 * @param {boolean} open - Whether the dialog is open
 * @param {number} seconds - The number of seconds elapsed
 * @param {number} moves - The number of moves taken
 * @param {Function} onRestart - Callback function to handle restarting the game
 * @param {Function} onSetupNewGame - Callback function to handle setting up a new game
 *
 * @returns {JSX.Element} The rendered single-player game over dialog component
 */
const SinglePlayerGameOverDialog = ({ seconds, moves, ...rest }) => {
  return (
    <GameOverDialog
      title="You did it!"
      subtitle="Game over! Here's how you got on..."
      {...rest}
    >
      <div className="mt-6 sm:mt-10">
        <InfoListItem
          appearance="secondary"
          label="Time Elapsed"
          value={formatTime(seconds)}
          valueClassName="timer"
        />

        <InfoListItem
          appearance="secondary"
          label="Moves Taken"
          value={`${moves} Moves`}
        />
      </div>
    </GameOverDialog>
  );
};

export default SinglePlayerGameOverDialog;
