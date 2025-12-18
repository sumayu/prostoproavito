import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function CTASection({ variant = "default" }) {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10" />
      <div className="absolute inset-0 bg-[#0a0a0f]/80" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {variant === "default" ? (
            <>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Готовы увеличить поток заявок?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Напишите нам — расскажем, как можем помочь именно вашему бизнесу
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Начните получать{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  стабильные лиды
                </span>{' '}
                уже сегодня
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Единственный способ связи — Telegram. Отвечаем быстро.
              </p>
            </>
          )}
          
          <a
            href="https://t.me/Sumaaar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-orange-500/40 hover:scale-105"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Написать в Telegram — @Sumaaar
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}