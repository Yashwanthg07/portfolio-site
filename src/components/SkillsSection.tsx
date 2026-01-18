import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const skills = {
  'Programming Languages': [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Embedded-C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'MATLAB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
  ],
  'Tools & Platforms': [
    { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
    { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
  ],
  'Core Concepts': [
    { name: 'OOP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Databases', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Agile/Scrum', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
    { name: 'REST APIs', icon: 'https://www.vectorlogo.zone/logos/json/json-icon.svg' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  ],
};

const techLogos = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
];

const SkillCard = ({ name, icon }: { name: string; icon: string }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.05 }}
    className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
  >
    <div className="w-12 h-12 flex items-center justify-center">
      <img
        src={icon}
        alt={name}
        className="w-10 h-10 object-contain filter group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))] transition-all duration-300"
      />
    </div>
    <span className="text-foreground font-medium text-sm text-center group-hover:text-primary transition-colors">
      {name}
    </span>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="font-mono text-primary text-sm">&lt;skills&gt;</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
                Technical <span className="text-gradient">Skills</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
                A comprehensive set of technical skills developed through professional experience
                and continuous learning.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <AnimatedSection key={category} delay={categoryIndex * 0.1}>
                <div className="card-gradient p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-foreground mb-6 pb-4 border-b border-border">
                    {category}
                  </h3>
                  <StaggerContainer className="grid grid-cols-2 gap-4">
                    {skillList.map((skill) => (
                      <StaggerItem key={skill.name}>
                        <SkillCard name={skill.name} icon={skill.icon} />
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-8">Technologies I work with</p>
              <div className="flex flex-wrap justify-center gap-6">
                {techLogos.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20, rotate: -10 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -10,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                  >
                    <motion.img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-12 h-12 object-contain"
                      animate={{ 
                        filter: ["drop-shadow(0 0 0px transparent)", "drop-shadow(0 0 8px hsl(var(--primary)))", "drop-shadow(0 0 0px transparent)"]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                    <span className="text-muted-foreground text-xs font-mono group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="text-center mt-16">
              <span className="font-mono text-primary text-sm">&lt;/skills&gt;</span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;