import { Coffee } from "lucide-react";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-amber-50/95 backdrop-blur-sm z-50 border-b border-amber-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="w-8 h-8 text-amber-800" />
          <span className="tracking-wide text-amber-900">喫茶 ひととき</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-amber-900 hover:text-amber-700 transition-colors"
          >
            店主について
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="text-amber-900 hover:text-amber-700 transition-colors"
          >
            店内の様子
          </button>
          <button
            onClick={() => scrollToSection("menu")}
            className="text-amber-900 hover:text-amber-700 transition-colors"
          >
            メニュー
          </button>
          <button
            onClick={() => scrollToSection("info")}
            className="text-amber-900 hover:text-amber-700 transition-colors"
          >
            店舗情報
          </button>
        </nav>
      </div>
    </header>
  );
}
