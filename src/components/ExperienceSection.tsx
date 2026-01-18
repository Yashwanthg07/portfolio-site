import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Engineering Intern',
    company: 'M2P Fintech',
    location: 'Chennai, India',
    period: 'Nov 2024 – Aug 2025',
    description: [
      'Developed and maintained core security features within the Access Control Server (ACS) for high-traffic fintech platforms.',
      'Engineered backend services using Java and SQL, ensuring data integrity and high-performance transaction processing.',
      'Implemented proactive monitoring systems using Grafana to track critical metrics, improving system uptime visibility.',
      'Conducted comprehensive API testing using Postman to resolve application bugs and improve system stability.',
      'Collaborated in an Agile environment to deliver production-ready feature enhancements across cross-functional teams.',
    ],
    tags: ['Java', 'SQL', 'Grafana', 'Postman', 'Agile'],
  },
  {
    title: 'Student Intern',
    company: 'VLOG Innovation Limited',
    location: 'Chennai, India',
    period: 'Aug 2022',
    description: [
      'Designed and coded an IoT prototype using Embedded-C and Arduino IDE for real-time sensor data acquisition.',
      'Demonstrated skills in low-level programming and system integration for real-time data transmission protocols.',
    ],
    tags: ['Embedded-C', 'Arduino', 'IoT'],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">&lt;experience&gt;</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {/* Experience cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 animate-pulse-glow" />

                  {/* Content */}
                  <div className="md:w-1/2 pl-8 md:pl-0">
                    <div
                      className={`card-gradient p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 ${
                        index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                      }`}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                          <div className="flex items-center gap-2 mt-1 text-primary">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex gap-2">
                            <span className="text-primary mt-1">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing tag */}
          <div className="text-center mt-16">
            <span className="font-mono text-primary text-sm">&lt;/experience&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
