import PlayerListItem from "./playerListItem";

/**
 * PlayerList component
 *
 * This component renders a list of players with their points and highlights the current player.
 *
 * @param {Array} players - The array of player objects
 * @param {number} currentPlayer - The index of the current player
 *
 * @returns {JSX.Element} The rendered player list component
 */
const  index = ({ players, currentPlayer }) => {
  return (
    <div
      className={`grid gap-[1.4rem] sm:gap-3 2xl:gap-7 ${
        players.length === 2
          ? "grid-cols-2 xl:px-40"
          : players.length === 3
          ? "grid-cols-3"
          : "grid-cols-4"
      }`}
    >
      {players.map((player, index) => (
        <PlayerListItem
          key={index}
          player={player.name}
          points={player.points}
          isBot={player.isBot}
          isCurrent={currentPlayer === index}
        />
      ))}
    </div>
  );
};

export default index;
