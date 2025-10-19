import ImgIcon from "../../assets/wts/whatsapp.svg";

export default function IconWats() {
  return (
    <div className="fixed right-4 bottom-0 p-4 mb-20 ml-4 z-50 flex items-center">
      <a
        href="https://wa.me/+201093627259"
        className="flex items-center relative"
      >
        <img src={ImgIcon} width={50} loading="lazy" />
      </a>
      <div className="cssanimation hu__hu__ w-[100px] text-center absolute bg-white  -mr-5 rounded-md mb-28">
        <a href="https://wa.me/+201093627259">
          <p className="w-full px-[10px] py-1 text-center text-[14px]">
            تواصل معنا
          </p>
        </a>
      </div>
    </div>
  );
}
