import { useState } from "react";
import TitleComponents from "../components/Titlecom/TitleComponents";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function ContactUs({ Url_Api }) {


  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const send = axios.post(`${Url_Api}/comment/create`, {
      name: name,
      phone: phone,
      message: message,
    });
    toast.success("تم الارسال بنجاح !");
  }

  return (
    <section className=" w-[90%] lg:w-[90%] mx-auto my-5 ">
      <TitleComponents Titel={"تواصل معنا"} />
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-[40%] mx-auto">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="الاسم"
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[60px] text-[20px] bg-[#F4F4F4] rounded-md p-2 my-2 placeholder:pr-5"
            />
            <input
              type="text"
              placeholder="رقم التليفون"
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-[60px] text-[20px] bg-[#F4F4F4] rounded-md p-2 my-2 placeholder:pr-5"
            />
            <textarea
              placeholder="الرساله"
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-[200px] resize-none text-[20px] bg-[#F4F4F4] rounded-md p-2 my-2 placeholder:pr-5"
            ></textarea>
            <div className="w-[250px] h-[40px] mx-auto bg-MainColor rounded-md my-2">
              <button className="w-full h-full text-[20px] font-bold text-white">
                ارسال
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-[50%]">
          <h1 className="text-[24px] font-bold text-[#111] text-center">
            أماكنا
          </h1>
          <div className="w-full h-[250px] md:h-[550px] rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.6905570246886!2d31.3517235!3d31.034869999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7775a38fe6699%3A0x345f0bbd288c33b3!2z2LTYsdmD2Kkg2LnYp9mE2YUg2KfZhNmF2LXYp9i52K8!5e0!3m2!1sar!2seg!4v1734549746844!5m2!1sar!2seg"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
}
