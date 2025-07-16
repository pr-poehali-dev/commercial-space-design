import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Андрей Морозов",
      company: "ООО 'Торговый Дом'",
      position: "Генеральный директор",
      rating: 5,
      date: "Декабрь 2023",
      project: "Торговый центр 'Премиум'",
      text: "Отличная работа команды ArchDesign! Проект торгового центра был выполнен в срок и превзошел все наши ожидания. Особенно впечатлила детализация и внимание к каждому элементу интерьера.",
      avatar: "/img/avatars/andrey.jpg"
    },
    {
      id: 2,
      name: "Елена Кузнецова",
      company: "Бизнес-Групп",
      position: "Руководитель проектов",
      rating: 5,
      date: "Ноябрь 2023",
      project: "Бизнес-центр 'Кристалл'",
      text: "Профессиональный подход к проектированию офисного здания. Команда учла все наши пожелания и создала современное рабочее пространство. Сотрудники довольны новым офисом!",
      avatar: "/img/avatars/elena.jpg"
    },
    {
      id: 3,
      name: "Михаил Петров",
      company: "Hospitality Group",
      position: "Управляющий партнер",
      rating: 5,
      date: "Октябрь 2023",
      project: "Отель 'Граф'",
      text: "Невероятная работа по проектированию нашего отеля! Каждый номер продуман до мелочей, а общие зоны создают атмосферу роскоши. Гости отмечают уникальный дизайн.",
      avatar: "/img/avatars/mikhail.jpg"
    },
    {
      id: 4,
      name: "Ольга Сидорова",
      company: "Девелопмент Плюс",
      position: "Архитектор",
      rating: 5,
      date: "Сентябрь 2023",
      project: "Жилой комплекс 'Парк Авеню'",
      text: "Сотрудничество с ArchDesign стало для нас настоящим открытием. Инновационные решения в планировках квартир и продуманная инфраструктура комплекса.",
      avatar: "/img/avatars/olga.jpg"
    },
    {
      id: 5,
      name: "Дмитрий Волков",
      company: "Промышленные Решения",
      position: "Технический директор",
      rating: 4,
      date: "Август 2023",
      project: "Производственный комплекс 'Технопарк'",
      text: "Качественное проектирование производственных помещений. Все требования безопасности и эффективности были учтены. Рекомендуем для промышленных объектов.",
      avatar: "/img/avatars/dmitriy.jpg"
    },
    {
      id: 6,
      name: "Анна Иванова",
      company: "Спорт Менеджмент",
      position: "Директор по развитию",
      rating: 5,
      date: "Июль 2023",
      project: "Спортивный комплекс 'Арена'",
      text: "Команда ArchDesign создала потрясающий спортивный комплекс! Функциональность и эстетика идеально сочетаются. Посетители в восторге от новых возможностей.",
      avatar: "/img/avatars/anna.jpg"
    },
    {
      id: 7,
      name: "Сергей Козлов",
      company: "Ресторанная Группа",
      position: "Владелец",
      rating: 5,
      date: "Июнь 2023",
      project: "Ресторан 'Атмосфера'",
      text: "Неповторимый дизайн нашего ресторана привлекает гостей! Команда смогла создать уютную атмосферу, которая идеально подходит для нашей концепции.",
      avatar: "/img/avatars/sergey.jpg"
    },
    {
      id: 8,
      name: "Татьяна Белова",
      company: "Складские Технологии",
      position: "Операционный директор",
      rating: 4,
      date: "Май 2023",
      project: "Логистический центр 'Мега'",
      text: "Отличная оптимизация складских процессов! Новый центр значительно повысил нашу эффективность. Все технические решения работают безупречно.",
      avatar: "/img/avatars/tatyana.jpg"
    }
  ];

  const stats = [
    {
      icon: "Users",
      value: "200+",
      label: "Довольных клиентов"
    },
    {
      icon: "Building",
      value: "350+",
      label: "Завершенных проектов"
    },
    {
      icon: "Star",
      value: "4.9",
      label: "Средняя оценка"
    },
    {
      icon: "Award",
      value: "15+",
      label: "Наград и премий"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

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
              <Link to="/portfolio" className="text-gray-700 hover:text-premium-dark transition-colors">
                Портфолио
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-premium-dark transition-colors">
                Блог
              </Link>
              <Link to="/reviews" className="text-premium-dark font-medium">
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
            Отзывы клиентов
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мнения наших клиентов о сотрудничестве с нами - наша главная награда
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-premium-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size={32} className="text-premium-dark" />
                </div>
                <h3 className="text-3xl font-bold text-premium-dark mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback className="bg-premium-dark text-white">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-premium-dark">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.position}</p>
                    <p className="text-sm text-gray-500">{review.company}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="mb-4">
                  {review.project}
                </Badge>
                <p className="text-gray-700 leading-relaxed">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-premium-dark to-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Готовы стать нашим следующим довольным клиентом?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Присоединяйтесь к сотням компаний, которые уже доверили нам свои проекты
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-premium-dark border-white hover:bg-white/10">
                <Icon name="Phone" size={20} className="mr-2" />
                Обсудить проект
              </Button>
              <Button size="lg" className="bg-white text-premium-dark hover:bg-gray-100">
                <Icon name="FileText" size={20} className="mr-2" />
                Получить предложение
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-premium-dark mb-8">
            Хотите оставить отзыв?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Мы ценим обратную связь от наших клиентов и всегда готовы к улучшениям
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-premium-dark hover:bg-premium-dark/90">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать отзыв
            </Button>
          </Link>
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

export default Reviews;