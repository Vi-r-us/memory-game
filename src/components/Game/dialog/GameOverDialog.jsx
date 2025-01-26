/* eslint-disable react/prop-types */
import { DialogTitle } from "@headlessui/react";
import AppDialog from "../../AppDialog";
import Button from "../../Button";

/**
 * GameOverDialog component
 *
 * This component renders a dialog that appears when the game is over.
 * It includes options to restart the game or set up a new game.
 *
 * @param {boolean} open - Whether the dialog is open
 * @param {string} title - The title of the dialog
 * @param {string} subtitle - The subtitle of the dialog
 * @param {Function} onRestart - Callback function to handle restarting the game
 * @param {Function} onSetupNewGame - Callback function to handle setting up a new game
 * @param {React.ReactNode} children - The content to be displayed inside the dialog
 *
 * @returns {JSX.Element} The rendered game over dialog component
 */
const GameOverDialog = ({
  open,
  title,
  subtitle,
  onRestart,
  onSetupNewGame,
  children,
}) => {
  return (
    <AppDialog open={open} onClose={() => {}}>
      <DialogTitle className="mt-[0.45rem] text-center text-2xl font-bold text-neutral-800 sm:text-[3rem]">
        {title}
      </DialogTitle>
      <p className="mt-[0.45rem] text-center text-sm font-bold text-neutral-500 sm:mt-[2rem] sm:text-[1.125rem]">
        {subtitle}
      </p>

      {children}

      <div className="flex flex-col sm:hidden">
        <Button onClick={onRestart} className="mt-6">
          Restart
        </Button>
        <Button
          onClick={onSetupNewGame}
          className="mt-4"
          appearance="secondary"
        >
          Setup New Game
        </Button>
      </div>

      <div className="mt-10 hidden gap-[0.85rem] sm:grid md:grid-cols-2">
        <Button size="small" onClick={onRestart}>
          Restart
        </Button>
        <Button size="small" onClick={onSetupNewGame} appearance="secondary">
          Setup New Game
        </Button>
      </div>
    </AppDialog>
  );
};

export default GameOverDialog;
