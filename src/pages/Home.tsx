/**
 * Home page - Landing page for ItEnAi Computer Literacy Course
 * Displays course information, benefits, and registration options
 */
import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Computer, 
  BookOpen, 
  Users, 
  Star, 
  CheckCircle, 
  Clock, 
  Award,
  Code,
  Palette,
  Globe,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';

const HomePage: React.FC = () => {
  /**
   * Course modules data structure
   */
  const courseModules = [
    {
      title: "Основи комп'ютера",
      description: "Знайомство з комп'ютером, файлами, браузером",
      icon: <Computer className="w-6 h-6" />,
      lessons: 2
    },
    {
      title: "Графічний дизайн",
      description: "Paint, редагування зображень, створення проектів",
      icon: <Palette className="w-6 h-6" />,
      lessons: 1
    },
    {
      title: "Microsoft Office",
      description: "Word, Excel, PowerPoint - створення документів",
      icon: <BookOpen className="w-6 h-6" />,
      lessons: 3
    },
    {
      title: "Google Сервіси",
      description: "Gmail, Google Drive, Forms, Maps",
      icon: <Globe className="w-6 h-6" />,
      lessons: 1
    },
    {
      title: "Програмування",
      description: "Scratch - перші кроки в програмуванні",
      icon: <Code className="w-6 h-6" />,
      lessons: 1
    },
    {
      title: "Створення сайтів",
      description: "Google Sites/Wix - власне портфоліо",
      icon: <Globe className="w-6 h-6" />,
      lessons: 1
    }
  ];

  /**
   * Course benefits data
   */
  const benefits = [
    "Практичні навички роботи з комп'ютером",
    "Створення власних проектів",
    "Основи програмування для дітей",
    "Робота з популярними програмами",
    "Розвиток цифрової грамотності",
    "Сертифікат після завершення курсу"
  ];

  /**
   * Student testimonials data
   */
  const testimonials = [
    {
      name: "Олександра, 12 років",
      text: "Дуже цікавий курс! Навчилася створювати презентації та свій перший сайт!",
      rating: 5
    },
    {
      name: "Максим, 14 років", 
      text: "Тепер я вмію працювати з Excel та створювати кросворди. Рекомендую всім!",
      rating: 5
    },
    {
      name: "Софія, 10 років",
      text: "Scratch - це супер! Зробила гру з веселою собакою, як у програмі курсу.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              IT
            </div>
            <span className="text-2xl font-bold text-gray-800">ItEnAi</span>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Записатися на курс
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-lg">
            Вік: 9-18 років
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Комп'ютерна <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Грамотність
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Повний курс цифрових навичок для дітей: від основ роботи з комп'ютером 
            до створення власних проектів і сайтів
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg"
            >
              Розпочати навчання
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg border-gray-300 hover:bg-gray-50"
            >
              Дізнатися більше
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">9 Уроків</h3>
              <p className="text-gray-600">Повна програма навчання</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Малі групи</h3>
              <p className="text-gray-600">Індивідуальний підхід</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Сертифікат</h3>
              <p className="text-gray-600">Після завершення курсу</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Програма курсу</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              9 модулів для повного опанування цифровими навичками
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseModules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center text-white">
                      {module.icon}
                    </div>
                    <Badge variant="secondary">{module.lessons} урок{module.lessons > 1 ? 'и' : ''}</Badge>
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {module.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Чому обирають наш курс?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ми навчаємо не просто використовувати комп'ютер, а мислити цифрово 
                та створювати власні проекти.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://pub-cdn.sider.ai/u/U0Y3H2XG568/web-coder/6883a632f2d3a0ac8dc3983b/resource/ca8dd421-d922-44ae-add3-331f9d3a6b44.jpg"
                alt="Діти навчаються роботі з комп'ютером"
                className="object-cover rounded-2xl w-full h-96 shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                    100+
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Випускників</p>
                    <p className="text-gray-600 text-sm">За останній рік</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Відгуки учнів</h2>
            <p className="text-xl text-gray-600">Що кажуть наші випускники</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готові почати навчання?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Приєднуйтесь до нашої спільноти молодих IT-спеціалістів. 
            Перший урок - безкоштовно!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Записатися на безкоштовний урок
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
            >
              Зателефонувати нам
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Телефон</h3>
              <p className="text-gray-600">+380 XX XXX XX XX</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">info@itenai.com</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Адреса</h3>
              <p className="text-gray-600">м. Київ, вул. Технологічна, 1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
              IT
            </div>
            <span className="text-xl font-bold text-white">ItEnAi</span>
          </div>
          <p className="text-gray-400">
            © 2024 ItEnAi School. Всі права захищені. Розвиваємо майбутнє разом!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;