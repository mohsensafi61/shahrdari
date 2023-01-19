import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../lib/motion";
import Image from "next/image";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "flex-[10] lg:flex-[3.5]" : "flex-[2] lg:flex-[0.5]"
    } ease-out-flex flex h-[450px] min-w-[170px] cursor-pointer 
    items-center justify-center transition-[flex] duration-[0.6s]`}
    onClick={() => handleClick(id)}
  >
    <Image
    layout="fill"
    placeholder="blur"
    blurDataURL={title}
    loading="lazy"
      src={imgUrl}
      alt={title}
      className="absolute h-full w-full rounded-[24px] object-cover"
    />
    {active !== id ? (
      <h3
        className="lg:origin-[0, 0] absolute z-0
      text-[18px] font-semibold text-white sm:text-[26px] lg:bottom-20 lg:rotate-[-90deg]"
      >
        {title}
      </h3>
    ) : (
      <div
        className="absolute bottom-0 w-full flex-col justify-start 
      rounded-b-[24px] bg-[rgba(0,0,0,0.7)] p-8"
      >
        <h2 className="mt-24[px] text-[24px] font-semibold text-white sm:text-[32px]">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
