import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Menu() {
  const menuItems = [
    {
      category: "コーヒー",
      items: [
        { name: "ブレンドコーヒー", price: "500円", description: "当店自慢のオリジナルブレンド" },
        { name: "アメリカン", price: "500円", description: "軽やかな口当たり" },
        { name: "カフェオレ", price: "600円", description: "ミルクたっぷり" },
        { name: "アイスコーヒー", price: "550円", description: "夏季限定" },
      ],
    },
    {
      category: "紅茶・その他",
      items: [
        { name: "紅茶（ホット/アイス）", price: "500円", description: "ダージリン・アールグレイ" },
        { name: "ミルクティー", price: "550円", description: "濃厚なミルクティー" },
        { name: "ココア", price: "600円", description: "ほっとする甘さ" },
        { name: "オレンジジュース", price: "450円", description: "フレッシュ" },
      ],
    },
    {
      category: "軽食・デザート",
      items: [
        { name: "トースト", price: "350円", description: "バター・ジャム付き" },
        { name: "サンドイッチ", price: "700円", description: "たまご・ハム・野菜" },
        { name: "ナポリタン", price: "800円", description: "昔ながらの味" },
        { name: "自家製ケーキ", price: "450円", description: "日替わり" },
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-6 text-amber-900">メニュー</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            こだわりの味をお手頃な価格で。
            <br />
            昔ながらの喫茶店メニューを取り揃えております。
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="/img_01.jpg"
                alt="コーヒー"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="/img_01.jpg"
                alt="ケーキ"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            {menuItems.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="p-6 bg-amber-50/50">
                <h3 className="mb-4 pb-2 border-b border-amber-300 text-amber-900">
                  {category.category}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="text-gray-900">{item.name}</div>
                        <div className="text-gray-500 text-sm">{item.description}</div>
                      </div>
                      <div className="text-amber-800 shrink-0">{item.price}</div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
