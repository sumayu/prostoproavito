import React, { useEffect } from 'react';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import WhyUsSection from '@/components/landing/WhyUsSection';
import HowWeWorkSection from '@/components/landing/HowWeWorkSection';
import CasesSection from '@/components/landing/CasesSection';
import WildberriesRedirect from '@/components/landing/WildberriesRedirect';
import NichesSection from '@/components/landing/NichesSection';
import ContactForm from '@/components/landing/ContactForm';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  useEffect(() => {
    // Favicon
    const setFavicon = () => {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:rgb(249,115,22);stop-opacity:1" /><stop offset="100%" style="stop-color:rgb(239,68,68);stop-opacity:1" /></linearGradient></defs><rect width="100" height="100" rx="20" fill="url(%23grad)"/><text x="50" y="70" font-size="60" font-weight="bold" text-anchor="middle" fill="white">A</text></svg>';
    };
    setFavicon();

    // Enhanced SEO meta tags
    document.title = 'Продвижение Avito под ключ — лиды и рост продаж | ProstoProAvito';
    
    // Meta description - более детализированный
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionContent = 'Ведём Avito-аккаунт под ключ: создание объявлений, оптимизация, реклама и сбор лидов. Системный подход, реальные результаты. Первая консультация бесплатно.';
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descriptionContent;
      document.head.appendChild(meta);
    }

    // Keywords - расширенный список
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const keywords = document.createElement('meta');
      keywords.name = 'keywords';
      keywords.content = 'avito лиды, avito под ключ, ведение авито аккаунта, продвижение на авито, настройка авито магазина, реклама на авито, авито объявления, снижение цены лида, целевые заявки авито, avito pro, маркетинг авито, оптимизация авито, авито для бизнеса, сопровождение авито, агентство авито, авито эксперты, увеличение продаж авито, авито кейсы';
      document.head.appendChild(keywords);
    }

    // Canonical URL - без параметров для избежания дублей
    const canonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = 'https://prostoproavito.ru/';
    if (!canonical) {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    } else {
      canonical.href = canonicalUrl;
    }

    // Preconnect для внешних ресурсов
    const preconnectUrls = ['https://t.me', 'https://telegram.org'];
    preconnectUrls.forEach(url => {
      if (!document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        document.head.appendChild(link);
      }
    });

    // Open Graph - расширенные теги
    const ogTags = [
      { property: 'og:title', content: 'Продвижение Avito под ключ — лиды и рост продаж | ProstoProAvito' },
      { property: 'og:description', content: 'Ведём Avito-аккаунт под ключ: создание объявлений, оптимизация, реклама и сбор лидов. Первая консультация бесплатно.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'ru_RU' },
      { property: 'og:site_name', content: 'Avito Pro Agency' },
      { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f8ad3ae0892ebd356be91/e0e288cd3_image.png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Результаты работы Avito Pro Agency - снижение цены лида' },
    ];

    ogTags.forEach(tag => {
      const existing = document.querySelector(`meta[property="${tag.property}"]`);
      if (!existing) {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Twitter Card
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Продвижение Avito под ключ — лиды и рост продаж' },
      { name: 'twitter:description', content: 'Ведём Avito-аккаунт под ключ. Первая консультация бесплатно.' },
      { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f8ad3ae0892ebd356be91/e0e288cd3_image.png' },
      { name: 'twitter:image:alt', content: 'Результаты работы Avito Pro Agency' },
    ];

    twitterTags.forEach(tag => {
      const existing = document.querySelector(`meta[name="${tag.name}"]`);
      if (!existing) {
        const meta = document.createElement('meta');
        meta.name = tag.name;
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Structured Data (JSON-LD) для улучшенного SEO
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "ProstoProAvito - Avito Pro Agency",
        "description": "Профессиональное ведение Avito-аккаунтов под ключ. Снижаем цену лида, увеличиваем заявки.",
        "url": canonicalUrl,
        "telephone": "@Sumaaar",
        "priceRange": "$$",
        "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f8ad3ae0892ebd356be91/e0e288cd3_image.png",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "50",
          "bestRating": "5",
          "worstRating": "1"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Россия"
        },
        "sameAs": [
          "https://t.me/Sumaaar",
          "https://t.me/otzivi_a2"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Сколько стоит ведение аккаунта на Avito?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Цены зависят от ниши и объема работ. Оставьте заявку через форму или напишите в Telegram @Sumaaar, и мы рассчитаем персональное предложение с учётом ваших задач."
            }
          },
          {
            "@type": "Question",
            "name": "Как быстро можно получить первые лиды?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Обычно первые результаты видны в течение 3–7 дней после запуска оптимизации и рекламной кампании на Avito."
            }
          },
          {
            "@type": "Question",
            "name": "Какие гарантии результата?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Мы работаем по системному подходу с еженедельными отчётами. В среднем наши клиенты получают рост заявок на 140% и снижение цены лида в 5-6 раз."
            }
          },
          {
            "@type": "Question",
            "name": "В каких нишах вы работаете?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Работаем в более чем 20 нишах: от строительства и недвижимости до услуг, оборудования, автотехники и производства. Есть успешный опыт и кейсы в большинстве популярных направлений на Avito."
            }
          }
        ]
      }
    ];

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    document.head.appendChild(script);

    // Robots meta
    const robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(meta);
    }

    // Viewport для мобильных
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1, maximum-scale=5';
      document.head.appendChild(meta);
    }

    // Language
    document.documentElement.lang = 'ru';
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      <Header />
      <HeroSection />
      <WhyUsSection />
      <CTASection />
      <HowWeWorkSection />
      <CasesSection />
      <WildberriesRedirect />
      <NichesSection />
      <ContactForm />
      <CTASection variant="final" />
      <Footer />
    </div>
  );
}