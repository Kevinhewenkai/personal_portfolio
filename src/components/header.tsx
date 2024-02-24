import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-1 flex-row items-center justify-between">
      <Image
        src={require("@/app/icon.png")}
        width={36}
        height={36}
        alt="logo"
      />
      <div className="flex flex-row gap-x-[20px] items-center">
        <a href="/#About">About</a>
        <a href="/#Works">Works</a>
        <a href="/#Works">Testimonials</a>
        <a href="/#Contact">Contact</a>
        <a
          className="rounded-[10px] bg-gray-900 px-[16px] py-[6px] text-gray-50"
          href={"/src/assets/Wenkai_He_resume.pdf"}
          download={"Wenkai_He_resume"}
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
