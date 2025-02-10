
import { Weight, Gauge, Ruler, Cog, ThermometerSun } from "lucide-react";

const specs = [
  {
    icon: Weight,
    title: "Грузоподъёмность",
    value: "7 тонн",
  },
  {
    icon: Gauge,
    title: "Двигатель",
    value: "Дизельный Weichai WP4.1",
  },
  {
    icon: Ruler,
    title: "Высота подъёма вил",
    value: "3000 мм",
  },
  {
    icon: Ruler,
    title: "Длина вил",
    value: "1520 мм",
  },
  {
    icon: Cog,
    title: "Трансмиссия",
    value: "АКПП (Power Shift)",
  },
  {
    icon: ThermometerSun,
    title: "Кабина",
    value: "С отопителем",
  },
];

export const Specifications = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Технические характеристики
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <spec.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">{spec.title}</h3>
              <p className="text-xl font-semibold">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
