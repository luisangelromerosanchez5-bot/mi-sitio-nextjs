interface HeroSectionProps { imageSrc: string; imageAlt: string; }

export default function HeroSection({ imageSrc, imageAlt }: HeroSectionProps) {
  return (
    <section className="w-full h-64 md:h-96 overflow-hidden">
      <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
    </section>
  );
}