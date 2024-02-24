import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export default function IntroductionText() {
  return (
    <>
      <div className="flex flex-col gap-y-[48px]">
        <div className="flex flex-col gap-y-[8px]">
          <h1 className="text-h1M lg:text-h1D">Hi, I'm Wenkai He 👋</h1>
          <p className="lg:text-p1 text-gray-500">
            I'm a full stack developer with a focus on creating (and
            occasionally designing) exceptional digital experiences that are
            fast, accessible, visually appealing, and responsive. Even though I
            have been creating web and mobile application for over 2 years, I
            still love it as if it was something new.
          </p>
        </div>
        <div className="gap-y-[8px] flex flex-col justify-start">
          <div className="flex flex-row items-center gap-x-[10px]">
            <MdOutlineLocationOn size={24} />
            <p className=" text-gray-500">Sydney, Australia</p>
          </div>
          <div className="flex flex-row items-center gap-x-[10px]">
            <div className="size-[24px] flex flex-row items-center justify-center">
              <div className=" size-[8px] rounded-[4px] bg-[#10B981]" />
            </div>
            <p className=" text-gray-500">Available for new projects</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-[12px]">
          <a href="https://github.com/Kevinhewenkai">
            <FaGithub size={24} />
          </a>
          <a href="mailto: kevin@hewenkai@gmail.com">
            <MdOutlineEmail size={24} />
          </a>
        </div>
      </div>
    </>
  );
}
