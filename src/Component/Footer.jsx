


import { FaGoogle, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer className="pt-10 w-full flex-end bottom-0 bg-gray-950  text-gray-100" >
            <div className="relative  ">
                <div className="relative flex  flex-col gap-40">

                    <div className=" px-5 ">
                        <div className="flex flex-col gap-10 lg:gap-20  lg:flex-row ">
                            <div className="flex flex-col items-center justify-between lg:items-start gap-6 p-2 xl:p-10 lg:w-4/12" >
                                {/* <img src="/img/logo-black.svg" className=" block dark:hidden " alt="" />
                                <img src="/img/logo-light.svg" className=" hidden dark:block 2" alt="" /> */}
                                <img src="/img/logo-light.svg" className=" " alt="" />
                                <p className=" text-md md:text-center lg:text-left">The most reliable digital platform for  your online presence, allowing you to own your own value in web3.</p>
                                <div className="flex gap-5 flex-row ">
                                    <button className="text-2xl"><FaXTwitter /></button>
                                    <button className="text-2xl"><FaGoogle /></button>
                                    <button className="text-2xl"><FaInstagram /></button>
                                </div>
                                <h4>© 2024 ooido implemented by <a href="">Dev Akintola</a></h4>
                            </div>
                            <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 md:gap-10 justify-between my-5 lg:w-8/12 lg:grid-rows-1">
                                <ul className="flex flex-col gap-2  text-left justify-between">
                                    <h4 className="font-bold text-lg ">Protocol</h4>
                                    <li><button className="text-md font-light "> Dashboard </button></li>
                                    <li><button className="text-md font-light ">Documentation</button></li>
                                    <li><button className="text-md font-light ">Articles
                                    </button></li>
                                    <li><button className="text-md font-light "> Governance Forum </button></li>
                                </ul>
                                <ul className="flex flex-col gap-2  text-left justify-between">
                                    <h4 className="font-bold text-lg ">Company</h4>
                                    <li><button className="text-md font-light "> Terminal</button></li>
                                    <li><button className="text-md font-light ">Bug Bounty</button></li>
                                    <li><button className="text-md font-light "> Email</button></li>
                                    <li><button className="text-md font-light "> Brand</button></li>
                                </ul>
                                <ul className="flex flex-col gap-2  text-left justify-between">
                                    <h4 className="font-bold text-lg ">Social</h4>
                                    <li><button className="text-md font-light ">Help Center</button></li>
                                    <li><button className="text-md font-light "> Twitter</button></li>
                                    <li><button className="text-md font-light ">Discord</button></li>
                                    <li><button className="text-md font-light ">Github</button></li>

                                </ul>
                                <ul className="flex flex-col gap-2  text-left justify-between">
                                    <h4 className="font-bold text-lg "> Company</h4>
                                    <li><button className="text-md font-light ">Careers </button></li>
                                    <li><button className="text-md font-light ">Privacy</button></li>
                                    <li><button className="text-md font-light ">Terms</button></li>
                                    <li><button className="text-md font-light ">Cookie</button></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}
