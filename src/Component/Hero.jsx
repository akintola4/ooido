
import { FaCheck } from 'react-icons/fa';
import Particles from './Particles';
export default function Hero() {

    return (
     
      <div className="flex mx-5 xl:mx-20 h-full flex-col justify-evenly pt-40" data-aos="zoom-in">
            <div className="flex flex-col gap-10 items-center text-center">
                <h4 className="font-thin md:text-6xl text-3xl md:w-8/12 font-instrumentserif">Effortlessly track crypto asset performance and analytics with ease</h4>
                <p className="font-normal text-lg md:w-6/12 text-gray-500">Unlock your crypto potential with Ooido! Instantly track asset performance with real-time data, powerful analytics, and smart insights.</p>
                <button className="bg-gradient-to-r from-neutral-100 via-neutral-100 to-neutral-500 rounded-lg px-8   py-2 hover:animate delay-50 hover:-translate-y-1 hover:scale-110 duration-200 invert dark:invert-0 dark:text-black">Get Started</button>
                <div className="flex flex-col items-center gap-2">
                <h4>100k+ Verified Users</h4>
                <img src="img/hero-1-1.svg" className='scale-125' alt="" />

                <div className='grid grid-cols-2 md:grid-cols-3 py-10 gap-5'>
                    <div className='flex flex-row gap-2 items-center flex-nowrap'>
                        <div className='bg-gradient-to-r h-4/6 md:h-3/6 lg:h-full flex items-center from-neutral-100 via-neutral-500 text-white to-neutral-500 p-2 rounded-full'>
                        <FaCheck  />
                        </div>
                    <h4 className='font-normal text-sm md:text-lg'>Real time chart data</h4>
                     </div>
                     <div className='flex flex-row gap-2 items-center flex-nowrap'>
                        <div className='bg-gradient-to-r h-4/6 md:h-3/6 lg:h-full flex items-center from-neutral-100 via-neutral-500 text-white to-neutral-500 p-2 rounded-full'>
                        <FaCheck  />
                        </div>
                    <h4 className='font-normal text-sm md:text-lg'>CTFC-regulated options</h4>
                     </div>
                     <div className='flex flex-row gap-2 items-center flex-nowrap'>
                        <div className='bg-gradient-to-r h-4/6 md:h-3/6 lg:h-full flex items-center from-neutral-100 via-neutral-500 text-white to-neutral-500 p-2 rounded-full'>
                        <FaCheck  />
                        </div>
                    <h4 className='font-normal text-sm md:text-lg'>Trusted by over 100k Users</h4>
                     </div>
                </div>
            </div>

            </div>

            <Particles id="tsparticles" />
        </div>
    )
}
