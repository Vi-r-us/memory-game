/* eslint-disable react/prop-types */
import { formatTime } from "../../../utils/time";
import GameInfoItem from "./GameInfoItem";

/**
 * GameInfo component
 *
 * This component displays the game information such as time and moves.
 *
 * @param {number} seconds - The number of seconds elapsed
 * @param {number} moves - The number of moves made
 *
 * @returns {JSX.Element} The rendered game information component
 */
const GameInfo = ({ seconds, moves }) => {
  return (
    <div className="grid grid-cols-2 gap-[1.4rem] sm:gap-[1.7rem]">
      {/* Display the formatted time */}
      <GameInfoItem
        valueClassName="timer"
        label="Time"
        value={formatTime(seconds)}
      />
      {/* Display the number of moves */}
      <GameInfoItem label="Moves" value={moves.toString()} />
    </div>
  );
};

export default GameInfo;
