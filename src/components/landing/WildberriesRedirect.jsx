import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function WildberriesRedirect() {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-600/5 to-purple-500/10" />
      <div className="absolute inset-0 bg-[#0a0a0f]/90" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-purple-500/20 rounded-3xl p-8 md:p-12 text-center"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-6">
            <ShoppingBag className="w-8 h-8 text-purple-400" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Работаете на{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Wildberries
            </span>
            ?
          </h2>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            У нас есть отдельная команда экспертов по продвижению на маркетплейсе Wildberries.
            Те же результаты, та же системность — но для WB.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              "Рост продаж",
              "Снижение выкупа",
              "Оптимизация карточек"
            ].map((feature, index) => (
              <div
                key={index}
                className="p-3 rounded-xl bg-white/5 border border-purple-500/10"
              >
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://prostoprowb.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105"
            >
              Перейти на сайт для Wildberries
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>

          <p className="text-xs text-gray-500 mt-4">
            Отдельная экспертиза по маркетплейсам
          </p>
        </motion.div>
      </div>
    </section>
  );
}