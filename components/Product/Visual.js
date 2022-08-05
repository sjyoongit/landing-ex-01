import Image from "next/image";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Visual = () => {
  return (
    <div className="pd_visual h-screen relative overflow-y-hidden">
      <Swiper
        className="pdSwiper"
        navigation={true}
        pagination={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-white text-center">
            <strong className="block text-6xl leading-relaxed">
              새콤 달콤
            </strong>
            <strong className="block text-6xl leading-relaxed">
              쥬스 전문
            </strong>
            <strong className="block text-6xl leading-relaxed">JUICE</strong>
          </div>
          <Image
            src="/pd_visual/pd_visual01.jpg"
            alt="메인비주얼 배경"
            width={1920}
            height={1080}
            quality={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-white text-center">
            <strong className="block text-6xl leading-relaxed">
              새콤 달콤
            </strong>
            <strong className="block text-6xl leading-relaxed">
              쥬스 전문
            </strong>
            <strong className="block text-6xl leading-relaxed">JUICE</strong>
          </div>
          <Image
            src="/pd_visual/pd_visual01.jpg"
            alt="메인비주얼 배경"
            width={1920}
            height={1080}
            quality={100}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Visual;
