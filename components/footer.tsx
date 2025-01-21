/**
 * FILE: components/footer.tsx
 * DESC: Defines the footer component for the application.
 */

import { FK_WEBSITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="py-3 2xl:py-6 text-center text-xs 2xl:text-sm mt-auto">
      <div className="bg-black p-2 px-4 rounded-full inline-block shadow-lg hover:shadow-xl transition-shadow duration-300">
        <p className="text-gray-300">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href={FK_WEBSITE}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4 transition-colors duration-300"
          >
            FORHAD KHAN
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
