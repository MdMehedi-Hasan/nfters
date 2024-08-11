import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import circle from '../assets/live_auction.webp'
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
                <div className='h-full relative'>
                    <SliderCard />
                    <img className='absolute !w-20 h-20 top-1/2 transform -translate-y-1/2 -left-10' src={circle} alt="" />
                </div>
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
