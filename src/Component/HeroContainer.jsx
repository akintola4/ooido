import Particles from '../Component/Particles';

const HeroContainer = ({ children }) => {
  return (
    <div className="relative">
      <Particles />
      {children}
    </div>
  );
};

export default function Hero() {
  return (
    <HeroContainer>
       <div className="flex mx-5 xl:mx-20 h-screen flex-col justify-evenly pt-32">
            <div className="flex flex-col gap-10 items-center text-center">
                <h4 className="font-thin md:text-6xl text-3xl md:w-8/12 font-instrumentserif">Effortlessly track crypto asset performance and analytics with ease</h4>
                <p className="font-bold text-sm md:w-6/12 text-gray-400">Unlock your crypto potential with Ooido! Instantly track asset performance with real-time data, powerful analytics, and smart insights.</p>
                <button className="bg-gradient-to-r from-neutral-100 via-neutral-100 to-neutral-500 rounded-lg px-6  py-2 hover:animate delay-50 hover:-translate-y-1 hover:scale-110 duration-200 dark:text-black">Get Started</button>
                <div className="flex flex-col items-center gap-2">
                <h4>100k+ Verified Users</h4>
                <img src="img/hero-1-1.svg" alt="" />
            </div>
            </div>

        </div>
    </HeroContainer>
  );
}