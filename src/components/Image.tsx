import { ImageProps } from "../types/Blocks";

const Image = (props: ImageProps) => {
    return (
        <img
            src={props.src}
            alt={props.alt}
            className={props.className}
            loading="lazy"
            width={props.width}
            height={props.height}
        />
    );
};

export default Image;