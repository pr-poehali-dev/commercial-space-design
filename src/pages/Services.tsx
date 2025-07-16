import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Торговые комплексы и магазины",
      description: "Проектирование современных торговых площадей с учетом максимальной эффективности и удобства для посетителей",
      icon: "ShoppingCart",
      features: ["Оптимизация покупательских потоков", "Современные системы освещения", "Гибкие планировки"]
    },
    {
      title: "Офисные здания и бизнес-центры",
      description: "Создание комфортных рабочих пространств с учетом последних тенденций в дизайне и технологиях",
      icon: "Building",
      features: ["Open-space решения", "Переговорные комнаты", "Зоны отдыха"]
    },
    {
      title: "Производственные помещения",
      description: "Разработка функциональных и безопасных производственных объектов",
      icon: "Factory",
      features: ["Оптимизация производственных процессов", "Системы безопасности", "Логистические решения"]
    },
    {
      title: "Гостиничные комплексы",
      description: "Проектирование отелей и апартаментов высокого класса",
      icon: "Hotel",
      features: ["Премиальные номера", "Спа-зоны", "Конференц-залы"]
    },
    {
      title: "Рестораны и развлекательные центры",
      description: "Создание уникальных пространств для отдыха и развлечений",
      icon: "UtensilsCrossed",
      features: ["Атмосферный дизайн", "Акустические решения", "Тематические зоны"]
    },
    {
      title: "Складские помещения",
      description: "Оптимизация складских площадей для максимальной производительности",
      icon: "Warehouse",
      features: ["Автоматизированные системы", "Логистическая оптимизация", "Климат-контроль"]
    },
    {
      title: "Спортивные объекты",
      description: "Проектирование современных спортивных комплексов и фитнес-центров",
      icon: "Dumbbell",
      features: ["Многофункциональные залы", "Раздевалки премиум-класса", "Медицинские кабинеты"]
    },
    {
      title: "Дома и коттеджи",
      description: "Индивидуальное проектирование жилых объектов премиум-класса",
      icon: "Home",
      features: ["Индивидуальные решения", "Ландшафтный дизайн", "Умный дом"]
    },
    {
      title: "Квартиры",
      description: "Разработка эксклюзивных планировок для элитных жилых комплексов",
      icon: "KeyRound",
      features: ["Панорамные окна", "Гардеробные системы", "Премиальная отделка"]
    }
  ];

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
              <Link to="/services" className="text-premium-dark font-medium">
                Услуги
              </Link>
              <Link to="/portfolio" className="text-gray-700 hover:text-premium-dark transition-colors">
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-premium-dark mb-6">
            Наши услуги
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр услуг по проектированию коммерческих и жилых объектов любой сложности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-premium-dark/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-premium-dark/20 transition-colors">
                  <Icon name={service.icon} size={32} className="text-premium-dark" />
                </div>
                <CardTitle className="text-xl text-premium-dark">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-premium-dark hover:bg-premium-dark/90">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-premium-dark to-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Готовы начать проект?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Свяжитесь с нами для консультации и получения индивидуального предложения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-premium-dark border-white hover:bg-white/10">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
              <Button size="lg" className="bg-white text-premium-dark hover:bg-gray-100">
                <Icon name="Mail" size={20} className="mr-2" />
                Написать письмо
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

export default Services;