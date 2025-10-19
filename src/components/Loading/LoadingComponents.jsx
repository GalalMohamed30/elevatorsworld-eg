import Logo from "../../assets/NavebarImg/Logo.svg";

export default function LoadingComponents() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="my-[70%]  md:my-[400px] lg:my-[300px] 2xl:my-[400px]">
          <img src={Logo} width={200} loading="lazy" className="mb-5" />
          <div className="loader mx-auto"></div>
        </div>
      </div>
    </>
  );
}
