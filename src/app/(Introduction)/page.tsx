"use client";
import { SCREEN_SIZE_THRESHOLD, useWindowWidth } from "@/constant";
import IntroductionText from "./(text)";

function IntroductionLG() {
  return (
    <div id={"home"} className=" py-[96px]">
      <IntroductionText />
    </div>
  );
}

function IntroductionSM() {
  return (
    <div id={"home"}>
      <IntroductionText />
    </div>
  );
}

export default function Introduction() {
  const width = useWindowWidth();
  const APP =
    width > SCREEN_SIZE_THRESHOLD ? <IntroductionLG /> : <IntroductionSM />;
  return APP;
}
