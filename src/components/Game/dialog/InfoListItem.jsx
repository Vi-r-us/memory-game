/* eslint-disable react/prop-types */

/**
 * InfoListItem component
 *
 * This component renders an item in an information list with a label and value.
 *
 * @param {'primary' | 'secondary'} appearance - The appearance of the item (primary or secondary)
 * @param {string} label - The label of the item
 * @param {string} value - The value of the item
 * @param {string} [labelClassName] - Additional class names for styling the label
 * @param {string} [valueClassName] - Additional class names for styling the value
 *
 * @returns {JSX.Element} The rendered information list item component
 */
const InfoListItem = ({
  appearance,
  label,
  value,
  labelClassName,
  valueClassName,
}) => {
  const isPrimary = appearance === "primary";

  return (
    <div
      role="listitem"
      className={`mt-2 flex items-center justify-between rounded-[0.3125rem] py-3 px-4 first:mt-0 sm:mt-4 sm:py-6 sm:px-8 xl:rounded-[0.5rem] ${
        isPrimary
          ? "bg-neutral-800 text-white"
          : "bg-neutral-200 text-neutral-500"
      }`}
    >
      <span
        className={`text-[0.8125rem] font-bold sm:text-[1.125rem] ${labelClassName}`}
      >
        {label}
      </span>

      <span
        className={`text-[1.25rem] font-bold sm:text-[2rem] ${
          !isPrimary ? "text-neutral-700" : ""
        } ${valueClassName}`}
      >
        {value}
      </span>
    </div>
  );
};

export default InfoListItem;
