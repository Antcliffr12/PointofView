import { useState } from 'react'
import { AccordionProps } from "../types/Blocks"

const Accordion = (props: AccordionProps) => {
    const [accordionOpen, setAccordionOpen] = useState<number | null>(null);

    const handleAccordionClick = (index: number) => {
        setAccordionOpen(accordionOpen === index ? null : index);
    };
    return (
        <section>
            <div className="px-5 md:px-0 py-16 text-center max-w-[77.5rem] mx-auto md:px-0">
                <p className="mb-4 text-[#c28e1c]">{props.blockDescription}</p>
                <h2 className="text-4xl md:text-[2.625rem] font-bold mb-8 md:mb-[52px]">{props.blockDescription}</h2>
                <div className='flex flex-col gap-y-4'>
                    {props.accordions.map((accordion, index: number) => (
                        <div className='p-4 bg-[#F8F8F8] rounded-lg' key={index}>
                            <h2>
                                <button className='text-2xl flex items-center justify-between w-full font-medium text-left rounded-lg focus:outline-none focus:shadow-outline'
                                    onClick={() => handleAccordionClick(index)}
                                    aria-expanded={accordionOpen === index}
                                    aria-controls={`accordion-text-${index}`}
                                >
                                    <span>{accordion.title}</span>
                                    <svg className="decoration-gray-400 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${accordionOpen === index && '!rotate-180'}`} />
                                        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen === index && '!rotate-180'}`} />
                                    </svg>
                                </button>
                            </h2>
                            <div
                                id={`accordion-text-${index}`}
                                role="region"
                                aria-labelledby={`accordion-title-${index}`}
                                className={`text-left grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <p className="mt-2.5 font-normal leading-[28px] text-base text-[#696969]">
                                        {accordion.content}
                                    </p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Accordion