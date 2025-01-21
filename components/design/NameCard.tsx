/**
 * FILE: components/design/NameCard.tsx
 * DESC: A single name card component that displays the name of Allah in Arabic, English, and Bangla.
 */
import { cn } from "@/lib/utils";
import type { NameOfAllah } from "@/lib/data/names";

interface NameCardProps {
    name: NameOfAllah
    large?: boolean
    className?: string
}


export default function NameCard({ name, large = false, className }: NameCardProps) {

    const cardClass = large
        ? "w-full p-8 max-w-full mx-auto"
        : "bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto dark:bg-gray-800"

    return (
        <div className={cn("w-full", cardClass, className)}>
            <div className={`text-center`}>
                <h2 className={cn("font-arabi my-2", large ? "text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl" : "text-5xl")}>{name.arabic}</h2>
            </div>
            <p className="my-4 text-muted-foreground text-center">{name.id}</p>
            <div className="flex flex-col items-center justify-center space-y-6">
                <div>
                    <h3 className={`text-center font-bold text-serif ${large ? "text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl" : "text-3xl"} mb-1`}>{name.englishName}</h3>
                    <p className={`text-center font-light text-geist-sans text-muted-foreground py-3 ${large ? "text-2xl" : "text-xl"}`}>{name.englishMeaning}</p>
                </div>
                <div>
                    <h3 className={`text-center font-bold text-bn-anek ${large ? "text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl" : "text-3xl"} mb-1`}>{name.banglaName}</h3>
                    <p className={`text-center font-light text-bn-sans text-muted-foreground py-3 ${large ? "text-2xl" : "text-xl"}`}>{name.banglaMeaning}</p>
                </div>
            </div>
        </div>
    )
}
