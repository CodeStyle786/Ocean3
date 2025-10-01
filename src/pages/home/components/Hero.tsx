
export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(30, 58, 138, 0.6)), url('https://readdy.ai/api/search-image?query=Professional%20maritime%20shipping%20scene%20with%20large%20cargo%20vessels%20and%20container%20ships%20in%20deep%20blue%20ocean%20waters%20under%20clear%20sky%2C%20modern%20commercial%20shipping%20industry%2C%20clean%20horizon%20line%2C%20professional%20photography%20style%20with%20excellent%20lighting%20and%20composition&width=1920&height=1080&seq=hero-marine&orientation=landscape')`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 text-center text-white">
        <div className="mb-8">
          <img 
            src="https://static.readdy.ai/image/0721b9dd5b1278112b4e1369572da693/fd2be1d9c6a41b24eb7105fcc1b98e86.png" 
            alt="Ocean3 Marine Logo" 
            className="h-40 mx-auto mb-4"
          />
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Your Trusted Partner in
          <span className="block text-blue-300">Maritime Excellence</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200">
          Ocean3 Marine Pte Ltd delivering comprehensive marine solutions across chartering, oil trading, bunkering, 
          and shipping equipment logistics with unmatched expertise and reliability.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={scrollToServices}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
          >
            Explore Our Services
          </button>
          <button 
            onClick={scrollToContact}
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Contact Us Today
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-3xl"></i>
      </div>
    </section>
  );
}
