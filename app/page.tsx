import HeroSection from "../components/HeroSection";
import { heroImage } from "lib/lib/data";

export default function HomePage() {
  return (
    <>
      <HeroSection imageSrc={heroImage.src} imageAlt={heroImage.alt} />
    </>
  );
}