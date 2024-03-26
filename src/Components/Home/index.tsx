import Img1Mobile from "/src/assets/home/mobile/create-and-share.jpg";
import Img1Tablet from "/src/assets/home/tablet/create-and-share.jpg";
import Img1Desktop from "/src/assets/home/desktop/create-and-share.jpg";
import Img2Mobile from "/src/assets/home/mobile/beautiful-stories.jpg";
import Img2Tablet from "/src/assets/home/tablet/beautiful-stories.jpg";
import Img2Desktop from "/src/assets/home/desktop/beautiful-stories.jpg";
import Img3Mobile from "/src/assets/home/mobile/designed-for-everyone.jpg";
import Img3Tablet from "/src/assets/home/tablet/designed-for-everyone.jpg";
import Img3Desktop from "/src/assets/home/desktop/designed-for-everyone.jpg";
import img4Mobile from "/src/assets/stories/mobile/mountains.jpg";
import img4Desktop from "/src/assets/stories/desktop/mountains.jpg";
import img5Mobile from "/src/assets/stories/mobile/cityscapes.jpg";
import img5Desktop from "/src/assets/stories/desktop/cityscapes.jpg";
import img6Mobile from "/src/assets/stories/mobile/18-days-voyage.jpg";
import img6Desktop from "/src/assets/stories/desktop/18-days-voyage.jpg";
import img7Mobile from "/src/assets/stories/mobile/architecturals.jpg";
import img7Desktop from "/src/assets/stories/desktop/architecturals.jpg";
import svg1 from "/src/assets/features/desktop/responsive.svg";
import svg2 from "/src/assets/features/desktop/no-limit.svg";
import svg3 from "/src/assets/features/desktop/embed.svg";

import { useState } from "react";
import { motion } from "framer-motion";
function Home() {
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
          className="tablet:hidden w-[100%]"
          src={Img1Mobile}
          alt="sea view"
        />
        <img
          className="hidden desktop:hidden tablet:flex w-[100%]"
          src={Img1Tablet}
          alt="sea view"
        />
        <img
          className="hidden desktop:flex w-[100%]"
          src={Img1Desktop}
          alt="sea view"
        />
        <div className="bg-black pt-[72px] pb-[72px] pl-[33px] pr-[24px]">
          <div className="translate-y-[-72px] w-[128px] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          <h1 className="max-w-[260px] text-[32px] leading-[40px] tracking-[3.33px] text-white font-[700] mb-[16px]">
            Create and share your photo stories.
          </h1>
          <p className="max-w-[281px] opacity-[60%] text-[15px] leading-[25px] text-white font-[400] mb-[23px]">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
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
      <div>
        <img className="tablet:hidden w-[100%]" src={Img2Mobile} alt="laptop" />
        <img
          className="hidden desktop:hidden tablet:flex w-[100%]"
          src={Img2Tablet}
          alt="laptop"
        />
        <img
          className="hidden desktop:flex w-[100%]"
          src={Img2Desktop}
          alt="laptop"
        />
        <div className="bg-white pt-[72px] pb-[72px] pl-[33px] pr-[24px]">
          <h1 className="max-w-[260px] text-[32px] leading-[40px] tracking-[3.33px] text-black font-[700] mb-[16px]">
            BEAUTIFUL STORIES EVERY TIME
          </h1>
          <p className="max-w-[302px] opacity-[60%] text-[15px] leading-[25px] text-black font-[400] mb-[23px]">
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <div className="cursor-pointer flex flex-wrap max-w-[207px] group">
            <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-black font-[700] mr-[18px]">
              VIEW THE STORIES
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#000">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div>
        <img
          className="tablet:hidden w-[100%]"
          src={Img3Mobile}
          alt="cameraman"
        />
        <img
          className="hidden desktop:hidden tablet:flex w-[100%]"
          src={Img3Tablet}
          alt="cameraman"
        />
        <img
          className="hidden desktop:flex w-[100%]"
          src={Img3Desktop}
          alt="cameraman"
        />
        <div className="bg-white pt-[72px] pb-[72px] pl-[33px] pr-[24px]">
          <h1 className="max-w-[284px] text-[32px] leading-[40px] tracking-[3.33px] text-black font-[700] mb-[16px]">
            DESIGNED FOR EVERYONE
          </h1>
          <p className="max-w-[302px] opacity-[60%] text-[15px] leading-[25px] text-black font-[400] mb-[23px]">
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <div className="cursor-pointer flex flex-wrap max-w-[207px] group">
            <h1 className="group-hover:underline text-[12px] leading-[15.62px] tracking-[2px] text-black font-[700] mr-[18px]">
              VIEW THE STORIES
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#000">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-[80px]">
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
      </div>
      <div className="mb-[60px]">
        <div className="flex items-center flex-col mb-[56px]">
          <img className="mb-[48px]" src={svg1} alt="responsive" />
          <h1 className="mb-[16px] text-black font-[700] leading-[25px] text-[18px]">
            100% Responsive
          </h1>
          <p className="opacity-[60%] max-w-[304px] text-center text-black font-[400] leading-[25px] text-[15px]">
            No matter which the device you’re on, our site is fully responsive
            and stories look beautiful on any screen.
          </p>
        </div>
        <div className="flex items-center flex-col mb-[56px]">
          <img className="mb-[48px]" src={svg2} alt="responsive" />
          <h1 className="mb-[16px] text-black font-[700] leading-[25px] text-[18px]">
            No Photo Upload Limit
          </h1>
          <p className="opacity-[60%] max-w-[304px] text-center text-black font-[400] leading-[25px] text-[15px]">
            Our tool has no limits on uploads or bandwidth. Freely upload in
            bulk and share all of your stories in one go.
          </p>
        </div>
        <div className="flex items-center flex-col mb-[56px]">
          <img className="mb-[48px]" src={svg3} alt="responsive" />
          <h1 className="mb-[16px] text-black font-[700] leading-[25px] text-[18px]">
            Available to Embed
          </h1>
          <p className="opacity-[60%] max-w-[304px] text-center text-black font-[400] leading-[25px] text-[15px]">
            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
            videos, Google Maps, and more.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
