import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Торговый центр 'Премиум'",
      category: "Торговый комплекс",
      location: "Москва, ЦАО",
      area: "15,000 м²",
      year: "2024",
      status: "Завершен",
      description: "Современный торговый комплекс с уникальной архитектурой и инновационными решениями для создания комфортной среды для посетителей.",
      image: "/img/d160710a-5d9e-4629-a03d-8f74fc7e573f.jpg",
      features: ["Атриум высотой 25м", "350 торговых мест", "Подземный паркинг", "Развлекательная зона"],
      tags: ["Торговля", "Развлечения", "Премиум"]
    },
    {
      id: 2,
      title: "Бизнес-центр 'Кристалл'",
      category: "Офисное здание",
      location: "Москва, ЗАО",
      area: "8,500 м²",
      year: "2023",
      status: "Завершен",
      description: "Многофункциональный бизнес-центр класса A с современными офисными площадями и конференц-залами.",
      image: "/img/f6f149e6-98f6-4865-af2f-2e54b79397df.jpg",
      features: ["15 этажей", "Конференц-залы", "Фитнес-центр", "Ресторан"],
      tags: ["Офисы", "Класс A", "Многофункциональность"]
    },
    {
      id: 3,
      title: "Отель 'Граф'",
      category: "Гостиничный комплекс",
      location: "Санкт-Петербург",
      area: "12,000 м²",
      year: "2024",
      status: "Завершен",
      description: "Роскошный отель с уникальным дизайном и премиальными номерами в историческом центре города.",
      image: "/img/aa7219c5-2b28-4829-bf4a-c579ce88c294.jpg",
      features: ["120 номеров", "Спа-центр", "Ресторан", "Конференц-залы"],
      tags: ["Гостиницы", "Премиум", "Историческое место"]
    },
    {
      id: 4,
      title: "Жилой комплекс 'Парк Авеню'",
      category: "Жилой комплекс",
      location: "Москва, СВАО",
      area: "25,000 м²",
      year: "2023",
      status: "В процессе",
      description: "Современный жилой комплекс с квартирами различной планировки и развитой инфраструктурой.",
      image: "/img/84719b68-f4bb-4635-8f29-adcf0eff7d37.jpg",
      features: ["300 квартир", "Детские площадки", "Фитнес-центр", "Подземный паркинг"],
      tags: ["Жилье", "Комфорт", "Инфраструктура"]
    },
    {
      id: 5,
      title: "Производственный комплекс 'Технопарк'",
      category: "Производственное здание",
      location: "Московская область",
      area: "18,000 м²",
      year: "2022",
      status: "Завершен",
      description: "Современный производственный комплекс с офисными помещениями и складскими зонами.",
      image: "/img/38a72501-b019-4701-9325-f203c97e05e9.jpg",
      features: ["Производственные цеха", "Административный корпус", "Складские помещения", "Логистический центр"],
      tags: ["Производство", "Логистика", "Современность"]
    },
    {
      id: 6,
      title: "Спортивный комплекс 'Арена'",
      category: "Спортивное сооружение",
      location: "Казань",
      area: "10,000 м²",
      year: "2023",
      status: "В процессе",
      description: "Многофункциональный спортивный комплекс с бассейном, тренажерными залами и игровыми площадками.",
      image: "/img/f6f149e6-98f6-4865-af2f-2e54b79397df.jpg",
      features: ["Бассейн олимпийского стандарта", "Тренажерные залы", "Игровые площадки", "Спа-зона"],
      tags: ["Спорт", "Здоровье", "Многофункциональность"]
    }
  ];

  const categories = ["Все", "Торговый комплекс", "Офисное здание", "Гостиничный комплекс", "Жилой комплекс", "Производственное здание", "Спортивное сооружение"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-premium-dark">
              ArchDesign
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-premium-dark transition-colors">
                Главная
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-premium-dark transition-colors">
                Услуги
              </Link>
              <Link to="/portfolio" className="text-premium-dark font-medium">
                Портфолио
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-premium-dark transition-colors">
                Блог
              </Link>
              <Link to="/reviews" className="text-gray-700 hover:text-premium-dark transition-colors">
                Отзывы
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-premium-dark transition-colors">
                Контакты
              </Link>
            </nav>
            <Button className="bg-premium-dark hover:bg-premium-dark/90">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-premium-dark mb-6">
            Портфолио проектов
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Примеры наших лучших работ в области архитектурного проектирования
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Все" ? "default" : "outline"}
              className={category === "Все" ? "bg-premium-dark hover:bg-premium-dark/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={project.status === "Завершен" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg text-premium-dark">{project.title}</CardTitle>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <CardDescription className="text-sm text-gray-600 mb-2">
                  {project.category} • {project.location}
                </CardDescription>
                <p className="text-sm text-gray-700 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Maximize" size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">Площадь: {project.area}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">{project.location}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 text-premium-dark">Особенности:</h4>
                  <ul className="grid grid-cols-1 gap-1">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" size={14} className="text-green-500" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-premium-dark hover:bg-premium-dark/90">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-premium-dark to-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Хотите увидеть больше проектов?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Свяжитесь с нами для получения полного портфолио и обсуждения вашего проекта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-premium-dark border-white hover:bg-white/10">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать портфолио
              </Button>
              <Button size="lg" className="bg-white text-premium-dark hover:bg-gray-100">
                <Icon name="Calendar" size={20} className="mr-2" />
                Назначить встречу
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-premium-dark text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ArchDesign</h3>
              <p className="text-gray-400">
                Профессиональное проектирование коммерческих и жилых объектов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Торговые комплексы</li>
                <li>Офисные здания</li>
                <li>Жилые объекты</li>
                <li>Производственные помещения</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@archdesign.ru</li>
                <li>Москва, ул. Архитектурная, 1</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Instagram" size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Linkedin" size={24} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ArchDesign. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;