import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Database, TrendingUp, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: BarChart3,
      title: "Data Analysis & Visualization",
      description: "Excel reporting, Power BI dashboards, and statistical analysis"
    },
    {
      icon: Database,
      title: "Programming & Development",
      description: "Python, SQL, R programming and website development"
    },
    {
      icon: TrendingUp,
      title: "Statistical Analysis",
      description: "Forecasting, survival analysis, and business intelligence"
    },
    {
      icon: Users,
      title: "Virtual Collaboration",
      description: "Remote operations, team collaboration, and administrative support"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Highly motivated and detail-oriented <strong className="text-foreground">Data Analyst</strong> with hands-on experience 
                  in analytics, data processing, and operations. Proficient in <span className="text-primary font-semibold">Python</span>, 
                  <span className="text-secondary font-semibold">SQL</span>, <span className="text-accent font-semibold">Excel</span>, 
                  and <span className="text-primary font-semibold">Power BI</span>.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Strong background in statistics, administrative support, records management, and virtual collaboration. 
                  Open to opportunities across analytics, administration, IT support, and <strong className="text-accent">website development</strong> roles.
                </p>

                <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Education & Certifications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground"><strong className="text-primary">BSc. Statistics</strong> - KNUST, 2020</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground"><strong className="text-secondary">Data Analyst Program</strong> - Generation Ghana, 2025</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground"><strong className="text-accent">Virtual Assistant Certificate</strong> - ALX Africa</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Content - Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <highlight.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;