import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <img
              src="/profile.jpg"
              alt="Foto Marsha"
              className="w-48 h-48 rounded-full object-cover mx-auto"
              />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 animate-fade-in">
              Hi, I'm{' '}
              <span className="text-emerald-600">Marsha Zahrah Fatharani</span>
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-600 font-light">
              Quality Assurance & UI Designer
            </p>
            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto">
              Here, you can find several projects I have previously worked on.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="px-8 py-3 bg-emerald-600  text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#projects');
              }}
              className="px-8 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all border border-gray-200"
            >
              View Work
            </a>
          </div>

          <div className="flex justify-center space-x-6 pt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/marsha-zahrah-fatharani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:marshazahrahfatharani@gmail.com"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('#about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-emerald-600 transition-colors animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
