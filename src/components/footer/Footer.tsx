import { CiMobile3 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-500 p-10 text-white h-[70vh] mt-10 flex flex-col justify-center">
      <div className="flex justify-between items-start">
        <div className=" flex flex-col  justify-center items-start gap-2  ">
          <h2 className="font-bold text-3xl text-black mb-10">
            ارتباط با فروشگاه{" "}
          </h2>
          <div className="mt-2 flex justify-center items-center gap-3 ">
            <span>
              <CiMobile3 className="text-2xl" />
            </span>
            <span>تلفن پشتیبانی : 0915206405</span>
          </div>
          <h6>ساعت پاسخگویی در روز های غیر تعطیل 8 صبح تا 4 عصر</h6>
          <div className="flex justify-center items-center gap-3 mt-4">
            <IoLocationOutline className="text-2xl" />
            <span> مشهد - شهرک غرب - بلوار شهید فلاحی </span>
          </div>

          <div className="text-2xl mt-4 font-bold text-black">
            همراه ما باشید :
          </div>
          <div className="flex justify-center items-center gap-4 mt-8 text-4xl ">
            <button>
              <FaTelegram />
            </button>
            <button>
              <FaInstagram />
            </button>
            <button>
              <FaLinkedin />
            </button>
            <button>
              <FaPinterest />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <h1 className="font-bold text-3xl text-black mb-10">
            لینک های کاربردی
          </h1>
          <a href="">لینک کاربردی </a>
          <a href="">لینک کاربردی </a>
          <a href="">لینک کاربردی </a>
          <a href="">لینک کاربردی </a>
          <a href="">لینک کاربردی </a>
        
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="font-bold text-3xl text-black mb-10">
            راهنمای مشتریان
          </h1>
          <a href=""> لینک راهنمای مشتریان</a>
          <a href=""> لینک راهنمای مشتریان</a>
          <a href=""> لینک راهنمای مشتریان</a>
          <a href=""> لینک راهنمای مشتریان</a>
          <a href=""> لینک راهنمای مشتریان</a>
        </div>
        <div>
          <h2 className="font-bold text-3xl text-black mb-10"> نماد ها </h2>
          <div>
            <img
              width={"150px"}
              src="https://reg2.enamad.ir/resource/images/EnamadBackground.png"
              alt="Enamad"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
