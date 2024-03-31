import Img1Mobile from "/src/assets/stories/mobile/moon-of-appalacia.jpg";
import Img1Tablet from "/src/assets/stories/tablet/moon-of-appalacia.jpg";
import Img1Desktop from "/src/assets/stories/desktop/moon-of-appalacia.jpg";
import Images from "../secondImages";

import { motion } from "framer-motion";

function Stories() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <img
          className="tablet:hidden desktop:hidden w-[100%]"
          src={Img1Mobile}
          alt="moon"
        />
        <img
          className="hidden desktop:hidden tablet:flex w-[100%]"
          src={Img1Tablet}
          alt="moon"
        />
        <img
          className="hidden tablet:hidden desktop:flex w-[100%]"
          src={Img1Desktop}
          alt="moon"
        />
        <div className="desktop:pl-[112px] tablet:absolute tablet:top-[71.61px] tablet:bg-inherit tablet:pl-[39px] tablet:py-[122px] bg-black pt-[48px] pb-[48px] pl-[33px] pr-[24px] mt-[-2px]">
          <h2 className="tablet:mb-[24px] mb-[15px] text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700]">
            LAST MONTH’S FEATURED STORY
          </h2>
          <h1 className="tablet:max-w-[387px] tablet:mb-[21px] tablet:text-[40px] tablet:leading-[48px] tablet:tracking-[4.17px] max-w-[260px] text-[32px] leading-[40px] tracking-[3.33px] text-white font-[700] mb-[16px]">
            HAZY FULL MOON OF APPALACHIA
          </h1>
          <div className="mb-[24px] flex gap-[9px]">
            <h2 className="text-white opacity-[75%] text-[13px] font[400px] leading-[16.93px]">
              March 2nd 2020
            </h2>
            <h2 className=" text-white text-[13px] font[400px] leading-[16.93px]">
              by John Appleseed
            </h2>
          </div>
          <p className="tablet:max-w-[374px] max-w-[305px] opacity-[60%] text-[15px] leading-[25px] text-white font-[400] mb-[24px]">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <div className="cursor-pointer flex flex-wrap max-w-[195px] group">
            <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
              READ THE STORY
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#FFF">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-black tablet:flex tablet:flex-wrap tablet:justify-center">
        {Images.map((item, index) => {
          return (
            <div
              className="group desktop:w-[25%] tablet:w-[50%] z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative mt-[-1px]"
              key={index}
            >
              <div className="absolute bottom-[-6px] w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500 opacity-0 group-hover:opacity-100"></div>
              <img
                className="w-[100%] tablet:hidden"
                src={item.src.imgMobile}
                alt="Mountain"
              />
              <img
                className="w-[100%] hidden tablet:flex"
                src={item.src.imgDesktop}
                alt="Mountains"
              />
              <div className="z-10 pl-[33px] pr-[32px] pb-[40px] absolute left-0 right-0 bottom-0">
                <div className="mb-[16px]">
                  <h2 className="text-white font-[400] leading-[16.93px] text-[13px] mb-[4px]">
                    {item.date}
                  </h2>
                  <h1 className="mb-[4px] text-white font-[700] leading-[25px] text-[18px]">
                    {item.description}
                  </h1>
                  <h2 className="text-white font-[400] leading-[16.93px] text-[13px]">
                    {item.authorName}
                  </h2>
                </div>
                <span className="mb-[20px] flex h-[1px] bg-white opacity-[25%]"></span>
                <div className="flex justify-between cursor-pointer">
                  <h1 className="hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
                    READ STORY
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
                    <g fill="none" fillRule="evenodd" stroke="#FFF">
                      <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                    </g>
                  </svg>
                </div>
                <div className="z-[-1] left-0 right-0 bottom-0 w-[100%] h-[375px] absolute bg-gradient-to-t from-black opacity-[80%]"></div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Stories;
