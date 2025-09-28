import React from "react";
import { FullScreenScrollFX, FullScreenFXAPI } from "@/components/ui/full-screen-scroll-fx";

const sections = [
  {
    rightLabel: "Peace",
    background: "https://images.pexels.com/photos/3289156/pexels-photo-3289156.jpeg?auto=compress&cs=tinysrgb&w=1600",
    audioSrc: "/sfx/click-01.mp3",
  },
  {
    rightLabel: "Balance",
    background: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    audioSrc: "/sfx/whoosh-02.mp3",
  },
  {
    rightLabel: "Devotion",
    background: "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&w=1600",
    audioSrc: "/sfx/whoosh-02.mp3",
  },
  {
    rightLabel: "Hospitality",
    background: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1600",
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