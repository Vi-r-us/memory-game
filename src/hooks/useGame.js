import { useEffect, useReducer, useState } from "react";
import { createGame } from "../utils/memoryGame";
import { revealWaitTime } from "../config";
import { produce } from "immer";

/**
 * Reducer function to manage the game state.
 *
 * @param {Object} state - The current game state
 * @param {Object} action - The action to perform on the state
 * @returns {Object} The new game state
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "revealCard":
      // Reveal the card at the specified index
      return produce(state, (draft) => {
        draft.cards[action.index].state = "revealed";
        draft.revealed.push(action.index);
        draft.moves++;
      });

    case "hideCards":
      // Hide all cards
      return produce(state, (draft) => {
        for (let i = 0; i < draft.cards.length; i++) {
          draft.cards[i].state = "hidden";
        }
      });

    case "finishTurn":
      // Finish the current turn
      return produce(state, (draft) => {
        const revealedCard1 = draft.cards[state.revealed[0]];
        const revealedCard2 = draft.cards[state.revealed[1]];

        // Check if the revealed cards match
        if (revealedCard1.value === revealedCard2.value) {
          revealedCard1.state = "visible";
          revealedCard2.state = "visible";
          draft.players[draft.currentPlayer].points++;
          draft.pairsLeft--;
        } else {
          revealedCard1.state = "hidden";
          revealedCard2.state = "hidden";
          draft.currentPlayer =
            draft.currentPlayer === draft.players.length - 1
              ? 0
              : draft.currentPlayer + 1;
        }

        draft.revealed = [];
      });

    case "newGame":
      // Start a new game with the provided settings
      return createGame(action.settings);

    default:
      return state;
  }
};

/**
 * Custom hook to manage the game state.
 *
 * @param {Object} settings - The game settings
 * @returns {Object} The game state and control functions
 */
export function useGame(settings) {
  const [state, dispatch] = useReducer(reducer, createGame(settings));
  const [isLocked, setIsLocked] = useState(false);

  const makeBotMove = (state, dispatch) => {
    const hiddenCards = state.cards.filter((card) => card.state === "hidden");
    if (hiddenCards.length > 0) {
      const randomCardIndex = state.cards.indexOf(
        hiddenCards[Math.floor(Math.random() * hiddenCards.length)]
      );
      dispatch({ type: "revealCard", index: randomCardIndex });
    }
  };

  useEffect(() => {
    // Lock the game if two cards are revealed
    if (state.revealed.length === 2) {
      setIsLocked(true);

      // Set a timeout to finish the turn after a delay
      const timeout = setTimeout(() => {
        dispatch({ type: "finishTurn" });
        setIsLocked(false);
      }, revealWaitTime);

      // Clear the timeout on cleanup
      return () => {
        clearTimeout(timeout);
        setIsLocked(false);
      };
    } else if (
      state.players[state.currentPlayer].isBot &&
      state.revealed.length === 0
    ) {
      // If it's a bot's turn and no cards are revealed, make a bot move
      // Lock the game to prevent user interaction
      setIsLocked(true);

      // Set a timeout to reveal the cards after a delay
      const timeoutForBot1 = setTimeout(() => {
        makeBotMove(state, dispatch);
        makeBotMove(state, dispatch);
        setIsLocked(false);
      }, revealWaitTime);

      // Clear the timeouts on cleanup
      return () => {
        clearTimeout(timeoutForBot1);
        setIsLocked(false);
      };
    }
  }, [state.revealed.length, state.currentPlayer, state]);

  /**
   * Starts a new game with the current settings.
   */
  const startNewGame = () => dispatch({ type: "newGame", settings });

  /**
   * Reveals a card at the given index.
   *
   * @param {number} index - The index of the card to reveal
   */
  const revealCard = (index) => dispatch({ type: "revealCard", index });

  return { state, isLocked, startNewGame, revealCard };
}
