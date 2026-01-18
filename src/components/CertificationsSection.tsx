import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const certifications = [
  {
    title: 'Python Programming',
    issuer: 'Coding Ninjas',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop',
    color: 'from-yellow-500 to-green-500',
    link: 'https://certificate.codingninjas.com/view/628cc571787b4d4c',
  },
  {
    title: 'Java Programming',
    issuer: 'Coding Ninjas',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    color: 'from-orange-500 to-red-500',
    link: 'https://certificate.codingninjas.com/view/31c56f4e2859aada',
  },
  {
    title: 'Cloud Development',
    issuer: 'Google Cloud Skills Boost',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=300&fit=crop',
    color: 'from-blue-500 to-cyan-500',
    link: 'https://www.skills.google/public_profiles/0a64c1bc-2f9c-4af7-85b0-ccabecac934f',
  },
  {
    title: 'Google Cloud Essentials (GCP)',
    issuer: 'Google Cloud Skills Boost',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    color: 'from-blue-400 to-indigo-500',
    link: 'https://www.skills.google/public_profiles/0a64c1bc-2f9c-4af7-85b0-ccabecac934f/badges/1949126?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
  },
  {
    title: 'Deploy to Kubernetes in Google Cloud',
    issuer: 'Google Cloud Skills Boost',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop',
    color: 'from-indigo-500 to-purple-500',
    link: 'https://www.skills.google/public_profiles/0a64c1bc-2f9c-4af7-85b0-ccabecac934f/badges/2075192?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
  },
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud Skills Boost',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    color: 'from-purple-500 to-pink-500',
    link: 'https://www.skills.google/public_profiles/0a64c1bc-2f9c-4af7-85b0-ccabecac934f/badges/9354866?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="font-mono text-primary text-sm">&lt;certifications&gt;</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
                Professional <span className="text-gradient">Certifications</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
                Industry-recognized certifications demonstrating expertise in cloud technologies and programming.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <StaggerItem key={index}>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group card-gradient rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 block"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-60 group-hover:opacity-40 transition-opacity`} />
                    <div className="absolute top-4 left-4">
                      <Award className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-5 h-5 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-foreground font-semibold mb-1 group-hover:text-primary transition-colors text-sm">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                  </div>
                </motion.a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-16">
              <span className="font-mono text-primary text-sm">&lt;/certifications&gt;</span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;