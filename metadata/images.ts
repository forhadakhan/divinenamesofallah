/**
 * @file `metadata/images.ts`
 * @description This file contains the metadata for the images used in the application or specificly for metadata related.
 */

export interface Icon {
    src: string;
    sizes: string;
    type: string;
}


export const ICONS: Icon[] = [
    {
        src: `/icons/apple-icon-180x180.png`,
        sizes: "180x180",
        type: "image/png",
    },
    {
        src: `/icons/android-chrome-192x192.png`,
        sizes: "192x192",
        type: "image/png",
    },
    {
        src: `/icons/android-chrome-512x512.png`,
        sizes: "512x512",
        type: "image/png",
    },
    {
        src: `/Asma-Ul-Husna.png`,
        sizes: "1080x1080",
        type: "image/png",
    },
    {
        src: `/icons/favicon-16x16.png`,
        sizes: "16x16",
        type: "image/png",
    },
    {
        src: `/icons/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png",
    },
];


export const IMAGES = {
    LOGO: {
        src: `/assets/Asma-Ul-Husna.png`,
        width: 1080,
        height: 1080,
        type: "image/png",
        alt: "Logo",
    },
    BANNER_OG: {
        src: `/assets/Asma-Ul-Husna-banner.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpg",
        alt: "Banner",
    }
};
