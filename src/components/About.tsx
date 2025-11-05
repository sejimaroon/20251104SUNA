import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16 text-amber-900">店主について</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="../../img_01.jpg"
                alt="店主"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-amber-900">店主 佐藤 京子</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  1977年、この町でコーヒーの香りとともに「喫茶
                  ひととき」を開業しました。
                </p>
                <p>
                  コーヒーは単なる飲み物ではなく、人と人をつなぐもの。そんな想いで、毎朝丁寧に豆を挽き、一杯一杯心を込めて淹れています。
                </p>
                <p>
                  常連のお客様とのおしゃべりや、初めてのお客様との出会いが、この店を続ける原動力です。どうぞお気軽にお立ち寄りください。
                </p>
                <p className="italic text-amber-800">
                  「良いコーヒーは、良い時間を作る」
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
