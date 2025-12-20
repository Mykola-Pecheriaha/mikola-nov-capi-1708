'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Tag } from 'lucide-react';

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
    content:
      'Правильна підготовка до пластичної операції є ключем до успішного результату. Необхідно проконсультуватися з лікарем, пройти обстеження...',
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
    content:
      'Період реабілітації є критично важливим для досягнення оптимальних результатів. Перший тиждень вимагає особливої обережності...',
    author: 'Др. Миколай Печеріга',
    date: '15 грудня 2025',
    category: 'Реабілітація',
    image: '/images/gallery-images/gallery-images10.jpg',
    readTime: '7 хв',
  },
  {
    id: 3,
    title: 'Пластична хірургія обличчя: поточні тренди',
    excerpt: 'Найбільш популярні та ефективні методи пластичної хірургії обличчя у 2025 році.',
    content:
      'Сучасна пластична хірургія обличчя розвивається з дивовижною швидкістю. Нові технології дозволяють досягати більш натуральних результатів...',
    author: 'Др. Миколай Печеріга',
    date: '12 грудня 2025',
    category: 'Тренди',
    image: '/images/gallery-images/gallery-images12.jpg',
    readTime: '6 хв',
  },
  {
    id: 4,
    title: 'Лімфодренаж після операції: значення та методи',
    excerpt: 'Як лімфодренаж допомагає швидшому відновленню та зменшенню набряків.',
    content:
      "Лімфодренаж є невід'ємною частиною реабілітаційного процесу. Правильна техніка дозволяє значно прискорити процес загоєння...",
    author: 'Др. Миколай Печеріга',
    date: '10 грудня 2025',
    category: 'Реабілітація',
    image: '/images/gallery-images/gallery-images1.jpg',
    readTime: '4 хв',
  },
  {
    id: 5,
    title: 'Неінвазивні методи корекції: альтернативи операціям',
    excerpt: 'Сучасні неінвазивні методи як альтернатива хірургічним втручанням.',
    content:
      'Не всім пацієнтам потрібна хірургічна операція. Часто достатньо неінвазивних процедур для досягнення бажаних результатів...',
    author: 'Др. Миколай Печеріга',
    date: '8 грудня 2025',
    category: 'Методи',
    image: '/images/gallery-images/gallery-images10.jpg',
    readTime: '5 хв',
  },
  {
    id: 6,
    title: 'Психологічний аспект пластичної хірургії',
    excerpt: 'Як психологічна готовність впливає на результат операції та задоволеність пацієнта.',
    content:
      'Психологічна підготовка настільки ж важлива, як і фізична. Пацієнти, які психологічно готові до змін, часто мають більш позитивні результати...',
    author: 'Др. Миколай Печеріга',
    date: '5 грудня 2025',
    category: 'Психологія',
    image: '/images/gallery-images/gallery-images12.jpg',
    readTime: '6 хв',
  },
];

const categories = ['Всі', 'Підготовка', 'Реабілітація', 'Тренди', 'Методи', 'Психологія'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Всі');

  const filteredPosts =
    selectedCategory === 'Всі'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Блог медичної клініки</h1>
          <p className="text-lg md:text-xl text-cyan-100 max-w-2xl">
            Корисна інформація про пластичну хірургію, реабілітацію та здоров`я від наших фахівців
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Categories Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Категорії</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-cyan-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Tag size={14} />
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-grow">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="space-y-3 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="text-cyan-600 dark:text-cyan-400 font-medium">
                    {post.readTime} читання
                  </div>
                </div>

                {/* Read More Button */}
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-block bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors font-medium text-center"
                >
                  Читати далі
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* No Posts Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Дописів в цій категорії не знайдено
            </p>
          </div>
        )}

        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Підпишіться на новини
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Отримуйте рекомендації та новітню інформацію прямо в свою електронну скриньку
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Ваша електронна адреса"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
              >
                Підписатися
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
