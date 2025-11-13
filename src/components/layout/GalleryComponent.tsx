import { galleryImages } from "@/constant"
import { Card, CardContent } from "../ui/card"

export const GalleryComponent = () => {
  return (
      <section className="max-w-7xl mx-auto grid grid-cols-2 gap-2 mt-16">
      {galleryImages.map((src, index) => (
        <Card
          key={index}
          className="bg-neutral-900 border-neutral-800 overflow-hidden aspect-square"
        >
          <CardContent className="p-0">
            <img
              src={src}
              alt={`Martial art ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
