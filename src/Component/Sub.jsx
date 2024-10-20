

export default function Sub() {
    return (
        // <section className="flex relative bg-bg-img  my-20 flex-col gap-10 p-40 bg-no-repeat items-center mx-20">
        //     {/* <img src="img/sub.svg" alt="" /> */}
        //     <div className="flex flex-col gap-4 items-center">
        //     <h4 className="bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-700 text-transparent bg-clip-text md:text-6xl ">Subscribe to Ooido</h4>
        //     <p className="text-md ">The ultimate guide and latest updates on ooido. Join 100,000+ others on the journey.</p>
        //     </div>

        //     <div className="bg-gray-100 rounded-lg flex flex-row  gap-10 text-black p-2 px-4">
        //         <input type="email" placeholder="enter your email"  className="bg-transparent"/>
        //         <button className="bg-gray-900 p-2 px-4 rounded-lg text-white ">Sign up</button>
        //     </div>
        // </section>
        <section className="relative p-5 mx-4 xl:p-20 xl:mx-32 bg-gray-950 text-white rounded-lg"  data-aos="zoom-in" >
            <img
                src="img/sub.svg"
                className="absolute inset-0 object-cover md:w-full h-full"
                alt=""
            />
            <div className="relative ">
                <div className="flex flex-col items-center justify-between gap-10 xl:p-20">
                    <div className="flex flex-col gap-4 items-center">
                        <h4 className="bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-700 text-transparent bg-clip-text text-2xl md:text-6xl ">Subscribe to Ooido</h4>
                        <p className="text-sm md:text-md text-center ">The ultimate guide and latest updates on ooido. Join 100,000+ others on the journey.</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg flex xl:w-4/12 justify-between flex-row gap-4 md:gap-10 text-black p-2 px-4">
                        <input type="email" placeholder="enter your email" className="bg-transparent" />
                        <button className="bg-gray-900 p-2 px-4 rounded-lg text-white ">Sign up</button>
                    </div>

                </div>
            </div>

        </section>
    )
}
