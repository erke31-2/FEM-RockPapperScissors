import useGame from "../hook/useGame";

const Footer = () => {
    const {setShowRules} = useGame()
  return (
    <footer className="flex justify-center md:justify-end md:px-12">
      <button
        className="border border-HeaderOutline px-8 py-2 rounded-md text-white tracking-widest text-[0.9rem] hover:text-HeaderOutline"
        onClick={() => setShowRules(true)}
      >
        RULES
      </button>
    </footer>
  );
};
export default Footer;
