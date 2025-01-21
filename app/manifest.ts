/**
 * @file `app/manifest.ts`
 * @description This file contains the manifest metadata for the PWA.
 */
import { MetadataRoute } from "next";
import { ICONS } from "@/metadata/images";
import { TITLE, DESCRIPTION, SHORT_NAME } from "@/metadata/data";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: TITLE,
        short_name: SHORT_NAME,
        start_url: "/",
        display: "standalone",
        description: DESCRIPTION,
        icons: ICONS,
        theme_color: "#000000",         // for the address bar
        background_color: "#000000",    // for splash screen
    };
}
