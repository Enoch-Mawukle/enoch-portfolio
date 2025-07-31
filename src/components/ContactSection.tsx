import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Download, ExternalLink } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Let's discuss your data analysis needs",
      action: "Send Email",
      href: "mailto:enoch.apafloe@genstudents.org",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with me professionally",
      action: "View Profile",
      href: "https://www.linkedin.com/in/apafloe-enoch/",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Explore my code repositories",
      action: "View Projects",
      href: "https://github.com/Enoch-Mawukle",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your data into actionable insights? I'm here to help you 
              make data-driven decisions that drive real business results.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${method.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300`}>
                    <method.icon className={`h-8 w-8 ${method.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{method.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group-hover:shadow-soft transition-all duration-300"
                    asChild
                  >
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {method.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Resume Section */}
          <Card className="bg-gradient-hero border-border">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Download My Resume
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get a comprehensive overview of my professional experience, technical skills, 
                and achievements in data analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" asChild>
                  <a 
                    href="https://docs.google.com/document/d/16vdydyGNBwgnq4OgW4ucFgNuqM5ENEoaMk6Ht4xh6VQ/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Full Resume
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a 
                    href="https://docs.google.com/document/d/16vdydyGNBwgnq4OgW4ucFgNuqM5ENEoaMk6Ht4xh6VQ/export?format=pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Have a data challenge that needs solving? Let's discuss how I can help.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:enoch.apafloe@genstudents.org">
                <Mail className="mr-2 h-5 w-5" />
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;