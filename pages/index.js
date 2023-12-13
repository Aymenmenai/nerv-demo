// "user client";
import { Inter } from "next/font/google";
import HeadSection from "@/components/content/head-section";
import MiddleSection from "@/components/content/middle-section";
import LastSection from "@/components/content/last-section";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        // Specify a target element here, for example:
        // el: document.querySelector("#scroll-container"),
      });
    };

    initLocomotiveScroll(); // Invoke the async function
  }, []);

  const language = [];
  return (
    <>
      <main>
        <HeadSection />
        <MiddleSection />
        <LastSection />
      </main>
    </>
  );
}
