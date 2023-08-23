import { Carousel } from "flowbite-react";

import group1 from "../Images/Group1.jpg";
import group2 from "../Images/Group2.jpg";
import group3 from "../Images/Group3.jpg";
import face1 from "../Images/face1.jpg";
import face2 from "../Images/face2.jpg";
import face3 from "../Images/face3.jpg";
import taskFace from "../Images/taskFace.png";
import taskFace2 from "../Images/mca2.png";
import ls from "../Images/leenasharma.png";
import ls2 from "../Images/ls2.png";
import mca from "../Images/mca.jpg";
import taskFace3 from "../Images/taskFace3.png";
import { TiSocialLinkedinCircular } from 'react-icons/ti';


const carousel1Images = [group1, group2, group3];
const carousel2Data = [
    {
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam praesentium quia aliquam libero. Voluptatem qui enim numquam obcaecati amet dolores placeat ex explicabo quod libero. Sapiente quaerat, ea rerum saepe officiis unde iusto itaque quas eum reiciendis, ullam nisi veniam.',
        image: face2,
        name: "Name 1",
        position: "Position 1",
    },
    {
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam praesentium quia aliquam libero. Voluptatem qui enim numquam obcaecati amet dolores placeat ex explicabo quod libero. Sapiente quaerat, ea rerum saepe officiis unde iusto itaque quas eum reiciendis, ullam nisi veniam.",
        image: face1,
        name: "Name 2",
        position: "Position 2",
    },
    {
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam praesentium quia aliquam libero. Voluptatem qui enim numquam obcaecati amet dolores placeat ex explicabo quod libero. Sapiente quaerat, ea rerum saepe officiis unde iusto itaque quas eum reiciendis, ullam nisi veniam.",
        image: face3,
        name: "Name 3",
        position: "Position 3",
    },
];

