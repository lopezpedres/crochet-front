import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Navigation, EffectFade } from "swiper";

const images = ["bear.jpg", "bunny.png", "deer.jpg", "squirrel.jpg", "bear.jpg", "bunny.png", "deer.jpg", "squirrel.jpg"]

export default function Carrosuel() {
    return (
        <>
            <Swiper
                slidesPerView={ 1 }
                modules={ [Navigation, EffectFade] }
                breakpoints={
                    { // when window width is >= 320px
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 1
                        },
                        // when window width is >= 480px
                        960: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                        // when window width is >= 640px
                        1440: {
                            slidesPerView: 4,
                            spaceBetween: 10
                        }
                    }
                }
                effect={ "creative" }
                speed={ 800 }
                navigation={ true }
                className="w-full ">
                { images.map((img, i) => (
                    <SwiperSlide key={ img + i } className="w-full h-full m-2 " >
                        <div className=" hover:-translate-y-2 group container  ">
                            <a href="/hola" className="cursor-pointer">
                                <img key={ img } className={ ` border-2 object-center rounded-3xl object-cover h-72 md:96 ` } src={ `./images/${img}` } />
                            </a>
                            <a href="#" className=" cursor-pointer hidden absolute rounded-b-3xl  group-hover:block bottom-0 left-0 right-0 bg-secondary ">
                                <p className="p-2 text-center text-2xl">Añadir al carrito</p>
                            </a>
                        </div>
                    </SwiperSlide>
                )) }
            </Swiper>
        </>
    );
}
