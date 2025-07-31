import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Enoch Adinortey Apafloe</h3>
            <p className="text-background/80 mb-6">
              Data Analyst | Transforming Data into Insights
            </p>
            <p className="text-sm text-background/60 max-w-2xl mx-auto leading-relaxed">
              Passionate about uncovering meaningful patterns in data and translating complex 
              datasets into actionable business intelligence that drives informed decision-making.
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-6">
            <p className="text-background/60 text-sm">
              &copy; {new Date().getFullYear()} Enoch Adinortey Apafloe. All rights reserved.
            </p>
            <p className="text-background/40 text-xs mt-2">
              Mawukle
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        variant="secondary"
        size="icon"
        className="fixed bottom-8 right-8 shadow-strong hover:shadow-glow transition-all duration-300 z-40"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
};

export default Footer;