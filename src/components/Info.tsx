import { Clock, MapPin, Phone, Calendar } from "lucide-react";
import { Card } from "./ui/card";

export function Info() {
  return (
    <section id="info" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-16 text-amber-900">店舗情報</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-amber-800 mt-1 shrink-0" />
                <div>
                  <h3 className="mb-3 text-amber-900">営業時間</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>平日：8:00 - 18:00</p>
                    <p>土日祝：9:00 - 19:00</p>
                    <p className="text-sm text-gray-500 mt-3">
                      ラストオーダーは閉店30分前
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-amber-800 mt-1 shrink-0" />
                <div>
                  <h3 className="mb-3 text-amber-900">定休日</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>毎週水曜日</p>
                    <p className="text-sm text-gray-500 mt-3">
                      ※祝日の場合は営業いたします
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-800 mt-1 shrink-0" />
                <div>
                  <h3 className="mb-3 text-amber-900">アクセス</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>〒123-4567</p>
                    <p>東京都○○区△△町1-2-3</p>
                    <p className="text-sm text-gray-500 mt-3">
                      ○○駅より徒歩5分
                      <br />
                      駐車場：2台分あり
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-amber-800 mt-1 shrink-0" />
                <div>
                  <h3 className="mb-3 text-amber-900">お問い合わせ</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>TEL: 03-1234-5678</p>
                    <p className="text-sm text-gray-500 mt-3">
                      営業時間内にお電話ください
                      <br />
                      ご予約は承っておりません
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-center text-amber-900">地図</h3>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">
                ※実際の地図を埋め込む場合は、Google Maps等をご利用ください
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
