import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Target, Calculator, TrendingDown, Maximize2, FileCheck } from 'lucide-react';

export default function WhyUsSection() {
  const advantages = [
    {
      icon: Settings,
      title: "Система, а не хаос",
      description: "Выстроенные процессы и понятная структура работы с вашим аккаунтом"
    },
    {
      icon: Target,
      title: "Работаем на результат",
      description: "Фокус на лидах и продажах, а не на красивых отчётах"
    },
    {
      icon: Calculator,
      title: "Считаем экономику",
      description: "Юнит-экономика, ROI и прогнозирование доходности"
    },
    {
      icon: TrendingDown,
      title: "Снижаем цену лида",
      description: "Постоянная оптимизация для уменьшения стоимости заявки"
    },
    {
      icon: Maximize2,
      title: "Масштабируем успех",
      description: "Когда находим работающую связку — масштабируем её"
    },
    {
      icon: FileCheck,
      title: "Прозрачные отчёты",
      description: "Еженедельные отчёты с цифрами и рекомендациями"
    },
  ];

  return (
    <section id="why" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f18] to-[#0a0a0f]" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Почему мы
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Не обещаем —{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              делаем
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Мы — команда профессионалов с системным подходом к ведению Avito-аккаунтов
          </p>
        </motion.div>

        {/* Advantages grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/30 transition-all duration-500"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-400">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}