import { GraduationCap, MapPin, Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm">&lt;about&gt;</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a <span className="text-foreground font-medium">Software Engineer</span> with
                a strong foundation in Electronics & Communication Engineering. Currently working
                at <span className="text-primary">M2P Fintech</span>, I specialize in developing
                secure and scalable backend applications.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                My expertise spans across Java, SQL, and Python, with hands-on experience in
                cloud platforms like GCP and DevOps practices. I'm passionate about building
                systems that handle high-traffic workloads while maintaining security and
                reliability.
              </p>
              
              {/* Quick info cards */}
              <div className="grid gap-4 pt-4">
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Currently at</p>
                    <p className="font-medium text-foreground">M2P Fintech, Chennai</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium text-foreground">B.E in ECE, Saveetha Engineering College</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Chennai, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats / Visual element */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="card-gradient p-6 rounded-xl border border-border text-center hover:glow-box transition-all duration-300">
                  <div className="text-4xl font-bold text-gradient mb-2">10</div>
                  <p className="text-muted-foreground text-sm">Months of Experience</p>
                </div>
                <div className="card-gradient p-6 rounded-xl border border-border text-center hover:glow-box transition-all duration-300">
                  <div className="text-4xl font-bold text-gradient mb-2">2+</div>
                  <p className="text-muted-foreground text-sm">Projects Completed</p>
                </div>
                <div className="card-gradient p-6 rounded-xl border border-border text-center hover:glow-box transition-all duration-300">
                  <div className="text-4xl font-bold text-gradient mb-2">6+</div>
                  <p className="text-muted-foreground text-sm">Certifications</p>
                </div>
                <div className="card-gradient p-6 rounded-xl border border-border text-center hover:glow-box transition-all duration-300">
                  <div className="text-4xl font-bold text-gradient mb-2">1</div>
                  <p className="text-muted-foreground text-sm">Research Paper</p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing tag */}
          <div className="text-center mt-16">
            <span className="font-mono text-primary text-sm">&lt;/about&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
