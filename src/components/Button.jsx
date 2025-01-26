/* eslint-disable react/prop-types */

/**
 * Button component
 *
 * This component renders a button with different appearances and sizes.
 *
 * @param {string} [appearance="primary"] - The appearance of the button (primary or secondary)
 * @param {string} [size="medium"] - The size of the button (large, medium, or small)
 * @param {React.ReactNode} children - The content to be displayed inside the button
 * @param {string} [className] - Additional class names for styling
 * @param {Object} [rest] - Additional props to be passed to the button element
 *
 * @returns {JSX.Element} The rendered button component
 */
export function Button({
  appearance = "primary",
  size = "medium",
  children,
  className,
  ...rest
}) {
  return (
    <button
      className={`rounded-full font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        appearance === "primary"
          ? "bg-primary-400 hover:bg-primary-300 focus-visible:ring-primary-400 text-white"
          : "bg-neutral-200 text-neutral-700 hover:bg-neutral-400 hover:text-white focus-visible:ring-neutral-200"
      } ${
        size === "large"
          ? "py-4 px-8 text-lg xl:text-[2rem]"
          : size === "medium"
          ? "py-3 px-6 text-[1.125rem] sm:py-6 sm:text-[2rem]"
          : "py-2 px-[1.15rem] text-base sm:py-[0.9rem] sm:px-[1.5rem] sm:text-[1.25rem]"
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
