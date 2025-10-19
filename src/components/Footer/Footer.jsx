import { useEffect, useState } from "react";

import Logo from "../../assets/Footer/LogoFooter.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Links = [
  {
    name: "الرئيسية",
    url: "الرئيسية",
  },
  {
    name: "من نحن",
    url: "من نحن",
  },
  {
    name: "خدماتنا",
    url: "خدماتنا",
  },
  {
    name: "أسعار الخامات",
    url: "أسعار الخامات",
  },
  {
    name: "اتصل بنا",
    wats: "https://wa.me/+201093627259",
  },
];
const ApiUrl = "https://api.elevatorsworld-eg.com/api";
export default function Footer() {
  const Navegate = useNavigate();
  const [descAbout, setDescAbout] = useState("");

  const [icons, setIcons] = useState([]);

  useEffect(() => {
    fetch(`${ApiUrl}/aboutme/showbyid/1`)
      .then((res) => res.json())
      .then((data) => {
        setDescAbout(data.title);
      });

    fetch(`${ApiUrl}/social/show`)
      .then((res) => res.json())
      .then((data) => {
        setIcons(data);
      });
  }, []);

  function LinkFooter() {
    if (location.pathname != "/") {
      Navegate("/");
    }
  }

  return (
    <footer className="w-full h-full bg-MainColor pb-5">
      <div className="w-[90%] lg:w-[80%] mx-auto pt-5">
        <div className="lg:flex justify-between items-center ">
          <div className="w-[100%]">
            <NavLink to={"/"}>
              <div className="w-[280px] h-[120px] mx-auto pb-2">
                <img src={Logo} alt="Logo" className="w-full h-full" />
              </div>
            </NavLink>
            <p className="text-white text-center w-[80%] mx-auto">
              {descAbout}
            </p>
          </div>

          <div className="w-[100%] my-5 border-y-2 border-gray-100 py-5 lg:border-none lg:py-0">
            <h1 className="text-white text-center text-[24px] font-bold">
              الروابط
            </h1>
            <ul class="text-center text-gray-100 font-semibold pt-5 text-[20px]">
              {Links.map((item, index) =>
                item.wats ? (
                  <a
                    key={index}
                    href={item.wats}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2  cursor-pointer"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    onClick={() => LinkFooter()}
                    smooth={true}
                    duration={1000}
                    key={index}
                    class="py-2 block cursor-pointer"
                    to={item.url}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </ul>
          </div>
          <div className="w-[100%]">
            <h1 className="text-white text-center text-[24px] font-bold">
              لينكات التواصل
            </h1>
            <div className=" flex justify-center items-center gap-5 pt-5">
              {icons.map((item, index) => (
                <div className="w-[50px] h-[50px]" key={index}>
                  <a href={item.link}>
                    <img src={item.icon_img} alt={item.name} />
                  </a>
                </div>
              ))}
              {/* <img src={Icon1} alt="Icon1" />
              <img src={Icon2} alt="Icon2" />
              <img src={Icon3} alt="Icon3" /> */}
            </div>
            {/* <h1 className="text-white text-center text-[24px] font-semibold">
              الشروط والاحكام
            </h1>
            <h1 className="text-white text-center text-[24px] py-5 font-semibold">
              سياسة الخصوصية
            </h1>
            <h1 className="text-white text-center text-[24px] font-semibold">
              سياسة استرداد الرسوم
            </h1> */}
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <a href="https://www.wasllatech.com/">
          <h3 className="font-bold text-center text-white mt-10">
            جميع الحقوق محفوظة لدى ©{" "}
            <span className="text-green-400 underline">شركة وصله تك</span> 2025
          </h3>
        </a>
      </div>
    </footer>
  );
}
