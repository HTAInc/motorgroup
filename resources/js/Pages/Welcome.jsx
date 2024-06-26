import { BANNER_DATA, QUOTE, USEFUL_LINKS, VALUES_DATA, VEHICLE_BRAND_DATA, VEHICLE_DATA, VEHICLE_TYPE_DATA } from '@/Libs/Constant';
import { Head, Link } from '@inertiajs/react';
import { FaArrowRight, FaPhone, FaRegHeart } from "react-icons/fa6";
import { LiaEdit } from "react-icons/lia";
import { IoMdTime } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { GiPriceTag } from "react-icons/gi";
import { GoChevronRight } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from 'react';
import { VscChromeClose } from "react-icons/vsc";

export default function Welcome({}) {
    const [menuMobile, setMenuMobile] = useState(false);
    return (
        <>
            <Head title="Welcome" />
            <div className="w-full mb-10 relative bg-white">
                <div className="w-full sticky top-0 z-50 bg-white py-1 md:py-3">
                    <div className="flex justify-between px-3 md:px-0 items-center container mx-auto relative">
                        <img src='/logo/gas-logo.png' className='h-3 md:h-7'/>
                        <button className='p-2 border rounded block md:hidden' onClick={() => setMenuMobile(!menuMobile)}>
                            <RiMenu3Fill/>
                        </button>
                        <div className="hidden text-gray-600 md:flex items-center space-x-8">
                            <div className="flex items-center gap-5 mb-5 md:mb-0 flex-row">
                                <Link href="" className="hover:text-red-600">New Vehincle</Link>
                                <Link href="" className="hover:text-red-600">Motorcycle</Link>
                                <Link href="" className="hover:text-red-600">Contact Us</Link>
                                <Link href="" className="flex items-center gap-2 hover:text-red-600">
                                    <FaPhone/>
                                    <span>+669279544</span>
                                </Link>
                            </div>
                            <div className="gap-3 flex flex-col md:flex-row w-fit">
                                <Link href="" className='px-3 py-2 text-center bg-red-600 border border-red-600 hover:bg-red-700 rounded text-white uppercase text-sm'>Member Login</Link>
                                <Link href="" className='px-3 py-2 text-center border text-red-600 text-sm uppercase hover:bg-red-600 rounded hover:text-white bg-white border-red-600'>Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`text-gray-600 flex md:hidden p-3 flex-col space-x-0 fixed bg-white shadow-md md:shadow-none rounded-b-md w-full z-50 items-start transition-all ease-in-out duration-300 ${menuMobile ? 'top-0':'-top-80'}`}>
                    <div className="w-full flex justify-end">
                    <button className='p-2 border rounded block md:hidden' onClick={() => setMenuMobile(!menuMobile)}>
                        <VscChromeClose/>
                    </button>
                    </div>
                    <div className="flex items-start gap-3 md:gap-5 mb-5 flex-col">
                        <Link href="" className="hover:text-red-600">New Vehincle</Link>
                        <Link href="" className="hover:text-red-600">Motorcycle</Link>
                        <Link href="" className="hover:text-red-600">Contact Us</Link>
                        <Link href="" className="flex items-center gap-2 hover:text-red-600">
                            <FaPhone/>
                            <span>+669279544</span>
                        </Link>
                    </div>
                    <div className="gap-3 flex flex-col w-full">
                        <Link href="" className='px-3 py-2 text-center bg-red-600 border border-red-600 hover:bg-red-700 rounded text-white uppercase text-sm'>Member Login</Link>
                        <Link href="" className='px-3 py-2 text-center border text-red-600 text-sm uppercase hover:bg-red-600 rounded hover:text-white bg-white border-red-600'>Register</Link>
                    </div>
                </div>
                <div className="w-full">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        loop={true}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {BANNER_DATA.map((item,i) => (
                            <SwiperSlide key={i}>
                                <img src={item.image} className='w-full object-cover h-44 md:h-[600px]' alt={item.label} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                        
                </div>
                <div className="w-full p-3 text-center text-sm md:text-lg bg-gray-800 text-white font-semibold">
                    {QUOTE}
                </div>
                <div className="w-full container mx-auto px-3 md:px-0 py-5">
                    <div className="grid grid-cols-3 md:grid-cols-9 gap-3 mb-5">
                       {VEHICLE_BRAND_DATA.map((item,i) => (
                         <Link href="" className="h-24 md:h-36 flex items-center justify-center bg-white border-2 rounded-md border-gray-200 group overflow-hidden px-3" key={i}>
                            <img src={item.image} alt={item.name} className='group-hover:scale-110 transition-all ease-in-out duration-200'/>
                        </Link>
                       ))}
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-9 gap-3 mb-5">
                       {VEHICLE_TYPE_DATA.map((item,i) => (
                         <Link href="" className="h-24 md:h-36 flex flex-col items-center justify-center bg-white border-2 rounded-md border-gray-200 group overflow-hidden px-3" key={i}>
                            <img src={item.image} alt={item.name} className='group-hover:scale-110 transition-all ease-in-out duration-200'/>
                            <div className="text-gray-800">{item.name}</div>
                        </Link>
                       ))}
                    </div>
                    <div className="w-full flex items-center justify-between mb-3">
                        <div className="font-semibold md:text-2xl">New Vehicles <span className='text-red-600'>Left Hand Drive and Right Hand Drive Vehicles</span></div>
                        <Link href="" className="text-gray-700 hover:text-red-600 text-sm md:text-lg">
                            <span className='whitespace-nowrap'>View all </span>
                            <span className='hidden md:inline-flex'>New Vehicles</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">
                        {VEHICLE_DATA.map((item,i) => (
                            <div className="w-full border border-gray-200 rounded-md overflow-hidden relative" key={i}>
                                <button className="absolute top-3 right-3 p-2 rounded-full bg-white text-gray-800 hover:bg-red-600 hover:text-white">
                                    <FaRegHeart/>
                                </button>
                                <div className="w-full h-64 overflow-hidden">
                                    <img src={item.image} alt="" className="h-64 w-full object-cover group-hover:scale-110 transition-all ease-in-out duration-300" />
                                </div>
                                <div className="p-5">
                                    <div className="font-bold text-gray-900 md:text-lg mb-3">{item.title}</div>
                                    <div className="flex justify-between items-center">
                                        <div className="">
                                            <div className="text-gray-800">$ {item.price} USD FOB</div>
                                            <div className="font-light text-sm text-gray-500">$ {item.discount} USD FOB</div>
                                        </div>
                                        <Link href="" className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700">View Vehicle</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex items-center justify-between mb-3">
                        <div className="font-semibold md:text-2xl">New Electric Vehicles <span className='text-red-600'>Left Hand Drive and Right Hand Drive - New Generation Power</span></div>
                        <Link href="" className="text-gray-700 hover:text-red-600 text-sm md:text-lg">
                            <span className='whitespace-nowrap'>View all </span>
                            <span className='hidden md:inline-flex'>New Vehicles</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">
                        {VEHICLE_DATA.map((item,i) => (
                            <div className="w-full border border-gray-200 rounded-md overflow-hidden relative" key={i}>
                                <button className="absolute top-3 right-3 p-2 rounded-full bg-white text-gray-800 hover:bg-red-600 hover:text-white">
                                    <FaRegHeart/>
                                </button>
                                <div className="w-full h-64 overflow-hidden">
                                    <img src={item.image} alt="" className="h-64 w-full object-cover group-hover:scale-110 transition-all ease-in-out duration-300" />
                                </div>
                                <div className="p-5">
                                    <div className="font-bold text-gray-900 text-lg mb-3">{item.title}</div>
                                    <div className="flex justify-between items-center">
                                        <div className="">
                                            <div className="text-gray-800">$ {item.price} USD FOB</div>
                                            <div className="font-light text-sm text-gray-500">$ {item.discount} USD FOB</div>
                                        </div>
                                        <Link href="" className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700">View Vehicle</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <img src="/banner/banner-vehicle.png" alt="" className="w-full" />

                    <div className="w-full flex items-center justify-between mb-3">
                        <div className="font-semibold md:text-2xl">Use Vehicles <span className='text-red-600'>Left Hand Drive and Right Hand Drive Quality Inspected Vehicles</span></div>
                        <Link href="" className="text-gray-700 hover:text-red-600 text-sm md:text-lg">
                            <span className='whitespace-nowrap'>View all </span>
                            <span className='hidden md:inline-flex'>New Vehicles</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">
                        {VEHICLE_DATA.map((item,i) => (
                            <div className="w-full border border-gray-200 rounded-md overflow-hidden relative" key={i}>
                                <button className="absolute top-3 right-3 p-2 rounded-full bg-white text-gray-800 hover:bg-red-600 hover:text-white">
                                    <FaRegHeart/>
                                </button>
                                <div className="w-full h-64 overflow-hidden">
                                    <img src={item.image} alt="" className="h-64 w-full object-cover group-hover:scale-110 transition-all ease-in-out duration-300" />
                                </div>
                                <div className="p-5">
                                    <div className="font-bold text-gray-900 text-lg mb-3">{item.title}</div>
                                    <div className="flex justify-between items-center">
                                        <div className="">
                                            <div className="text-gray-800">$ {item.price} USD FOB</div>
                                            <div className="font-light text-sm text-gray-500">$ {item.discount} USD FOB</div>
                                        </div>
                                        <Link href="" className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700">View Vehicle</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <img src="/banner/banner-motorcycle.png" alt="" className="w-full mb-5" />
                    <div className="w-full flex items-center justify-between mb-3">
                        <div className="font-semibold md:text-2xl">Part and Accessories <span className='text-red-600'>for All Makes and Models</span></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                        {[1,2,3].map((item) => (
                            <div className="h-44 md:h-72 bg-gradient-to-r from-yellow-200 to-yellow-500 rounded-md p-5 md:p-10 flex flex-col justify-between">
                                <div className="">
                                    <div className="px-2 py-1 text-sm bg-rose-700 mb-3 text-white w-fit rounded">Top Brands</div>
                                    <div className="uppercase text-lg md:text-3xl font-bold">Batteries</div>
                                    <div className="font-light text-lg">Stay charged up!</div>
                                </div>
                                <Link herf="" className="inline-flex items-center text-gray-800 gap-3 bg-white px-3 py-2 w-fit rounded group">
                                    <span>Shop Now</span>
                                    <FaArrowRight className='text-gray-700 group-hover:translate-x-1 transition-all ease-in-out duration-200'/>
                                </Link>
                            </div>
                        ))}
                
                    </div>
                    <div className="w-full flex items-center justify-between mb-3">
                        <div className="font-semibold md:text-2xl">Latest News <span className='text-red-600'>and Vehincle Releases</span></div>
                        <Link href="" className="text-gray-700 hover:text-red-600 md:text-lg">View all News and Vehincle Releases</Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                        {[1,2,3].map((item) => (
                            <div className="w-full">
                                <div className="relative mb-3">
                                    <img src="/vehicle-data/audi.webp" alt="" className='w-full h-64 object-cover' />
                                    <div className="bg-violet-600 text-white px-2 py-1 text-sm absolute bottom-3 left-3">BUYER'S GUIDE</div>
                                </div>
                                <Link href="" className="font-bold text-gray-900 text-lg mb-3">Title</Link>
                                <div className="flex justify-between text-sm">
                                    <div className="flex gap-5 mb-3">
                                        <div className="flex items-center gap-1 text-gray-400 font-light">
                                            <LiaEdit/>
                                            <span>Jonathan</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-400 font-light">
                                            <IoMdTime/>
                                            <span>Jun 28, 17</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-400 font-light">
                                        <AiOutlineLike/>
                                        <span>59.6K</span>
                                    </div>
                                </div>
                                <p className="text-gray-500 font-light">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eos beatae, neque nihil doloribus itaque libero! Neque laudantium provident?...
                                </p>

                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-0 md:px-10">
                        {VALUES_DATA.map((item,i) => (
                            <div className="flex flex-col justify-center items-center" key={i}>
                                <GiPriceTag className='text-center text-violet-700 font-semibold text-4xl'/>
                                <div className="text-center md:text-2xl font-semibold text-gray-800">{item.title}</div>
                                <p className='text-center text-gray-600 text-sm font-light'>{item.subtitle}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="w-full bg-gray-800">
                <div className="w-full container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 py-5 md:py-10 px-3 md:px-0">
                    <div className="w-full">
                    <img src='/logo/gas-logo.png' className='h-4 md:h-7 mb-2'/>
                        <div className="text-white font-bold">Global Auto Supply is a division of eastern Auto Services Co., Ltd</div>
                        <div className="text-gray-300 font-light">Bangkok Free Trade Zone</div>
                        <div className="text-gray-300 font-light">No. 999/110 Moo 15</div>
                        <div className="text-gray-300 font-light">Bangsaotong District</div>
                        <div className="text-gray-300 font-light">Bangkok 10570</div>
                        <div className="text-gray-300 font-light">Thailand</div>
                        <div className="text-gray-300 font-light">Tel: +66 927939544</div>
                    </div>
                    {USEFUL_LINKS.map((item,i) => (
                        <div className="w-full">
                            <div className="uppercase text-white text-lg font-bold mb-3 md:mb-5">{item.title}</div>
                            <ul className='flex flex-col'>
                                {item.links.map((link,i) => (
                                    <li className='text-gray-300 inline-flex items-center gap-1 hover:text-white transition-all hover:translate-x-1 ease-in-out duration-200' key={i}>
                                        <GoChevronRight/>
                                        <Link>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
