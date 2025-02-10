
import { Check, Image } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Разгрузка строительных материалов",
    image: "/project1.webp",
    description: "Выполнили разгрузку 20 фур со строительными материалами за 2 дня"
  },
  {
    title: "Складские работы",
    image: "/project2.webp",
    description: "Организовали работу склада на время ремонта штатной техники"
  },
  {
    title: "Погрузка металлопроката",
    image: "/project3.webp",
    description: "Погрузка металлических конструкций для строительства ТЦ"
  }
];

export const CompletedProjects = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Выполненные проекты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 bg-secondary">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <Image className="w-12 h-12 text-gray-400" />
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
