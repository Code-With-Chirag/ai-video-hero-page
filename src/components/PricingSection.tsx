
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out our basic features",
    features: [
      "1080p export quality",
      "Basic AI cutting tools",
      "Up to 10 minutes of video per month",
      "Basic tech support",
    ],
    buttonText: "Start for Free"
  },
  {
    name: "Pro",
    price: "$19",
    description: "Everything you need for professional content",
    features: [
      "4K export quality",
      "Advanced AI cutting & object removal",
      "Voice enhancement & noise reduction",
      "Unlimited video processing",
      "Priority support",
    ],
    buttonText: "Start 14-Day Trial",
    popular: true
  },
  {
    name: "Business",
    price: "$49",
    description: "For teams and businesses with advanced needs",
    features: [
      "Everything in Pro",
      "Team collaboration features",
      "Custom branding",
      "API access",
      "Dedicated account manager",
      "24/7 premium support",
    ],
    buttonText: "Contact Sales"
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border ${
                plan.popular 
                  ? "border-editor-purple shadow-lg relative" 
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-button-gradient text-white text-sm font-medium py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <p className="text-xl font-medium text-gray-500">{plan.name}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "$0" && <span className="text-gray-500 ml-2">/month</span>}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-500 mb-6">{plan.description}</p>
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-button-gradient hover:opacity-90" 
                      : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
