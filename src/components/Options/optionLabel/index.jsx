/* eslint-disable react/prop-types */
/**
 * OptionLabel component
 *
 * This component renders a label for options in the settings card.
 * It displays the label text with specific styling.
 *
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The content to be displayed inside the label
 * @param {string} [props.className] - Additional class names for styling
 *
 * @returns {JSX.Element} The rendered option label component
 */
const OptionLabel = ({ children, className, ...rest }) => {
  return (
    <p
      className={`text-[0.9375] mt-[1.25rem] mb-[0.6rem] font-bold text-neutral-400 first:mt-0 sm:mb-[1rem] sm:mt-[2.1rem] sm:text-[1.25rem] ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
};

export default OptionLabel;
