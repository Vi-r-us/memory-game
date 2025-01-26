/* eslint-disable react/prop-types */
import { useId } from "react";
import personIcon from "../../../assets/icons/person-filled.svg";
import botIcon from "../../../assets/icons/bot-filled.svg";

/**
 * Option component
 *
 * This component renders a single option as a radio button.
 * It allows the user to select this option.
 *
 * @param {Object} props - The component props
 * @param {string} props.name - The name attribute for the radio button
 * @param {string} props.value - The value of the option
 * @param {boolean} props.selected - Whether the option is selected
 * @param {Function} props.onChange - Callback function to handle the change event
 *
 * @returns {JSX.Element} The rendered option component
 */
export function Option({ name, value, selected, onChange }) {
  const inputId = "option-" + useId();

  return (
    <div className="relative">
      {/* Radio input */}
      <input
        id={inputId}
        name={name}
        type="checkbox"
        checked={selected}
        onChange={onChange}
        className="peer absolute opacity-0"
      />
      {/* Label for the radio input */}
      <label
        htmlFor={inputId}
        className={`block cursor-pointer rounded-full py-[0.5rem] text-center text-base font-bold text-white transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 sm:py-[0.85rem] sm:text-[1.625rem] ${
          name !== "multiplayer"
            ? selected
              ? "bg-neutral-700 peer-focus-visible:ring-neutral-700"
              : "bg-neutral-300 hover:bg-neutral-400 peer-focus-visible:ring-neutral-400"
            : "bg-neutral-300 hover:bg-neutral-400 peer-focus-visible:ring-neutral-400"
        }`}
      >
        {name !== "multiplayer" ? (
          value
        ) : (
          <img
            className={`h-5 w-5 sm:h-7 sm:w-7 inline-block `}
            src={value ? botIcon : personIcon}
            alt={value ? "Bot" : "Person"}
          />
        )}
      </label>
    </div>
  );
}

export default Option;
