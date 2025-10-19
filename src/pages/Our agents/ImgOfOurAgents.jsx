import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";

export default function ImgOfOurAgents({ ApiUrl }) {
  const [imgClient, setImgClient] = useState([]);

  useEffect(() => {
    fetch(`${ApiUrl}/ourclient/show`)
      .then((res) => res.json())
      .then((data) => setImgClient(data));
  }, []);

  return (
    <div className="flex justify-center items-center mt-5 ">
      <Swiper
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
          1920: {
            slidesPerView: 4,
            spaceBetween: 100,
          },
        }}
        allowTouchMove={true}
        modules={[Autoplay]}
      >
        {imgClient.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-[150px] h-[150px] rounded-md overflow-hidden mx-auto">
              <img
                src={item.client_Img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
