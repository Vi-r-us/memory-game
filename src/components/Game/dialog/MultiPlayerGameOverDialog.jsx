/* eslint-disable react/prop-types */
import InfoListItem from "./InfoListItem";
import GameOverDialog from "./GameOverDialog";

/**
 * MultiPlayerGameOverDialog component
 *
 * This component renders a dialog that appears when the multiplayer game is over.
 * It includes information about the players' scores and the winner.
 *
 * @param {boolean} open - Whether the dialog is open
 * @param {Function} onRestart - Callback function to handle restarting the game
 * @param {Function} onSetupNewGame - Callback function to handle setting up a new game
 * @param {Array} players - The array of player objects
 *
 * @returns {JSX.Element} The rendered multiplayer game over dialog component
 */
const MultiPlayerGameOverDialog = ({ players, ...rest }) => {
  const sortedPlayers = players.slice().sort((a, b) => b.points - a.points);
  const winnerPoints = sortedPlayers[0].points;
  const isDraw = sortedPlayers[0].points === sortedPlayers[1].points;

  return (
    <GameOverDialog
      title={
        isDraw
          ? "It's a tie!"
          : `${sortedPlayers[0].isBot ? "Bot" : "Player"} ${
              sortedPlayers[0].name
            } Wins!`
      }
      subtitle="Game over! Here are the results..."
      {...rest}
    >
      <div className="mt-[1.375rem] md:mt-[2.5rem] md:mb-4">
        {sortedPlayers.map((player) => {
          const isWinner = player.points === winnerPoints;

          const pairs =
            player.points === 1
              ? "1 Pair"
              : player.points > 1
              ? `${player.points} Pairs`
              : "No Pair";

          return (
            <InfoListItem
              appearance={isWinner ? "primary" : "secondary"}
              key={player.name}
              label={`${player.isBot ? "Bot" : "Player"} ${
                player.name
              }${isWinner ? " (Winner!)" : ""}`}
              value={pairs}
            />
          );
        })}
      </div>
    </GameOverDialog>
  );
};

export default MultiPlayerGameOverDialog;
