import SettingsCard from "../../components/SettingsCard";
import { useNavigate } from "react-router";

/**
 * Home component
 *
 * This component renders the home page of the memory game application.
 * It includes a header and a SettingsCard component.
 *
 * @returns {JSX.Element} The rendered home page component.
 */
// eslint-disable-next-line react/prop-types
const Home = ({ isLoading }) => {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex min-h-screen w-full place-content-center items-center bg-neutral-800 px-6 sm:px-0">
        <h1
          className="text-fill text-center text-[3rem] font-bold text-white sm:text-[3.5rem]"
          data-text="memory"
        >
          memory <span className="text-[3.5rem] sm:text-[4.5rem]">.</span>
        </h1>
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh w-full items-center bg-neutral-800 px-6 sm:px-0">
      <div className="sm:max-h-unset w-[327px] sm:w-[492px] md:w-[689px] mx-auto pt-[0.875] pb-[2.625rem] flex flex-col justify-center gap-[3.25rem] md:gap-[5.7rem] sm:pt-[1.5rem] sm:pb-[0.75rem] transition-all  animate-fade">
        {/* Header section */}
        <header>
          <h1 className="text-center text-[2rem] font-bold text-white sm:text-[2.5rem]">
            memory <span className="easter-logo text-[2.5rem] sm:text-[3.5rem]">.</span>
          </h1>
        </header>

        {/* Main content section */}
        <main className="sm:px-[1rem]">
          <SettingsCard
            onDone={(settings) => {
              // Navigate to the game page with the settings state
              navigate("/game", { state: settings });
            }}
          />
        </main>
      </div>
    </div>
  );
};

export default Home;
