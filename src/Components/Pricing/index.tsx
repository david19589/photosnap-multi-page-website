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
      <div>
        <img className="tablet:hidden w-[100%]" src={img1Mobile} alt="camera" />
        <img
          className="hidden desktop:hidden tablet:flex w-[100%]"
          src={img1Tablet}
          alt="camera"
        />
        <img
          className="hidden desktop:flex w-[100%]"
          src={img1Desktop}
          alt="camera"
        />
        <div className="mb-[64px] bg-black pt-[72px] pb-[72px] pl-[29px] pr-[28px]">
          <div className="translate-y-[-72px] w-[128px] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          <h1 className="max-w-[260px] text-[32px] leading-[40px] tracking-[3.33px] text-white font-[700] mb-[16px]">
            PRICING
          </h1>
          <p className="max-w-[308px] opacity-[60%] text-[15px] leading-[25px] text-white font-[400] mb-[23px]">
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It`s the simple way to create and share your
            photos.
          </p>
        </div>
      </div>
      <div className="mb-[40px] flex items-center justify-center">
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
      <div className="mb-[64px] flex flex-col items-center">
        <div className="mb-[30px] max-w-[318px] mr-[29px] ml-[28px] flex flex-col items-center pt-[56px] pb-[40px] pr-[22px] pl-[21px] bg-neutral-100">
          <div className="mb-[40px] flex flex-col items-center">
            <h1 className="mb-[18px] font-[700] text-[24px] leading-[25px]">
              Basic
            </h1>
            <p className="max-w-[275px] text-center opacity-[60%] font-[400] text-[15px] leading-[25px]">
              Includes basic usage of our platform. Recommended for new and
              aspiring photographers.
            </p>
          </div>
          <div className="mb-[40px] flex flex-col">
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
              <span className="text-center font-[400] text-[15px] leading-[25px] opacity-[60%]">
                per year
              </span>
            ) : (
              <span className="text-center font-[400] text-[15px] leading-[25px] opacity-[60%]">
                per month
              </span>
            )}
          </div>
          <button className="transition-all transition-duration: 0.2s hover:text-black hover:bg-neutral-200 ml-[2px] mr-[2px] max-w-[100%] pt-[14px] pb-[14px] pr-[69px] pl-[68px] bg-black text-[15px] leading-[19.53px] tracking-[2.5px] text-white font-[700]">
            PICK PLAN
          </button>
        </div>
        <div className="mb-[24px] bg-black max-w-[318px] mr-[29px] ml-[28px] flex flex-col items-center pt-[56px] pb-[40px] pr-[22px] pl-[21px]">
          <div className="translate-y-[-62px] w-[318px] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          <div className="mb-[40px] flex flex-col items-center">
            <h1 className="text-white mb-[18px] font-[700] text-[24px] leading-[25px]">
              Pro
            </h1>
            <p className="text-white max-w-[275px] text-center opacity-[60%] font-[400] text-[15px] leading-[25px]">
              More advanced features available. Recommended for photography
              veterans and professionals.
            </p>
          </div>
          <div className="mb-[40px] flex flex-col">
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
              <span className="text-white text-center font-[400] text-[15px] leading-[25px] opacity-[60%]">
                per year
              </span>
            ) : (
              <span className="text-white text-center font-[400] text-[15px] leading-[25px] opacity-[60%]">
                per month
              </span>
            )}
          </div>
          <button className="transition-all transition-duration: 0.2s hover:bg-neutral-200 ml-[2px] mr-[2px] max-w-[100%] pt-[14px] pb-[14px] pr-[69px] pl-[68px] bg-white text-[15px] leading-[19.53px] tracking-[2.5px] text-black font-[700]">
            PICK PLAN
          </button>
        </div>
        <div className="mb-[30px] max-w-[318px] mr-[29px] ml-[28px] flex flex-col items-center pt-[56px] pb-[40px] pr-[22px] pl-[21px] bg-neutral-100">
          <div className="mb-[40px] flex flex-col items-center">
            <h1 className="mb-[18px] font-[700] text-[24px] leading-[25px]">
              Business
            </h1>
            <p className="max-w-[275px] text-center opacity-[60%] font-[400] text-[15px] leading-[25px]">
              Additional features available such as more detailed metrics.
              Recommended for business owners.
            </p>
          </div>
          <div className="mb-[40px] flex flex-col">
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
              <span className="text-center font-[400] text-[15px] leading-[25px] opacity-[60%]">
                per year
              </span>
            ) : (
              <span className="text-center font-[400] text-[15px] leading-[25px] opacity-[60%]">
                per month
              </span>
            )}
          </div>
          <button className="transition-all transition-duration: 0.2s hover:text-black hover:bg-neutral-200 ml-[2px] mr-[2px] max-w-[100%] pt-[14px] pb-[14px] pr-[69px] pl-[68px] bg-black text-[15px] leading-[19.53px] tracking-[2.5px] text-white font-[700]">
            PICK PLAN
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center mb-[60px] mr-[29px] ml-[28px]">
        <div className="mb-[24px]">
          <h1 className="max-w-[200px] mb-[23px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
            THE FEATURES
          </h1>
          <span className="flex mb-[23px] w-[318px] h-[1px] bg-black"></span>
          <h1 className="mb-[16px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
            UNLIMITED STORY POSTING
          </h1>
          <div className="mb-[24px] flex max-w-[315px]">
            <div>
              <h2 className="mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                BASIC
              </h2>
              <img src={svg1} alt="checkSvg" />
            </div>
            <div>
              <h2 className="mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                PRO
              </h2>
              <img src={svg1} alt="checkSvg" />
            </div>
            <div>
              <h2 className="mb-[8px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                BUSINESS
              </h2>
              <img src={svg1} alt="checkSvg" />
            </div>
          </div>
          <span className="flex w-[318px] h-[1px] bg-neutral-200"></span>
        </div>
        <div className="mb-[24px]">
          <h1 className="mb-[16px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
            UNLIMITED PHOTO UPLOAD
          </h1>
          <div className="mb-[24px] flex max-w-[315px]">
            <div>
              <h2 className="mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                BASIC
              </h2>
              <img src={svg1} alt="checkSvg" />
            </div>
            <div>
              <h2 className="mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                PRO
              </h2>
              <img src={svg1} alt="checkSvg" />
            </div>
            <div>
              <h2 className="mb-[8px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                BUSINESS
              </h2>
              <img src={svg1} alt="checkSvg" />
            </div>
          </div>
          <span className="flex w-[318px] h-[1px] bg-neutral-200"></span>
        </div>
        <div className="mb-[24px]">
          <h1 className="mb-[16px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
            EMBEDDING CUSTOM CONTENT
          </h1>
          <div className="mb-[24px] flex max-w-[315px]">
            <div>
              <h2 className="mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                BASIC
              </h2>
            </div>
            <div>
              <h2 className="mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                PRO
              </h2>
              <img src={svg1} alt="checkSvg" />
            </div>
            <div>
              <h2 className="mb-[8px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                BUSINESS
              </h2>
              <img src={svg1} alt="checkSvg" />
            </div>
          </div>
          <span className="flex w-[318px] h-[1px] bg-neutral-200"></span>
        </div>
        <div className="mb-[24px]">
          <h1 className="mb-[16px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
            CUSTOMIZE METADATA
          </h1>
          <div className="mb-[24px] flex max-w-[315px]">
            <div>
              <h2 className="mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                BASIC
              </h2>
            </div>
            <div>
              <h2 className="mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                PRO
              </h2>
              <img src={svg1} alt="checkSvg" />
            </div>
            <div>
              <h2 className="mb-[8px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                BUSINESS
              </h2>
              <img src={svg1} alt="checkSvg" />
            </div>
          </div>
          <span className="flex w-[318px] h-[1px] bg-neutral-200"></span>
        </div>
        <div className="mb-[24px]">
          <h1 className="mb-[16px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
            ADVANCED METRICS
          </h1>
          <div className="mb-[24px] flex max-w-[315px]">
            <div>
              <h2 className="mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                BASIC
              </h2>
            </div>
            <div>
              <h2 className="mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                PRO
              </h2>
            </div>
            <div>
              <h2 className="mb-[8px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                BUSINESS
              </h2>
              <img src={svg1} alt="checkSvg" />
            </div>
          </div>
          <span className="flex w-[318px] h-[1px] bg-neutral-200"></span>
        </div>
        <div className="mb-[24px]">
          <h1 className="mb-[16px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
            PHOTO DOWNLOADS
          </h1>
          <div className="mb-[24px] flex max-w-[315px]">
            <div>
              <h2 className="mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                BASIC
              </h2>
            </div>
            <div>
              <h2 className="mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                PRO
              </h2>
            </div>
            <div>
              <h2 className="mb-[8px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                BUSINESS
              </h2>
              <img src={svg1} alt="checkSvg" />
            </div>
          </div>
          <span className="flex w-[318px] h-[1px] bg-neutral-200"></span>
        </div>
        <div className="mb-[24px]">
          <h1 className="mb-[16px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
            SEARCH ENGINE INDEXING
          </h1>
          <div className="mb-[24px] flex max-w-[315px]">
            <div>
              <h2 className="mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                BASIC
              </h2>
            </div>
            <div>
              <h2 className="mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                PRO
              </h2>
            </div>
            <div>
              <h2 className="mb-[8px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                BUSINESS
              </h2>
              <img src={svg1} alt="checkSvg" />
            </div>
          </div>
          <span className="flex w-[318px] h-[1px] bg-neutral-200"></span>
        </div>
        <div className="mb-[24px]">
          <h1 className="mb-[16px] font-[700] text-[12px] leading-[15.62px] tracking-[2px]">
            CUSTOM ANALYTICS
          </h1>
          <div className="mb-[24px] flex max-w-[315px]">
            <div>
              <h2 className="mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                BASIC
              </h2>
            </div>
            <div>
              <h2 className="mb-[8px] mr-[70px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                PRO
              </h2>
            </div>
            <div>
              <h2 className="mb-[8px] opacity-[50%] font-[700] text-[10px] leading-[13.02px] tracking-[1.67px]">
                BUSINESS
              </h2>
              <img src={svg1} alt="checkSvg" />
            </div>
          </div>
          <span className="flex w-[318px] h-[1px] bg-neutral-200"></span>
        </div>
      </div>
      <div className="desktop:bg-[url('/src/assets/shared/desktop/bg-beta.jpg')] tablet:bg-[url('/src/assets/shared/tablet/bg-beta.jpg')] bg-[url('/src/assets/shared/mobile/bg-beta.jpg')] bg-no-repeat bg-cover bg-black pt-[64px] pb-[64px] pl-[33px] pr-[32px]">
        <div className="translate-y-[-64px] w-[128px] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
        <h1 className="max-w-[274px] text-[32px] leading-[40px] tracking-[3.33px] text-white font-[700] mb-[24px]">
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
    </motion.div>
  );
}

export default Pricing;
