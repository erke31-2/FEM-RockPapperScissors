import { SelectionInfo } from "../constants/selections";

import { getWinner } from "../helpers";
import useGame from "../hook/useGame";

import Winner from "./Winner";
import Button from "./Button";

import { useEffect, useState } from "react";

interface ResultProps {
  userSelected: SelectionInfo;
  houseSelected: SelectionInfo;
}

const Result: React.FC<ResultProps> = ({ userSelected, houseSelected }) => {
  const [showHouse, setShowHouse] = useState(false);
  const { name, className, icon } = userSelected;
  const { winner, setWinner, setScore, score } = useGame();
  const houseSelectedProps: SelectionInfo = houseSelected
    ? {
        name: houseSelected.name,
        className: houseSelected.className,
        icon: houseSelected.icon,
      }
    : { name, className, icon };

  useEffect(() => {
    const result = getWinner(userSelected.name, houseSelected.name);
    const timeOut = setTimeout(() => {
      setShowHouse(true);

      const timeOut2 = setTimeout(() => {
        setWinner(result);
        setScore((prev) => {
          let newScore = prev
          if(result === "YOU WIN"){
            newScore = prev + 1
          }else if(result === "YOU LOST" && score > 0){
            newScore = prev - 1
          }
          localStorage.setItem("score", newScore.toString())
          return newScore
        })
      }, 500);
      return () => clearTimeout(timeOut2);
    }, 300);

    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSelected, houseSelected, setWinner, setScore]);

  const userSelection = (
    <>
      <div className="w-[150px] h-[150px] md:w-[160px] md:h-[160px] relative">
        <Button selection={{ name, className, icon }} />
        {winner && winner == "YOU WIN" && (
          <>
            <div className="absolute bg-gray-600 inset-0 rounded-full animate-radiate w-full h-full -z-10" />
            <div
              className="absolute bg-gray-600 inset-0 rounded-full animate-radiate w-full h-full"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bg-gray-600 inset-0 rounded-full animate-radiate w-full h-full"
              style={{ animationDelay: "2s" }}
            />
          </>
        )}
      </div>
      <h2 className="text-white tracking-widest text-sm md:text-lg">
        YOU PICKED {name}
      </h2>
    </>
  );

  const houseSelection = (
    <>
      <div className="w-[150px] h-[150px] md:w-[160px] md:h-[160px] relative">
        <Button selection={houseSelectedProps} />
        {winner && winner == "YOU LOST" && (
          <>
            <div className="absolute bg-gray-600 inset-0 rounded-full animate-radiate w-full h-full -z-10" />
            <div
              className="absolute bg-gray-600 inset-0 rounded-full animate-radiate w-full h-full"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bg-gray-600 inset-0 rounded-full animate-radiate w-full h-full"
              style={{ animationDelay: "2s" }}
            />
          </>
        )}
      </div>
      <h2 className="text-white tracking-widest text-sm md:text-lg">
        THE HOUSE PICKED {houseSelected.name}
      </h2>
    </>
  );

  const houseIsSelecting = (
    <div className="flex flex-col items-center md:flex-col-reverse gap-6">
      <div className="w-[130px] h-[130px] bg-DarkText rounded-full" />
      <h2 className="text-white tracking-widest text-sm md:text-lg">
        THE HOUSE IS PICKING
      </h2>
    </div>
  );

  return (
    <section className="w-[375px] h-[500px] md:w-[650px] flex flex-col items-center justify-around mx-auto">
      <div className="flex w-full justify-between md:px-4 items-end md:items-start">
        <div className="flex flex-col items-center gap-6 md:flex-col-reverse justify-center">
          {userSelection}
        </div>

        <div className="flex flex-col gap-6 items-center md:flex-col-reverse justify-center">
          {showHouse ? houseSelection : houseIsSelecting}
        </div>
      </div>
      {winner ? (
        <Winner winner={winner} />
      ) : (
        <p className="text-xl text-white font-semibold">
          Calculating Winner...
        </p>
      )}
    </section>
  );
};
export default Result;
