"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

const Typo = () => {
  let lenis;
  const text = new SplitType(".target");
  const chars = text.chars;
  useEffect(() => {
    const initSmooth = () => {
      lenis = new Lenis({ lerp: 0.2, smooth: true });
      lenis.on("scroll", () => ScrollTrigger.update());

      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };

    const scroll = () => {
      chars.forEach((char) => gsap.set(char.parentNode, { perspective: 1000 }));
      gsap.fromTo(
        chars,
        {
          willChange: "opacity,transform",
          opacity: 0.2,
          z: -800,
        },
        {
          ease: "back.out(1.7)",
          opacity: 1,
          z: 0,
          stagger: 0.04,
          scrollTrigger: {
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    };

    const init = () => {
      initSmooth();
      scroll();
    };
    init();
  }, []);

  return (
    <div>
      <div className="absolute top-0 w-full h-screen flex justify-center items-center">
        Scroll DOWN for the typo animation
      </div>
      <div className="flex flex-col w-screen relative px-8 py-6 mt-[750px]">
        <h2 className="content_title text-[8vw] leading-8 text-center grid gap-8">
          <span className="uppercase target">helooooooo</span>
          <span className="uppercase targetf">worldddddd</span>
          <span className="uppercase target mb-[100px]">its meeeeeeeee</span>
        </h2>
      </div>
      <div className="flex flex-col w-screen relative px-8 py-6 mb-[350px]">
        <p className="max-w-[660px] mx-auto my-6 text-[1.25rem] leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ducimus
          reprehenderit quibusdam modi exercitationem praesentium nam in alias
          laudantium officiis, beatae libero hic minus labore vero, similique
          id! Itaque iure voluptatem laudantium eligendi, dolores, aliquam quam
          nobis vel odio odit et aspernatur illum temporibus id cupiditate
          dolorum! Pariatur, ab voluptate!
        </p>
      </div>
    </div>
  );
};

export default Typo;
