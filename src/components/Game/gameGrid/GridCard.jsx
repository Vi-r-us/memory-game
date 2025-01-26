/* eslint-disable react/prop-types */
import Icon from "./Icon";

/**
 * GridCard component
 *
 * This component renders a card in the game grid.
 *
 * @param {Object} card - The card object
 * @param {'normal' | 'large'} [size='normal'] - The size of the card
 * @param {string} [theme='Numbers'] - The theme of the card
 * @param {Function} onClick - The click handler for the card
 * @param {Object} [rest] - Additional props to be passed to the button element
 *
 * @returns {JSX.Element} The rendered grid card component
 */
const GridCard = ({
  card,
  size = "normal",
  theme = "Numbers",
  onClick,
  ...rest
}) => {
  return (
    <button
      tabIndex={card.state === "hidden" ? 0 : -1}
      disabled={card.state !== "hidden"}
      value={card.value}
      onClick={onClick}
      className={`flex aspect-square items-center justify-center rounded-[50%] font-bold transition-colors focus:outline-none flip ${
        card.state === "hidden"
          ? "bg-neutral-700 hover:bg-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2"
          : card.state === "revealed"
          ? "bg-primary-400"
          : card.state === "visible"
          ? "bg-neutral-300"
          : ""
      } ${
        size === "large"
          ? "text-[2.5rem] sm:text-[3.5rem]"
          : "text-2xl sm:text-[2.75rem]"
      }`}
      data-testid="grid-card"
      {...rest}
    >
      {/* For Hidden Cards, we want to show the back of the card */}
      <div
        className={`front ${
          card.state === "visible" || card.state === "revealed"
            ? "front-flipped"
            : ""
        }`}
      ></div>

      {/* For Revealed Cards, we want to show the front of the card */}
      <div
        className={`back ${
          card.state === "visible" || card.state === "revealed"
            ? "back-flipped"
            : ""
        }`}
      >
        {theme === "Numbers" ? (
          <span className={`text-white transition-opacity opacity-100`}>
            {card.value}
          </span>
        ) : (
          <Icon
            iconId={card.value}
            className={`transition-opacity opacity-100
          ${
            size === "large"
              ? "max-w-9 md:max-w-12 max-h-9 md:max-h-12"
              : "max-w-5 sm:max-w-7 md:max-w-9 max-h-5 transition-opacity sm:max-h-7 md:max-h-9"
          }`}
          />
        )}
      </div>
    </button>
  );
};

export default GridCard;
