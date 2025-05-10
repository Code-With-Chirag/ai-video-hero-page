
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  platform: string;
  platformIcon: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "This AI editor saved me hours of work! I finished a project that would have taken me all day in just 45 minutes.",
    author: "Sarah Johnson",
    role: "Content Creator",
    platform: "Twitter",
    platformIcon: "🐦"
  },
  {
    content: "The voice enhancement feature is incredible. My podcast sounds like it was recorded in a professional studio now.",
    author: "Mark Williams",
    role: "Podcast Host",
    platform: "Instagram",
    platformIcon: "📸"
  },
  {
    content: "As someone with no video editing experience, this tool made it possible for me to create professional videos for my small business.",
    author: "Lisa Chen",
    role: "Small Business Owner",
    platform: "LinkedIn",
    platformIcon: "🔗"
  },
  {
    content: "Magic Cut feature is a game-changer. It's like having a professional editor working alongside you.",
    author: "David Thompson",
    role: "YouTube Creator",
    platform: "YouTube",
    platformIcon: "▶️"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of content creators who've revolutionized their workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-end mb-4">
                  <div className="text-2xl">{testimonial.platformIcon}</div>
                </div>
                <blockquote className="text-gray-700 mb-6">"{testimonial.content}"</blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-editor-purple to-editor-blue flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
