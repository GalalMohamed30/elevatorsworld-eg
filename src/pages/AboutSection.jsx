import { useEffect, useState } from "react";
import TitleComponents from "../components/Titlecom/TitleComponents";

import Logo from "../assets/NavebarImg/Logo.svg";

import Icon1 from "../assets/AboutSection/icon1.svg";
import Icon2 from "../assets/AboutSection/icon2.svg";

export default function AboutSection({ ApiUrl }) {
  
  const [descAbout, setDescAbout] = useState("");
  const [titlecard_1_About, setTitleCard_1_About] = useState("");
  const [titlecard_2_About, setTitleCard_2_About] = useState("");
  const [numcard_1_About, setNumCard_1_About] = useState("");
  const [numcard_2_About, setNumCard_2_About] = useState("");

  useEffect(() => {
    fetch(`${ApiUrl}/aboutme/showbyid/1`)
      .then((res) => res.json())
      .then((data) => {
        setDescAbout(data.title);
        setTitleCard_1_About(data.titleCard_1);
        setTitleCard_2_About(data.titleCard_2);
        setNumCard_1_About(data.numCard_1);
        setNumCard_2_About(data.numCard_2);
      });
  }, []);

  return (
    <section className="w-[90%] lg:w-[80%] mx-auto mt-5 h-full" id="من نحن">
      <TitleComponents Titel={"من نحن "} />
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-[50%]">
          <div className="w-[210px] h-[135px] mx-auto lg:mx-0">
            <img src={Logo} alt="Logo" className="w-full h-full" />
          </div>
          <p className="font-semibold text-[20px] text-center lg:text-start">
            {descAbout}
          </p>
        </div>

        <div className=" md:flex justify-center items-center gap-10 ">
          <div className="cssanimation hu__hu__  w-full h-[150px] bg-white shadow-2xl mt-[10px] rounded-[12px] text-center md:h-[260px] md:w-[255px] md:mt-0">
            <hr className="bg-MainColor h-[20px] w-full rounded-t-[12px] border-none" />

            <div className="h-[70px] w-[70px] mt-4 mr-9 md:mx-auto">
              <img src={Icon1} alt="icon" loading="lazy" />
            </div>
            <div className="mt-[-50px] mr-[150px] md:mt-0 md:mr-0">
              <h2 className="font-bold  md:mt-7">{titlecard_1_About}</h2>
              <p className="text-MainColor text-[40px]">{numcard_1_About}</p>
            </div>
          </div>

          <div className="cssanimation hu__hu__ w-full h-[150px] bg-white shadow-2xl mt-[50px] rounded-[12px] text-center md:h-[260px] md:w-[255px] md:">
            <hr className="bg-MainColor h-[20px] w-full rounded-t-[12px] border-none" />

            <div className="h-[70px] w-[70px] mt-4 mr-9 md:mx-auto">
              <img src={Icon2} alt="icon" loading="lazy" />
            </div>
            <div className="mt-[-50px] mr-[150px] md:mt-0 md:mr-0">
              <h2 className="font-bold  md:mt-7">{titlecard_2_About}</h2>
              <p className="text-MainColor text-[40px]">{numcard_2_About}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
