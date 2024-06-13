export type ImageProps = {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
}

export type HeroProps = {
    title?: string;
    tagline?: string;
    image?: ImageProps;
}

export type CardProps = {
    blockTitle: string;
    blockDescription: string;
    cards: Array<{
        title: string;
        description: string;
        image: ImageProps;
    }>;
}

export type ServiceProps = {
    blockTitle: string;
    blockDescription: string;
    services: Array<{
        title: string;
        description: string;
        items: Array<{
           item: string;
        }>;
    }>;
}

export type SponsorProps = {
    blockTitle: string;
    blockDescription: string;
    sponsors: Array<{
        link: string;
        name: string;
        image: ImageProps;
    }>;
}


export type AccordionProps = {
    blockTitle: string;
    blockDescription: string;
    accordions: Array<{
        title: string;
        content: string;
       
    }>;
}