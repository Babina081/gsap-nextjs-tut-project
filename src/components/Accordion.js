"use client";
import React from "react";
import Image from "next/image";
const Accordion = () => {
  const animation = (e) => {
    const cards = document.querySelectorAll(".card");
    const reset = () => {
      cards.forEach((card) => {
        card.classList.remove("animation");
      });
    };
    if (!e.target.closest(".card")) return;
    reset();
    e.target.parentElement.classList.add("animation");
  };

  return (
    <div>
      <div className="fixed top-[40px] w-full flex items-center justify-center text-white">
        Accordion
      </div>
      <div className="h-[100vh] grid place-items-centerx">
        <div className="flex gap-[0.15rem] p-[0.15rem]">
          <div
            onClick={animation}
            className="card flex-1 h-[70vmin] cursor-pointer overflow-hidden transition delay-700"
          >
            <Image
              width={500}
              height={500}
              className="w-[100%] h-[100%] object-cover  "
              alt="image"
              src="/Accordion/1.jpg"
            ></Image>
          </div>
          <div
            onClick={animation}
            className="card flex-1 h-[70vmin] cursor-pointer overflow-hidden transition delay-700"
          >
            <Image
              width={500}
              height={500}
              className="w-[100%] h-[100%] object-cover  "
              alt="image"
              src="/Accordion/1.jpg"
            ></Image>
          </div>
          <div
            onClick={animation}
            className="card flex-1 h-[70vmin] cursor-pointer overflow-hidden transition delay-700"
          >
            <Image
              width={500}
              height={500}
              className="w-[100%] h-[100%] object-cover  "
              alt="image"
              src="/Accordion/1.jpg"
            ></Image>
          </div>
          <div
            onClick={animation}
            className="card flex-1 h-[70vmin] cursor-pointer overflow-hidden transition delay-700"
          >
            <Image
              width={500}
              height={500}
              className="w-[100%] h-[100%] object-cover  "
              alt="image"
              src="/Accordion/1.jpg"
            ></Image>
          </div>
          <div
            onClick={animation}
            className="card flex-1 h-[70vmin] cursor-pointer overflow-hidden transition delay-700"
          >
            <Image
              width={500}
              height={500}
              className="w-[100%] h-[100%] object-cover  "
              alt="image"
              src="/Accordion/1.jpg"
            ></Image>
          </div>
          <div
            onClick={animation}
            className="card flex-1 h-[70vmin] cursor-pointer overflow-hidden transition delay-700"
          >
            <Image
              width={500}
              height={500}
              className="w-[100%] h-[100%] object-cover  "
              alt="image"
              src="/Accordion/1.jpg"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
