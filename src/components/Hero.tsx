import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/omar-profile.jpeg';

const Hero = () => {
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Omar_Bassouny_Frontend_Engineer.pdf';
    link.download = 'Omar_Bassouny_Frontend_Engineer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Omarbassuony', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/omarbassuony/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:omarbassuonyy@gmail.com', label: 'Email' },
  ];

  const floatingIcons = [
    { icon: '⚛️', delay: 0, position: 'top-20 right-[15%]' },
    { icon: '💻', delay: 0.6, position: 'top-32 left-[10%]' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Decorative blobs */}
      <div className="blob top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      <div className="blob bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />

      {/* Floating icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`floating-icon ${item.position} hidden lg:flex text-3xl bg-card`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + item.delay, duration: 0.5 }}
          style={{ animationDelay: `${item.delay}s` }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-start"
          >
            {/* Social Links - Vertical */}
            <div className="hidden lg:flex flex-col gap-4 fixed right-8 top-1/2 -translate-y-1/2 z-30">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12 h-12 rounded-xl
                    bg-card/70 backdrop-blur-md
                    border border-border
                    flex items-center justify-center
                    text-muted-foreground
                    shadow-lg
                    hover:bg-primary hover:border-primary hover:text-primary-foreground
                    transition-all duration-300
                  "
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            <motion.span
              className="section-heading inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('hero.welcome')}
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t('hero.hello')}{' '}
              <span className="gradient-text">{t('hero.name')}</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">
                {t('hero.role')}
                <span className="typing-cursor" />
              </span>
            </motion.h1>

            <motion.p
              className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                className="rounded-full gap-2 px-8"
                asChild
              >
                <a href="#contact">
                  {t('hero.hireMe')}
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full gap-2 px-8"
                onClick={handleDownloadCV}
              >
                <Download className="h-4 w-4" />
                {t('hero.downloadCV')}
              </Button>
            </motion.div>

            {/* Mobile Social Links */}
            <motion.div
              className="flex lg:hidden gap-4 justify-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110" />
              
              {/* Border decoration */}
              <div className="absolute -inset-4 gradient-border rounded-3xl opacity-50" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-primary/30">
                <img
                  src={profileImage}
                  alt="Omar Bassouny"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-sm">{t('nav.about')}</span>
            <ArrowDown className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
