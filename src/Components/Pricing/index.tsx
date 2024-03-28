import img1Mobile from "/src/assets/pricing/mobile/hero.jpg";
import img1Tablet from "/src/assets/pricing/tablet/hero.jpg";
import img1Desktop from "/src/assets/pricing/desktop/hero.jpg";
import svg1 from "/src/assets/pricing/desktop/check.svg";

import { motion } from "framer-motion";
import { useState } from "react";

function Pricing() {
  const [toggled, setToggled] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="desktop:mb-[160px] tablet:flex tablet:flex-row-reverse tablet:mb-[112px]">
        <img className="tablet:hidden w-[100%]" src={img1Mobile} alt="camera" />
        <img
          className="hidden desktop:hidden tablet:flex w-[35.5%]"
          src={img1Tablet}
          alt="camera"
        />
        <img
          className="hidden desktop:flex w-[100%]"
          src={img1Desktop}
          alt="camera"
        />
        <div className="desktop:pl-[112px] tablet:mt-0 tablet:mr-[-2px] tablet:mb-0 tablet:py-[173px] tablet:px-[54px] tablet:w-[100%] mt-[-2px] mb-[64px] bg-black pt-[72px] pb-[72px] pl-[29px] pr-[28px]">
          <div className="desktop:translate-x-[-112px] tablet:w-[6px] tablet:h-[144px] tablet:absolute tablet:translate-x-[-54px] tablet:translate-y-[0px] tablet:bg-gradient-to-t tablet:from-yellow-300 tablet:via-pink-600 tablet:to-blue-500 translate-y-[-72px] w-[128px] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          <h1 className="desktop:max-w-[400px] tablet:max-w-[387px] tablet:mb-[21px] tablet:text-[40px] tablet:leading-[48px] tablet:tracking-[4.17px] max-w-[260px] text-[32px] leading-[40px] tracking-[3.33px] text-white font-[700] mb-[16px]">
            PRICING
          </h1>
          <p className="tablet:max-w-[352px] tablet:mb-0 max-w-[308px] opacity-[60%] text-[15px] leading-[25px] text-white font-[400] mb-[23px]">
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It`s the simple way to create and share your
            photos.
          </p>
        </div>
      </div>
      <div className="desktop:mb-[48px] mb-[40px] flex items-center justify-center">
        {toggled === false ? (
          <h1 className="text-[18px] leading-[25px] text-black font-[700] mr-[32px]">
            Monthly
          </h1>
        ) : (
          <h1 className="opacity-[50%] text-[18px] leading-[25px] text-black font-[700] mr-[32px]">
            Monthly
          </h1>
        )}
        <div className="flex justify-center items-center">
          <label className="cursor-pointer relative" htmlFor="switch">
            <input
              onClick={() => {
                setToggled(!toggled);
              }}
              type="checkbox"
              id="switch"
              name="switch"
              hidden
              className="peer"
            />
            <span className="block absolute inset-0 h-6 w-6 left-0.5 my-auto rounded-full bg-black shadow transition-transform duration-300 peer-checked:bg-white peer-checked:translate-x-9"></span>
            <span className="w-[64px] h-[32px] block rounded-full bg-gray-200 transition duration-300 peer-checked:bg-black"></span>
          </label>
        </div>
        {toggled === false ? (
          <h1 className="opacity-[50%] text-[18px] leading-[25px] text-black font-[700] ml-[32px]">
            Yearly
          </h1>
        ) : (
          <h1 className="text-[18px] leading-[25px] text-black font-[700] ml-[32px]">
            Yearly
          </h1>
        )}
      </div>
      <div className="desktop:flex desktop:flex-row desktop:justify-center desktop:mb-[160px] tablet:mb-[112px] mb-[64px] flex flex-col items-center">
        <div className="desktop:px-[40px] tablet:px-[40px] tablet:pl-[40px] tablet:pr-[48px] tablet:max-w-[689px] mb-[30px] max-w-[318px] mr-[29px] ml-[28px] flex flex-col items-center pt-[56px] pb-[40px] pr-[22px] pl-[21px] bg-neutral-100">
          <div className="desktop:flex desktop:flex-col desktop:gap-[40px] tablet:flex tablet:flex-row flex flex-col items-center tablet:gap-[53px]">
            <div className="desktop:items-center tablet:flex tablet:items-start mb-[40px] flex flex-col items-center">
              <h1 className="tablet:text-start mb-[18px] font-[700] text-[24px] leading-[25px]">
                Basic
              </h1>
              <p className="desktop:text-center tablet:text-start max-w-[275px] text-center opacity-[60%] font-[400] text-[15px] leading-[25px]">
                Includes basic usage of our platform. Recommended for new and
                aspiring photographers.
              </p>
            </div>
            <div className="desktop:text-center tablet:text-end tablet:w-[278px] mb-[40px] flex flex-col">
              {toggled === true ? (
                <span className="font-[700] text-[40px] leading-[48px] tracking-[4.17px]">
                  $190.00
                </span>
              ) : (
                <span className="font-[700] text-[40px] leading-[48px] tracking-[4.17px]">
                  $19.00
                </span>
              )}
              {toggled === true ? (
                <span className="desktop:text-center tablet:text-end text-center font-[400] text-[15px] leading-[25px] opacity-[60%]">
                  per year
                </span>
              ) : (
                <span className="desktop:text-center tablet:text-end text-center font-[400] text-[15px] leading-[25px] opacity-[60%]">
                  per month
                </span>
              )}
            </div>
          </div>
          <button className="desktop:translate-x-[0px] tablet:py-[12px] tablet:px-[80px] tablet:translate-x-[-169px] transition-all transition-duration: 0.2s hover:text-black hover:bg-neutral-200 ml-[2px] mr-[2px] max-w-[100%] pt-[14px] pb-[14px] pr-[69px] pl-[68px] bg-black text-[15px] leading-[19.53px] tracking-[2.5px] text-white font-[700]">
            PICK PLAN
          </button>
        </div>
        <div className="desktop:px-[40px] desktop:pt-[88px] desktop:pb-[71px] tablet:px-[40px] tablet:pl-[40px] tablet:pr-[48px] tablet:max-w-[689px] mb-[24px] bg-black max-w-[318px] mr-[29px] ml-[28px] flex flex-col items-center pt-[56px] pb-[40px] pr-[22px] pl-[21px]">
          <div className="desktop:flex desktop:flex-col desktop:gap-[40px] tablet:flex tablet:flex-row flex flex-col items-center tablet:gap-[53px]">
            <div className="desktop:translate-x-[0px] desktop:translate-y-[-94px] desktop:w-[358px] desktop:h-[6px] desktop:bg-gradient-to-tr desktop:from-yellow-300 desktop:via-pink-600 desktop:to-blue-500 tablet:w-[6px] tablet:h-[298px] tablet:absolute tablet:translate-x-[-40px] tablet:translate-y-[14px] tablet:bg-gradient-to-t tablet:from-yellow-300 tablet:via-pink-600 tablet:to-blue-500 translate-x-[0px] translate-y-[-62px] w-[318px] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
            <div className="desktop:items-center tablet:flex tablet:items-start mb-[40px] flex flex-col items-center">
              <h1 className="tablet:text-start text-white mb-[18px] font-[700] text-[24px] leading-[25px]">
                Pro
              </h1>
              <p className="desktop:text-center tablet:text-start text-white max-w-[275px] text-center opacity-[60%] font-[400] text-[15px] leading-[25px]">
                More advanced features available. Recommended for photography
                veterans and professionals.
              </p>
            </div>
            <div className="desktop:text-center tablet:text-end tablet:w-[278px] mb-[40px] flex flex-col">
              {toggled === true ? (
                <span className="text-white font-[700] text-[40px] leading-[48px] tracking-[4.17px]">
                  $390.00
                </span>
              ) : (
                <span className="text-white font-[700] text-[40px] leading-[48px] tracking-[4.17px]">
                  $39.00
                </span>
              )}
              {toggled === true ? (
                <span className="desktop:text-center tablet:text-end text-white text-center font-[400] text-[15px] leading-[25px] opacity-[60%]">
                  per year
                </span>
              ) : (
                <span className="desktop:text-center tablet:text-end text-white text-center font-[400] text-[15px] leading-[25px] opacity-[60%]">
                  per month
                </span>
              )}
            </div>
          </div>
          <button className="desktop:translate-x-[0px] tablet:py-[12px] tablet:px-[80px] tablet:translate-x-[-169px] transition-all transition-duration: 0.2s hover:bg-neutral-200 ml-[2px] mr-[2px] max-w-[100%] pt-[14px] pb-[14px] pr-[69px] pl-[68px] bg-white text-[15px] leading-[19.53px] tracking-[2.5px] text-black font-[700]">
            PICK PLAN
          </button>
        </div>
        <div className="desktop:px-[40px] tablet:px-[40px] tablet:pl-[40px] tablet:pr-[48px] tablet:max-w-[689px] mb-[30px] max-w-[318px] mr-[29px] ml-[28px] flex flex-col items-center pt-[56px] pb-[40px] pr-[22px] pl-[21px] bg-neutral-100">
          <div className="desktop:flex desktop:flex-col desktop:gap-[40px] tablet:flex tablet:flex-row flex flex-col items-center tablet:gap-[53px]">
            <div className="desktop:items-center tablet:flex tablet:items-start mb-[40px] flex flex-col items-center">
              <h1 className="tablet:text-start mb-[18px] font-[700] text-[24px] leading-[25px]">
                Business
              </h1>
              <p className="desktop:text-center tablet:text-start max-w-[275px] text-center opacity-[60%] font-[400] text-[15px] leading-[25px]">
                Additional features available such as more detailed metrics.
                Recommended for business owners.
              </p>
            </div>
            <div className="desktop:text-center tablet:text-end tablet:w-[278px] mb-[40px] flex flex-col">
              {toggled === true ? (
                <span className="font-[700] text-[40px] leading-[48px] tracking-[4.17px]">
                  $990.00
                </span>
              ) : (
                <span className="font-[700] text-[40px] leading-[48px] tracking-[4.17px]">
                  $99.00
                </span>
              )}
              {toggled === true ? (
                <span className="desktop:text-center tablet:text-end text-center font-[400] text-[15px] leading-[25px] opacity-[60%]">
                  per year
                </span>
              ) : (
                <span className="desktop:text-center tablet:text-end text-center font-[400] text-[15px] leading-[25px] opacity-[60%]">
                  per month
                </span>
              )}
            </div>
          </div>
          <button className="desktop:translate-x-[0px] tablet:py-[12px] tablet:px-[80px] tablet:translate-x-[-169px] transition-all transition-duration: 0.2s hover:text-black hover:bg-neutral-200 ml-[2px] mr-[2px] max-w-[100%] pt-[14px] pb-[14px] pr-[69px] pl-[68px] bg-black text-[15px] leading-[19.53px] tracking-[2.5px] text-white font-[700]">
            PICK PLAN
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center mb-[60px] mr-[29px] ml-[28px]">
        <h1 className="hidden tablet:flex mb-[64px] text-[40px] font-[700] leading-[48px] tracking-[4.17px]">
          COMPARE
        </h1>
        <div className="mb-[24px]">
          <div className="tablet:flex tablet:flex-row">
            <h1 className="tablet:mr-[220px] max-w-[200px] mb-[23px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
              THE FEATURES
            </h1>
            <h1 className="hidden tablet:flex tablet:w-[110px] max-w-[200px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
              BASIC
            </h1>
            <h1 className="hidden tablet:flex tablet:w-[110px] max-w-[200px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
              PRO
            </h1>
            <h1 className="hidden tablet:flex tablet:w-[110px] max-w-[200px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
              BUSINESS
            </h1>
          </div>
          <span className="tablet:ml-[-24px] tablet:w-[689px] flex mb-[23px] w-[318px] h-[1px] bg-black"></span>
          <div className="tablet:flex">
            <h1 className="tablet:mr-[104px] mb-[16px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
              UNLIMITED STORY POSTING
            </h1>
            <div className="tablet:translate-x-[29px] mb-[24px] flex max-w-[315px]">
              <div>
                <h2 className="tablet:hidden mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  BASIC
                </h2>
                <img className="tablet:mr-[90px]" src={svg1} alt="checkSvg" />
              </div>
              <div>
                <h2 className="tablet:hidden mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  PRO
                </h2>
                <img className="tablet:mr-[90px]" src={svg1} alt="checkSvg" />
              </div>
              <div>
                <h2 className="tablet:hidden mb-[8px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  BUSINESS
                </h2>
                <img src={svg1} alt="checkSvg" />
              </div>
            </div>
          </div>
          <span className="tablet:ml-[-24px] tablet:w-[689px] flex w-[318px] h-[1px] bg-neutral-200"></span>
        </div>
        <div className="mb-[24px]">
          <div className="tablet:flex">
            <h1 className="tablet:mr-[104px] mb-[16px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
              UNLIMITED PHOTO UPLOAD
            </h1>
            <div className="tablet:translate-x-[29px] mb-[24px] flex max-w-[315px]">
              <div>
                <h2 className="tablet:hidden mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  BASIC
                </h2>
                <img className="tablet:mr-[90px]" src={svg1} alt="checkSvg" />
              </div>
              <div>
                <h2 className="tablet:hidden mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  PRO
                </h2>
                <img className="tablet:mr-[90px]" src={svg1} alt="checkSvg" />
              </div>
              <div>
                <h2 className="tablet:hidden mb-[8px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  BUSINESS
                </h2>
                <img src={svg1} alt="checkSvg" />
              </div>
            </div>
          </div>
          <span className="tablet:ml-[-24px] tablet:w-[689px] flex w-[318px] h-[1px] bg-neutral-200"></span>
        </div>
        <div className="mb-[24px]">
          <div className="tablet:flex">
            <h1 className="tablet:mr-[104px] mb-[16px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
              EMBEDDING CUSTOM CONTENT
            </h1>
            <div className="tablet:translate-x-[108px] mb-[24px] flex max-w-[315px]">
              <div>
                <h2 className="tablet:hidden mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  BASIC
                </h2>
              </div>
              <div>
                <h2 className="tablet:hidden mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  PRO
                </h2>
                <img className="tablet:mr-[90px]" src={svg1} alt="checkSvg" />
              </div>
              <div>
                <h2 className="tablet:hidden mb-[8px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  BUSINESS
                </h2>
                <img src={svg1} alt="checkSvg" />
              </div>
            </div>
          </div>
          <span className="tablet:ml-[-24px] tablet:w-[689px] flex w-[318px] h-[1px] bg-neutral-200"></span>
        </div>
        <div className="mb-[24px]">
          <div className="tablet:flex">
            <h1 className="tablet:mr-[104px] mb-[16px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
              CUSTOMIZE METADATA
            </h1>
            <div className="tablet:translate-x-[172px] mb-[24px] flex max-w-[315px]">
              <div>
                <h2 className="tablet:hidden mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  BASIC
                </h2>
              </div>
              <div>
                <h2 className="tablet:hidden mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  PRO
                </h2>
                <img className="tablet:mr-[90px]" src={svg1} alt="checkSvg" />
              </div>
              <div>
                <h2 className="tablet:hidden mb-[8px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  BUSINESS
                </h2>
                <img src={svg1} alt="checkSvg" />
              </div>
            </div>
          </div>
          <span className="tablet:ml-[-24px] tablet:w-[689px] flex w-[318px] h-[1px] bg-neutral-200"></span>
        </div>
        <div className="mb-[24px]">
          <div className="tablet:flex">
            <h1 className="tablet:mr-[104px] mb-[16px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
              ADVANCED METRICS
            </h1>
            <div className="tablet:translate-x-[298px] mb-[24px] flex max-w-[315px]">
              <div>
                <h2 className="tablet:hidden mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  BASIC
                </h2>
              </div>
              <div>
                <h2 className="tablet:hidden mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  PRO
                </h2>
              </div>
              <div>
                <h2 className="tablet:hidden mb-[8px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  BUSINESS
                </h2>
                <img src={svg1} alt="checkSvg" />
              </div>
            </div>
          </div>
          <span className="tablet:ml-[-24px] tablet:w-[689px] flex w-[318px] h-[1px] bg-neutral-200"></span>
        </div>
        <div className="mb-[24px]">
          <div className="tablet:flex">
            <h1 className="tablet:mr-[104px] mb-[16px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
              PHOTO DOWNLOADS
            </h1>
            <div className="tablet:translate-x-[298px] mb-[24px] flex max-w-[315px]">
              <div>
                <h2 className="tablet:hidden mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  BASIC
                </h2>
              </div>
              <div>
                <h2 className="tablet:hidden mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  PRO
                </h2>
              </div>
              <div>
                <h2 className="tablet:hidden mb-[8px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  BUSINESS
                </h2>
                <img src={svg1} alt="checkSvg" />
              </div>
            </div>
          </div>
          <span className="tablet:ml-[-24px] tablet:w-[689px] flex w-[318px] h-[1px] bg-neutral-200"></span>
        </div>
        <div className="mb-[24px]">
          <div className="tablet:flex">
            <h1 className="tablet:mr-[104px] mb-[16px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
              SEARCH ENGINE INDEXING
            </h1>
            <div className="tablet:translate-x-[248px] mb-[24px] flex max-w-[315px]">
              <div>
                <h2 className="tablet:hidden mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  BASIC
                </h2>
              </div>
              <div>
                <h2 className="tablet:hidden mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  PRO
                </h2>
              </div>
              <div>
                <h2 className="tablet:hidden mb-[8px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  BUSINESS
                </h2>
                <img src={svg1} alt="checkSvg" />
              </div>
            </div>
          </div>
          <span className="tablet:ml-[-24px] tablet:w-[689px] flex w-[318px] h-[1px] bg-neutral-200"></span>
        </div>
        <div className="mb-[24px]">
          <div className="tablet:flex">
            <h1 className="tablet:mr-[104px] mb-[16px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
              CUSTOM ANALYTICS
            </h1>
            <div className="tablet:translate-x-[299px] mb-[24px] flex max-w-[315px]">
              <div>
                <h2 className="tablet:hidden mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  BASIC
                </h2>
              </div>
              <div>
                <h2 className="tablet:hidden mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  PRO
                </h2>
              </div>
              <div>
                <h2 className="tablet:hidden mb-[8px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                  BUSINESS
                </h2>
                <img src={svg1} alt="checkSvg" />
              </div>
            </div>
          </div>
          <span className="tablet:ml-[-24px] tablet:w-[689px] flex w-[318px] h-[1px] bg-neutral-200"></span>
        </div>
      </div>
      <div className="desktop:pl-[171px] desktop:pr-[165px] desktop:py-[64px] desktop:bg-[url('/src/assets/shared/desktop/bg-beta.jpg')] tablet:bg-[url('/src/assets/shared/tablet/bg-beta.jpg')] bg-[url('/src/assets/shared/mobile/bg-beta.jpg')] bg-no-repeat bg-cover bg-black pt-[64px] pb-[64px] pl-[33px] pr-[32px]">
        <div className="desktop:translate-x-[-171px] tablet:h-[295px] tablet:w-[6px] tablet:absolute tablet:translate-x-[-33px] tablet:bg-gradient-to-t tablet:from-yellow-300 tablet:via-pink-600 tablet:to-blue-500 translate-y-[-64px] w-[128px] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
        <div className="tablet:flex tablet:justify-between tablet:items-center">
          <h1 className="tablet:max-w-[343px] tablet:text-[40px] tablet:leading-[48px] tablet:tracking-[4.17px] max-w-[274px] text-[32px] leading-[40px] tracking-[3.33px] text-white font-[700] mb-[24px]">
            We`re in beta. Get your invite today!
          </h1>
          <div className="cursor-pointer flex flex-wrap max-w-[174px] group">
            <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-white font-[700] mr-[18px]">
              GET AN INVITE
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#FFF">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Pricing;
