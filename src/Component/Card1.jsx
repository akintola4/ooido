

export default function Card1(props) {
  return (
    <div className="flex flex-col gap-2 p-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_4px] dark:shadow-[rgba(247,240,_252,_0.1)_0px_0px_10px]  hover:animate delay-50 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer rounded-lg"  data-aos="fade-right">
    <h4 className="text-sm md:text-lg ">{props.info.title}</h4>
    <p className="text-xs md:text-sm md:w-10/12 text-gray-500">{props.info.description}</p>
    </div>
  )
}
