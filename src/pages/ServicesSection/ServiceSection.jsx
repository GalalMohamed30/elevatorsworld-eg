import { useEffect, useState } from "react";

import TitleComponents from "../../components/Titlecom/TitleComponents";
import ServiceSectionSliders from "./ServiceSectionSliders";

export default function ServiceSection({ ApiUrl }) {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch(`${ApiUrl}/service/show`)
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
      });
  }, []);

  return (
    <section
      className="w-full md:w-[90%] lg:w-[80%] mx-auto mt-5 mb-16 h-[100%]"
      id="خدماتنا"
    >
      <TitleComponents Titel={"خدماتنا"} />
      <div className="hidden md:block">
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-5 mx-auto ">
          {card.map((item, index) => (
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
          ))}
        </div>
      </div>
      <ServiceSectionSliders ApiUrl={ApiUrl} />
    </section>
  );
}
