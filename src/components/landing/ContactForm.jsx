import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Send,
  CheckCircle,
  User,
  Phone,
  MessageCircle,
  Briefcase,
  DollarSign,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    partnerContact: "",
    clientName: "",
    clientPhone: "",
    clientTelegram: "",
    productOnAvito: "",
    averageCheck: "",
    avitoExperience: "",
    currentDifficulty: "",
    leadsPerMonth: "",
    meetingDate: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ⬅️ ВСЕГДА первым

    const requiredFields = [
      "partnerContact",
      "clientName",
      "clientPhone",
      "productOnAvito",
      "averageCheck",
      "avitoExperience",
      "currentDifficulty",
      "leadsPerMonth",
      "meetingDate",
    ];

    const missing = requiredFields.filter((f) => !formData[f]);
    if (missing.length) {
      toast.error("Пожалуйста, заполните все обязательные поля");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/.netlify/functions/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setIsSubmitted(true);
      toast.success("Заявка отправлена!");

      if (window.gtag) {
        window.gtag("event", "lead_submit", {
          event_category: "form",
          event_label: "avito_lead",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Ошибка отправки. Попробуйте позже");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4">
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
                <h2 className="text-3xl font-bold text-white">
                  Заявка на сопровождение
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <Input name="partnerContact" placeholder="Контакт партнёра *" value={formData.partnerContact} onChange={handleChange} />
                <Input name="clientName" placeholder="Имя клиента *" value={formData.clientName} onChange={handleChange} />
                <Input name="clientPhone" placeholder="Телефон клиента *" value={formData.clientPhone} onChange={handleChange} />
                <Input name="clientTelegram" placeholder="Telegram клиента" value={formData.clientTelegram} onChange={handleChange} />
                <Input name="productOnAvito" placeholder="Что продаёт на Авито? *" value={formData.productOnAvito} onChange={handleChange} />
                <Input name="averageCheck" placeholder="Средний чек *" value={formData.averageCheck} onChange={handleChange} />
                <Textarea name="avitoExperience" placeholder="Опыт работы с Авито *" value={formData.avitoExperience} onChange={handleChange} />
                <Textarea name="currentDifficulty" placeholder="Текущая проблема *" value={formData.currentDifficulty} onChange={handleChange} />
                <Input name="leadsPerMonth" placeholder="Сколько лидов в месяц? *" value={formData.leadsPerMonth} onChange={handleChange} />
                <Input type="date" name="meetingDate" value={formData.meetingDate} onChange={handleChange} />

                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  <Send className="mr-2 w-5 h-5" />
                  {loading ? "Отправка..." : "Отправить заявку"}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="w-12 h-12 mx-auto text-green-400 mb-4" />
              <h3 className="text-2xl font-bold text-white">Заявка принята!</h3>
              <a href="https://t.me/Sumaaar" target="_blank" rel="noreferrer">
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
