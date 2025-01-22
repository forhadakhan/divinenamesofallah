/**
 * FILE: components/heading.tsx
 * DESC: This is a custom component that displays the heading of the app.
 */

import React from 'react';

export const Heading = () => {
    return (
        <section className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-800 dark:text-gray-100">
                أسماء الله الحسنى
            </h2>
            <h2 className="tracking-tighter text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-gray-700 dark:text-gray-200 mt-1">
                Divine Names of Allah
            </h2>
            <h2 className="text-bn-anek font-black text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-600 dark:text-gray-300 mt-1">
                আল্লাহর পবিত্র নামসমূহ
            </h2>
        </section>
    );
};