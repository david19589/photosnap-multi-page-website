import Images from "../secondImages";

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
        <img
          className="tablet:hidden desktop:hidden w-[100%]"
          src={Images[0]}
          alt="moon"
        />
        <img
          className="hidden desktop:hidden tablet:flex w-[100%]"
          src={Images[1]}
          alt="moon"
        />
        <img
          className="hidden tablet:hidden desktop:flex w-[100%]"
          src={Images[2]}
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
      <div className="bg-black tablet:flex tablet:flex-col tablet:justify-center">
        <div className="desktop:w-[100%] desktop:flex desktop:flex-row">
          <div className="tablet:w-[100%] tablet:flex tablet:flex-row">
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
                src={Images[3]}
                alt="Mountain"
              />
              <img
                className="w-[100%] hidden tablet:flex"
                src={Images[4]}
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
                src={Images[5]}
                alt="Towers"
              />
              <img
                className="w-[100%] hidden tablet:flex"
                src={Images[6]}
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
              {flex === 2 ? (
                <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
              ) : null}
            </div>
          </div>
          <div className="tablet:w-[100%] tablet:flex tablet:flex-row">
            <div
              onMouseEnter={() => {
                handleClick(3);
              }}
              onMouseLeave={() => {
                handleClick(0);
              }}
              className="z-0 hover:translate-y-[-38.4px] transition-all transition-duration: 0.2s w-[100%] relative"
            >
              <img
                className="w-[100%] tablet:hidden"
                src={Images[7]}
                alt="Man"
              />
              <img
                className="w-[100%] hidden tablet:flex"
                src={Images[8]}
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
                src={Images[9]}
                alt="Architecturals"
              />
              <img
                className="w-[100%] hidden tablet:flex"
                src={Images[10]}
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
              {flex === 4 ? (
                <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="desktop:w-[100%] desktop:flex desktop:flex-row">
          <div className="tablet:w-[100%] tablet:flex tablet:flex-row">
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
                src={Images[11]}
                alt="Architecturals"
              />
              <img
                className="w-[100%] hidden tablet:flex"
                src={Images[12]}
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
                src={Images[13]}
                alt="Architecturals"
              />
              <img
                className="w-[100%] hidden tablet:flex"
                src={Images[14]}
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
              {flex === 6 ? (
                <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
              ) : null}
            </div>
          </div>
          <div className="tablet:w-[100%] tablet:flex tablet:flex-row">
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
                src={Images[15]}
                alt="Architecturals"
              />
              <img
                className="w-[100%] hidden tablet:flex"
                src={Images[16]}
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
                src={Images[17]}
                alt="Architecturals"
              />
              <img
                className="w-[100%] hidden tablet:flex"
                src={Images[18]}
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
              {flex === 8 ? (
                <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="desktop:w-[100%] desktop:flex desktop:flex-row">
          <div className="tablet:w-[100%] tablet:flex tablet:flex-row">
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
                src={Images[19]}
                alt="Architecturals"
              />
              <img
                className="w-[100%] hidden tablet:flex"
                src={Images[20]}
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
                src={Images[21]}
                alt="Architecturals"
              />
              <img
                className="w-[100%] hidden tablet:flex"
                src={Images[22]}
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
              {flex === 10 ? (
                <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
              ) : null}
            </div>
          </div>
          <div className="tablet:w-[100%] tablet:flex tablet:flex-row">
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
                src={Images[23]}
                alt="Architecturals"
              />
              <img
                className="w-[100%] hidden tablet:flex"
                src={Images[24]}
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
                src={Images[25]}
                alt="Architecturals"
              />
              <img
                className="w-[100%] hidden tablet:flex"
                src={Images[26]}
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
              {flex === 12 ? (
                <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="desktop:w-[100%] desktop:flex desktop:flex-row">
          <div className="tablet:w-[100%] tablet:flex tablet:flex-row">
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
                src={Images[27]}
                alt="Architecturals"
              />
              <img
                className="w-[100%] hidden tablet:flex"
                src={Images[28]}
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
                src={Images[29]}
                alt="Architecturals"
              />
              <img
                className="w-[100%] hidden tablet:flex"
                src={Images[30]}
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
              {flex === 14 ? (
                <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
              ) : null}
            </div>
          </div>
          <div className="tablet:w-[100%] tablet:flex tablet:flex-row">
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
                src={Images[31]}
                alt="Architecturals"
              />
              <img
                className="w-[100%] hidden tablet:flex"
                src={Images[32]}
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
                src={Images[33]}
                alt="Architecturals"
              />
              <img
                className="w-[100%] hidden tablet:flex"
                src={Images[34]}
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
              {flex === 16 ? (
                <div className="absolute w-[100%] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Stories;
