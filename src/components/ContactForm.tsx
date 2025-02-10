
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Нужен надёжный погрузчик?
              </h2>
              <p className="text-xl text-gray-600">
                Оставьте заявку прямо сейчас!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-primary" />
                <a href="tel:+7xxxxxxxxxx" className="text-lg hover:text-primary">
                  +7 (XXX) XXX-XX-XX
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:info@example.com" className="text-lg hover:text-primary">
                  info@example.com
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-lg">Ижевск, ул. Примерная, 123</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Имя</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Телефон</label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Комментарий</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                rows={4}
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-lg bg-primary text-black font-semibold text-lg transition-all hover:bg-primary/90"
            >
              Получить консультацию
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
