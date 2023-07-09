import Header from "./components/Header";
import Game from "./components/Game";
import Rule from "./components/Rule";
import useGame from "./hook/useGame";
import Footer from "./components/Footer";
const App = () => {
  const { showRules } = useGame();
  return (
    <div className="w-full h-screen radial font-BarlowSemi flex flex-col justify-evenly relative overflow-hidden">
      <Header />
      <Game />
      <Footer />
      {showRules && <Rule />}
    </div>
  );
};
export default App;
