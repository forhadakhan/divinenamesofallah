/**
 * FILE: components/heading.tsx
 * DESC: This is a custom component that displays the heading of the app.
 */

import React from 'react';
import Image from 'next/image';

export const Heading = () => {
    return (
        <section className="flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">
            {/* Logo Container */}
            <div className="flex-shrink-0 mr-4 sm:mr-6 md:mr-8 lg:mr-10 xl:mr-12 2xl:mr-14">
                <Image
                    src="/icons/android-chrome-512x512.png"
                    alt="Asma Ul Husna Logo"
                    width={150}
                    height={150}
                    className="nopeselect w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36"
                />
                {/* Image Credit (Screen Reader Only) */}
                <p className="sr-only">
                    Logo image credits to{' '}
                    <a
                        href="https://m.media-amazon.com/images/I/71Jn+oZ57UL._SL1140_.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Amazon
                    </a>
                </p>
            </div>

            {/* Titles Container */}
            <div className="text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-800 dark:text-gray-100">
                    أسماء الله الحسنى
                </h2>
                <h2 className="tracking-tighter text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-gray-700 dark:text-gray-200 mt-1">
                    Divine Names of Allah
                </h2>
                <h2 className="text-bn-anek font-black text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-600 dark:text-gray-300 mt-1">
                    আল্লাহর পবিত্র নামসমূহ
                </h2>
            </div>
        </section>
    );
};