"use client";
import { Button } from "@nextui-org/react";
import { TfiArrowTopRight } from "react-icons/tfi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const tutorials = [
  {
    cover: "/images/tutorial_01.webp",
    title: "¿Cómo colocar....",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "#",
  },
  {
    cover: "/images/tutorial_02.webp",
    title: "¿Cómo colocar....",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "#",
  },
  {
    cover: "/images/tutorial_03.webp",
    title: "¿Cómo colocar....",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "#",
  },
  {
    cover: "/images/tutorial_04.webp",
    title: "¿Cómo colocar....",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "#",
  },
  {
    cover: "/images/tutorial_05.webp",
    title: "¿Cómo colocar....",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "#",
  },
  {
    cover: "/images/tutorial_06.webp",
    title: "¿Cómo colocar....",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "#",
  },
];

export default function Tutorials() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider className="mx-auto" {...settings}>
      {tutorials.map((tutorial, index) => {
        return (
            
          <div key={index} class="p-4 md:w-1/4">
            <div class="h-full border-gray-200 border-opacity-60 rounded-3xl overflow-hidden bg-card-slider">
              <img
                src={tutorial.cover}
                className="lg:h-48 md:h-36 w-full object-cover object-center rounded-3xl p-2"
                alt=""
              />
              <div class="p-6">
                <h1 class="title-font text-lg font-medium text-white mb-3">
                  {tutorial.title}
                </h1>
                <p class="leading-relaxed mb-3 text-gray-400">{tutorial.p}</p>
                <div class="flex items-center flex-wrap ">
                  <a href={tutorial.link} class="mt-3 inline-flex items-center">
                    <Button className="bg-white px-3 py-1 rounded-lg text-black">
                      Ver
                      <TfiArrowTopRight className="w-7 h-7 p-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
