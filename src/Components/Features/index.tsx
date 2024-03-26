import img1Mobile from "/src/assets/features/mobile/hero.jpg";
import img1Tablet from "/src/assets/features/tablet/hero.jpg";
import img1Desktop from "/src/assets/features/desktop/hero.jpg";
import svg1 from "/src/assets/features/desktop/responsive.svg";
import svg2 from "/src/assets/features/desktop/no-limit.svg";
import svg3 from "/src/assets/features/desktop/embed.svg";
import svg4 from "/src/assets/features/desktop/custom-domain.svg";
import svg5 from "/src/assets/features/desktop/boost-exposure.svg";
import svg6 from "/src/assets/features/desktop/drag-drop.svg";

import { motion } from "framer-motion";

function Features() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <img
          className="tablet:hidden w-[100%]"
          src={img1Mobile}
          alt="sea view"
        />
        <img
          className="hidden desktop:hidden tablet:flex w-[100%]"
          src={img1Tablet}
          alt="sea view"
        />
        <img
          className="hidden desktop:flex w-[100%]"
          src={img1Desktop}
          alt="sea view"
        />
        <div className="mb-[64px] bg-black pt-[72px] pb-[72px] pl-[29px] pr-[28px]">
          <div className="translate-y-[-72px] w-[128px] h-[6px] bg-gradient-to-tr from-yellow-300 via-pink-600 to-blue-500"></div>
          <h1 className="max-w-[260px] text-[32px] leading-[40px] tracking-[3.33px] text-white font-[700] mb-[16px]">
            FEATURES
          </h1>
          <p className="max-w-[308px] opacity-[60%] text-[15px] leading-[25px] text-white font-[400] mb-[23px]">
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </p>
        </div>
      </div>
      <div className="mb-[90px]">
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
        <div className="flex items-center flex-col mb-[56px]">
          <img className="mb-[48px]" src={svg4} alt="responsive" />
          <h1 className="mb-[16px] text-black font-[700] leading-[25px] text-[18px]">
            Custom Domain
          </h1>
          <p className="opacity-[60%] max-w-[304px] text-center text-black font-[400] leading-[25px] text-[15px]">
            With Photosnap subscriptions you can host your stories on your own
            domain. You can also remove our branding!
          </p>
        </div>
        <div className="flex items-center flex-col mb-[56px]">
          <img className="mb-[48px]" src={svg5} alt="responsive" />
          <h1 className="mb-[16px] text-black font-[700] leading-[25px] text-[18px]">
            Boost Your Exposure
          </h1>
          <p className="opacity-[60%] max-w-[304px] text-center text-black font-[400] leading-[25px] text-[15px]">
            Users that viewed your story or gallery can easily get notifed of
            new and featured stories with our built in mailing list.
          </p>
        </div>
        <div className="flex items-center flex-col mb-[56px]">
          <img className="mb-[48px]" src={svg6} alt="responsive" />
          <h1 className="mb-[16px] text-black font-[700] leading-[25px] text-[18px]">
            Drag & Drop Image
          </h1>
          <p className="opacity-[60%] max-w-[304px] text-center text-black font-[400] leading-[25px] text-[15px]">
            Easily drag and drop your image and get beautiful shots everytime.
            No over the top tooling to add friction to creating stories.
          </p>
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

export default Features;
