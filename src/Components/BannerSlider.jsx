import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import circle from '../assets/live_auction.webp'
import '../style.css'


import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import SliderCard from './common/SliderCard';
import imagesCollection from '../data/Imagecollection';
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
                    <SliderCard data="https://i0.wp.com/picjumbo.com/wp-content/uploads/calming-gradient-waves-wallpaper-free-photo.jpg?w=2210&quality=70" />
                    <img className='absolute !w-20 h-20 top-1/2 transform -translate-y-1/2 -left-10' src={circle} alt="" />
                </div>
            </SwiperSlide>
            {
                imagesCollection.slice(9, 13).map((item, index) =>
                    <SwiperSlide key={index}>
                        <SliderCard data={item} />
                    </SwiperSlide>)
            }
            {/* <SwiperSlide>
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
            </SwiperSlide> */}
        </Swiper>
    )
}
