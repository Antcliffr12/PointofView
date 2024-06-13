import { Link } from "react-router-dom"
import { SponsorProps } from "../types/Blocks"
import Image from "./Image"

const Sponsors = (props: SponsorProps) => {
  return (
    <section>
        <div className="py-16 text-center max-w-[77.5rem] mx-auto md:px-0">
            <p className="mb-4 text-center text-[#c28e1c]">{props.blockDescription}</p>
            <div className='flex flex-col gap-y-4'>
                <h2 className="text-4xl md:text-[2.625rem] font-bold mb-8 md:mb-[52px]">
                    {props.blockTitle}
                </h2>
                <div className='flex flex-wrap items-center justify-center gap-x-[32px]'>
                    {props.sponsors.map((sponsor, index: number) => (
                        <div key={index} className='block p-[5px] rounded-lg'>
                           <Link to={sponsor.link} target="_blank" className='no-underline' aria-label={`Company Logo ${sponsor.name}`}>
                                <Image
                                    src={sponsor.image.src}
                                    alt={sponsor.image.alt}
                                    className='object-contain max-w-[200px] max-h-[50px]'
                                    height={50}
                                    width={200}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sponsors