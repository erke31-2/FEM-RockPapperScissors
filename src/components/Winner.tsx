import useGame from "../hook/useGame";

interface WinnerProp{
  winner: string
}
const Winner: React.FC<WinnerProp> = ({winner}) => { 
  const {resetGame} = useGame()

  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className="text-5xl font-bold text-white tracking-widest text-center">
        {winner}
      </h3>
      {winner && (
        <button className="bg-white tracking-[5px] py-3 px-6 rounded-md text-DarkText w-full hover:text-RockG2" onClick={resetGame}>
          PLAY AGAIN
        </button>
      )}
    </div>
  );
};
export default Winner;
