import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Торговые комплексы",
      description: "Современные торговые площади с максимальной эффективностью",
      icon: "ShoppingBag",
      category: "Коммерция"
    },
    {
      title: "Офисные здания",
      description: "Комфортные рабочие пространства с современными технологиями",
      icon: "Building",
      category: "Офисы"
    },
    {
      title: "Производственные помещения",
      description: "Функциональные и безопасные производственные объекты",
      icon: "Factory",
      category: "Производство"
    },
    {
      title: "Гостиничные комплексы",
      description: "Отели и апартаменты высокого класса",
      icon: "Hotel",
      category: "Гостиницы"
    },
    {
      title: "Рестораны и развлечения",
      description: "Уникальные пространства для отдыха и развлечений",
      icon: "ChefHat",
      category: "Развлечения"
    },
    {
      title: "Складские помещения",
      description: "Оптимизированные складские площади для максимальной производительности",
      icon: "Warehouse",
      category: "Логистика"
    }
  ];

  const projects = [
    {
      title: "Торговый центр 'Премиум'",
      category: "Торговый комплекс",
      area: "15,000 м²",
      year: "2024",
      image: "/img/d160710a-5d9e-4629-a03d-8f74fc7e573f.jpg"
    },
    {
      title: "Бизнес-центр 'Кристалл'",
      category: "Офисное здание",
      area: "8,500 м²",
      year: "2023",
      image: "/img/f6f149e6-98f6-4865-af2f-2e54b79397df.jpg"
    },
    {
      title: "Отель 'Граф'",
      category: "Гостиничный комплекс",
      area: "12,000 м²",
      year: "2024",
      image: "/img/aa7219c5-2b28-4829-bf4a-c579ce88c294.jpg"
    }
  ];

  const reviews = [
    {
      name: "Алексей Петров",
      company: "ГК 'Развитие'",
      text: "Профессиональная команда, которая понимает потребности бизнеса. Проект выполнен в срок и с высоким качеством.",
      rating: 5
    },
    {
      name: "Мария Сидорова",
      company: "Ресторанная группа 'Вкус'",
      text: "Отличное понимание специфики ресторанного бизнеса. Пространство получилось функциональным и стильным.",
      rating: 5
    },
    {
      name: "Дмитрий Волков",
      company: "Производственная компания 'Технология'",
      text: "Грамотный подход к проектированию производственных помещений. Все требования безопасности учтены.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <Icon name="Compass" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-premium-dark">ArchSpace</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Главная</Link>
              <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">Услуги</Link>
              <Link to="/portfolio" className="text-gray-600 hover:text-primary transition-colors">Портфолио</Link>
              <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">Блог</Link>
              <Link to="/reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</Link>
              <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</Link>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-premium-silver to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-premium-dark mb-6">
              Проектирование
              <span className="text-primary block">коммерческих помещений</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Создаем функциональные и эстетически привлекательные пространства для бизнеса любого масштаба. 
              От концепции до реализации — полный цикл проектирования.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Начать проект
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Посмотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-premium-dark mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">
              Полный спектр услуг по проектированию коммерческих объектов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Icon name={service.icon} size={40} className="text-primary" />
                    <Badge variant="secondary">{service.category}</Badge>
                  </div>
                  <CardTitle className="text-premium-dark">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-premium-dark mb-4">Наше портфолио</h2>
            <p className="text-xl text-gray-600">
              Примеры успешно реализованных проектов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-premium-silver overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-premium-dark">{project.title}</CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Icon name="Maximize" size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-600">{project.area}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-600">{project.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-premium-dark mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg text-premium-dark">{review.name}</CardTitle>
                  <CardDescription className="text-primary">{review.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Готовы начать проект?</h2>
            <p className="text-xl mb-8 opacity-90">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                <Icon name="Mail" size={20} className="mr-2" />
                info@archspace.ru
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Icon name="MapPin" size={32} className="mx-auto mb-4 opacity-80" />
                <h3 className="text-lg font-semibold mb-2">Адрес</h3>
                <p className="opacity-80">г. Москва, ул. Архитекторов, 15</p>
              </div>
              <div>
                <Icon name="Clock" size={32} className="mx-auto mb-4 opacity-80" />
                <h3 className="text-lg font-semibold mb-2">Время работы</h3>
                <p className="opacity-80">Пн-Пт: 9:00 - 18:00</p>
              </div>
              <div>
                <Icon name="Users" size={32} className="mx-auto mb-4 opacity-80" />
                <h3 className="text-lg font-semibold mb-2">Команда</h3>
                <p className="opacity-80">15+ опытных архитекторов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-premium-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Compass" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">ArchSpace</h3>
              </div>
              <p className="text-gray-400">
                Профессиональное проектирование коммерческих помещений с 2015 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Торговые комплексы</li>
                <li>Офисные здания</li>
                <li>Производственные помещения</li>
                <li>Гостиничные комплексы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О компании</li>
                <li>Портфолио</li>
                <li>Блог</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@archspace.ru</p>
                <p>г. Москва, ул. Архитекторов, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ArchSpace. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;