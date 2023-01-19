import { motion } from "framer-motion";

import styles from "../styles";
import Image from "next/image";

const Shahrdar = () => {
  return (
    <section className={`${styles.paddings} relative px-10 py-5`}>
      <div
        className={`${styles.innerWidth} mx-auto flex flex-col gap-6 text-gray-100
      lg:flex-row`}
      >
        <div
          className="relative mx-6 flex flex-[0.5]
            flex-col justify-end rounded-[32px] border-[1px] border-[#6a6a6a] bg-gray-800 p-4 sm:p-8 lg:max-w-[370px] "
        >
          <div className="feedback-gradient" />
          <div>
            <h4
              className="text-center text-[26px] font-bold 
             leading-[36px] sm:text-[32px] sm:leading-[40px] "
            >
              امین علوی
            </h4>
            <p
              className="mt-[8px] text-center text-[18px] font-normal leading-[16px]
           sm:text-[18px] sm:leading-[22px]
          "
            >
              شهردار ریز
            </p>
          </div>

          <p
            className="mt-[24px] text-[18px] font-normal leading-[39px]
           sm:text-[19px] sm:leading-[45px]"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            ستون.
          </p>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <Image
            layout="fill"
            placeholder="blur"
            blurDataURL="amin-alavi"
            src="/images/1.jpg"
            alt="amin-alavi"
            className="h-auto
            min-h-[210px] w-full rounded-[40px] object-cover lg:h-[610px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Shahrdar;
