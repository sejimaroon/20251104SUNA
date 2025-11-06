import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const images = [
    {
      src: "/img_01.jpg",
      alt: "店内の様子1",
    },
    {
      src: "/img_01.jpg",
      alt: "店内の様子2",
    },
    {
      src: "/img_01.jpg",
      alt: "自慢のコーヒー",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-6 text-amber-900">店内の様子</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            懐かしさと温かさに包まれた空間。
            <br />
            木のぬくもりを感じる店内で、ゆったりとした時間をお過ごしください。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow hover-masked"
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
