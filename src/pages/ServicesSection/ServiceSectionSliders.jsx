import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ServiceSectionSliders({ ApiUrl }) {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch(`${ApiUrl}/service/show`)
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
      });
  }, []);
  return (
    <section className="md:hidden">
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
          }}
          allowTouchMove={true}
          modules={[Autoplay]}
        >
          {card.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative flex flex-col w-[330px] bg-[#F8F8F8] rounded-md shadow-2xl mx-auto mt-10"
                key={index}
              >
                <div
                  className="w-full h-[200px] rounded-md rounded-b-none"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)) ,url(${item.Img_Service})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="w-[90%] mx-auto text-center flex-grow">
                  <h2 className="text-[20px] font-bold my-2">{item.title}</h2>
                  <p className="text-[#0000006d] font-medium">
                    {item.description}
                  </p>
                </div>
                <div className="mt-auto w-[60%] mx-auto py-5">
                  <a href={item.link} target="_blank">
                    <button className="w-full h-[40px] bg-MainColor rounded-md text-white font-bold">
                      أطلب الان
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </section>
  );
}
