
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-hero-pattern z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2940')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Edit Videos with <span className="text-gradient">AI Magic</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Transform your raw footage into professional videos in minutes, not hours. Let our AI do the heavy lifting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-button-gradient hover:opacity-90 transition-opacity">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-16 w-16 text-editor-purple opacity-80" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2940" 
                  alt="Video Editor Interface" 
                  className="object-cover w-full h-full opacity-90"
                />
              </div>
              <div className="p-4 bg-gradient-to-r from-editor-purple/10 to-editor-blue/10">
                <div className="h-4 bg-gray-200 rounded-full w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-5 -right-5 bg-white p-3 rounded-lg shadow-lg animate-pulse-slow">
              <div className="h-8 w-8 rounded-full bg-editor-light-purple"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-2 rounded-lg shadow-lg animate-pulse-slow">
              <div className="h-6 w-20 rounded-full bg-editor-blue/40"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
