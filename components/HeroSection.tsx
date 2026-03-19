interface HeroSectionProps { imageSrc: string; imageAlt: string; }

export default function HeroSection({ imageSrc, imageAlt }: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen bg-gray-800 overflow-hidden">
      <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
    </section>
  );
}