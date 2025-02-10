
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare } from "lucide-react";

export const Pricing = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Стоимость услуг</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xl">Почасовая оплата</span>
                  <span className="text-xl font-bold">10 000 ₽/час</span>
                </div>
                <div className="text-gray-500 pl-4">
                  Минимальное время заказа — 3 часа
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl">Доставка</span>
                  <span className="text-xl font-bold">20 000 ₽</span>
                </div>
                
                <div className="flex items-center justify-between border-t pt-6">
                  <span className="text-xl">Полная смена (8 часов)</span>
                  <div className="text-right">
                    <span className="text-xl line-through text-gray-400">100 000 ₽</span>
                    <div className="text-2xl font-bold text-primary">90 000 ₽</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-12 text-center space-y-8">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-6 h-6 text-primary" />
              <p className="text-xl">
                Звоните для заказа{" "}
                <a href="tel:+79127452008" className="font-bold hover:text-primary">
                  +7 (912) 745-20-08
                </a>{" "}
                <span className="text-gray-500">(с 09 до 17 ч)</span>
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-4">
              <a
                href="https://t.me/+79127452008"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Telegram</span>
              </a>
              
              <a
                href="https://wa.me/79127452008"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
