"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Link from "next/link";
import "./carousel.css";
import { Box } from "@mui/material";
import Image from 'next/image'

const DozensCarousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 4500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <>
      <Slider {...settings} className="dozenscarousel">
        <div>
          <Box
            width={380}
            height={300}
            borderRadius="16px"
            sx={{ boxShadow: (theme) => theme.shadows[10] }}
          >
            <Link href="https://flexy-next-js-dashboard.vercel.app/">
              <Image
                src="/images/frontend-pages/demos/demo-main.jpg"
                alt="user-img"
                width={380}
                height={300}
                style={{ borderRadius: "16px" }}
              />
            </Link>
          </Box>
        </div>
        <div>
          <Box
            width={380}
            height={300}
            borderRadius="16px"
            sx={{ boxShadow: (theme) => theme.shadows[10] }}
          >
            <Link href="https://flexy-next-js-dark.vercel.app/dashboards/dashboard2">
              <Image
                src="/images/frontend-pages/demos/demo-dark.jpg"
                alt="user-img"
                width={380}
                height={300}
                style={{ borderRadius: "16px" }}
              />
            </Link>
          </Box>
        </div>
        <div>
          <Box
            width={380}
            height={300}
            borderRadius="16px"
            sx={{ boxShadow: (theme) => theme.shadows[10] }}
          >
            <Link href="https://flexy-next-js-horizontal.vercel.app/dashboards/dashboard3">
              <Image
                src="/images/frontend-pages/demos/demo-horizontal.jpg"
                alt="user-img"
                width={380}
                height={300}
                style={{ borderRadius: "16px" }}
              />
            </Link>
          </Box>
        </div>
        <div>
          <Box
            width={380}
            height={300}
            borderRadius="16px"
            sx={{ boxShadow: (theme) => theme.shadows[10] }}
          >
            <Link href="https://flexy-next-js-dashboard.vercel.app/apps/chats">
              <Image
                src="/images/frontend-pages/apps/app-chat.jpg"
                alt="user-img"
                width={380}
                height={300}
                style={{ borderRadius: "16px" }}
              />
            </Link>
          </Box>
        </div>
        <div>
          <Box
            width={380}
            height={300}
            borderRadius="16px"
            sx={{ boxShadow: (theme) => theme.shadows[10] }}
          >
            <Link href="https://flexy-next-js-dashboard.vercel.app/apps/email">
              <Image
                src="/images/frontend-pages/apps/app-email.jpg"
                alt="user-img"
                width={380}
                height={300}
                style={{ borderRadius: "16px" }}
              />
            </Link>
          </Box>
        </div>
      </Slider>
    </>
  );
};

export default DozensCarousel;
