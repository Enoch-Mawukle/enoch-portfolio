import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: "Data Annotation Specialist",
      company: "AYA Data",
      location: "Remote",
      duration: "May 2025 – Present",
      description: [
        "Annotated and labeled datasets to support AI and machine learning model training.",
        "Ensured high accuracy and compliance with project-specific annotation guidelines.",
        "Collaborated with QA teams to resolve ambiguities and improve model reliability."
      ],
      technologies: ["Data Annotation", "Machine Learning", "Quality Assurance"]
    },
    {
      title: "Virtual Support",
      company: "Moonlight Fresco Ltd.",
      location: "Remote (Volunteer)",
      duration: "Jan 2025 – Present",
      description: [
        "Analyzed inventory performance using Excel and generated routine stock reports.",
        "Implemented digital record-keeping processes to support supply chain visibility.",
        "Collaborated remotely with on-site staff to ensure inventory alignment and accountability."
      ],
      technologies: ["Excel", "Digital Records", "Virtual Collaboration"]
    },
    {
      title: "Data Analyst Bootcamp Graduate",
      company: "Generation Ghana",
      location: "Accra, Ghana",
      duration: "Jan – April 2025",
      description: [
        "Gained strong proficiency in Python for data analysis, SQL for querying databases, and Excel for data manipulation, supporting efficient data exploration, cleaning, and processing across multiple projects.",
        "Designed and presented data visualizations using Power BI, enhancing data storytelling skills and enabling clear communication of complex insights to stakeholders.",
        "Demonstrated effective teamwork and problem-solving in high-pressure, multicultural group environments."
      ],
      technologies: ["Python", "SQL", "Power BI", "Excel", "Data Visualization"]
    },
    {
      title: "Stock Keeper",
      company: "Moonlight Fresco Ltd.",
      location: "Tefle, Ghana",
      duration: "Apr 2024 – Jan 2025",
      description: [
        "Managed inventory valued at over GHS 100,000; reduced discrepancies by 15%.",
        "Integrated Excel and Google Sheets to streamline inventory and procurement reporting.",
        "Coordinated with warehouse and logistics teams to maintain timely supply cycles."
      ],
      technologies: ["Excel", "Google Sheets", "Inventory Management"]
    },
    {
      title: "Medical Records Clerk",
      company: "Tema General Hospital",
      location: "Tema, Ghana",
      duration: "Sept 2020 – Sept 2021",
      description: [
        "Maintained and organized over 1,000 patient records with full confidentiality.",
        "Improved record retrieval speed by 30% through structured data cataloging.",
        "Prepared medical records in advance for clinical audits and consultations."
      ]
    },
    {
      title: "Supervisor",
      company: "Eggstra Farms Ltd.",
      location: "Hwakpo, Ghana",
      duration: "Feb 2024 – Apr 2024",
      description: [
        "Oversaw daily handling of 4,700+ eggs, ensuring quality control and record accuracy.",
        "Coordinated supply chain logistics to maintain timely deliveries.",
        "Monitored and documented inventory movement and spoilage rates."
      ]
    },
    {
      title: "Teacher (Mathematics)",
      company: "Covenant Future Leaders Int. School",
      location: "Ghana",
      duration: "Aug 2015 – Jun 2016",
      description: [
        "Taught mathematics to Grades 7–9, achieving a 100% pass rate in final exams.",
        "Improved class-wide performance by 20% through tailored lesson planning and assessments."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive journey through data analysis, operations management, 
              and continuous professional development across various industries.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-soft hidden md:block mt-6"></div>
                  
                  {/* Content Card */}
                  <Card className="md:ml-16 hover:shadow-medium transition-all duration-300 border-border">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                          <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-2 mt-2 sm:mt-0">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-3 mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary" 
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;