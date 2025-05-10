
import FeatureCard from "./FeatureCard";
import { Zap, X, Mic } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful AI <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered tools make video editing faster and more intuitive than ever before
          </p>
        </div>

        <div className="space-y-24">
          <FeatureCard
            title="AI-Powered Magic Cut"
            description="Automatically detect and remove dead space, filler words, and awkward pauses. Our AI understands context and keeps only the best parts of your footage."
            icon={Zap}
            image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2940"
          />

          <FeatureCard
            title="Smart Object Removal"
            description="Remove unwanted objects, people, or backgrounds with a single click. The AI fills in the gaps seamlessly, saving you hours of frame-by-frame editing."
            icon={X}
            image="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2940"
            reversed={true}
          />

          <FeatureCard
            title="Automated Voice Enhancement"
            description="Enhance audio quality automatically. Remove background noise, equalize volume levels, and make voices sound crisp and professional with our advanced AI audio processing."
            icon={Mic}
            image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2940"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
