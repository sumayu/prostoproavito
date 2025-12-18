import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, CheckCircle, User, Phone, MessageCircle, Briefcase, DollarSign, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    partnerContact: '',
    clientName: '',
    clientPhone: '',
    clientTelegram: '',
    productOnAvito: '',
    averageCheck: '',
    avitoExperience: '',
    currentDifficulty: '',
    leadsPerMonth: '',
    meetingDate: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = [
      'partnerContact',
      'clientName', 
      'clientPhone',
      'productOnAvito',
      'averageCheck',
      'avitoExperience',
      'currentDifficulty',
      'leadsPerMonth',
      'meetingDate'
    ];

    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast.error("Пожалуйста, заполните все обязательные поля");
      return;
    }

    // Here you would normally send data to Bitrix24
    console.log('Form data:', formData);
    
    setIsSubmitted(true);
    toast.success("Заявка отправлена! Менеджер свяжется с вами в ближайшее время");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-orange-500/10 to-transparent rounded-full blur-[100px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12"
        >
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-4">
                  Партнерская лид-форма
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Заявка на{' '}
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    сопровождение
                  </span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                  Лид сразу попадает в Битрикс и берётся менеджером в работу
                </p>
              </div>

              {/* Form */}
              <form 
                name="lead" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="lead" />
                <input type="hidden" name="bot-field" />
                {/* Контакт партнера */}
                <div className="relative">
                  <label htmlFor="partnerContact" className="sr-only">Контакт партнера</label>
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  <Input
                    id="partnerContact"
                    name="partnerContact"
                    placeholder="Контакт партнера *"
                    value={formData.partnerContact}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full pl-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20"
                  />
                </div>

                {/* Имя и телефон клиента */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label htmlFor="clientName" className="sr-only">Имя клиента</label>
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" aria-hidden="true" />
                    <Input
                      id="clientName"
                      name="clientName"
                      placeholder="Имя клиента *"
                      value={formData.clientName}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full pl-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="clientPhone" className="sr-only">Телефон клиента</label>
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" aria-hidden="true" />
                    <Input
                      id="clientPhone"
                      name="clientPhone"
                      type="tel"
                      placeholder="Телефон клиента *"
                      value={formData.clientPhone}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full pl-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                {/* Телеграм клиента */}
                <div className="relative">
                  <label htmlFor="clientTelegram" className="sr-only">Телеграм клиента (необязательно)</label>
                  <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  <Input
                    id="clientTelegram"
                    name="clientTelegram"
                    placeholder="Телеграм клиента"
                    value={formData.clientTelegram}
                    onChange={handleChange}
                    className="w-full pl-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20"
                  />
                </div>

                {/* Что продает и средний чек */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      name="productOnAvito"
                      placeholder="Что продает на Авито? *"
                      value={formData.productOnAvito}
                      onChange={handleChange}
                      className="w-full pl-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20"
                    />
                  </div>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      name="averageCheck"
                      placeholder="Средний чек *"
                      value={formData.averageCheck}
                      onChange={handleChange}
                      className="w-full pl-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                {/* Опыт работы с Авито */}
                <Textarea
                  name="avitoExperience"
                  placeholder="Какой опыт работы с Авито? *"
                  value={formData.avitoExperience}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-4 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20 resize-none"
                />

                {/* Сложность/запрос */}
                <Textarea
                  name="currentDifficulty"
                  placeholder="В чем сейчас сложность с Авито / какой запрос? *"
                  value={formData.currentDifficulty}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-4 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20 resize-none"
                />

                {/* Заявки и дата встречи */}
                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    name="leadsPerMonth"
                    placeholder="Сколько заявок нужно в месяц? *"
                    value={formData.leadsPerMonth}
                    onChange={handleChange}
                    className="w-full py-6 px-4 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20"
                  />
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      name="meetingDate"
                      type="date"
                      placeholder="Удобный день для зум встречи *"
                      value={formData.meetingDate}
                      onChange={handleChange}
                      className="w-full pl-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg py-6 rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-orange-500/40"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Отправить заявку
                </Button>

                <p className="text-xs text-center text-gray-500">
                  * — обязательные поля
                </p>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Заявка принята!
              </h3>
              <p className="text-gray-400 mb-8">
                Для получения бесплатного разбора напишите нам в Telegram
              </p>
              <a
                href="https://t.me/Sumaaar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-8 py-6 rounded-xl"
                >
                  Написать в Telegram — @Sumaaar
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}