import React from "react";
import { FullScreenScrollFX, FullScreenFXAPI } from "@/components/ui/full-screen-scroll-fx";

const sections = [
  {
    rightLabel: "Peace",
    background: "/homimg/homeimg1.png",
    audioSrc: "/sfx/click-01.mp3",
    mbBackground: "/homimg/homeimg1-mb.png"
  },
  {
    rightLabel: "Balance",
    background: "/homimg/homimg2.png",
    audioSrc: "/sfx/whoosh-02.mp3",
  },
  {
    rightLabel: "Hospitality",
    background: "/homimg/homeimg4.png",
    audioSrc: "/sfx/whoosh-02.mp3",
  },
];

const HomeHeader = () => {
  const apiRef = React.useRef<FullScreenFXAPI>(null);

  return (
    <>
      <FullScreenScrollFX
        sections={ sections }
        footer={<div></div>}
        showProgress
        durations={{ change: 0.7, snap: 800 }}
        className="-mt-28"
      />
    </>
  );
}

export default HomeHeader;