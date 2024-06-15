"use client";

import React from "react";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import "./style.css";

import { FreeMode } from "swiper/modules";
import MyCoinCard from "../MyCoinCard";

const MyCoins: React.FC = () => {
  return (
    <>
    <p className="text-white font-bold text-lg ml-5 my-6 ">My Coins</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <MyCoinCard type="BTC/USD" price={1233.23} />
        </SwiperSlide>
        <SwiperSlide>
          <MyCoinCard type="BTC/USD" price={1233.23} />
        </SwiperSlide>
        <SwiperSlide>
          <MyCoinCard type="BTC/USD" price={1233.23} />
        </SwiperSlide>
        <SwiperSlide>
          <MyCoinCard type="BTC/USD" price={1233.23} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MyCoins;
