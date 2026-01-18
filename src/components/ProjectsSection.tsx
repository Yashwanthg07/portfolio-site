import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const projects = [
  {
    title: 'Vehicle Number Detection & ROI Extraction',
    description:
      'Developed a robust Computer Vision system using Python to identify blurred and occluded license plates through ROI extraction and image enhancement logic.',
    tags: ['Python', 'OpenCV', 'Computer Vision', 'Image Processing'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    featured: true,
  },
  {
    title: 'IoT Gas Leakage Detector',
    description:
      'Engineered an IoT system for real-time gas leak detection using MQ-2 sensors with automated SMS alerts and cloud data logging.',
    tags: ['C++', 'Arduino', 'IoT', 'Cloud IoT'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    featured: true,
  },
  {
    title: 'Breast Cancer Detection Research',
    description:
      'Published research on breast cancer detection in mammogram images using improved threshold extraction methods in MATLAB.',
    tags: ['MATLAB', 'Image Processing', 'Machine Learning', 'Research'],
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop',
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="font-mono text-primary text-sm">&lt;projects&gt;</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
                A selection of projects showcasing my expertise in software development, IoT, and
                machine learning.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group card-gradient rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:glow-box flex flex-col h-full"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-background/80 rounded-full hover:bg-background transition-colors"
                      >
                        <Github className="w-5 h-5 text-foreground" />
                      </motion.button>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-mono rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-secondary text-muted-foreground text-xs font-mono rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-16">
              <span className="font-mono text-primary text-sm">&lt;/projects&gt;</span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;