import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Send,
  CheckCircle
} from 'lucide-react';
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

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    const missing = requiredFields.filter(f => !formData[f]);
    if (missing.length) {
      toast.error("Пожалуйста, заполните все обязательные поля");
      return;
    }

    try {
      const form = e.target;
      const data = new FormData(form);

      await fetch("/", {
        method: "POST",
        body: data
      });

      setIsSubmitted(true);
      toast.success("Заявка отправлена! Менеджер свяжется с вами");

      // аналитика (если подключишь)
      if (window.gtag) {
        window.gtag("event", "lead_submit");
      }

    } catch {
      toast.error("Ошибка отправки. Попробуйте позже");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

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
                  Заявка сразу сохраняется в системе
                </p>
              </div>

              <form
                name="lead"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Обязательные скрытые поля для Netlify */}
                <input type="hidden" name="form-name" value="lead" />
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="__function" value="lead" />

                <Input
                  name="partnerContact"
                  placeholder="Контакт партнера *"
                  value={formData.partnerContact}
                  onChange={handleChange}
                />

                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    name="clientName"
                    placeholder="Имя клиента *"
                    value={formData.clientName}
                    onChange={handleChange}
                  />
                  <Input
                    name="clientPhone"
                    placeholder="Телефон клиента *"
                    value={formData.clientPhone}
                    onChange={handleChange}
                  />
                </div>

                <Input
                  name="clientTelegram"
                  placeholder="Telegram клиента"
                  value={formData.clientTelegram}
                  onChange={handleChange}
                />

                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    name="productOnAvito"
                    placeholder="Что продаёт на Авито? *"
                    value={formData.productOnAvito}
                    onChange={handleChange}
                  />
                  <Input
                    name="averageCheck"
                    placeholder="Средний чек *"
                    value={formData.averageCheck}
                    onChange={handleChange}
                  />
                </div>

                <Textarea
                  name="avitoExperience"
                  placeholder="Опыт работы с Авито *"
                  value={formData.avitoExperience}
                  onChange={handleChange}
                />

                <Textarea
                  name="currentDifficulty"
                  placeholder="Текущая проблема / запрос *"
                  value={formData.currentDifficulty}
                  onChange={handleChange}
                />

                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    name="leadsPerMonth"
                    placeholder="Сколько заявок нужно в месяц? *"
                    value={formData.leadsPerMonth}
                    onChange={handleChange}
                  />
                  <Input
                    type="date"
                    name="meetingDate"
                    value={formData.meetingDate}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 w-5 h-5" />
                  Отправить заявку
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="w-12 h-12 mx-auto text-green-400 mb-4" />
              <h3 className="text-2xl font-bold text-white">Заявка принята!</h3>
              <a
                href="https://t.me/Sumaaar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-6">
                  Написать в Telegram
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
