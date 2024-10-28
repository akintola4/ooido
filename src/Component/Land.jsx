import { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Card1 from "./Card1";
import analysisdata from "./analysis";
import workdata from "./work";
import Card2 from "./Card2";
import Sub from "./Sub";
import Footer from "./Footer";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
export default function Land() {

    useEffect(() => {
        AOS.init();
    }, [])
    const card1 = analysisdata.map((info) => {
        return <Card1
            //the unqiue id for the data a unqiue key prop
            key={info.id}
            //{require("../images/avatar.png")}
            // it like this info is an object containig all the data in the data.js file
            //we then put info() inside our prop thus when we want to soruce the data 
            //we use prop.info."name of the data"
            //remember info is an object so we use dot notation to source our data from it
            info={info} //this contains all the data we need 


        //we can also use the spread operator to access the object 
        // {...info}
        //if you use this method remove all the .info we used in our card component
        />
    })
    const card2 = workdata.map((info) => {
        return <Card2
            //the unqiue id for the data a unqiue key prop
            key={info.id}
            info={info} //this contains all the data we need 
        />
    })


    const [currentCoin, setCurrentCoin] = useState("")
    function handleChange(event) {
        const selectedValue = event.target.value;
        setCurrentCoin(selectedValue)
        console.log(selectedValue); // This will print the value of the selected option to the console
        // You can also use `selectedValue` for other purposes in your code
    }

    return (
        <div className="scroll-smooth flex flex-col gap-10">
            <Nav />
            <Hero />
            <section className=" m-2 md:m-10 flex flex-col gap-10" data-aos="fade-up">
                <div className="flex flex-col items-center gap-2">
                   
                    {/* <div className="w-6/12 md:w-4/12 lg:w-3/12">
                        <div className="w-full rounded-lg bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 p-0.5 ">
                            <div className="flex h-full w-full   rounded-lg  bg-white dark:bg-gray-900 ">

                                <select
                                    onChange={handleChange}
                                    id="coin"
                                    name="coin"
                                    className="rounded-lg mx-4 my-2 w-full active:border-transparent accent-black ring-transparent focus:ring-transparent  bg-transparent" >
                                    <option value="">Select a coin</option>
                                    <option value="Binance Coin">Binance Coin</option>
                                    <option value="Tron Coin">Tron Coin</option>
                                    <option value="Ton Coin">Ton Coin</option>
                                    <option value="Etherum Coin">Etherum Coin</option>
                                    <option value="Matic Coin">Matic Coin</option>
                                </select>
                            </div>
                        </div>
                    </div> */}

                    <form className="max-w-sm mx-auto   md:w-6/12 lg:w-4/12 xl:w-5/12 ">
                    <h4 className=" py-2">Check for any crypto performance </h4>
                    <div className="  p-2 border border-gray-500/50  rounded-lg">
                    <label htmlFor="countries" className="block ml-1 text-xs text-opacity-25 dark:text-gray-400 font-medium text-gray-900 ">Crypto type</label>
                        <select  onChange={handleChange}
                                    id="coin"
                                    name="coin" className=" text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-transparent block w-full bg-transparent ring-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-transparent active:ring-transparent focus:outline-none dark:focus:border-transparent ">
                            <option value="">Select a coin</option>
                            <option value="Binance Coin">Binance Coin</option>
                            <option value="Tron Coin">Tron Coin</option>
                            <option value="Ton Coin">Ton Coin</option>
                            <option value="Etherum Coin">Etherum Coin</option>
                        </select>
                    </div>
                       
                    </form>


                </div>
                <div className="w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 p-0.5 ">

                    <div className="flex h-full w-full flex-col  md:flex-row justify-between   bg-white dark:bg-gray-950 ">
                        <div className="flex w-full p-4 md:p-10 flex-col gap-10">
                            <h4 className="md:text-2xl ">{currentCoin} Analysis</h4>
                            <div className="w-full flex justify-center flex-col gap-4 items-center">
                                <img src="/img/hero-2-1.svg" alt="" />
                                <div className="flex flex-row gap-10">
                                    <div className="flex flex-row gap-2 items-center">
                                        <img src="/img/dot-blue.svg" alt="" />
                                        <h4 className="text-sm md:text-md">2023</h4>
                                    </div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <img src="/img/dot-green.svg" alt="" />
                                        <h4 className="text-sm md:text-md">2024</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <span className="border border-gray-600"></span>
                        <div className="flex w-full p-4  md:p-10 flex-col  gap-10">
                            <h4 className="md:text-2xl ">{currentCoin} Chart Performance</h4>
                            <div className="w-full flex flex-col justify-center gap-4 items-center">
                                <img src="/img/hero-2-2.svg" alt="" />
                                <div className="flex flex-row gap-10">
                                    <div className="flex flex-row gap-2 items-center">
                                        <img src="/img/dot-blue.svg" alt="" />
                                        <h4 className="text-sm md:text-md">2023</h4>
                                    </div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <img src="/img/dot-green.svg" alt="" />
                                        <h4 className="text-sm md:text-md">2024</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className=" flex flex-col mx-2 md:mx-10 p-4 xl:p-20  items-center gap-10">
                <h4 className="bg-gradient-to-r from-neutral-100 via-neutral-500 text-center to-neutral-700 dark:text-transparent  bg-clip-text md:text-4xl lg:text-6xl text-2xl ">Analyze every crypto asset</h4>
                <img src="/img/hero-3-1.svg" alt="" data-aos="fade-up" />
                <div className="grid grid-cols-2 gap-5 md:gap-10 justify-between">
                    {card1}
                </div>
            </section>
            <section className=" flex flex-col items-center gap-10 mx-5  md:mx-10" >
                <div className="flex flex-col text-center items-center gap-4">
                    <h4 className="bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-700 text-transparent invert dark:invert-0 bg-clip-text md:text-4xl text-2xl">How it works</h4>
                    <p className="w-10/12 xl:w-6/12 text-gray-700 text-sm md:text-md dark:text-gray-300"> Ooido makes it effortless for users to stay on top of their crypto investments, providing real-time tracking and insights to optimize performance with ease.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-5 md:gap-10 md:p-10">
                    {card2}
                </div>
            </section>
            <section className=" flex flex-col gap-3 mx-10 items-center py-10" data-aos="fade-right">
                <div className="flex flex-col text-center gap-2">
                    <h4 className="bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-700 text-transparent invert dark:invert-0 bg-clip-text md:text-4xl text-2xl">Ooido is global</h4>
                    <p className=" text-gray-700 dark:text-gray-300">You can use ooido from anywhere around the world with ease</p>
                </div>
                <img src="/img/hero-5.svg" alt="" className="" data-aos="zoom-in-up" />
            </section>
            <Sub />
            <Footer />
        </div>
    )
}
