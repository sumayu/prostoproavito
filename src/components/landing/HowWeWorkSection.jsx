import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, Store, FileText, TrendingUp, BarChart3 } from 'lucide-react';

export default function HowWeWorkSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Анализ аккаунта и ниши",
      description: "Изучаем конкурентов, спрос, вашу текущую ситуацию и потенциал роста"
    },
    {
      number: "02",
      icon: Target,
      title: "Стратегия и экономика",
      description: "Разрабатываем стратегию, считаем юнит-экономику, прогнозируем результаты"
    },
    {
      number: "03",
      icon: Store,
      title: "Оформление Avito-магазина",
      description: "Настраиваем магазин, создаём привлекательные баннеры, поднимаем уровень сервиса"
    },
    {
      number: "04",
      icon: FileText,
      title: "Продающие объявления",
      description: "Пишем конверсионные тексты, подбираем фото, настраиваем SEO"
    },
    {
      number: "05",
      icon: TrendingUp,
      title: "Оптимизация и масштабирование",
      description: "Постоянно тестируем, оптимизируем и масштабируем работающие связки"
    },
    {
      number: "06",
      icon: BarChart3,
      title: "Отчёты и контроль",
      description: "Еженедельные отчёты с цифрами, аналитика и рекомендации по улучшению"
    },
  ];

  return (
    <section id="how" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Процесс работы
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Как мы{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              работаем
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Пошаговый процесс выстраивания системного потока заявок для вашего бизнеса
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/50 via-red-500/30 to-transparent" />
          
          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-colors duration-300">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/10 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>

                {/* Number circle */}
                <div className="relative flex-shrink-0 order-first lg:order-none">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                </div>

                {/* Empty space for layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}