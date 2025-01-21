/**
 * FILE: components/design/ListView.tsx
 * DESC: This file exports a component that displays the names of Allah in a list view.
 */

import { cn } from "@/lib/utils";
import type { NameOfAllah } from "@/lib/data/names";

interface ListViewProps {
  names: NameOfAllah[];
  className?: string;
}

export default function ListView({ names, className }: ListViewProps) {
  return (
    <table className={cn("w-full text-center", className)}>
      <tbody>
        {names.map((name) => (
          <tr key={name.id} className="border-y">
            {/* ID Column */}
            <td className="p-4">
              <h3 className="font-bold text-serif text-muted-foreground text-xs sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl">
                {name.id}
              </h3>
            </td>

            {/* English Name and Meaning Column */}
            <td className="p-4">
              <h3 className="font-medium text-serif sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                {name.englishName}
              </h3>
              <p className="text-geist-sans text-muted-foreground text-xs font-light sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl py-4">
                {name.englishMeaning}
              </p>
            </td>

            {/* Arabic Name Column */}
            <td className="p-4">
              <h2 className={cn("font-arabi my-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl")}>
                {name.arabic}
              </h2>
            </td>

            {/* Bangla Name and Meaning Column */}
            <td className="p-4">
              <h3 className="font-medium text-bn-anek sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                {name.banglaName}
              </h3>
              <p className="text-bn-sans text-muted-foreground text-xs font-light sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl py-4">
                {name.banglaMeaning}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


export function RawTable({ names, className }: ListViewProps) {
  return (
    <section className={cn("w-full text-center", className)}>
      <table>
        <tbody>
          {names.map((name) => (
            <tr key={name.id}>
              {/* ID Column */}
              <td>
                <h3>
                  {name.id}
                </h3>
              </td>

              {/* English Name and Meaning Column */}
              <td className="p-4">
                <h3>
                  {name.englishName}
                </h3>
                <p>
                  {name.englishMeaning}
                </p>
              </td>

              {/* Arabic Name Column */}
              <td className="p-4">
                <h2>
                  {name.arabic}
                </h2>
              </td>
              {/* Bangla Name and Meaning Column */}
              <td className="p-4">
                <h3>
                  {name.banglaName}
                </h3>
                <p>
                  {name.banglaMeaning}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}