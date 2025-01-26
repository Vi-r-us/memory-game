/* eslint-disable react/prop-types */
import { Option } from "./Option";

/**
 * OptionSelector component
 *
 * This component renders a group of options as radio buttons.
 * It allows the user to select one option from the provided options.
 *
 * @param {Object} props - The component props
 * @param {string} props.name - The name attribute for the radio buttons
 * @param {Array<string>} props.options - The list of options to be displayed
 * @param {string} props.value - The currently selected value
 * @param {Function} props.onChange - Callback function to handle the change event
 * @param {string} [props.groupAriaLabel] - Aria label for the radio group
 *
 * @returns {JSX.Element} The rendered option selector component
 */
const OptionSelector = ({ name, options, value, onChange, groupAriaLabel }) => {
  const handleMultiplayerToggle = (id, isBot) => {
    onChange(id, !isBot);
  };

  return (
    <div
      role="radiogroup"
      aria-label={groupAriaLabel}
      className={`grid gap-[0.65rem] md:gap-8 ${
        options.length === 4
          ? "grid-cols-4"
          : options.length === 3
          ? "grid-cols-3"
          : "grid-cols-2"
      }`}
    >
      {options.map((option) =>
        name === "multiplayer" ? (
          <Option
            key={option.id}
            name={name}
            value={option.isBot}
            selected={option.isBot}
            onChange={() => handleMultiplayerToggle(option.id, option.isBot)}
          />
        ) : (
          <Option
            key={option}
            name={name}
            value={option}
            selected={value === option}
            onChange={() => onChange(option)}
          />
        )
      )}
    </div>
  );
};

export default OptionSelector;
