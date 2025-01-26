/* eslint-disable react/prop-types */
import anchorSolidIcon from "../../../assets/icons/anchor-solid.svg";
import atomSolidIcon from "../../../assets/icons/atom-solid.svg";
import boltLightningSolidIcon from "../../../assets/icons/bolt-lightning-solid.svg";
import bombSolidIcon from "../../../assets/icons/bomb-solid.svg";
import bookSolidIcon from "../../../assets/icons/book-solid.svg";
import carrotSolidIcon from "../../../assets/icons/carrot-solid.svg";
import catSolidIcon from "../../../assets/icons/cat-solid.svg";
import crowSolidIcon from "../../../assets/icons/crow-solid.svg";
import fishSolidIcon from "../../../assets/icons/fish-solid.svg";
import flaskSolidIcon from "../../../assets/icons/flask-solid.svg";
import hatWizardSolidIcon from "../../../assets/icons/hat-wizard-solid.svg";
import jetFighterUpSolidIcon from "../../../assets/icons/jet-fighter-up-solid.svg";
import lightbulbSolidIcon from "../../../assets/icons/lightbulb-solid.svg";
import meteorSolidIcon from "../../../assets/icons/meteor-solid.svg";
import moonSolidIcon from "../../../assets/icons/moon-solid.svg";
import starSolidIcon from "../../../assets/icons/star-solid.svg";
import terminalSolidIcon from "../../../assets/icons/terminal-solid.svg";
import treeSolidIcon from "../../../assets/icons/tree-solid.svg";

/**
 * A mapping of icon IDs to their corresponding file names.
 */
const iconsById = {
  0: anchorSolidIcon,
  1: atomSolidIcon,
  2: boltLightningSolidIcon,
  3: bombSolidIcon,
  4: bookSolidIcon,
  5: carrotSolidIcon,
  6: catSolidIcon,
  7: crowSolidIcon,
  8: fishSolidIcon,
  9: flaskSolidIcon,
  10: hatWizardSolidIcon,
  11: jetFighterUpSolidIcon,
  12: lightbulbSolidIcon,
  13: meteorSolidIcon,
  14: moonSolidIcon,
  15: starSolidIcon,
  16: terminalSolidIcon,
  17: treeSolidIcon,
};

/**
 * Gets the URL for the icon with the given ID.
 *
 * @param {string} iconId - The ID of the icon
 * @returns {string} The URL of the icon
 * @throws {Error} If there is no icon for the given ID
 */
function getIconUrl(iconId) {
  const icon = iconsById[iconId];
  if (!icon) {
    throw new Error(`There is no icon for the id ${iconId}`);
  }
  return icon;
}

/**
 * Icon component
 *
 * This component renders an icon image based on the provided icon ID.
 *
 * @param {string} iconId - The ID of the icon to be displayed
 * @param {Object} [rest] - Additional props to be passed to the img element
 *
 * @returns {JSX.Element} The rendered icon component
 */
const Icon = ({ iconId, ...rest }) => {
  const iconUrl = getIconUrl(iconId);
  return <img src={iconUrl} alt={iconId} {...rest} />;
};

export default Icon;
