import Image from "next/image";
import { gallery } from "@/lib/content";
import { Section } from "@/components/ui";

export function Gallery() {
  if (gallery.length === 0) return null;
  return (
    <Section eyebrow="Gallery" title="Our work">
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {gallery.map((image) => (
          <div key={image.src} className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
