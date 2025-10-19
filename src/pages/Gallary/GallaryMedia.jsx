import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function GallaryMedia({ ApiUrl }) {
  const [gallary, setGallary] = useState([]);

  useEffect(() => {
    fetch(`${ApiUrl}/gallary/show`)
      .then((res) => res.json())
      .then((data) => setGallary(data));
  }, []);

  return (
    <section className="my-5">
      <>
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
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          allowTouchMove={true}
          modules={[Autoplay]}
        >
          {gallary.map((item, index) => (
            <SwiperSlide key={index} className="rounded-md">
              <div className="w-full h-[500px] md:h-[800px] lg:h-[800px] rounded-md overflow-hidden">
                <img
                  src={item.img_Url}
                  alt={`Img ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </section>
  );
}
