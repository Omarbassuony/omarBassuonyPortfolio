import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.downloadCV': 'Download CV',

    // Hero
    'hero.welcome': 'Welcome To My Portfolio',
    'hero.hello': "Hello, I'm",
    'hero.name': 'Omar Bassouny',
    'hero.role': 'Frontend Engineer',
    'hero.description': 'Frontend Engineer with 2+ years of experience building scalable enterprise web applications using React, TypeScript, and Next.js. Experienced in Microfrontend architecture, state management, and performance optimization.',
    'hero.hireMe': 'Hire Me',
    'hero.downloadCV': 'Download CV',

    // About
    'about.heading': 'About Me',
    'about.title': 'Omar Bassouny',
    'about.description': 'Frontend Engineer with 2+ years of experience building scalable enterprise web applications using React, TypeScript, and Next.js. Experienced in Microfrontend architecture, state management, performance optimization, and clean architecture principles. Strong collaboration skills with cross-functional teams and hands-on experience delivering production-ready systems.',
    'about.experience': 'Experience',
    'about.yearsExp': '2+ Years',
    'about.degree': 'Education',
    'about.degreeValue': 'B.Sc Medical Informatics',
    'about.projects': 'Projects',
    'about.projectsValue': '6+ Projects',
    'about.languages': 'Languages',
    'about.languagesValue': 'Arabic, English',

    // Projects
    'projects.heading': 'My Portfolio',
    'projects.title': 'Some Of My Creative Work',
    'projects.viewLive': 'View Live',
    'projects.viewCode': 'View Code',

    // Skills
    'skills.heading': 'What I Do',
    'skills.title': 'Skills & Experience',
    'skills.tabs.skills': 'Skills',
    'skills.tabs.experience': 'Experience',

    // Experience
    'exp.current': 'Present',
    'exp.4explain.title': 'Frontend Engineer',
    'exp.4explain.company': '4Explain',
    'exp.4explain.date': 'Feb 2025 – Present',
    'exp.4explain.desc': 'Built and maintained enterprise-scale web applications using React.js and TypeScript. Implemented Microfrontend architecture to improve scalability and independent deployments.',
    'exp.nano.title': 'Frontend Engineer',
    'exp.nano.company': 'Nano Technology',
    'exp.nano.date': 'Sep 2024 – Feb 2025',
    'exp.nano.desc': 'Developed responsive web applications using React.js and Tailwind CSS. Applied best practices in component architecture and performance optimization.',

    // Contact
    'contact.heading': 'Get In Touch',
    'contact.title': 'Contact Me',
    'contact.phone': 'Phone Number',
    'contact.email': 'Email Address',
    'contact.sendMessage': 'Send Message',
    'contact.name': 'Your Name',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.submit': 'Send Message',

    // Footer
    'footer.rights': 'All Rights Reserved',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عني',
    'nav.projects': 'المشاريع',
    'nav.skills': 'المهارات',
    'nav.contact': 'تواصل',
    'nav.downloadCV': 'تحميل السيرة الذاتية',

    // Hero
    'hero.welcome': 'مرحباً بك في موقعي',
    'hero.hello': 'مرحباً، أنا',
    'hero.name': 'عمر بسيوني',
    'hero.role': 'مهندس واجهات أمامية',
    'hero.description': 'مهندس واجهات أمامية بخبرة تزيد عن سنتين في بناء تطبيقات ويب مؤسسية قابلة للتوسع باستخدام React و TypeScript و Next.js. متمرس في هندسة Microfrontend وإدارة الحالة وتحسين الأداء.',
    'hero.hireMe': 'وظفني',
    'hero.downloadCV': 'تحميل السيرة الذاتية',

    // About
    'about.heading': 'عني',
    'about.title': 'عمر بسيوني',
    'about.description': 'مهندس واجهات أمامية بخبرة تزيد عن سنتين في بناء تطبيقات ويب مؤسسية قابلة للتوسع باستخدام React و TypeScript و Next.js. متمرس في هندسة Microfrontend وإدارة الحالة وتحسين الأداء ومبادئ الهندسة النظيفة. مهارات تعاون قوية مع الفرق متعددة التخصصات وخبرة عملية في تقديم أنظمة جاهزة للإنتاج.',
    'about.experience': 'الخبرة',
    'about.yearsExp': '+2 سنة',
    'about.degree': 'التعليم',
    'about.degreeValue': 'بكالوريوس المعلوماتية الطبية',
    'about.projects': 'المشاريع',
    'about.projectsValue': '+6 مشروع',
    'about.languages': 'اللغات',
    'about.languagesValue': 'العربية، الإنجليزية',

    // Projects
    'projects.heading': 'معرض أعمالي',
    'projects.title': 'بعض من أعمالي الإبداعية',
    'projects.viewLive': 'عرض مباشر',
    'projects.viewCode': 'عرض الكود',

    // Skills
    'skills.heading': 'ماذا أفعل',
    'skills.title': 'المهارات والخبرة',
    'skills.tabs.skills': 'المهارات',
    'skills.tabs.experience': 'الخبرة',

    // Experience
    'exp.current': 'الحالي',
    'exp.4explain.title': 'مهندس واجهات أمامية',
    'exp.4explain.company': '4Explain',
    'exp.4explain.date': 'فبراير 2025 – الحالي',
    'exp.4explain.desc': 'بناء وصيانة تطبيقات ويب على مستوى المؤسسات باستخدام React.js و TypeScript. تنفيذ هندسة Microfrontend لتحسين قابلية التوسع والنشر المستقل.',
    'exp.nano.title': 'مهندس واجهات أمامية',
    'exp.nano.company': 'Nano Technology',
    'exp.nano.date': 'سبتمبر 2024 – فبراير 2025',
    'exp.nano.desc': 'تطوير تطبيقات ويب متجاوبة باستخدام React.js و Tailwind CSS. تطبيق أفضل الممارسات في هندسة المكونات وتحسين الأداء.',

    // Contact
    'contact.heading': 'تواصل معي',
    'contact.title': 'اتصل بي',
    'contact.phone': 'رقم الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.sendMessage': 'أرسل رسالة',
    'contact.name': 'اسمك',
    'contact.subject': 'الموضوع',
    'contact.message': 'رسالتك',
    'contact.submit': 'إرسال الرسالة',

    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    document.body.dir = dir;
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
