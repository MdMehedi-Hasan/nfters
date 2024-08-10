import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../style.css'


import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import SliderCard from './common/SliderCard';
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
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
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
