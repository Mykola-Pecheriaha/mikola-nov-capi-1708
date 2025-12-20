'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Підготовка до пластичної операції: основні кроки',
    excerpt: 'Дізнайтеся, як правильно підготуватися до операції та знизити можливі ризики.',
    content: `Правильна підготовка до пластичної операції є ключем до успішного результату. Необхідно проконсультуватися з лікарем, пройти обстеження та слідкувати за всіма рекомендаціями.

Передопераційний період - це критично важливий етап. Упродовж цього часу організм має бути підготований до хірургічного втручання. Лікар може призначити вітаміни, антиоксиданти та інші препарати для зміцнення організму.

Дотримання простих правил допомагає мінімізувати ризики ускладнень та отримати кращі результати операції:

1. Припиніть прийом аспірину та інших розріджувачів крові щонайменше за 2 тижні до операції
2. Утримуйтеся від паління - нікотин погіршує кровообіг та уповільнює загоєння
3. Обмежте споживання алкоголю - він може негативно вплинути на дію анестезії
4. Витримайте натще за 6-8 годин перед операцією (якщо передбачається загальна анестезія)
5. Отримайте достатньо сну і займайтеся легкими вправами для покращення кровообігу

Психологічна підготовка також дуже важлива. Тривожність перед операцією - нормальна реакція, але медитація та розслаблюючі вправи можуть допомогти.

Сім днів перед операцією:
- Уникайте важких фізичних навантажень
- Їжте здорову їжу, багату на вітаміни та білки
- Пийте достатньо води
- Проведіть заключну консультацію з лікарем

Пам'ятайте, що успіх операції залежить не лише від навичок хірурга, але й від вашої готовності та дотримання всіх рекомендацій.`,
    author: 'Др. Миколай Печеріга',
    date: '18 грудня 2025',
    category: 'Підготовка',
    image: '/images/gallery-images/gallery-images1.jpg',
    readTime: '5 хв',
  },
  {
    id: 2,
    title: 'Реабілітація після пластичної операції: етапи та рекомендації',
    excerpt: 'Детальний путівник по етапам відновлення та правилам догляду в період реабілітації.',
    content: `Період реабілітації є критично важливим для досягнення оптимальних результатів. Перший тиждень вимагає особливої обережності і дотримання всіх рекомендацій лікаря.

Перший тиждень - найкритичніший період:
- Залишайтеся дома і обмежте рухливість
- Тримайте оперовану область піднятою щоб зменшити набряк
- Беріть призначені знеболювальні препарати за графіком
- Не мийте рану - доктор покаже вам, як правильно нею опікуватися
- Прикладайте холод протягом перших 48 годин (20 хвилин, потім 20 хвилин перерви)

Тижні 2-4:
- Набряк повинен почати зменшуватися
- Можна розпочати легкі прогулянки
- Повільно повертайтеся до звичайної дієти
- Продовжуйте користуватися компресійною одежею якщо була призначена
- Відвідуйте всі контрольні огляди лікаря

Місяці 1-3:
- Більшість припухлості повинна мати місце
- Можна розпочати інтенсивніші вправи
- Рубці починають розпадатися і бліднути
- Остаточний результат буде видно через 6-12 місяців

Чого уникати під час реабілітації:
- Важких фізичних навантажень та спорту
- Залишатися на сонці (використовуйте SPF 50+ сонцезахист)
- Гарячих ванн та саун (душ можна приймати через 1-2 дні)
- Паління та алкоголю - вони уповільнюють загоєння

Дієта для кращого загоєння:
- Білки: курка, риба, яйця, бобові
- Фрукти та овочі багаті на вітамін С: апельсини, ягоди, киви
- Продукти з цинком: морепродукти, горіхи, насіння
- Добра гідратація - щонайменше 8 склянок води на день

Позначте в календарі ці важливі дати відновлення та дотримуйтеся рекомендацій лікаря для найкращих результатів.`,
    author: 'Др. Миколай Печеріга',
    date: '15 грудня 2025',
    category: 'Реабілітація',
    image: '/images/gallery-images/gallery-images10.jpg',
    readTime: '7 хв',
  },
];

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Пост не знайдено
          </h1>
          <Link href="/blog" className="text-cyan-600 hover:text-cyan-700 font-medium">
            Повернутися на блог
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium"
          >
            <ArrowLeft size={20} />
            Повернутися на блог
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 w-full overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{post.excerpt}</p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400 border-t border-b border-gray-200 dark:border-gray-700 py-4">
            <div className="flex items-center gap-2">
              <User size={20} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>{post.readTime} читання</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose dark:prose-invert max-w-none mb-12">
          {post.content.split('\n\n').map((paragraph, index) => (
            <div key={index} className="mb-6">
              {paragraph.includes('-') || paragraph.includes('1.') ? (
                <div>
                  {paragraph.split('\n').map((line, lineIndex) =>
                    line.trim().startsWith('-') || line.trim().match(/^\d+\./) ? (
                      <li
                        key={lineIndex}
                        className="ml-6 text-gray-700 dark:text-gray-300 leading-relaxed"
                      >
                        {line.replace(/^[-\d.]\s*/, '')}
                      </li>
                    ) : (
                      <p
                        key={lineIndex}
                        className="text-gray-700 dark:text-gray-300 leading-relaxed"
                      >
                        {line}
                      </p>
                    ),
                  )}
                </div>
              ) : (
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {paragraph}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Related Posts */}
        <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Пов'язані статті
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter((p) => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-cyan-600">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {relatedPost.date}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </article>
    </main>
  );
}
