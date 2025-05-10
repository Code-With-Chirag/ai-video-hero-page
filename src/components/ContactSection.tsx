
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-black" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Have questions or need more information? We're here to help.
          </p>
          
          <div className="inline-flex items-center justify-center p-6 glass-effect shadow-sm">
            <Mail className="h-8 w-8 text-editor-purple mr-4" />
            <a 
              href="mailto:contact@videoai.com" 
              className="text-xl md:text-2xl font-medium text-editor-light-purple hover:underline"
            >
              contact@videoai.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