function TaskForce() {
    return (
        <div id="taskforce" className="min-h-[350vh] md:min-h-[290vh] lg:min-h-[180vh] bg-gradient-to-br from-pink-700 via-black to-black py-10 px-4">
            <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className="flex flex-col items-center gap-2">
                <h1 className="text-5xl text-center font-bannerFont2 text-white">Our Team</h1>
                <div className="h-[5px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[5%]"></div>
            </div>
            <div className="lg:h-[60vh] h-[100vh] mt-8 flex flex-col gap-6 lg:gap-8 lg:flex-row justify-center">
                <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className="h-[45%] xl:h-[100%] w-full lg:w-[45%] ">
                    <Carousel slideInterval={2000}>
                        <div
                            className="h-[100%] w-[100%] bg-cover bg-center"
                            style={{ backgroundImage: `url(${group1})` }}
                        ></div>
                        <div
                            className="h-[100%] w-[100%] bg-cover bg-center"
                            style={{ backgroundImage: `url(${group2})` }}
                        ></div>
                        <div
                            className=" h-[100%] w-[100%] bg-cover bg-center"
                            style={{ backgroundImage: `url(${group3})` }}
                        ></div>
                    </Carousel>
                </div>

                <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className="h-[45%] xl:h-[100%] w-full lg:w-[45%] bg-[#FFE17B]">
                    <Carousel slideInterval={1000000000} className="right-car border-8 border-[#FD8D14] ">
                        <div className="flex h-full items-center justify-center">
                            <div className=" text-white text-center w-[90%] md:w-[80%] 2xl:w-[70%]">
                                <p className="text-xs md:text-xl lg:text-sm 2xl:text-lg font-bold">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                                    eaque adipisci, itaque molestias ad magnam possimus odio
                                    voluptatibus alias animi quos debitis ex exercitationem officiis
                                    pariatur eligendi quae! Officiis maiores sit aliquid!
                                </p>
                                <div className="mt-4 h-1 w-[70%] bg-white ml-[15%]"></div>
                                <div
                                    className="mt-4 h-[80px] w-[80px] md:h-[130px] md:w-[130px] lg:h-[100px] 2xl:h-[120px] 2xl:w-[120px] lg:w-[100px] ml-auto mr-auto rounded-[50%]  bg-cover bg-top"
                                    style={{ backgroundImage: `url(${ls})` }}
                                ></div>
                                <p className="mt-4 text-sm md:text-xl lg:text-base 2xl:text-lg">
                                    <span className="font-bold text-sm md:text-xl lg:text-base 2xl:text-lg">Leena Sharma,</span>Convener
                                </p>
                            </div>
                        </div>
                        <div className="flex h-full items-center justify-center">
                            <div className=" text-white text-center w-[90%] md:w-[80%] 2xl:w-[70%]">
                                <p className="text-xs md:text-xl font-bold lg:text-sm 2xl:text-lg">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Doloribus officiis dolorum rerum facilis molestiae sapiente
                                    tempore tenetur in quod dolores, aliquam soluta quibusdam, optio
                                    nisi quasi velit? Iure, facilis ipsa!
                                </p>
                                <div className="mt-4 h-1 w-[70%] bg-white ml-[15%]"></div>
                                <div
                                    className="mt-4 h-[80px] w-[80px] md:h-[130px] md:w-[130px] lg:h-[100px] lg:w-[100px] 2xl:h-[120px] 2xl:w-[120px] bg-red-700 ml-auto mr-auto rounded-[50%]  bg-cover bg-top"
                                    style={{ backgroundImage: `url(${mca})` }}
                                ></div>
                                <p className="mt-4 text-sm md:text-x lg:text-base 2xl:text-lg">
                                    <span className="font-bold text-sm md:text-xl lg:text-base 2xl:text-lg">Anjana A,</span>Co Convener
                                </p>
                            </div>
                        </div>
                        <div className="flex h-full items-center justify-center">
                            <div className=" text-white text-center w-[70%] md:w-[80%] 2xl:w-[70%]">
                                <p className="text-xs md:text-xl lg:text-sm font-bold 2xl:text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                                    dolor nam voluptatem possimus facilis eligendi, quia amet,
                                    inventore exercitationem corporis.
                                </p>
                                <div className="mt-4 h-1 w-[70%] bg-white ml-[15%]"></div>
                                <div
                                    className="mt-4 h-[80px] w-[80px] md:h-[130px] md:w-[130px] lg:h-[100px] lg:w-[100px] 2xl:h-[120px] 2xl:w-[120px]  bg-red-700 ml-auto mr-auto rounded-[50%]  bg-cover bg-top"
                                    style={{ backgroundImage: `url(${face3})` }}
                                ></div>
                                <p className="mt-4 text-sm md:text-xl lg:text-base 2xl:text-lg">
                                    <span className="font-bold text-sm md:text-xl lg:text-base 2xl:text-lg">Name,</span>Position
                                </p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>

            <div className="h-[80vh] main-taskforce mt-24">
                <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className="flex flex-col items-center gap-4">
                    <div className="text-center text-3xl md:text-5xl lg:text-4xl font-semibold text-white font-bannerFont2">Main Foundation Team</div>
                    <div className="h-[5px] bg-gradient-to-r from-orange-500 to-pink-600 w-[40%] lg:w-[10%]"></div>
                </div>
                <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className="pt-36 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-28 lg:gap-0">
                    <div className="bg-gray-300">
                        <div className="relative flex lg:flex-col md:flex-row flex-col items-center gap-4 h-[50vh] lg:h-[50vh] md:h-[30vh]">
                            <div className="relative flex items-center justify-center bg-pink-600 h-[40%] md:h-full lg:h-[45%] w-full ">
                                <img className=" lg:h-52 2xl:h-72 absolute bottom-0" src={taskFace} alt="" />
                            </div>
                            <div className="flex flex-col items-center gap-4 justify-center md:p-2">
                                <h1 className="text-2xl 2xl:text-3xl font-semibold">Dr. Leena Sharma</h1>
                                <h1 className="text-base 2xl:text-lg font-medium">Convener</h1>
                                <h1 className=" md:text-base 2xl:text-lg">leena.sharma@pccoepune.org</h1>
                                <div className="h-[6px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[15%]"></div>
                                <div className="handles flex gap-4">
                                    <a className="text-2xl lg:text-xl 2xl:text-2xl a123"
                                        href="https://www.linkedin.com/in/leena-sharma-b316b434/"><i class="fab fa-linkedin"></i></a>
                                    <a className="text-2xl lg:text-xl 2xl:text-2xl  a123"
                                        href="mailto:leena.sharma@pccoepune.org">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a className="text-2xl lg:text-xl 2xl:text-2xl  a123" href=""><i className="fas fa-at"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300">
                        <div className="relative flex lg:flex-col md:flex-row flex-col items-center gap-4 h-[50vh] lg:h-[50vh] md:h-[30vh]">
                            <div className="relative flex items-center justify-center bg-pink-600 h-[40%] md:h-full lg:h-[45%] w-full ">
                                <img className="lg:h-52 2xl:h-72  absolute bottom-0" src={taskFace} alt="" />
                            </div>
                            <div className="flex flex-col items-center gap-4 justify-center md:p-2">
                                <h1 className="text-2xl  2xl:text-3xl font-semibold">Mrs. Anjana Arakerimath</h1>
                                <h1 className="text-base 2xl:text-lg font-medium">Co Convener</h1>
                                <h1 className="md:text-base 2xl:text-lg">a.anjana@pccoepune.org</h1>
                                <div className="h-[6px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[15%]"></div>
                                <div className="handles flex gap-4">
                                    <a className="text-2xl lg:text-xl 2xl:text-2xl a123"
                                        href="https://www.linkedin.com/in/anjana-arakerimath-5789b9a/"><i class="fab fa-linkedin"></i></a>
                                    <a className="text-2xl lg:text-xl 2xl:text-2xl a123"
                                        href="">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a className="text-2xl lg:text-xl 2xl:text-2xl a123" href="mailto:a.anjana@pccoepune.org"><i className="fas fa-at"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300">
                        <div className="relative flex lg:flex-col md:flex-row flex-col items-center gap-4 h-[50vh] lg:h-[50vh] md:h-[30vh]">
                            <div className="relative flex items-center justify-center bg-pink-600 h-[40%] md:h-full lg:h-[45%] w-full ">
                                <img className="lg:h-52 2xl:h-72  absolute bottom-0" src={taskFace} alt="" />
                            </div>
                            <div className="flex flex-col items-center gap-4 justify-center md:p-2">
                                <h1 className="text-2xl 2xl:text-3xl font-semibold">Mr. Santosh Pacharne</h1>
                                <h1 className="text-base 2xl:text-lg font-medium">Secretary</h1>
                                <h1 className="md:text-base 2xl:text-lg">santosh.pacharne@pccoepune.org</h1>
                                <div className="h-[6px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[15%]"></div>
                                <div className="handles flex gap-4">
                                    <a className="text-2xl lg:text-xl 2xl:text-2xl a123"
                                        href="https://www.linkedin.com/in/santosh-pacharane-9052a417/"><i class="fab fa-linkedin"></i></a>
                                    <a className="text-2xl lg:text-xl 2xl:text-2xl a123"
                                        href="">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a className="text-2xl lg:text-xl 2xl:text-2xl a123" href="mailto:santosh.pacharne@pccoepune.org"><i className="fas fa-at"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TaskForce;
