import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Mail, Github, Linkedin } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpeg';
import heroAvatar from '@/assets/profile.png'; // Your image

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/70" />
      </div>

      {/* Avatar - Positioned in Top-Left Corner */}
      <div className="absolute top-8 left-8 lg:top-12 lg:left-12 z-20">
        <div className="relative">
          <img
            src={heroAvatar}
            alt="Enoch Apafloe - Data Analyst"
            className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border-4 border-white/30 shadow-xl"
          />
          <div className="absolute inset-0 rounded-full ring-2 ring-primary/50 ring-offset-2 ring-offset-background pointer-events-none"></div>
        </div>
      </div>

      {/* Main Content - Centered with Natural Flow */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-8 text-center">

          {/* Main Heading & Subtitle */}
          <div className="bg-background/10 backdrop-blur-sm rounded-xl px-8 py-6 border border-white/20 shadow-sm inline-block mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Data-Driven
              </span>
              <br />
              Insights & Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mt-4 leading-relaxed">
              Transforming complex datasets into actionable business intelligence through{' '}
              <span className="text-primary font-semibold">Python</span>,{' '}
              <span className="text-secondary font-semibold">SQL</span>, and{' '}
              <span className="text-accent font-semibold">Power BI</span>
            </p>
          </div>

          {/* Professional Summary */}
          <div className="bg-card/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-card/30 max-w-2xl mx-auto text-left">
            <p className="text-card-foreground text-lg leading-relaxed">
              <strong>2+ years</strong> of hands-on experience delivering customized data solutions
              that drive informed decision-making across diverse industries. Specialized in
              transforming raw data into compelling visualizations and strategic insights.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="mailto:enoch.apafloe@genstudents.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/apafloe-enoch/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/Enoch-Mawukle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-12">
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-white/80 hover:text-primary transition-colors"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;