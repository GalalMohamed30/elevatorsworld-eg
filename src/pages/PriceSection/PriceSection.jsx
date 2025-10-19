import TitleComponents from "../../components/Titlecom/TitleComponents";

import Img from "../../assets/HeroSection/Img2.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PriceSection({ ApiUrl }) {
  const [titelcard_1, setTitelcard_1] = useState("");
  const [descard_1, setDescard_1] = useState("");
  const [imgcard_1, setImgcard_1] = useState("");

  const [titelcard_2, setTitelcard_2] = useState("");
  const [descard_2, setDescard_2] = useState("");
  const [imgcard_2, setImgcard_2] = useState("");

  useEffect(() => {
    fetch(`${ApiUrl}/materialforeg/show/1`)
      .then((res) => res.json())
      .then((data) => {
        setTitelcard_1(data.title);
        setDescard_1(data.description);
        setImgcard_1(data.img_Url);
      });

    fetch(`${ApiUrl}/materialforsa/show/1`)
      .then((res) => res.json())
      .then((data) => {
        setTitelcard_2(data.title);
        setDescard_2(data.description);
        setImgcard_2(data.img_Url);
      });
  }, []);

  return (
    <section className=" w-[90%] lg:w-[90%] mx-auto my-5 " id="أسعار الخامات">
      <TitleComponents Titel={"أسعار الخامات"} />

      <div className=" grid grid-cols-1 lg:grid-cols-2  md:gap-5 lg:gap-10 mx-auto">
        {/* card 1 EG */}
        <div className="w-full h-[200px] mx-auto md:h-[300px] bg-white shadow-2xl rounded-[16px] mt-10 relative">
          <div className="absolute left-0 w-[40%] rounded-[16px] rounded-r-none h-full overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/20 "
              style={{
                zIndex: 1, // طبقة التعتيم أعلى من الصورة
              }}
            ></div>
            <img
              src={imgcard_1}
              alt="IMG"
              className="object-cover h-full w-full "
            />
          </div>
          <div className="w-[60%] p-2 md:p-5">
            <h1 className=" text-center font-bold text-sm md:text-2xl">
              {titelcard_1}
            </h1>
            <div className="my-2 w-[90%] mx-auto text-center">
              <p className="text-[#0000006d] font-medium text-[11px]   md:text-[16px]">
                {descard_1}
              </p>
            </div>
            <Link to={"/price-eg"}>
              <div className="absolute bottom-5 left-[46%] md:left-[57%] w-[50%] md:w-[30%]  mb-0 h-[30px]">
                <button className="w-full h-full bg-MainColor text-[14px] rounded-md text-white font-bold">
                  أكتشف الأسعار
                </button>
              </div>
            </Link>
          </div>
        </div>

        {/* card 2 SA */}
        <div className="w-full h-[200px] mx-auto md:h-[300px] bg-white shadow-2xl rounded-[16px] mt-10 relative">
          <div className="absolute left-0 w-[40%] rounded-[16px] rounded-r-none h-full overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/20 "
              style={{
                zIndex: 1, // طبقة التعتيم أعلى من الصورة
              }}
            ></div>
            <img
              src={imgcard_2}
              alt="IMG"
              className="object-cover h-full w-full "
            />
          </div>
          <div className="w-[60%] p-2 md:p-5">
            <h1 className=" text-center font-bold text-sm md:text-2xl">
              {titelcard_2}
            </h1>
            <div className="my-2 w-[90%] mx-auto text-center">
              <p className="text-[#0000006d] font-medium text-[11px]   md:text-[16px]">
                {descard_2}
              </p>
            </div>
            <Link to={"/price-sa"}>
              <div className="absolute bottom-5 left-[46%] md:left-[57%] w-[50%] md:w-[30%]  mb-0 h-[30px]">
                <button className="w-full h-full bg-MainColor text-[14px] rounded-md text-white font-bold">
                  أكتشف الأسعار
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
