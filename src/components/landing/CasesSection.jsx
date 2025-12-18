import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp, TrendingDown, Users, Eye, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function CasesSection() {
  const [activeCase, setActiveCase] = useState(0);
  const [showTestimonial, setShowTestimonial] = useState(false);

  const cases = [
    {
      niche: "Полусухая стяжка",
      badge: "Строительство",
      mainImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f8ad3ae0892ebd356be91/e0e288cd3_image.png",
      testimonialImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f8ad3ae0892ebd356be91/07fba0931_image.png",
      highlights: [
        { value: "18₽", label: "за лид" },
        { value: "2 недели", label: "срок" },
        { value: "5-6x", label: "снижение цены" }
      ],
      description: "За 2 недели работы в нише полусухой стяжки пола снизили цену контакта с 105₽ до 18,8₽. Конверсия выросла, стоимость упала в 5–6 раз.",
      before: "1 798 просмотров, 42 контакта, 105₽ за контакт",
      after: "1 298 просмотров, 35 контактов, 18,8₽ за контакт"
    },
    {
      niche: "Мототехника",
      badge: "Техника",
      mainImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f8ad3ae0892ebd356be91/b5aa76a4e_image.png",
      testimonialImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f8ad3ae0892ebd356be91/14f658b17_image.png",
      highlights: [
        { value: "216", label: "продаж" },
        { value: "31,4 млн ₽", label: "выручка" },
        { value: "745₽", label: "за контакт" }
      ],
      description: "216 продаж квадроциклов, багги, снегоходов и мототехники за октябрь на общую сумму 31 454 870 ₽. Стабильный поток качественных обращений.",
      before: "Редкие сделки, нестабильный трафик",
      after: "131 576 просмотров, 460 обращений, 16 продаж"
    },
    {
      niche: "Мебель для швейного производства",
      badge: "Производство",
      mainImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f8ad3ae0892ebd356be91/966997dff_image.png",
      testimonialImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f8ad3ae0892ebd356be91/a8fa1863c_image.png",
      highlights: [
        { value: "59", label: "сделок" },
        { value: "2,576 млн ₽", label: "выручка" },
        { value: "272₽", label: "за контакт" }
      ],
      description: "59 сделок за октябрь для производителя рабочей мебели: раскройные столы, козлики, стойки для швейных цехов. Стабильная система приводит клиентов каждый день.",
      before: "Нестабильный поток заявок",
      after: "15 242 просмотров, 372 контакта, 59 сделок"
    },
    {
      niche: "Коммерческая недвижимость",
      badge: "Недвижимость",
      mainImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f8ad3ae0892ebd356be91/ace6fec7b_image.png",
      testimonialImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f8ad3ae0892ebd356be91/3d88e581e_image.png",
      highlights: [
        { value: "6", label: "арендаторов" },
        { value: "1,859 млн ₽", label: "годовая прибыль" },
        { value: "985₽", label: "за лид" }
      ],
      description: "СНП Девелопмент — строительство и аренда коммерческих объектов. 6 арендаторов с суммарной арендой ≈169 000 ₽/мес, что даёт ≈1 859 000 ₽ за год.",
      before: "Низкий спрос на объекты",
      after: "4 993 просмотров, 88 обращений (~70% целевые), 6 арендаторов"
    },
  ];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const currentCase = cases[activeCase];

  return (
    <section id="cases" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f18] to-[#0a0a0f]" />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px]" />

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
            Реальные результаты
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Наши{' '}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              кейсы
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Реальные результаты наших клиентов — не обещания, а факты
          </p>
        </motion.div>

        {/* Case card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 md:p-8 pb-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                    {currentCase.badge}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {currentCase.niche}
                  </h3>
                </div>
                <div className="text-gray-500 text-sm">
                  {activeCase + 1} / {cases.length}
                </div>
              </div>

              {/* Main visual with toggle */}
              <div className="relative">
                <motion.img
                  key={showTestimonial ? 'testimonial' : 'main'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={showTestimonial ? currentCase.testimonialImage : currentCase.mainImage}
                  alt={showTestimonial ? `Отзыв клиента - ${currentCase.niche}` : `Результаты работы в нише ${currentCase.niche}`}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                
                {/* Toggle button */}
                <div className="absolute bottom-4 right-4">
                  <Button
                    onClick={() => setShowTestimonial(!showTestimonial)}
                    className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white rounded-xl"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {showTestimonial ? 'Показать результаты' : 'Отзыв клиента'}
                  </Button>
                </div>
              </div>

              {/* Highlights */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {currentCase.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
                    >
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                        {highlight.value}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{highlight.label}</div>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-center mb-4">
                  {currentCase.description}
                </p>

                {/* Before/After compact */}
                <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div>
                    <div className="text-xs text-red-400 font-semibold mb-2 uppercase tracking-wider">До</div>
                    <p className="text-sm text-gray-500">{currentCase.before}</p>
                  </div>
                  <div>
                    <div className="text-xs text-green-400 font-semibold mb-2 uppercase tracking-wider">После</div>
                    <p className="text-sm text-gray-500">{currentCase.after}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevCase}
              className="w-12 h-12 rounded-full border-white/20 text-white hover:bg-white/10 hover:border-orange-500/50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeCase
                      ? 'w-8 bg-gradient-to-r from-orange-500 to-red-500'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextCase}
              className="w-12 h-12 rounded-full border-white/20 text-white hover:bg-white/10 hover:border-orange-500/50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* CTA to Telegram channel with more cases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-col items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
              <p className="text-gray-400">
                Хотите увидеть ещё больше результатов наших клиентов?
              </p>
              <a
                href="https://t.me/otzivi_a2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-6 rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Смотреть все кейсы в Telegram
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <span className="text-xs text-gray-500">
                Telegram-канал с отзывами и результатами
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}