import { CardProps } from "../types/Blocks";
import Image from "./Image";

const Cards = (props: CardProps) => {
	return (
		<section>
			<div className="py-16 text-center max-w-[77.5rem] mx-auto md:px-0">
				<p className="mb-4 text-center text-[#c28e1c]">{props.blockDescription}</p>
				<h2 className="text-4xl md:text-[2.625rem] font-bold mb-8 md:mb-[52px]">
					{props.blockTitle}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 md:gap-x-12 px-10 md:gap-y-0">
					{props.cards.map((card, index: number) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center md:items-start md:justify-start gap-y-2.5"
						>
							<div className="w-full">
								<Image
									src={card.image.src}
									alt={card.image.alt}
									className="rounded-3xl w-full max-w-full object-cover aspect-[3/2]"
									height={800}
									width={1200}
								/>
							</div>
							<div className="w-full mt-4">
								<h3 className="text-2xl font-normal mb-4">{card.title}</h3>
								<p className="text-base text-[#4F4F4F] leading-7">
									{card.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Cards;
