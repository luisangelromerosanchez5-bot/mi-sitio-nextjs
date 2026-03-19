import HeroSection from "../components/HeroSection";
import BlogSection from "../components/BlogSection";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { heroImage } from "lib/lib/data";

export default function HomePage() {
  return (
    <>
      <HeroSection imageSrc={heroImage.src} imageAlt={heroImage.alt} />
      <BlogSection />
      <Gallery />
      <ContactForm />
      <Footer />
    </>
  );
}