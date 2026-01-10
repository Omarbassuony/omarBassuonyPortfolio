import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Redux Toolkit', level: 85 },
    ],
  },
  {
    name: 'Architecture',
    skills: [
      { name: 'Microfrontend', level: 80 },
      { name: 'Clean Architecture', level: 85 },
      { name: 'SOLID Principles', level: 85 },
      { name: 'CSR / SSR / PWA', level: 90 },
    ],
  },
  {
    name: 'Tools & APIs',
    skills: [
      { name: 'REST APIs', level: 95 },
      { name: 'GraphQL', level: 75 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Jira & Figma', level: 85 },
    ],
  },
];

const experiences = [
  {
    title: 'exp.4explain.title',
    company: 'exp.4explain.company',
    date: 'exp.4explain.date',
    description: 'exp.4explain.desc',
    current: true,
  },
  {
    title: 'exp.nano.title',
    company: 'exp.nano.company',
    date: 'exp.nano.date',
    description: 'exp.nano.desc',
    current: false,
  },
];

const Skills = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-heading">{t('skills.heading')}</span>
          <h2 className="section-title">{t('skills.title')}</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-card">
              <TabsTrigger 
                value="skills" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full"
              >
                {t('skills.tabs.skills')}
              </TabsTrigger>
              <TabsTrigger 
                value="experience"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full"
              >
                {t('skills.tabs.experience')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="skills">
              <div className="grid md:grid-cols-3 gap-8">
                {skillCategories.map((category, catIndex) => (
                  <motion.div
                    key={category.name}
                    className="bg-card rounded-2xl p-6 border border-border"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 }}
                  >
                    <h3 className="text-lg font-bold mb-6 text-primary">{category.name}</h3>
                    <div className="space-y-5">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                        >
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="skill-bar">
                            <motion.div
                              className="skill-bar-fill"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="experience">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2 md:-translate-x-1/2 ring-4 ring-background" />

                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-end md:pe-12' : 'md:ps-12'} ps-8 md:ps-0`}>
                      <div className="bg-card rounded-2xl p-6 border border-border card-hover">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <h3 className="text-lg font-bold">{t(exp.title)}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                              {t('exp.current')}
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium mb-1">{t(exp.company)}</p>
                        <p className="text-sm text-muted-foreground mb-4">{t(exp.date)}</p>
                        <p className="text-muted-foreground">{t(exp.description)}</p>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;
