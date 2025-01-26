/* eslint-disable react/prop-types */
import React from "react";

/**
 * PlayerListItem component
 *
 * This component renders a player item in the player list with their points and highlights the current player.
 *
 * @param {string} player - The name of the player
 * @param {number} points - The points of the player
 * @param {boolean} isCurrent - Whether the player is the current player
 *
 * @returns {JSX.Element} The rendered player list item component
 */
const PlayerListItem = ({ player, points, isCurrent, isBot }) => {
  return (
    <div>
      <div
        className={`relative flex flex-col items-center rounded pt-[0.4rem] pb-[0.75rem] transition-colors sm:items-start sm:rounded-xl sm:pt-[0.65rem] sm:pb-[0.9rem] sm:pl-[1rem] sm:pr-[1.3rem] xl:flex-row xl:items-center xl:justify-between xl:pl-[1.35rem] xl:pt-[1.5rem] xl:pb-[1.5rem] ${
          isCurrent
            ? "bg-primary-400 text-white"
            : "bg-neutral-200 text-neutral-500"
        }`}
      >
        <svg
          viewBox="0 0 10 5"
          className={`transition-triangle absolute top-0 left-1/2 w-4 -translate-x-1/2 -translate-y-full sm:w-6 2xl:w-10 ${
            isCurrent
              ? "fill-primary-400 h-2 sm:h-3 2xl:h-5"
              : "h-0 fill-neutral-200"
          }`}
        >
          <polygon points="0 5, 5 0, 10 5" />
        </svg>
        <span className="font-bold sm:text-[0.9375rem] xl:text-[1.125rem]">
          <span className="sm:hidden">{isBot ? "B" : "P"}</span>
          <span className="hidden sm:inline">{isBot ? "Bot" : "Player"} </span>
          {player}
        </span>

        <span
          className={`mt-[0.25rem] text-[1.5rem] font-bold transition-colors duration-[25ms] ease-linear sm:mt-[0.5rem] sm:text-[1.5rem] xl:mt-0 xl:text-[2rem] ${
            !isCurrent ? "text-neutral-800" : ""
          }`}
        >
          {points}
        </span>
      </div>
      <p
        className={`mt-5 hidden text-center text-[0.8125rem] text-sm font-bold uppercase tracking-[0.375em] text-neutral-800 transition-opacity 2xl:block ${
          !isCurrent ? "opacity-0" : "opacity-100"
        }`}
      >
        Current turn
      </p>
    </div>
  );
};

export default PlayerListItem;
