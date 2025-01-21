/**
 * FILE: components/design/SingleView.tsx
 * DESC: A single view of a name card with swipe gestures for mobile.
 */
"use client";

import { useSwipeable } from "react-swipeable";
import { useView } from "@/context/ViewContext";
import NameCard from "@/components/design/NameCard";
import type { NameOfAllah } from "@/lib/data/names";
import { Button } from "@/components/ui/shadcn/button";
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";
import { useEffect } from "react"; // Import useEffect

interface SingleViewProps {
  name: NameOfAllah;
}

export default function SingleView({ name }: SingleViewProps) {
  const { handleNext, handlePrev } = useView();

  // Swipe handlers for mobile gestures
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(), // Swipe left to go to the next name
    onSwipedRight: () => handlePrev(), // Swipe right to go to the previous name
    onSwipedUp: () => handleNext(), // Swipe up to go to the next name
    onSwipedDown: () => handlePrev(), // Swipe down to go to the previous name
    trackMouse: true, // Enable mouse swipe support (optional)
  });

  // Keyboard event handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    // Add event listener for keydown events
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrev, handleNext]); // Dependencies to ensure the latest functions are used

  return (
    <section {...swipeHandlers} className="touch-none">
      <NameCard
        name={name}
        large
        className="flex flex-col items-center justify-center"
      />
      <div className="flex justify-center mt-8 space-x-4">
        <Button variant={"outline"} onClick={handlePrev} title="Previous">
          <ChevronLeftIcon />
        </Button>
        <Button variant={"outline"} onClick={handleNext} title="Next">
          <ChevronRightIcon />
        </Button>
      </div>
    </section>
  );
}
