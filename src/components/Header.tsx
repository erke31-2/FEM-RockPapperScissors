import useGame from "../hook/useGame";

const Header = () => {
  const { score } = useGame();

  return (
    <header className="w-[375px] mx-auto border-2 border-HeaderOutline rounded-md flex justify-between px-4 py-2 items-center md:w-[650px]">
      <div>
        <h1 className="md:text-2xl font-bold text-white leading-4 md:leading-5">ROCK</h1>
        <h1 className="md:text-2xl font-bold text-white leading-4 md:leading-5">PAPER</h1>
        <h1 className="md:text-2xl font-bold text-white leading-4 md:leading-5">SCISSORS</h1>
        <h1 className="md:text-2xl font-bold text-white leading-4 md:leading-5">LIZARD</h1>
        <h1 className="md:text-2xl font-bold text-white leading-4 md:leading-5">SPOCK</h1>
      </div>
      <div className="bg-white px-6 py-2 flex flex-col items-center rounded-md">
        <h2 className="tracking-widest text-ScoreText">SCORE</h2>
        <span className="text-5xl text-DarkText">{score}</span>
      </div>
    </header>
  );
};
export default Header;
