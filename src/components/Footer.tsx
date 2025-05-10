
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-gradient">VideoAI</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Transform your video editing workflow with the power of AI. 
              Save time, enhance quality, and create stunning videos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-editor-purple transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743A11.65 11.65 0 013.392 4.74a4.107 4.107 0 001.27 5.477A4.073 4.073 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.093 4.093 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.615 11.615 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-editor-purple transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-editor-purple transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.234.585 1.8 1.15.566.566.901 1.132 1.15 1.8.247.636.416 1.363.465 2.427.048 1.024.06 1.379.06 3.808 0 2.43-.013 2.784-.06 3.808-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.15 1.8c-.566.566-1.132.901-1.8 1.15-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-3.808.06-2.43 0-2.784-.013-3.808-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.8-1.15 4.902 4.902 0 01-1.15-1.8c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808 0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.15-1.8c.566-.566 1.132-.901 1.8-1.15.636-.247 1.363-.416 2.427-.465 1.024-.048 1.379-.06 3.808-.06zm0 1.802c-2.387 0-2.72.01-3.695.057-.893.04-1.379.19-1.702.315-.437.168-.721.37-.994.644-.275.275-.477.559-.647.995-.124.323-.274.809-.315 1.702-.047.975-.057 1.308-.057 3.695 0 2.387.01 2.72.057 3.695.04.893.19 1.379.315 1.702.17.437.372.721.644.994.275.275.559.477.995.647.323.124.809.274 1.702.315.975.047 1.308.057 3.695.057 2.387 0 2.72-.01 3.695-.057.893-.04 1.379-.19 1.702-.315.437-.17.72-.371.994-.644.275-.275.477-.559.647-.995.124-.323.274-.809.315-1.702.047-.975.057-1.308.057-3.695 0-2.387-.01-2.72-.057-3.695-.04-.893-.19-1.379-.315-1.702a2.89 2.89 0 00-.644-.994 2.89 2.89 0 00-.994-.647c-.323-.124-.809-.274-1.702-.315-.975-.047-1.308-.057-3.695-.057z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.315 7.67a4.32 4.32 0 000 8.639 4.32 4.32 0 000-8.639zm0 7.12a2.8 2.8 0 110-5.6 2.8 2.8 0 010 5.6z" />
                  <circle cx="16.806" cy="7.209" r="1.01" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-editor-purple">Features</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-editor-purple">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-editor-purple">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-editor-purple">Release Notes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-editor-purple">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-editor-purple">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-editor-purple">Blog</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-editor-purple">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 VideoAI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-editor-purple text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-editor-purple text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-editor-purple text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
