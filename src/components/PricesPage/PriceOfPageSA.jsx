import { useEffect, useState } from "react";



export default function PriceOfPageSA() {
  const Api_Url = process.env.REACT_APP_API_BASE_URL;
  
  const [pricesa, setPriceSA] = useState([]);

  useEffect(() => {
    fetch(`${Api_Url}/materialpriceforsa/show`)
      .then((res) => res.json())
      .then((data) => {
        setPriceSA(data);
      });
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="w-[80%] mx-auto my-5">
      <h1 className="text-center text-[25px] font-semibold mb-5">
        نعمل دائما علي توفير أفضل الأسعار و الخامات
      </h1>
      <div className="relative overflow-x-auto rounded-md">
        <table className="w-full text-lg text-center text-gray-500 ">
          <thead className="text-lg text-white uppercase bg-MainColor ">
            <tr>
              <th scope="col" className="px-6 py-3">
                الاسم
              </th>
              <th scope="col" className="px-6 py-3">
                الوصف
              </th>
              <th scope="col" className="px-6 py-3">
                السعر
              </th>
              <th scope="col" className="px-6 py-3">
                صوره المنتج
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {pricesa.map((item, index) => (
              <tr
                className="bg-gray-100 border-gray-300 border-b-2"
                key={index}
              >
                <th
                  scope="row"
                  className=" py-4 font-medium text-black  w-[30%] mx-auto whitespace-normal"
                >
                  {item.title}
                </th>
                <th
                  scope="row"
                  className=" py-4 font-medium text-black  w-[30%] mx-auto "
                >
                  {item.description}
                </th>
                <th
                  scope="row"
                  className=" py-4 font-medium text-black whitespace-nowrap"
                >
                  {item.price}
                </th>
                <th scope="row" className=" py-4 ">
                  <img
                    src={item.img_product}
                    alt={item.title}
                    className="w-[100px] h-[100px] object-cover rounded-md mx-auto"
                  />
                </th>

                <td className=" py-4 text-white">
                  <a href="https://wa.me/+201093627259">
                    <button className="py-2 px-6 bg-MainColor rounded-md">
                      أطلب الان
                    </button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
