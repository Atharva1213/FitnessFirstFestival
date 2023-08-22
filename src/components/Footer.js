import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from '../Images/logo.png'

function Footer() {
    return (
        <div className="h-full md:h-[90vh] md:pt-16 lg:h-[60vh] xl:h-[60vh] 2xl:[45vh] w-full text-white bg-black flex flex-col lg:flex-row justify-start lg:justify-around gap-4 p-4 items-start px-6 lg:px-0 lg:pt-16">
            <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1300" className="text-xl md:flex md:items-center md:gap-10 md:text-3xl md:w-full md:justify-center lg:w-[100%] lg:justify-center lg:gap-[70px] lg:text-2xl 2xl:gap-56 2xl:text-4xl">
                <div className="w-full h-fit lg:w-[26%] text-white flex flex-col gap-8  md:items-center lg:items-start">
                    <div className="heading tracking-widest justify-center items-center flex flex-row md:flex-row md:gap-4 lg:flex-col lg:gap-0 gap-2">
                        <img className="h-52 lg:h-[220px]" src={logo} alt="" />
                    </div>
                    <div className="flex gap-3 text-2xl">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                    <div className="text-base text-orange-500">
                        @2023 by PCCOE Powered and secured by GoDev
                    </div>
                </div>
                <div className="w-full h-fit lg:w-[40%] flex flex-col gap-10  md:items-center lg:items-start">
                    <h2 className="uppercase text-xl font-bold tracking-widest text-pink-600 ">
                        Days Of Operation
                    </h2>
                    <div className="text-[17px] tracking-wide">
                        <p>Mon-Fri: Weekly Activities</p>
                        <p>Non-Working Sat: Surprise Activities</p>
                        <p>Sun: Closed</p>
                    </div>
                </div>

            </div>
            <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1300" className="text-xl md:flex md:items-center md:gap-10 md:text-3xl md:w-full md:justify-center lg:w-[100%] lg:justify-center lg:gap-[70px] lg:text-2xl 2xl:gap-56 2xl:text-4xl ">
                <div className="w-full h-fit lg:w-[32%] flex flex-col gap-10  md:items-center lg:items-start lg:mt-[-40px]">
                    <h2 className="uppercase text-xl font-bold tracking-widest text-pink-600">
                        contact us
                    </h2>
                    <div className="text-[17px] tracking-wide">
                        <p>Sector -26, Pradhikaran, Nigdi,</p>
                        <p>Near Akurdi Railway Station,</p>
                        <p>Pune - 411 044.</p>
                    </div>
                    <div className="text-[17px] tracking-wide">
                        <p>Mail: pccoeadmin@gmail.com </p>
                        <p>Contact: +91 8087174347</p>
                    </div>
                </div>
                <div className="w-full h-fit lg:w-[40%] flex flex-col items-start gap-6 lg:pl-6 md:items-center lg:items-start md:mt-12 lg:mt-6">
                    <h2 className="uppercase text-xl mt-6 font-bold tracking-widest text-pink-600">
                        menu
                    </h2>
                    <ul className="list-square text-[17px] marker:text-pink-600 pl-6 lg:pl-6 cursor-pointer">
                        <li className=" hover:text-gray-300">Home</li>
                        <li className=" hover:text-gray-300">About</li>
                        <li className=" hover:text-gray-300">Gallery</li>
                        <li className=" hover:text-gray-300">Activities</li>
                        <li className=" hover:text-gray-300">Contact</li>
                    </ul>
                    <button className="py-3 px-8 border border-1 border-pink-600 text-white text-2xl font-bold tracking-widest hover:bg-pink-600 hover:text-white transistion duration-500">Register</button>

                </div>

            </div>


        </div>
    );
}

export default Footer;