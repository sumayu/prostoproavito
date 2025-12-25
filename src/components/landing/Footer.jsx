import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-white/5">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
              Avito под ключ
            </div>
            <p className="text-gray-500 text-sm">
              Сопровождение Avito-аккаунтов для бизнеса
            </p>
          </div>

          {/* Contact */}
          <a
            href="https://t.me/Sumaaar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors group"
          >
            <MessageCircle className="w-5 h-5 text-orange-500" />
            <span className="text-white">@Sumaaar</span>
            <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-orange-500 transition-colors" />
          </a>

          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center md:text-right">
            © {currentYear} Сервис не является официальным партнёром Авито
          </div>
        </div>
      </div>
    </footer>
  );
}