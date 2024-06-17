import { HeroProps } from "../types/Blocks";
import Image from "./Image";


const Hero = (props: HeroProps) => {
	return (
		<section>
			<div className="py-8 lg:py-28 text-center">
				<div className="px-5 max-w-[77.5rem] mx-auto">
					<h1 className="text-5xl font-normal md:font-bold md:text-6xl mb-5">{props.title}</h1>
					<p className="text-base text-gray-600 md:text-lg mb-10">
						{props.tagline}
					</p>
					{props.image && (
						<Image
							src={props.image.src}
							alt={props.image.alt}
							className="rounded-3xl w-full max-w-full object-cover aspect-[3/2]"
							height={800}
							width={1200}
						/>
					)}
				</div>
			</div>
		</section>
	);
};

export default Hero;
