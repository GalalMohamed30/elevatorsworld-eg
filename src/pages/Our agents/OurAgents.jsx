import React from "react";
import TitleComponents from "../../components/Titlecom/TitleComponents";
import ImgOfOurAgents from "./ImgOfOurAgents";

import Img1 from "../../assets/HeroSection/Img1.png";

export default function OurAgents({ ApiUrl }) {
  return (
    <section className=" w-[90%] lg:w-[90%] mx-auto my-5 ">
      <TitleComponents Titel={"وكلائنا"} />
      <ImgOfOurAgents Img={Img1} ApiUrl={ApiUrl} />
    </section>
  );
}
