import TitleComponents from "../../components/Titlecom/TitleComponents";

import Img1 from "../../assets/HeroSection/Img2.jpg";

import GallaryMedia from "./GallaryMedia";

export default function Gallary({ ApiUrl }) {
  return (
    <div className="mt-5 w-[90%] mx-auto ">
      <TitleComponents Titel={"معرض اعمالنا"} />

      <GallaryMedia Img={Img1} ApiUrl={ApiUrl} />
    </div>
  );
}
