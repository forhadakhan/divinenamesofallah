/**
 * @file `metadata/info.ts`
 * @description This file contains the basic metadata information for the application.
 */

import { IMAGES } from "@/metadata/images";
import { TITLE, DESCRIPTION, DESCRIPTION_BN, KEYWORDS, BASE_URL } from "@/metadata/data";

export const MetaInfo = {
    metadataBase: new URL(BASE_URL),
    title: {
        template: `%s | ${TITLE}`,
        default: `${TITLE}`,
    },
    applicationName: TITLE,
    authors: [
        {
            name: "FORHAD KHAN (@forhadakhan)",
            url: "https://forhadakhan.com",
            // Optional: Add role or email
            // role: "Developer",
            // email: "forhad@forhadakhan.com",
        },
    ],
    description: `${DESCRIPTION} | ${DESCRIPTION_BN}`,
    keywords: [...KEYWORDS],
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: BASE_URL,
        type: "website",
        siteName: TITLE,
        images: [
            {
                url: IMAGES.BANNER_OG.src,
                width: IMAGES.BANNER_OG.width,
                height: IMAGES.BANNER_OG.height,
                alt: TITLE,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        images: [
            {
                url: IMAGES.BANNER_OG.src,
                width: IMAGES.BANNER_OG.width,
                height: IMAGES.BANNER_OG.height,
                alt: TITLE,
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-video-preview": -1,
        // Optional: Add more directives
        // noarchive: true,
        // nosnippet: true,
        // notranslate: true,
    },
    alternates: {
        canonical: '/',
    },
};
