import useGame from "../hook/useGame";

const Rule = () => {
  const { setShowRules } = useGame();
  return (
    <div className="absolute w-full h-screen bg-white flex justify-center items-center md:bg-black/40 z-20">
      <div className="flex flex-col justify-around items-center w-full h-full md:w-[500px] md:h-[500px] bg-white md:rounded-md">
        <div className="md:w-full md:flex md:justify-between md:items-center md:px-8">
          <h2 className="text-4xl font-BarlowSemi font-bold text-DarkText">
            RULES
          </h2>
          <button onClick={() => setShowRules(false)} className="hidden md:block">
            <img src="/images/icon-close.svg" alt="close icon" />
          </button>
        </div>
        <img src="/images/image-rules-bonus.svg" alt="rules" />
        <button onClick={() => setShowRules(false)} className="md:hidden">
          <img src="/images/icon-close.svg" alt="close icon" />
        </button>
      </div>
    </div>
  );
};
export default Rule;
