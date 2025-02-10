
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const FloatingButton = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    work: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setOpen(false);
    setFormData({ name: "", phone: "", work: "", address: "" });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 z-50 px-6 py-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
      >
        Заказать погрузчик
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">
              Заказать погрузчик
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Как вас зовут?
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Контактный телефон
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Какие работы требуются?
              </label>
              <textarea
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                rows={3}
                value={formData.work}
                onChange={(e) =>
                  setFormData({ ...formData, work: e.target.value })
                }
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Адрес работ
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Отправить заявку
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
