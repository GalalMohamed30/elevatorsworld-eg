import { useEffect, useState } from "react";
import "../App.css";

export default function Banar({ ApiUrl }) {
  const [img_bannar, setImg_Bannar] = useState("");
  const [title_bannar, setTitle_Bannar] = useState("");
  const [link_bannar, setLink_Bannar] = useState("");

  useEffect(() => {
    fetch(`${ApiUrl}/bannar/showbyid/1`)
      .then((res) => res.json())
      .then((data) => {
        setImg_Bannar(data.Img_Banar);
        setTitle_Bannar(data.title);
        setLink_Bannar(data.link);
      });
  }, []);

  return (
    <div className=" w-full h-[40vh] mt-5 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/20 "></div>
      <img
        src={img_bannar}
        alt="img_bannar"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h2 className="w-full md:w-[80%] lg:w-[50%] text-white md:text-xl 2xl:text-2xl 3xl:text-4xl 3xl:leading-[45px] font-semibold">
          {title_bannar}
        </h2>
        <div className="w-[200px] h-[40px] mt-5">
          <a href={link_bannar} target="_blank">
            <button className="w-full h-full bg-MainColor rounded-md text-white font-bold">
              أطلب استشارتك الأن
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
