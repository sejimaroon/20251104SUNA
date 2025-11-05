import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="../../img_01.jpg"
          alt="喫茶店の雰囲気"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="mb-6 text-white">喫茶 ひととき</h1>
        <p className="max-w-2xl mx-auto mb-8 text-amber-100">
          昭和52年創業。
          <br />
          時が止まったような空間で、
          <br />
          心を込めた一杯のコーヒーをお楽しみください。
        </p>
        <button
          onClick={() => {
            const element = document.getElementById("info");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-amber-800 hover:bg-amber-700 text-white px-8 py-3 rounded-full transition-colors"
        >
          店舗情報を見る
        </button>
      </div>
    </section>
  );
}
