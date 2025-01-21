/**
 * @file `lib/fonts/config.ts`
 * @description This file contains the configuration for the different fonts used in the project.
 */

import {
    Inter as SansFont,
    Noto_Serif as SerifFont,
    Anek_Bangla as BanglaAnekFont,
    Noto_Sans_Bengali as BanglaSansFont,
    Noto_Serif_Bengali as BanglaSerifFont,
} from "next/font/google";
import localFont from "next/font/local";

const geistSans = localFont({
    src: "./GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

// Define font configurations
const fontSans = SansFont({
    subsets: ["latin"],
    variable: "--font-sans",
});

const fontSerif = SerifFont({
    subsets: ["latin"],
    variable: "--font-serif",
});

const fontBanglaSans = BanglaSansFont({
    subsets: ["bengali"],
    variable: "--font-sans-bengali",
});

const fontBanglaSerif = BanglaSerifFont({
    subsets: ["bengali"],
    variable: "--font-serif-bengali",
});

const fontAnekBangla = BanglaAnekFont({
    subsets: ["bengali"],
    variable: "--font-anek-bangla",
});

// Define font variables
export const fonts = {
    fontSans,
    fontSerif,
    fontBanglaSans,
    fontBanglaSerif,
    fontAnekBangla,
    geistSans,
    geistMono,
};

// Export individual font variables with descriptive names
export const textSans = fontSans.variable;
export const textSerif = fontSerif.variable;
export const textGeistSans = geistSans.variable;
export const textGeistMono = geistMono.variable;
export const textBanglaAnek = fontAnekBangla.variable;
export const textBanglaSans = fontBanglaSans.variable;
export const textBanglaSerif = fontBanglaSerif.variable;

export const fontVariables = {
    textSans,
    textSerif,
    textBanglaSans,
    textBanglaSerif,
    textBanglaAnek,
    textGeistSans,
    textGeistMono,
} 