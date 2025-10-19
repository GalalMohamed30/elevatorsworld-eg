import { lazy, Suspense, useEffect, useState } from "react";
import "../App.css";
import MetaTags from "../components/Meta/MetaTags";
import { HelmetProvider } from "react-helmet-async";
import IconWats from "../components/wts/IconWats";

const AboutSection = lazy(() => import("./AboutSection"));
const ServiceSection = lazy(() => import("./ServicesSection/ServiceSection"));
const Banar = lazy(() => import("./Banar"));
const PriceSection = lazy(() => import("./PriceSection/PriceSection"));
const Gallary = lazy(() => import("./Gallary/Gallary"));
const OurAgents = lazy(() => import("./Our agents/OurAgents"));
const ContactUs = lazy(() => import("./ContactUs"));


export default function HeroSection() {
  
  const ApiUrl = process.env.REACT_APP_API_BASE_URL;
  const [currentIndex, setCurrentIndex] = useState(0); // الحالة للفهرس النشط

  const [herodata, setHeroData] = useState([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % herodata.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? herodata.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    fetch(`${ApiUrl}/herosection/show`)
      .then((res) => res.json())
      .then((data) => {
        setHeroData(data);
      });
  }, []);

  return (
    <>
      <HelmetProvider>
        <header id="الرئيسية">
          <div id="default-carousel" className="relative w-full ">
            <div className="relative overflow-hidden h-[40vh] lg:h-[70vh]">
              {herodata.map((item, index) => (
                <div
                  key={index}
                  className={`relative w-full h-full duration-1000 ease-in-out ${
                    index === currentIndex ? "block" : "hidden"
                  }`}
                >
                  {/* طبقة التعتيم */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/30 "
                    style={{
                      zIndex: 1, // طبقة التعتيم أعلى من الصورة
                    }}
                  ></div>

                  {/* النص */}
                  <div
                    className="absolute w-[80%] lg:w-[50%] xl:w-[40%] z-10 font-bold text-white"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <h1 className="text-center text-[24px] lg:text-[48px]">
                      {item.HeroTitle}
                    </h1>
                    <div className=" md:w-[90%] lg:w-[80%] mx-auto text-center">
                      <p className="text-[#e6e6e6] text-[11px] md:text-[16px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {/* الصورة */}
                  <img
                    src={item.Img_Hero}
                    className={`absolute w-full h-full object-cover   duration-700 ease-in-out transform ${
                      index === currentIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
                    alt={`Slide ${index + 1}`}
                    style={{
                      zIndex: 0, // الصورة خلف التعتيم
                    }}
                  />
                </div>
              ))}
            </div>

            {/* زر Previous */}
            <button
              type="button"
              className="absolute top-0 start-0 lg:start-[200px] z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={handlePrev}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>

            {/* زر Next */}
            <button
              type="button"
              className="absolute top-0 end-0 lg:end-[200px] z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={handleNext}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>

                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </header>

        <MetaTags ApiUrl={ApiUrl} />
        <IconWats />
        <Suspense>
          <AboutSection ApiUrl={ApiUrl} />
          <ServiceSection ApiUrl={ApiUrl} />
          <Banar ApiUrl={ApiUrl} />
          <PriceSection ApiUrl={ApiUrl} />
          <OurAgents ApiUrl={ApiUrl} />
          <Gallary ApiUrl={ApiUrl} />
          <ContactUs Url_Api={ApiUrl} />
        </Suspense>
      </HelmetProvider>
    </>
  );
}
