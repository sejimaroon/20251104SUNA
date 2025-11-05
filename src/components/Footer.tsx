import { Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Coffee className="w-6 h-6" />
            <span className="tracking-wide">喫茶 ひととき</span>
          </div>
          <p className="text-amber-200 text-sm">
            昭和52年創業。心を込めた一杯のコーヒーでお待ちしております。
          </p>
          <div className="text-amber-300 text-sm mt-4">
            〒123-4567 東京都○○区△△町1-2-3 | TEL: 03-1234-5678
          </div>
          <div className="text-amber-400 text-sm mt-4">
            © 2025 喫茶 ひととき. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
