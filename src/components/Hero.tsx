
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10" />
        <img
          src="https://taned.ru/wp-content/uploads/2014/04/forklift-130t.jpg"
          alt="Вилочный погрузчик Goodsense"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container relative z-20 mx-auto px-4 py-32 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
          Goodsense FD70G-XC3
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-up">
          Аренда вилочного погрузчика 7 тонн в Ижевске и Удмуртии
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto animate-fade-up">
          Мощный Goodsense FD70G-XC3 с опытным водителем для любых погрузочно-разгрузочных работ
        </p>
        
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-black font-semibold text-lg transition-all hover:bg-primary/90 hover:scale-105 animate-fade-up"
        >
          Заказать аренду
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
