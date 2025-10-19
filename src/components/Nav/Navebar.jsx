import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/NavebarImg/Logo.svg";
import NavebarMedia from "./NavebarMedia";

const Links = [
  {
    name: "الرئيسية",
    url: "/",
    isMain: true,
  },
  {
    name: "من نحن",
    id: "من نحن",
  },
  {
    name: "خدماتنا",
    id: "خدماتنا",
  },
  {
    name: "أسعار الخامات",
    id: "أسعار الخامات",
  },
  {
    name: "اتصل بنا",
    wats: "https://wa.me/+201093627259",
  },
];

export default function Navebar() {
  const Navegate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (location.pathname != "/") {
      Navegate("/");
    }
  };

  return (
    <div>
      <nav className="hidden lg:block h-[110px]">
        <div className="w-[80%] mx-auto">
          <div className="flex items-center justify-between mx-auto pt-[11px]">
            <Link to={"/"}>
              <div className="w-[150px] h-[85px]">
                <img src={Logo} alt="logo" className="w-full h-full" />
              </div>
            </Link>
            <div className="w-auto" id="navbar-default">
              <ul className="font-semibold text-[20px] flex items-center gap-[50px]">
                {Links.map((item, index) =>
                  item.wats ? (
                    <a
                      key={index}
                      href={item.wats}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ) : item.isMain ? (
                    // للرئيسية
                    <NavLink
                      key={index}
                      className="py-2 cursor-pointer"
                      to={item.url}
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    // لبقية الأقسام
                    <button
                      key={index}
                      onClick={() => scrollToSection(item.id)}
                      className="py-2 cursor-pointer bg-transparent border-none"
                    >
                      {item.name}
                    </button>
                  )
                )}
              </ul>
            </div>
            <div className="w-[150px] h-[40px]">
              <a href="https://wa.me/+201093627259">
                <button className="w-full h-full bg-MainColor rounded-[6px] text-white font-bold">
                  للحجز و التواصل
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <NavebarMedia Links={Links} />
    </div>
  );
}
