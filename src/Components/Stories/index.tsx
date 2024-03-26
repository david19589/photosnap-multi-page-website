import img1Mobile from "/src/assets/stories/mobile/moon-of-appalacia.jpg";
import img1Tablet from "/src/assets/stories/tablet/moon-of-appalacia.jpg";
import img4Mobile from "/src/assets/stories/mobile/mountains.jpg";
import img4Desktop from "/src/assets/stories/desktop/mountains.jpg";
import img5Mobile from "/src/assets/stories/mobile/cityscapes.jpg";
import img5Desktop from "/src/assets/stories/desktop/cityscapes.jpg";
import img6Mobile from "/src/assets/stories/mobile/18-days-voyage.jpg";
import img6Desktop from "/src/assets/stories/desktop/18-days-voyage.jpg";
import img7Mobile from "/src/assets/stories/mobile/architecturals.jpg";
import img7Desktop from "/src/assets/stories/desktop/architecturals.jpg";
import img8Mobile from "/src/assets/stories/mobile/world-tour.jpg";
import img8Desktop from "/src/assets/stories/desktop/world-tour.jpg";
import img9Mobile from "/src/assets/stories/mobile/unforeseen-corners.jpg";
import img9Desktop from "/src/assets/stories/desktop/unforeseen-corners.jpg";
import img10Mobile from "/src/assets/stories/mobile/king-on-africa.jpg";
import img10Desktop from "/src/assets/stories/desktop/king-on-africa.jpg";
import img11Mobile from "/src/assets/stories/mobile/trip-to-nowhere.jpg";
import img11Desktop from "/src/assets/stories/desktop/trip-to-nowhere.jpg";
import img12Mobile from "/src/assets/stories/mobile/rage-of-the-sea.jpg";
import img12Desktop from "/src/assets/stories/desktop/rage-of-the-sea.jpg";
import img13Mobile from "/src/assets/stories/mobile/running-free.jpg";
import img13Desktop from "/src/assets/stories/desktop/running-free.jpg";
import img14Mobile from "/src/assets/stories/mobile/behind-the-waves.jpg";
import img14Desktop from "/src/assets/stories/desktop/behind-the-waves.jpg";
import img15Mobile from "/src/assets/stories/mobile/calm-waters.jpg";
import img15Desktop from "/src/assets/stories/desktop/calm-waters.jpg";
import img16Mobile from "/src/assets/stories/mobile/milky-way.jpg";
import img16Desktop from "/src/assets/stories/desktop/milky-way.jpg";
import img17Mobile from "/src/assets/stories/mobile/dark-forest.jpg";
import img17Desktop from "/src/assets/stories/desktop/dark-forest.jpg";
import img18Mobile from "/src/assets/stories/mobile/somwarpet.jpg";
import img18Desktop from "/src/assets/stories/desktop/somwarpet.jpg";
import img19Mobile from "/src/assets/stories/mobile/land-of-dreams.jpg";
import img19Desktop from "/src/assets/stories/desktop/land-of-dreams.jpg";

import { useState } from "react";
import { motion } from "framer-motion";

