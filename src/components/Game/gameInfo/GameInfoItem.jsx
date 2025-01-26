/* eslint-disable react/prop-types */

/**
 * GameInfoItem component
 *
 * This component displays a labeled value for game information.
 *
 * @param {string} label - The label for the value
 * @param {string} value - The value to be displayed
 * @param {string} [valueClassName] - Additional class names for styling the value
 *
 * @returns {JSX.Element} The rendered game information item component
 */
const GameInfoItem = ({ label, value, valueClassName }) => {
  return (
    <div className="flex flex-col items-center rounded bg-neutral-200 pt-[0.4rem] pb-[0.75rem] sm:rounded-xl md:flex-row md:justify-between md:pt-[1.55rem] md:pb-[1.4rem] md:pl-[1.3rem] md:pr-[1.5rem]">
      {/* Display the label */}
      <span className="font-bold text-neutral-500 sm:text-[1.125rem]">
        {label}
      </span>

      {/* Display the value with optional additional class names */}
      <span
        className={`mt-1 text-[1.5rem] font-bold text-neutral-800 sm:mt-3 sm:text-[2rem] md:mt-0 ${valueClassName}`}
      >
        {value}
      </span>
    </div>
  );
};

export default GameInfoItem;
