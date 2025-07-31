import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, BarChart3, Wrench } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "R", level: 75 },
        { name: "HTML/CSS", level: 80 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      icon: Database,
      title: "Libraries & Tools",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "Seaborn", level: 80 },
        { name: "Matplotlib", level: 85 },
        { name: "React", level: 75 }
      ]
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        { name: "Power BI", level: 95 },
        { name: "Advanced Excel", level: 90 },
        { name: "Dashboard Design", level: 88 },
        { name: "Reporting", level: 85 }
      ]
    },
    {
      icon: Wrench,
      title: "Specialized Skills",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      skills: [
        { name: "Statistical Analysis", level: 85 },
        { name: "Data Wrangling", level: 90 },
        { name: "Forecasting", level: 80 },
        { name: "Website Development", level: 75 }
      ]
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 85) return "bg-primary";
    if (level >= 75) return "bg-secondary";
    return "bg-accent";
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Skills & <span className="bg-gradient-secondary bg-clip-text text-transparent">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technical skills and methodologies developed through 
              hands-on experience and continuous learning in data analysis.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 border-border">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressColor(skill.level)}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Summary */}
          <div className="mt-16">
            <Card className="bg-gradient-hero border-border">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Additional Competencies
                </h3>
                <div className="grid md:grid-cols-4 gap-6 mt-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Records Management</h4>
                    <p className="text-muted-foreground text-sm">Administrative support and documentation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Virtual Operations</h4>
                    <p className="text-muted-foreground text-sm">Remote collaboration and virtual assistance</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Team Collaboration</h4>
                    <p className="text-muted-foreground text-sm">Cross-functional communication and teamwork</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Website Development</h4>
                    <p className="text-muted-foreground text-sm">Modern web applications and user interfaces</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;