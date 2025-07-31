import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  embedUrl?: string;
  status: 'available' | 'coming-soon';
  technologies: string[];
  category?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-7xl 
                   h-[90vh] p-0 overflow-hidden flex flex-col"
      >
        {/* Header Section */}
        <DialogHeader className="p-6 pb-4 border-b border-border">
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-foreground">
                {project.title}
              </DialogTitle>
              {project.category && (
                <p className="text-sm text-muted-foreground mt-1">{project.category}</p>
              )}
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="shrink-0">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <p className="text-muted-foreground mt-3">{project.description}</p>

          {/* Technologies Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </DialogHeader>

        {/* Content Body (Iframe or Fallback) */}
        <div className="flex-1 p-6 overflow-hidden">
          {project.status === 'available' && project.embedUrl ? (
            <div className="h-full bg-muted rounded-lg overflow-hidden shadow-inner">
              <iframe
                src={project.embedUrl}
                title={project.title}
                className="w-full h-full border-0"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="h-full flex items-center justify-center bg-muted rounded-lg text-center">
              <div>
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.status === 'coming-soon' ? 'Coming Soon' : 'Content Unavailable'}
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  {project.status === 'coming-soon'
                    ? 'This project is currently in development and will be available soon.'
                    : 'The project preview is not available at this time.'}
                </p>
                {project.embedUrl && !project.embedUrl.includes('powerbi') && (
                  <Button variant="outline" className="mt-4" asChild>
                    <a href={project.embedUrl} target="_blank" rel="noopener noreferrer">
                      Open External Link
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;