
const steps = [
  {
    number: "01",
    title: "Заявка",
    description: "Вы оставляете заявку на сайте",
  },
  {
    number: "02",
    title: "Консультация",
    description: "Мы уточняем детали и подбираем оптимальное решение",
  },
  {
    number: "03",
    title: "Доставка",
    description: "Привозим погрузчик на объект в оговорённые сроки",
  },
  {
    number: "04",
    title: "Работа",
    description: "Опытный оператор выполняет все необходимые задачи",
  },
  {
    number: "05",
    title: "Завершение",
    description: "Вы оплачиваете услуги после выполнения работ",
  },
];

export const Process = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Как мы работаем
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="absolute -top-6 left-6 text-6xl font-bold text-primary/20">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mb-2 mt-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
