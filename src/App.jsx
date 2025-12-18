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
    /* =========================
       BASIC SEO
    ========================= */
    document.title =
      'Avito-аккаунт под ключ — системные заявки и рост продаж';

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMeta(
      'description',
      'Профессиональное ведение Avito-аккаунтов под ключ. Контролируем стоимость и качество заявок, выстраиваем системный поток обращений и увеличиваем продажи. Реальные кейсы, прозрачная аналитика.'
    );

    setMeta(
      'keywords',
      'avito под ключ, ведение avito аккаунта, продвижение на avito, заявки с avito, avito для бизнеса, агентство avito, оптимизация объявлений avito, рост продаж avito'
    );

    /* =========================
       CANONICAL
    ========================= */
    const canonicalUrl = window.location.origin + window.location.pathname;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    /* =========================
       OPEN GRAPH
    ========================= */
    const ogTags = [
      {
        property: 'og:title',
        content: 'Avito-аккаунт под ключ — заявки и продажи',
      },
      {
        property: 'og:description',
        content:
          'Системное ведение Avito-аккаунтов. Контроль экономики заявок, рост обращений и продаж. Работаем под нишу и регион.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'ru_RU' },
      { property: 'og:site_name', content: 'Avito Pro Agency' },
      {
        property: 'og:image',
        content:
          'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f8ad3ae0892ebd356be91/e0e288cd3_image.png',
      },
    ];

    ogTags.forEach(({ property, content }) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    });

    /* =========================
       TWITTER
    ========================= */
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Avito-аккаунт под ключ — системные заявки',
      },
      {
        name: 'twitter:description',
        content:
          'Профессиональное сопровождение Avito-аккаунтов. Работаем на результат, а не на обещания.',
      },
      {
        name: 'twitter:image',
        content:
          'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f8ad3ae0892ebd356be91/e0e288cd3_image.png',
      },
    ];

    twitterTags.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    });

    /* =========================
       STRUCTURED DATA
    ========================= */
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Avito Pro Agency',
      description:
        'Ведение Avito-аккаунтов под ключ. Контроль качества заявок, оптимизация объявлений и рост продаж.',
      url: canonicalUrl,
      image:
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693f8ad3ae0892ebd356be91/e0e288cd3_image.png',
      areaServed: {
        '@type': 'Country',
        name: 'Россия',
      },
      offers: {
        '@type': 'Offer',
        name: 'Ведение Avito-аккаунта под ключ',
        description:
          'Стоимость рассчитывается индивидуально и зависит от ниши, региона и задач бизнеса.',
      },
      sameAs: ['https://t.me/Sumaaar', 'https://t.me/otzivi_a2'],
    };

    let ldScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (ldScript) ldScript.remove();

    ldScript = document.createElement('script');
    ldScript.type = 'application/ld+json';
    ldScript.text = JSON.stringify(structuredData);
    document.head.appendChild(ldScript);

    /* =========================
       OTHER
    ========================= */
    setMeta(
      'robots',
      'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );

    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1';
      document.head.appendChild(viewport);
    }

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
        {/*       <ContactForm />*/}
     {/* <CTASection variant="final" /> */}
      <Footer />
    </div>
  );
}
