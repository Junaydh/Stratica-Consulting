import Contact from "@/components/Contact"
import Partners from "@/components/Partners"

const page = () => {
  return (
    <div>
      <div className='h-[130px] bg-gray-400'></div>
      <div className="custom-img h-[100px]"></div>
      <Contact />
      <Partners />
    </div>
  )
}

export default page