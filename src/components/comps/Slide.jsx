import Image from "next/image"

const Slide = () => {
  return (
    <div className="relative w-full mt-8 lg:mt-12 overflow-hidden">
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <Image 
          src="/images/slide.png" 
          alt="Slide Image" 
          width={1980} 
          height={220} 
          className="relative z-10 h-auto w-full object-cover" 
          priority
        />
      </div>
    </div>
  )
}

export default Slide