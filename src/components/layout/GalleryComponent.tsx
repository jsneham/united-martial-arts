import { galleryImages } from "@/constant";
import { Card, CardContent } from "../ui/card";

export const GalleryComponent = () => {
  const fixedImages = galleryImages.slice(0, 8); // Ensure 8 boxes only

  return (
    <section
      id="gallery"
      className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
    >
      {fixedImages.map((src, index) => (
        <Card
          key={index}
          className="bg-neutral-900 border-neutral-800 overflow-hidden aspect-square"
        >
          <CardContent className="flex justify-center items-center h-full p-0">
            <img
              src={src}
              alt={`Martial art ${index + 1}`}
              className="object-contain w-full h-full"
            />
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
