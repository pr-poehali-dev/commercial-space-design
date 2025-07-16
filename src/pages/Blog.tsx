import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Современные тенденции в архитектуре торговых центров",
      excerpt: "Рассматриваем ключевые направления развития архитектуры торговых комплексов в 2024 году: от устойчивого дизайна до интеграции цифровых технологий.",
      content: "Торговые центры претерпевают кардинальные изменения. Современные покупатели ожидают не просто места для покупок, а полноценного пространства для отдыха и развлечений...",
      author: "Анна Архитектова",
      date: "15 января 2024",
      readTime: "5 мин",
      category: "Торговые комплексы",
      image: "/img/d160710a-5d9e-4629-a03d-8f74fc7e573f.jpg",
      tags: ["Торговля", "Дизайн", "Тенденции"]
    },
    {
      id: 2,
      title: "Офисы будущего: как изменится рабочее пространство",
      excerpt: "Гибридная работа меняет подход к проектированию офисных зданий. Изучаем новые концепции и решения для современных бизнес-центров.",
      content: "Пандемия кардинально изменила представления о рабочем пространстве. Гибридный формат работы стал новой нормой, что требует переосмысления архитектуры офисных зданий...",
      author: "Михаил Проектов",
      date: "22 января 2024",
      readTime: "7 мин",
      category: "Офисные здания",
      image: "/img/f6f149e6-98f6-4865-af2f-2e54b79397df.jpg",
      tags: ["Офисы", "Будущее", "Технологии"]
    },
    {
      id: 3,
      title: "Экологичность в современном строительстве",
      excerpt: "Принципы зеленого строительства становятся стандартом. Рассказываем о материалах, технологиях и подходах для создания экологичных зданий.",
      content: "Экологическая ответственность стала одним из главных трендов в архитектуре. Зеленые здания не только снижают воздействие на окружающую среду, но и создают более комфортные условия для людей...",
      author: "Елена Эколог",
      date: "28 января 2024",
      readTime: "6 мин",
      category: "Экология",
      image: "/img/84719b68-f4bb-4635-8f29-adcf0eff7d37.jpg",
      tags: ["Экология", "Строительство", "Устойчивость"]
    },
    {
      id: 4,
      title: "Интеграция умных технологий в архитектуру",
      excerpt: "Умные здания становятся реальностью. Изучаем, как IoT, ИИ и автоматизация меняют подход к проектированию современных объектов.",
      content: "Интернет вещей и искусственный интеллект открывают новые возможности для создания умных зданий. Автоматизация систем освещения, климат-контроля и безопасности...",
      author: "Дмитрий Технолог",
      date: "5 февраля 2024",
      readTime: "8 мин",
      category: "Технологии",
      image: "/img/38a72501-b019-4701-9325-f203c97e05e9.jpg",
      tags: ["Умные здания", "IoT", "Автоматизация"]
    },
    {
      id: 5,
      title: "Адаптивная архитектура для людей с ограниченными возможностями",
      excerpt: "Инклюзивный дизайн не роскошь, а необходимость. Рассматриваем принципы создания доступной архитектурной среды для всех.",
      content: "Универсальный дизайн должен быть основой любого архитектурного проекта. Создание доступной среды для людей с различными потребностями...",
      author: "Ольга Инклюзив",
      date: "12 февраля 2024",
      readTime: "4 мин",
      category: "Социальная архитектура",
      image: "/img/aa7219c5-2b28-4829-bf4a-c579ce88c294.jpg",
      tags: ["Инклюзивность", "Доступность", "Дизайн"]
    },
    {
      id: 6,
      title: "Материалы будущего в современной архитектуре",
      excerpt: "Инновационные материалы открывают новые возможности для архитекторов. От самоочищающихся поверхностей до биоматериалов.",
      content: "Развитие материаловедения революционизирует архитектуру. Новые композиты, наноматериалы и биотехнологии позволяют создавать здания с уникальными свойствами...",
      author: "Андрей Материалов",
      date: "19 февраля 2024",
      readTime: "6 мин",
      category: "Материалы",
      image: "/img/f6f149e6-98f6-4865-af2f-2e54b79397df.jpg",
      tags: ["Материалы", "Инновации", "Будущее"]
    }
  ];

  const categories = ["Все", "Торговые комплексы", "Офисные здания", "Экология", "Технологии", "Социальная архитектура", "Материалы"];

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
              <Link to="/blog" className="text-premium-dark font-medium">
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
            Блог об архитектуре
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Экспертные статьи о современных тенденциях в архитектуре и строительстве
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Поиск по блогу</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input placeholder="Найти статью..." className="flex-1" />
                  <Button size="sm" className="bg-premium-dark hover:bg-premium-dark/90">
                    <Icon name="Search" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Категории</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={category === "Все" ? "default" : "ghost"}
                      className={`w-full justify-start ${category === "Все" ? "bg-premium-dark hover:bg-premium-dark/90" : ""}`}
                      size="sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Популярные теги</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Дизайн", "Технологии", "Экология", "Будущее", "Материалы", "Инновации"].map((tag) => (
                    <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-premium-dark/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-premium-dark hover:bg-premium-dark/90">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <div className="flex items-center space-x-2">
                        <Icon name="User" size={14} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg text-premium-dark hover:text-premium-dark/80 cursor-pointer">
                      {article.title}
                    </CardTitle>
                    <CardDescription>
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Icon name="Calendar" size={14} />
                        <span>{article.date}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-premium-dark hover:text-premium-dark/80">
                        Читать далее
                        <Icon name="ArrowRight" size={16} className="ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-premium-dark hover:bg-premium-dark/90">
                Загрузить больше статей
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-premium-dark to-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Хотите быть в курсе новостей?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Подпишитесь на нашу рассылку и получайте новые статьи первыми
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Введите ваш email" 
                className="text-gray-900 bg-white"
              />
              <Button size="lg" className="bg-white text-premium-dark hover:bg-gray-100">
                Подписаться
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

export default Blog;