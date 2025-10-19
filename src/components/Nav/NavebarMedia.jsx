import { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

import ExitIcon from "../../assets/NavebarImg/x.svg";
import Logo from "../../assets/NavebarImg/Logo.svg";

export default function NavebarMedia({ Links }) {
  const Navegate = useNavigate();
  const [links, setLinks] = useState(Links);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden  relative z-50">
      <nav className="shadow ">
        <div className="max-w-screen-xl  flex  items-center justify-between mx-auto p-4 ">
          <div className="w-[150px] h-[50px]">
            <img src={Logo} className="w-full h-full " alt="Logo" />
          </div>
          <div className="flex items-center gap-5">
            <div>
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10  justify-center "
                aria-controls="navbar-default"
                aria-expanded={isOpen}
              >
                <svg
                  className="w-5 h-5 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`fixed inset-y-0 left-0   ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out w-64 shadow-2xl bg-white`}
            id="navbar-default"
          >
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center pt-6 mr-2 w-10 h-10 justify-center "
              aria-controls="navbar-default"
              aria-expanded={isOpen}
            >
              <img
                src={ExitIcon}
                alt="ExitIcon"
                className="w-[26px] h-[26px]"
              />
            </button>

            <ul className="font-medium flex flex-col p-4 space-y-4">
              {links.map((item, index) =>
                item.wats ? (
                  <a
                    href={item.wats}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 cursor-pointer text-[20px] text-TextColor"
                    key={index}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    spy={true}
                    smooth={true}
                    duration={1000}
                    key={index}
                    className="pb-2 border-b-2 border-gray-100 text-[20px] text-TextColor"
                    onClick={() => {
                      setIsOpen(!isOpen);
                      location.pathname != "/" ? Navegate("/") : "";
                    }}
                    to={item.id}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="w-full h-[40px]">
                <a href="https://wa.me/+201093627259" target="_blank">
                  <button className="w-full h-full bg-MainColor rounded-[6px] text-white font-bold">
                    للحجز و التواصل
                  </button>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
