import { selections } from "../constants/selections";
import useGame from "../hook/useGame";
import Button from "./Button";

const Home = () => {
  const { setUserSelected, setHouseSelected } = useGame();

  return (
    <section className="w-[300px] h-[500px] md:w-[320px] mx-auto flex justify-center items-center">
      <div className="w-full h-[280px] md:h-[300px] relative bg-bgPentagon bg-center bg-cover">
        {selections.map((selection) => (
          <Button
            key={selection.name}
            selection={selection}
            setUserSelected={setUserSelected}
            setHouseSelected={setHouseSelected}
          />
        ))}
      </div>
    </section>
  );
};
export default Home;
