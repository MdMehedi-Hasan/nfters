import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../style.css'


import { EffectCoverflow, Pagination } from 'swiper/modules';
import SliderCard from './SliderCard';
export default function BannerSlider() {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 50,
                depth: 100,
                modifier: 3,
                // slideShadows: true,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <SliderCard />
            </SwiperSlide>
            <SwiperSlide>
                <SliderCard />
            </SwiperSlide>
            <SwiperSlide>
                <SliderCard />
            </SwiperSlide>
            <SwiperSlide>
                <SliderCard />
            </SwiperSlide>
            <SwiperSlide>
                <SliderCard />
            </SwiperSlide>
        </Swiper>
    )
}
