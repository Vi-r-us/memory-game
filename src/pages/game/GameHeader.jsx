/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import GameMenuDialog from "../../components/Game/dialog/GameMenuDialog";

/**
 * GameHeader component
 *
 * This component renders the header for the game page.
 * It includes the game title and buttons for restarting the game, starting a new game, and opening the menu.
 *
 * @param {Function} onRestart - Callback function to handle the restart of the game
 * @param {Function} goToSettings - Callback function to navigate to the settings page
 *
 * @returns {JSX.Element} The rendered game header component
 */
const GameHeader = ({ onRestart, goToSettings }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the menu when the window is resized
  useEffect(() => {
    const onResize = () => isMenuOpen && setIsMenuOpen(false);

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [isMenuOpen]);

  return (
    <header className="flex items-center justify-between">
      {/* Game title */}
      <h1 className="text-2xl font-bold text-neutral-800 sm:text-[2.5rem]">
        memory
      </h1>

      {/* Buttons for larger screens */}
      <div className="hidden sm:block">
        <Button
          className="mr-4"
          size="small"
          onClick={() => {
            setIsMenuOpen(false);
            onRestart();
          }}
        >
          Restart
        </Button>
        <Button size="small" appearance="secondary" onClick={goToSettings}>
          New Game
        </Button>
      </div>

      {/* Menu button for smaller screens */}
      <div className="sm:hidden">
        <Button size="small" onClick={() => setIsMenuOpen(true)}>
          Menu
        </Button>

        {/* Game menu dialog */}
        <GameMenuDialog
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          onRestart={onRestart}
          onNewGame={goToSettings}
        />
      </div>
    </header>
  );
};

export default GameHeader;