function Stories() {
  const [flex, setFlex] = useState(0);

  const handleClick = (id: number) => {
    if (flex !== id) {
      setFlex(id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <img className="tablet:hidden w-[100%]" src={img1Mobile} alt="moon" />
        <img
          className="hidden tablet:flex w-[100%]"
          src={img1Tablet}
          alt="moon"
        />
        <div className="bg-black pt-[48px] pb-[48px] pl-[33px] pr-[24px]">
          <h2 className="mb-[15px] text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700]">
            LAST MONTH’S FEATURED STORY
          </h2>
          <h1 className="max-w-[260px] text-[32px] leading-[40px] tracking-[3.33px] text-white font-[700] mb-[16px]">
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
          <p className="max-w-[305px] opacity-[60%] text-[15px] leading-[25px] text-white font-[400] mb-[24px]">
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
      <div>
        <div
          onMouseEnter={() => {
            handleClick(1);
          }}
          onMouseLeave={() => {
            handleClick(0);
          }}
          className="z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative"
        >
          <img
            className="w-[100%] tablet:hidden"
            src={img4Mobile}
            alt="Mountains"
          />
          <img
            className="w-[100%] hidden tablet:flex"
            src={img4Desktop}
            alt="Mountains"
          />
          <div className="z-10 pl-[33px] pr-[32px] pb-[40px] absolute left-0 right-0 bottom-0">
            <div className="mb-[16px]">
              <h1 className="mb-[4px] text-white font-[700] leading-[25px] text-[18px]">
                The Mountains
              </h1>
              <h2 className="text-white font-[400] leading-[16.93px] text-[13px]">
                by John Appleseed
              </h2>
            </div>
            <span className="mb-[20px] flex h-[1px] bg-white opacity-[25%]"></span>
            <div className="flex justify-between cursor-pointer group">
              <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
                READ STORY
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#FFF">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
            <div className="z-[-1] left-0 right-0 bottom-0 w-[100%] h-[375px] absolute bg-gradient-to-t from-black opacity-[80%]"></div>
          </div>
          {flex === 1 ? (
            <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          ) : null}
        </div>
        <div
          onMouseEnter={() => {
            handleClick(2);
          }}
          onMouseLeave={() => {
            handleClick(0);
          }}
          className="z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative"
        >
          <img
            className="w-[100%] tablet:hidden"
            src={img5Mobile}
            alt="Towers"
          />
          <img
            className="w-[100%] hidden tablet:flex"
            src={img5Desktop}
            alt="Towers"
          />
          <div className="z-10 pl-[33px] pr-[32px] pb-[40px] absolute left-0 right-0 bottom-0">
            <div className="mb-[16px]">
              <h1 className="mb-[4px] text-white font-[700] leading-[25px] text-[18px]">
                Sunset Cityscapes
              </h1>
              <h2 className="text-white font-[400] leading-[16.93px] text-[13px]">
                by Benjamin Cruz
              </h2>
            </div>
            <span className="mb-[20px] flex h-[1px] bg-white opacity-[25%]"></span>
            <div className="flex justify-between cursor-pointer group">
              <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
                READ STORY
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#FFF">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
            <div className="z-[-1] left-0 right-0 bottom-0 w-[100%] h-[375px] absolute bg-gradient-to-t from-black opacity-[80%]"></div>
          </div>
          {flex === 2 ? (
            <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          ) : null}
        </div>
        <div
          onMouseEnter={() => {
            handleClick(3);
          }}
          onMouseLeave={() => {
            handleClick(0);
          }}
          className="z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative"
        >
          <img className="w-[100%] tablet:hidden" src={img6Mobile} alt="Man" />
          <img
            className="w-[100%] hidden tablet:flex"
            src={img6Desktop}
            alt="Man"
          />
          <div className="z-10 pl-[33px] pr-[32px] pb-[40px] absolute left-0 right-0 bottom-0">
            <div className="mb-[16px]">
              <h1 className="mb-[4px] text-white font-[700] leading-[25px] text-[18px]">
                18 Days Voyage
              </h1>
              <h2 className="text-white font-[400] leading-[16.93px] text-[13px]">
                by Alexei Borodin
              </h2>
            </div>
            <span className="mb-[20px] flex h-[1px] bg-white opacity-[25%]"></span>
            <div className="flex justify-between cursor-pointer group">
              <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
                READ STORY
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#FFF">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
            <div className="z-[-1] left-0 right-0 bottom-0 w-[100%] h-[375px] absolute bg-gradient-to-t from-black opacity-[80%]"></div>
          </div>
          {flex === 3 ? (
            <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          ) : null}
        </div>
        <div
          onMouseEnter={() => {
            handleClick(4);
          }}
          onMouseLeave={() => {
            handleClick(0);
          }}
          className="z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative"
        >
          <img
            className="w-[100%] tablet:hidden"
            src={img7Mobile}
            alt="Architecturals"
          />
          <img
            className="w-[100%] hidden tablet:flex"
            src={img7Desktop}
            alt="Architecturals"
          />
          <div className="z-10 pl-[33px] pr-[32px] pb-[40px] absolute left-0 right-0 bottom-0">
            <div className="mb-[16px]">
              <h1 className="mb-[4px] text-white font-[700] leading-[25px] text-[18px]">
                Architecturals
              </h1>
              <h2 className="text-white font-[400] leading-[16.93px] text-[13px]">
                by Samantha Brooke
              </h2>
            </div>
            <span className="mb-[20px] flex h-[1px] bg-white opacity-[25%]"></span>
            <div className="flex justify-between cursor-pointer group">
              <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
                READ STORY
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#FFF">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
            <div className="z-[-1] left-0 right-0 bottom-0 w-[100%] h-[375px] absolute bg-gradient-to-t from-black opacity-[80%]"></div>
          </div>
          {flex === 4 ? (
            <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          ) : null}
        </div>
        <div
          onMouseEnter={() => {
            handleClick(5);
          }}
          onMouseLeave={() => {
            handleClick(0);
          }}
          className="z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative"
        >
          <img
            className="w-[100%] tablet:hidden"
            src={img8Mobile}
            alt="Architecturals"
          />
          <img
            className="w-[100%] hidden tablet:flex"
            src={img8Desktop}
            alt="Architecturals"
          />
          <div className="z-10 pl-[33px] pr-[32px] pb-[40px] absolute left-0 right-0 bottom-0">
            <div className="mb-[16px]">
              <h1 className="mb-[4px] text-white font-[700] leading-[25px] text-[18px]">
                Architecturals
              </h1>
              <h2 className="text-white font-[400] leading-[16.93px] text-[13px]">
                by Samantha Brooke
              </h2>
            </div>
            <span className="mb-[20px] flex h-[1px] bg-white opacity-[25%]"></span>
            <div className="flex justify-between cursor-pointer group">
              <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
                READ STORY
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#FFF">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
            <div className="z-[-1] left-0 right-0 bottom-0 w-[100%] h-[375px] absolute bg-gradient-to-t from-black opacity-[80%]"></div>
          </div>
          {flex === 5 ? (
            <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          ) : null}
        </div>
        <div
          onMouseEnter={() => {
            handleClick(6);
          }}
          onMouseLeave={() => {
            handleClick(0);
          }}
          className="z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative"
        >
          <img
            className="w-[100%] tablet:hidden"
            src={img9Mobile}
            alt="Architecturals"
          />
          <img
            className="w-[100%] hidden tablet:flex"
            src={img9Desktop}
            alt="Architecturals"
          />
          <div className="z-10 pl-[33px] pr-[32px] pb-[40px] absolute left-0 right-0 bottom-0">
            <div className="mb-[16px]">
              <h1 className="mb-[4px] text-white font-[700] leading-[25px] text-[18px]">
                Architecturals
              </h1>
              <h2 className="text-white font-[400] leading-[16.93px] text-[13px]">
                by Samantha Brooke
              </h2>
            </div>
            <span className="mb-[20px] flex h-[1px] bg-white opacity-[25%]"></span>
            <div className="flex justify-between cursor-pointer group">
              <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
                READ STORY
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#FFF">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
            <div className="z-[-1] left-0 right-0 bottom-0 w-[100%] h-[375px] absolute bg-gradient-to-t from-black opacity-[80%]"></div>
          </div>
          {flex === 6 ? (
            <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          ) : null}
        </div>
        <div
          onMouseEnter={() => {
            handleClick(7);
          }}
          onMouseLeave={() => {
            handleClick(0);
          }}
          className="z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative"
        >
          <img
            className="w-[100%] tablet:hidden"
            src={img10Mobile}
            alt="Architecturals"
          />
          <img
            className="w-[100%] hidden tablet:flex"
            src={img10Desktop}
            alt="Architecturals"
          />
          <div className="z-10 pl-[33px] pr-[32px] pb-[40px] absolute left-0 right-0 bottom-0">
            <div className="mb-[16px]">
              <h1 className="mb-[4px] text-white font-[700] leading-[25px] text-[18px]">
                Architecturals
              </h1>
              <h2 className="text-white font-[400] leading-[16.93px] text-[13px]">
                by Samantha Brooke
              </h2>
            </div>
            <span className="mb-[20px] flex h-[1px] bg-white opacity-[25%]"></span>
            <div className="flex justify-between cursor-pointer group">
              <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
                READ STORY
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#FFF">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
            <div className="z-[-1] left-0 right-0 bottom-0 w-[100%] h-[375px] absolute bg-gradient-to-t from-black opacity-[80%]"></div>
          </div>
          {flex === 7 ? (
            <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          ) : null}
        </div>
        <div
          onMouseEnter={() => {
            handleClick(8);
          }}
          onMouseLeave={() => {
            handleClick(0);
          }}
          className="z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative"
        >
          <img
            className="w-[100%] tablet:hidden"
            src={img11Mobile}
            alt="Architecturals"
          />
          <img
            className="w-[100%] hidden tablet:flex"
            src={img11Desktop}
            alt="Architecturals"
          />
          <div className="z-10 pl-[33px] pr-[32px] pb-[40px] absolute left-0 right-0 bottom-0">
            <div className="mb-[16px]">
              <h1 className="mb-[4px] text-white font-[700] leading-[25px] text-[18px]">
                Architecturals
              </h1>
              <h2 className="text-white font-[400] leading-[16.93px] text-[13px]">
                by Samantha Brooke
              </h2>
            </div>
            <span className="mb-[20px] flex h-[1px] bg-white opacity-[25%]"></span>
            <div className="flex justify-between cursor-pointer group">
              <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
                READ STORY
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#FFF">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
            <div className="z-[-1] left-0 right-0 bottom-0 w-[100%] h-[375px] absolute bg-gradient-to-t from-black opacity-[80%]"></div>
          </div>
          {flex === 8 ? (
            <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          ) : null}
        </div>
        <div
          onMouseEnter={() => {
            handleClick(9);
          }}
          onMouseLeave={() => {
            handleClick(0);
          }}
          className="z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative"
        >
          <img
            className="w-[100%] tablet:hidden"
            src={img12Mobile}
            alt="Architecturals"
          />
          <img
            className="w-[100%] hidden tablet:flex"
            src={img12Desktop}
            alt="Architecturals"
          />
          <div className="z-10 pl-[33px] pr-[32px] pb-[40px] absolute left-0 right-0 bottom-0">
            <div className="mb-[16px]">
              <h1 className="mb-[4px] text-white font-[700] leading-[25px] text-[18px]">
                Architecturals
              </h1>
              <h2 className="text-white font-[400] leading-[16.93px] text-[13px]">
                by Samantha Brooke
              </h2>
            </div>
            <span className="mb-[20px] flex h-[1px] bg-white opacity-[25%]"></span>
            <div className="flex justify-between cursor-pointer group">
              <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
                READ STORY
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#FFF">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
            <div className="z-[-1] left-0 right-0 bottom-0 w-[100%] h-[375px] absolute bg-gradient-to-t from-black opacity-[80%]"></div>
          </div>
          {flex === 9 ? (
            <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          ) : null}
        </div>
        <div
          onMouseEnter={() => {
            handleClick(10);
          }}
          onMouseLeave={() => {
            handleClick(0);
          }}
          className="z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative"
        >
          <img
            className="w-[100%] tablet:hidden"
            src={img13Mobile}
            alt="Architecturals"
          />
          <img
            className="w-[100%] hidden tablet:flex"
            src={img13Desktop}
            alt="Architecturals"
          />
          <div className="z-10 pl-[33px] pr-[32px] pb-[40px] absolute left-0 right-0 bottom-0">
            <div className="mb-[16px]">
              <h1 className="mb-[4px] text-white font-[700] leading-[25px] text-[18px]">
                Architecturals
              </h1>
              <h2 className="text-white font-[400] leading-[16.93px] text-[13px]">
                by Samantha Brooke
              </h2>
            </div>
            <span className="mb-[20px] flex h-[1px] bg-white opacity-[25%]"></span>
            <div className="flex justify-between cursor-pointer group">
              <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
                READ STORY
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#FFF">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
            <div className="z-[-1] left-0 right-0 bottom-0 w-[100%] h-[375px] absolute bg-gradient-to-t from-black opacity-[80%]"></div>
          </div>
          {flex === 10 ? (
            <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          ) : null}
        </div>
        <div
          onMouseEnter={() => {
            handleClick(11);
          }}
          onMouseLeave={() => {
            handleClick(0);
          }}
          className="z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative"
        >
          <img
            className="w-[100%] tablet:hidden"
            src={img14Mobile}
            alt="Architecturals"
          />
          <img
            className="w-[100%] hidden tablet:flex"
            src={img14Desktop}
            alt="Architecturals"
          />
          <div className="z-10 pl-[33px] pr-[32px] pb-[40px] absolute left-0 right-0 bottom-0">
            <div className="mb-[16px]">
              <h1 className="mb-[4px] text-white font-[700] leading-[25px] text-[18px]">
                Architecturals
              </h1>
              <h2 className="text-white font-[400] leading-[16.93px] text-[13px]">
                by Samantha Brooke
              </h2>
            </div>
            <span className="mb-[20px] flex h-[1px] bg-white opacity-[25%]"></span>
            <div className="flex justify-between cursor-pointer group">
              <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
                READ STORY
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#FFF">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
            <div className="z-[-1] left-0 right-0 bottom-0 w-[100%] h-[375px] absolute bg-gradient-to-t from-black opacity-[80%]"></div>
          </div>
          {flex === 11 ? (
            <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          ) : null}
        </div>
        <div
          onMouseEnter={() => {
            handleClick(12);
          }}
          onMouseLeave={() => {
            handleClick(0);
          }}
          className="z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative"
        >
          <img
            className="w-[100%] tablet:hidden"
            src={img15Mobile}
            alt="Architecturals"
          />
          <img
            className="w-[100%] hidden tablet:flex"
            src={img15Desktop}
            alt="Architecturals"
          />
          <div className="z-10 pl-[33px] pr-[32px] pb-[40px] absolute left-0 right-0 bottom-0">
            <div className="mb-[16px]">
              <h1 className="mb-[4px] text-white font-[700] leading-[25px] text-[18px]">
                Architecturals
              </h1>
              <h2 className="text-white font-[400] leading-[16.93px] text-[13px]">
                by Samantha Brooke
              </h2>
            </div>
            <span className="mb-[20px] flex h-[1px] bg-white opacity-[25%]"></span>
            <div className="flex justify-between cursor-pointer group">
              <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
                READ STORY
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#FFF">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
            <div className="z-[-1] left-0 right-0 bottom-0 w-[100%] h-[375px] absolute bg-gradient-to-t from-black opacity-[80%]"></div>
          </div>
          {flex === 12 ? (
            <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          ) : null}
        </div>
        <div
          onMouseEnter={() => {
            handleClick(13);
          }}
          onMouseLeave={() => {
            handleClick(0);
          }}
          className="z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative"
        >
          <img
            className="w-[100%] tablet:hidden"
            src={img16Mobile}
            alt="Architecturals"
          />
          <img
            className="w-[100%] hidden tablet:flex"
            src={img16Desktop}
            alt="Architecturals"
          />
          <div className="z-10 pl-[33px] pr-[32px] pb-[40px] absolute left-0 right-0 bottom-0">
            <div className="mb-[16px]">
              <h1 className="mb-[4px] text-white font-[700] leading-[25px] text-[18px]">
                Architecturals
              </h1>
              <h2 className="text-white font-[400] leading-[16.93px] text-[13px]">
                by Samantha Brooke
              </h2>
            </div>
            <span className="mb-[20px] flex h-[1px] bg-white opacity-[25%]"></span>
            <div className="flex justify-between cursor-pointer group">
              <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
                READ STORY
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#FFF">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
            <div className="z-[-1] left-0 right-0 bottom-0 w-[100%] h-[375px] absolute bg-gradient-to-t from-black opacity-[80%]"></div>
          </div>
          {flex === 13 ? (
            <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          ) : null}
        </div>
        <div
          onMouseEnter={() => {
            handleClick(14);
          }}
          onMouseLeave={() => {
            handleClick(0);
          }}
          className="z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative"
        >
          <img
            className="w-[100%] tablet:hidden"
            src={img17Mobile}
            alt="Architecturals"
          />
          <img
            className="w-[100%] hidden tablet:flex"
            src={img17Desktop}
            alt="Architecturals"
          />
          <div className="z-10 pl-[33px] pr-[32px] pb-[40px] absolute left-0 right-0 bottom-0">
            <div className="mb-[16px]">
              <h1 className="mb-[4px] text-white font-[700] leading-[25px] text-[18px]">
                Architecturals
              </h1>
              <h2 className="text-white font-[400] leading-[16.93px] text-[13px]">
                by Samantha Brooke
              </h2>
            </div>
            <span className="mb-[20px] flex h-[1px] bg-white opacity-[25%]"></span>
            <div className="flex justify-between cursor-pointer group">
              <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
                READ STORY
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#FFF">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
            <div className="z-[-1] left-0 right-0 bottom-0 w-[100%] h-[375px] absolute bg-gradient-to-t from-black opacity-[80%]"></div>
          </div>
          {flex === 14 ? (
            <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          ) : null}
        </div>
        <div
          onMouseEnter={() => {
            handleClick(15);
          }}
          onMouseLeave={() => {
            handleClick(0);
          }}
          className="z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative"
        >
          <img
            className="w-[100%] tablet:hidden"
            src={img18Mobile}
            alt="Architecturals"
          />
          <img
            className="w-[100%] hidden tablet:flex"
            src={img18Desktop}
            alt="Architecturals"
          />
          <div className="z-10 pl-[33px] pr-[32px] pb-[40px] absolute left-0 right-0 bottom-0">
            <div className="mb-[16px]">
              <h1 className="mb-[4px] text-white font-[700] leading-[25px] text-[18px]">
                Architecturals
              </h1>
              <h2 className="text-white font-[400] leading-[16.93px] text-[13px]">
                by Samantha Brooke
              </h2>
            </div>
            <span className="mb-[20px] flex h-[1px] bg-white opacity-[25%]"></span>
            <div className="flex justify-between cursor-pointer group">
              <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
                READ STORY
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#FFF">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
            <div className="z-[-1] left-0 right-0 bottom-0 w-[100%] h-[375px] absolute bg-gradient-to-t from-black opacity-[80%]"></div>
          </div>
          {flex === 15 ? (
            <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          ) : null}
        </div>
        <div
          onMouseEnter={() => {
            handleClick(16);
          }}
          onMouseLeave={() => {
            handleClick(0);
          }}
          className="z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative"
        >
          <img
            className="w-[100%] tablet:hidden"
            src={img19Mobile}
            alt="Architecturals"
          />
          <img
            className="w-[100%] hidden tablet:flex"
            src={img19Desktop}
            alt="Architecturals"
          />
          <div className="z-10 pl-[33px] pr-[32px] pb-[40px] absolute left-0 right-0 bottom-0">
            <div className="mb-[16px]">
              <h1 className="mb-[4px] text-white font-[700] leading-[25px] text-[18px]">
                Architecturals
              </h1>
              <h2 className="text-white font-[400] leading-[16.93px] text-[13px]">
                by Samantha Brooke
              </h2>
            </div>
            <span className="mb-[20px] flex h-[1px] bg-white opacity-[25%]"></span>
            <div className="flex justify-between cursor-pointer group">
              <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
                READ STORY
              </h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#FFF">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
            <div className="z-[-1] left-0 right-0 bottom-0 w-[100%] h-[375px] absolute bg-gradient-to-t from-black opacity-[80%]"></div>
          </div>
          {flex === 16 ? (
            <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

export default Stories;
