import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Clock, ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  embedUrl?: string;
  status: 'available' | 'coming-soon';
  technologies: string[];
  category: string;
}

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 'agric-pro',
      title: 'Agricultural Data Dashboard',
      description: 'Used Power BI to analyze crop yield data across soil types and regions, creating interactive dashboards to support agricultural planning and policy decisions.',
      longDescription: 'Leveraged Power BI, SQL, and Python (Pandas, NumPy) to analyze agricultural datasets with 1 million records, exploring crop yield trends across regions, soil types, and environmental factors. Created interactive dashboards to support agricultural planning and policy decisions.',
      embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYzdmMjJmOWMtZmIwZS00MjM3LTgyMDktYjVhZjZkMjE5OTQwIiwidCI6ImE1NDI4OGRhLTk4MzUtNGNkOS04OGQwLWQzMjExOGFjOWMxZSJ9',
      status: 'available',
      technologies: ['Power BI', 'SQL', 'Python', 'Pandas', 'NumPy'],
      category: 'Data Analysis'
    },
    {
      id: 'rainfall-insights',
      title: 'Rainfall Data Visualization',
      description: 'Cleaned and visualized seasonal rainfall data using Python and Excel, delivering actionable insights for climate response and planning.',
      longDescription: 'Leveraged Excel, SQL, and Python (Pandas, Matplotlib) to analyze meteorological datasets, identifying seasonal patterns, regional variations, and long-term trends in rainfall data. Delivered actionable insights for climate response and planning.',
      embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNzlkYzg4MDUtN2RkNC00MmFjLThiYTItOTAxNmJmNTc1NDYzIiwidCI6ImE1NDI4OGRhLTk4MzUtNGNkOS04OGQwLWQzMjExOGFjOWMxZSJ9',
      status: 'available',
      technologies: ['Excel', 'SQL', 'Python', 'Pandas', 'Matplotlib'],
      category: 'Data Analysis'
},
    {
      id: 'streamflix',
      title: 'StreamFlix Analytics',
      description: 'Analyzed user demographics, subscriptions, and device usage using SQL and Power BI. Built dashboards to inform content strategy and market segmentation.',
      longDescription: 'Comprehensive analysis of streaming platform data focusing on user behavior, content preferences, and subscription patterns. Built dashboards to inform content strategy and market segmentation.',
      status: 'coming-soon',
      technologies: ['SQL', 'Power BI', 'Python', 'Pandas'],
      category: 'Business Intelligence'
    },
    {
      id: 'travel-optimization',
      title: 'Travel Optimization Dashboard',
      description: 'Built dashboards in Power BI to analyze tour performance and seasonal booking patterns. Recommended pricing and bundling strategies projected to increase off-peak revenue by 30%.',
      longDescription: 'Analysis of travel industry data to optimize booking processes, improve customer retention, and enhance tour performance. Built dashboards in Power BI to analyze tour performance and seasonal booking patterns with recommended pricing strategies.',
      status: 'coming-soon',
      technologies: ['Power BI', 'Excel', 'Python', 'SQL'],
      category: 'Business Intelligence'
    },
    {
      id: 'diabetic-retinopathy',
      title: 'Survival Analysis (Academic Capstone)',
      description: 'Conducted survival analysis of diabetic retinopathy patients using R. Identified key risk factors and visualized survival functions for research and presentation.',
      longDescription: 'Advanced survival analysis using R to identify key risk factors and predict outcomes for diabetic retinopathy patients. Identified key risk factors and visualized survival functions for research and presentation.',
      status: 'coming-soon',
      technologies: ['R', 'Survival Analysis', 'Statistical Modeling'],
      category: 'Healthcare Analytics'
    }
  ];

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="bg-gradient-secondary bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of data analysis projects showcasing real-world applications 
              and business impact across various industries.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border"
                onClick={() => openProject(project)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge 
                      variant={project.status === 'available' ? 'default' : 'secondary'}
                      className="mb-2"
                    >
                      {project.category}
                    </Badge>
                    {project.status === 'coming-soon' && (
                      <Clock className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    variant={project.status === 'available' ? 'default' : 'secondary'} 
                    className="w-full group-hover:shadow-glow transition-all duration-300"
                    disabled={project.status === 'coming-soon'}
                  >
                    {project.status === 'available' ? (
                      <>
                        <Eye className="mr-2 h-4 w-4" />
                        View Project
                      </>
                    ) : (
                      <>
                        <Clock className="mr-2 h-4 w-4" />
                        Coming Soon
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://github.com/Enoch-Mawukle" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProject}
      />
    </section>
  );
};

export default ProjectsSection;