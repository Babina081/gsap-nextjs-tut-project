"use client";

import Image from "next/image";
import React from "react";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const InfScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      infinite: true,
      orientation: "horizontal",
      gestureOrientation: "both",
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const repeatItems = (parentEl, total = 0) => {
      const items = [...parentEl.children];
      for (let i = 0; i <= total - 1; i++) {
        let cln = items[i].cloneNode(true);
        parentEl.append(cln);
      }
    };

    repeatItems(document.querySelector(".wrap"), 4);
  }, []);
  return (
    <div className="text-white">
      <h1 className="fixed flex justify-center w-[100%] h-[100%] top-[10%]">
        {" "}
        HORIZON INFINITE SCROLLING
      </h1>
      <div className="w-min">
        <div className="wrap">
          <Image
            src="/Accordion/1.jpg"
            alt="image"
            width={500}
            height={500}
            className="h-full bg-cover bg-[50% 50%] rounded-[2rem]"
          />
          <Image
            src="/Accordion/1.jpg"
            alt="image"
            width={500}
            height={500}
            className="h-full bg-cover bg-[50% 50%] rounded-[2rem]"
          />
          <Image
            src="/Accordion/1.jpg"
            alt="image"
            width={500}
            height={500}
            className="h-full bg-cover bg-[50% 50%] rounded-[2rem]"
          />
          <Image
            src="/Accordion/1.jpg"
            alt="image"
            width={500}
            height={500}
            className="h-full bg-cover bg-[50% 50%] rounded-[2rem]"
          />
          <Image
            src="/Accordion/1.jpg"
            alt="image"
            width={500}
            height={500}
            className="h-full bg-cover bg-[50% 50%] rounded-[2rem]"
          />
          <Image
            src="/Accordion/1.jpg"
            alt="image"
            width={500}
            height={500}
            className="h-full bg-cover bg-[50% 50%] rounded-[2rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default InfScroll;
