import Image from "next/image";

export default function Avatar() {
  return (
    <>
      <div className="w-[300px] flex items-center">
        <Image
          src={require("/public/avatar.jpeg")}
          width={290}
          alt={"Avatar"}
          className="z-10 absolute pr-[10px] pb-[10px] bg-white"
        />
        <div className="w-[290px] -z-10 h-[320px] absolute bg-gray-300 translate-x-[20px] translate-y-[20px]"></div>
      </div>
    </>
  );
}
