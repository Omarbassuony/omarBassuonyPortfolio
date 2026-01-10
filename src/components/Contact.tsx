import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Github, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+201554833393',
      href: 'tel:+201554833393',
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'omarbassuonyy@gmail.com',
      href: 'mailto:omarbassuonyy@gmail.com',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/omarbassuony/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Omarbassuony', label: 'GitHub' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-heading">{t('contact.heading')}</span>
          <h2 className="section-title">{t('contact.title')}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <info.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              // Open mail client with form data
              const formData = new FormData(e.target as HTMLFormElement);
              const name = formData.get('name');
              const subject = formData.get('subject');
              const message = formData.get('message');
              window.location.href = `mailto:omarbassuonyy@gmail.com?subject=${encodeURIComponent(
                `${subject} - From ${name}`
              )}&body=${encodeURIComponent(message as string)}`;
            }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Input
                  name="name"
                  placeholder={t('contact.name')}
                  className="bg-card border-border focus:border-primary h-12 rounded-xl"
                  required
                />
              </div>
              <div>
                <Input
                  name="subject"
                  placeholder={t('contact.subject')}
                  className="bg-card border-border focus:border-primary h-12 rounded-xl"
                  required
                />
              </div>
            </div>
            <div>
              <Textarea
                name="message"
                placeholder={t('contact.message')}
                className="bg-card border-border focus:border-primary min-h-[150px] rounded-xl resize-none"
                required
              />
            </div>
            <Button type="submit" size="lg" className="rounded-full gap-2 w-full sm:w-auto">
              <Send className="h-4 w-4" />
              {t('contact.submit')}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
