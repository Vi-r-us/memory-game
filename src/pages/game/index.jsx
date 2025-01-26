import { Navigate, useLocation, useNavigate } from "react-router";

import MultiPlayerGame from "./MultiPlayerGame";
import SinglePlayerGame from "./SinglePlayerGame";

/**
 * Game component
 * 
 * This component renders the game page based on the settings provided.
 * It includes logic to navigate to the settings page if no settings are found.
 * 
 * @returns {JSX.Element} The rendered game page component
 */
const Game = () => {
  const location = useLocation();
  const settings = location.state;
  const navigate = useNavigate();

  // Redirect to the home page if no settings are found
  if (!settings) {
    return <Navigate to="/" replace />;
  }

  // Function to navigate to the settings page
  const goToSettings = () => navigate('/', { replace: true });

  return (
    <div className="2xl:w-content-2xl xs:w-content-xs lg:w-content-lg sm:w-content-sm md:w-content-md w-content relative mx-auto flex min-h-screen flex-col py-6 sm:pt-9 sm:pb-[2.35rem] 2xl:pt-[4.2rem] 2xl:pb-[2.05rem]">
      {/* Render the appropriate game component based on the number of players */}
      {settings.players === '1' ? (
        <SinglePlayerGame settings={settings} goToSettings={goToSettings} />
      ) : (
        <MultiPlayerGame settings={settings} goToSettings={goToSettings} />
      )}
    </div>
  );
};

export default Game;
