import React, { useState, useTransition } from 'react'

const myCarrosuel = () => {
    const images = ["bear.jpg", "bunny.png", "deer.jpg", "squirrel.jpg"]
    const [slides, setSlides] = useState([0, 1, 2])
    const [transition, setTransition] = useState("")
    const plusSlide = () => {
        const newValues = [
            ...slides.map(n => n + 1)
        ]
        console.log(newValues)
        setTransition("translate-x-10")
        setSlides(newValues)

    }
    const minusSlide = () => {
        const newValues = [
            ...slides.map(n => n - 1)
        ]
        console.log(newValues)
        setSlides(newValues)
    }

    return (
        <div className='relative overflow-hidden'>
            <div className='flex place-content-center items-center '>

                { images.map((img, i) => (
                    (i === slides[0]) &&
                    <img key={ img } className={`transition m-2 ${transition} object-center rounded-3xl object-cover w-36 h-56`} src={ `./images/${img}` } />
                )) }
                { images.map((img, i) => (
                    (i === slides[1]) &&
                    <img key={ img } className={` m-2 ${transition} object-center rounded-3xl object-cover w-40 h-64`} src={ `./images/${img}` } />
                )) }
                { images.map((img, i) => (
                    (i === slides[2]) &&
                    <img key={ img } className={`m-2 ${transition} object-center rounded-3xl object-cover w-36 h-56`}  src={ `./images/${img}` } />
                )) }
            </div>

            <button className='absolute  left-0 top-1/2' onClick={ () => minusSlide() }>{ "<" }</button>
            <button className='absolute right-0 top-1/2 ' onClick={ () => plusSlide() }>{ ">" }</button>

        </div>
    )
}

export default myCarrosuel
// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// // import required modules
// import { Navigation, EffectFade } from "swiper";

// const images = ["bear.jpg", "bunny.png", "deer.jpg", "squirrel.jpg", "bear.jpg", "bunny.png", "deer.jpg", "squirrel.jpg"]

// export default function App() {
//     const swiperNavPrevRef = useRef(null);
//     const swiperNavNextRef = useRef(null);  
//     return (
//         <>
//             <Swiper
//                 slidesPerView={ 2 }
//                 modules={ [Navigation, EffectFade] }
//                 effect = {"creative"}
//                 speed={ 800 }
//                 navigation={
//                     {
//                         nextEl: swiperNavNextRef.current,
//                         prevEl: swiperNavPrevRef.current
//                 }}
//                 className="w-full">
//                 { images.map((img,i) => (
//                     <SwiperSlide key={img+i} className=" relative w-full h-full m-2" >
//                         <img key={ img } className={ `m-2 object-center rounded-3xl object-cover w-39 h-72` } src={ `./images/${img}` } />
//                     </SwiperSlide>
//                 )) }
//                 <div className="absolute  left-0 top-1/2" ref={swiperNavPrevRef}>{"<"}</div>
//                 <div className="swiperNavNext" ref={swiperNavNextRef}>{">"}</div>
//             </Swiper>
//         </>
//     );
// }
