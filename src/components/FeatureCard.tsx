
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  reversed?: boolean;
}

const FeatureCard = ({ title, description, icon: Icon, image, reversed = false }: FeatureCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
      <div className={cn(
        "order-2", 
        reversed ? "md:order-2" : "md:order-1"
      )}>
        <div className="inline-block p-3 bg-feature-gradient rounded-2xl mb-6">
          <Icon className="h-7 w-7 text-editor-purple" />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-gray-300 text-lg mb-6">{description}</p>
        <a 
          href="#" 
          className="text-editor-light-purple font-medium hover:underline inline-flex items-center"
        >
          Learn more
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="ml-2"
          >
            <path 
              d="M6 12L10 8L6 4" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      
      <div className={cn(
        "order-1 glass-effect p-4 shadow-lg", 
        reversed ? "md:order-1" : "md:order-2"
      )}>
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
