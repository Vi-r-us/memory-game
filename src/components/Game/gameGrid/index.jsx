/* eslint-disable react/prop-types */
import GridCard from "./GridCard";

/**
 * GameGrid component
 * 
 * This component renders the game grid with cards.
 * 
 * @param {Array} cards - The array of card objects
 * @param {Function} onCardClick - The function to handle card click events
 * @param {string} gridSize - The size of the grid (4x4 or 6x6)
 * @param {string} theme - The theme of the game (Numbers or Icons)
 * 
 * @returns {JSX.Element} The rendered game grid component
 */
const GameGrid = ({ cards, onCardClick, gridSize, theme }) => {
    return (
        <div
          className={`my-6 grid gap-2 md:my-9 ${
            gridSize === '4x4' ? 'grid-cols-4 sm:gap-5' : 'grid-cols-6 sm:gap-3'
          }`}
        >
          {cards.map((card, index) => (
            <GridCard
              key={card.id}
              card={card}
              size={gridSize === '4x4' ? 'large' : 'normal'}
              onClick={() => onCardClick(index)}
              theme={theme}
            />
          ))}
        </div>
      );
}

export default GameGrid

