import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, FolderOpen, Languages, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/omar-profile.jpeg';

const About = () => {
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Omar_Bassouny_Frontend_Engineer.pdf';
    link.download = 'Omar_Bassouny_Frontend_Engineer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { icon: Briefcase, label: t('about.experience'), value: t('about.yearsExp') },
    { icon: GraduationCap, label: t('about.degree'), value: t('about.degreeValue') },
    { icon: FolderOpen, label: t('about.projects'), value: t('about.projectsValue') },
    { icon: Languages, label: t('about.languages'), value: t('about.languagesValue') },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              
              {/* Image */}
              <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-2xl">
                <img
                  src={profileImage}
                  alt="Omar Bassouny"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-heading">{t('about.heading')}</span>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="p-4 rounded-xl bg-card border border-border card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <stat.icon className="h-6 w-6 text-primary mb-3" />
                  <h4 className="text-sm text-muted-foreground mb-1">{stat.label}</h4>
                  <p className="font-semibold text-foreground">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            <Button onClick={handleDownloadCV} className="rounded-full gap-2 px-8">
              <Download className="h-4 w-4" />
              {t('hero.downloadCV')}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
