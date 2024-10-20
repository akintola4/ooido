

export default function Card2(props) {
  return (
    <div className="flex flex-col gap-4 h-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-10 dark:shadow-[rgba(247,240,_252,_0.1)_0px_0px_10px] rounded-lg"  data-aos="fade-right" >
        <img  src={`img/${props.info.img}`} className="w-10/12 h-3/6 invert dark:invert-0" alt="" />
        <h4 className="text-lg">{props.info.title}</h4>
        <p className="font-bold text-gray-500 text-sm md:text-md ">{props.info.description}</p>
    </div>
  )
}
