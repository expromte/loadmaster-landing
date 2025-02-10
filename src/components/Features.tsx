
import { Truck, User, Clock, MapPin } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Надёжная техника",
    description: "Goodsense FD70G-XC3, проверенный временем",
  },
  {
    icon: User,
    title: "Профессиональный оператор",
    description: "Опытные водители",
  },
  {
    icon: Clock,
    title: "Гибкие условия аренды",
    description: "От почасовой до долгосрочной аренды",
  },
  {
    icon: MapPin,
    title: "Доставка по Удмуртии и ПФО",
    description: "Быстрая доставка за счёт заказчика",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
