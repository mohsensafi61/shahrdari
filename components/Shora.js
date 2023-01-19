import { useState } from "react";
import styles from "../styles";
import { exploreWorlds } from "../constants";
import ExploreCard from "./ExploreCard";

const Shora = () => {
  const [active, setActive] = useState("world-3");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <h1 className="mx-20 mt-4 rounded-lg border-2 bg-gray-800 py-4 text-center text-3xl font-bold text-[#FFD700]">
          شورای شهر ریز
        </h1>
        <div className="gradient-04" />
        <div className="my-[50px] mx-10 flex min-h-[70vh] flex-col gap-5 lg:flex-row">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shora;
