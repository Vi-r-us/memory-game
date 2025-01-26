/**
 * @typedef {Object} Settings
 * @property {string[]} themeSettings - The available theme settings
 * @property {string[]} multiplayersSettings - The available player settings
 * @property {string[]} gridSettings - The available grid settings
 */

/**
 * @typedef {Object} Card
 * @property {string} id - The unique identifier for the card
 * @property {string} value - The value of the card
 * @property {'hidden' | 'revealed' | 'visible'} state - The state of the card
 */

/**
 * @typedef {Object} Player
 * @property {string} name - The name of the player
 * @property {number} points - The points of the player
 */

/**
 * @typedef {Object} GameState
 * @property {Player[]} players - The list of players
 * @property {number} currentPlayer - The index of the current player
 * @property {Card[]} cards - The list of cards
 * @property {number} pairsLeft - The number of pairs left
 * @property {number[]} revealed - The indices of the revealed cards
 * @property {number} moves - The number of moves made
 */

/**
 * Creates a new game state based on the provided settings.
 *
 * @param {Settings} settings - The game settings
 * @returns {GameState} The initial game state
 */
export function createGame(settings) {
  const pairCount = getPairCount(settings);

  return {
    players: getPlayers(settings),
    currentPlayer: 0,
    cards: randomizeCards(getCards(pairCount)),
    pairsLeft: pairCount,
    revealed: [],
    moves: 0,
  };
}

/**
 * Gets the number of pairs based on the grid size in the settings.
 *
 * @param {Settings} settings - The game settings
 * @returns {number} The number of pairs
 */
export function getPairCount(settings) {
  switch (settings.grid) {
    case "4x4":
      return (4 * 4) / 2;
    case "6x6":
      return (6 * 6) / 2;
    default:
      throw new Error("Invalid grid size");
  }
}

/**
 * Gets the list of players based on the settings.
 *
 * @param {Settings} settings - The game settings
 * @returns {Player[]} The list of players
 */
export function getPlayers(settings) {
  let playerCount = 0,
    botCount = 0;
  const players = settings.multiplayersSettings.map((player) => {
    if (player.isBot) {
      botCount += 1;
    } else {
      playerCount += 1;
    }
    return {
      name: player.isBot ? "" + botCount : "" + playerCount,
      points: 0,
      isBot: player.isBot,
    };
  });
  return players;
}

/**
 * Gets the list of cards based on the number of pairs.
 *
 * @param {number} pairs - The number of pairs
 * @returns {Card[]} The list of cards
 */
export function getCards(pairs) {
  const cards = [];
  for (let i = 0; i < pairs; i++) {
    const value = i.toString();
    cards.push({
      id: value + "-1",
      value,
      state: "hidden",
    });
    cards.push({
      id: value + "-2",
      value,
      state: "hidden",
    });
  }

  return cards;
}

/**
 * Randomizes the order of the cards.
 *
 * @param {Card[]} cards - The list of cards
 * @returns {Card[]} The randomized list of cards
 */
export function randomizeCards(cards) {
  const copy = [...cards];
  const randomized = [];

  let i = copy.length;
  while (i > 0) {
    const rIndex = Math.floor(Math.random() * i);
    randomized.push(copy[rIndex]);
    copy.splice(rIndex, 1);
    i--;
  }

  return randomized;
}
