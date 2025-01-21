import React from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export const MenuBar = () => {
    return (
        <section className="flex items-center justify-between p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">
            <div></div>
            <div>
                <ThemeToggle />
            </div>
        </section>
    )
}
