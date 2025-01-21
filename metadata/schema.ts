/**
 * @file `metadata/schema.ts`
 * @description This file contains the schema markup for the application.
 */
import { TITLE, DESCRIPTION, DESCRIPTION_BN, KEYWORDS, SHORT_NAME, BASE_URL } from "@/metadata/data";
import { IMAGES } from "@/metadata/images";

export const WebSiteSchemaMarkup = {
    "@context": "https://schema.org", // Add context for JSON-LD
    "@type": "WebSite",
    "name": TITLE,
    "alternateName": SHORT_NAME,
    "url": BASE_URL, // Use BASE_URL instead of undefined URL
    "description": `${DESCRIPTION} | ${DESCRIPTION_BN}`, // Combine descriptions
    "keywords": [...KEYWORDS], // Spread keywords array
    "inLanguage": ["en", "bn"], // Specify supported languages
    "logo": {
        "@type": "ImageObject",
        "url": IMAGES.LOGO.src,
        "width": IMAGES.LOGO.width,
        "height": IMAGES.LOGO.height,
    },
    "image": {
        "@type": "ImageObject",
        "url": IMAGES.BANNER_OG.src,
        "width": IMAGES.BANNER_OG.width,
        "height": IMAGES.BANNER_OG.height,
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": `${BASE_URL}/search?q={search_term_string}`, // Enable search functionality
        "query-input": "required name=search_term_string",
    },
};
