import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Rose E-commerce',
    description: 'Full-featured e-commerce website with SSR and authentication.',
    tech: ['Next.js', 'SSR', 'Authentication', 'API Integration'],
    liveUrl: 'https://rose-ecommerce-public.vercel.app/',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop',
  },
    {
    title: 'Super Fitness',
    description: 'Fitness platform with server actions and API integration.',
    tech: ['Next.js', 'Server Actions', 'Authentication', 'API'],
    liveUrl: 'https://super-fitness-public.vercel.app/',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
  },
  {
    title: 'Online Exam Platform',
    description: 'A comprehensive exam platform with authentication and SSR capabilities.',
    tech: ['Next.js', 'TypeScript', 'NextAuth', 'SSR'],
    liveUrl: 'https://online-exam-g2h1.vercel.app/',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
  },
  {
    title: 'Fresh Cart',
    description: 'E-commerce website with comprehensive shopping features.',
    tech: ['React', 'Tailwind', 'Formik', 'React Query'],
    liveUrl: 'https://omarbassuony.github.io/FreshCart/',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
  },
  {
    title: 'OB Media',
    description: 'Media platform built with modern React ecosystem.',
    tech: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit'],
    liveUrl: 'https://ob-media.vercel.app/',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop',
  },
];

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-heading">{t('projects.heading')}</span>
          <h2 className="section-title">{t('projects.title')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-card rounded-2xl overflow-hidden card-hover border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/80">
                  <Button
                    size="sm"
                    className="rounded-full gap-2"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      {t('projects.viewLive')}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
