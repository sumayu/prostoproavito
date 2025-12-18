import React from 'react';
import { motion } from 'framer-motion';
import { 
  Car, 
  Sofa, 
  Smartphone, 
  Wrench, 
  GraduationCap, 
  Building2, 
  Shirt, 
  Heart, 
  Users, 
  Package,
  Hammer,
  Store
} from 'lucide-react';

export default function NichesSection() {
  const niches = [
    { icon: Sofa, name: "Мебель" },
    { icon: Car, name: "Авто" },
    { icon: Smartphone, name: "Электроника" },
    { icon: Wrench, name: "Услуги" },
    { icon: GraduationCap, name: "Обучение" },
    { icon: Building2, name: "Недвижимость" },
    { icon: Shirt, name: "Одежда" },
    { icon: Heart, name: "Красота" },
    { icon: Users, name: "Вакансии" },
    { icon: Package, name: "Товары" },
    { icon: Hammer, name: "Ремонт" },
    { icon: Store, name: "Производство" },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Для любого бизнеса
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Работаем с любыми{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              нишами
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {niches.map((niche, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/30 hover:bg-white/10 transition-all duration-300 cursor-default"
            >
              <niche.icon className="w-5 h-5 text-orange-500" />
              <span className="text-white text-sm font-medium">{niche.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}