
export default function Services() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Chartering",
      description: "Comprehensive vessel chartering solutions for dry bulk, tanker, and container shipping. Our expert team ensures optimal vessel selection and competitive rates for your cargo transportation needs.",
      icon: "ri-ship-line",
      image: "https://readdy.ai/api/search-image?query=Professional%20maritime%20vessel%20chartering%20scene%20with%20large%20commercial%20cargo%20ship%20in%20deep%20blue%20ocean%2C%20modern%20shipping%20industry%2C%20clean%20professional%20photography%20with%20excellent%20composition%20and%20lighting%2C%20simple%20background%20highlighting%20the%20vessel&width=600&height=400&seq=charter-service&orientation=landscape"
    },
    {
      title: "Oil Trading",
      description: "Strategic petroleum product trading services with global market expertise. We facilitate efficient oil transactions while managing risk and ensuring compliance with international regulations.",
      icon: "ri-oil-line",
      image: "https://readdy.ai/api/search-image?query=Professional%20oil%20trading%20and%20petroleum%20industry%20scene%20with%20modern%20oil%20tanker%20vessel%20in%20calm%20blue%20waters%2C%20clean%20industrial%20maritime%20setting%2C%20professional%20photography%20with%20excellent%20lighting%20and%20composition%2C%20simple%20background&width=600&height=400&seq=oil-trading&orientation=landscape"
    },
    {
      title: "Bunkering",
      description: "Reliable marine fuel supply services at major ports worldwide. Our bunkering operations ensure quality fuel delivery with transparent pricing and efficient logistics coordination.",
      icon: "ri-gas-station-line",
      image: "https://readdy.ai/api/search-image?query=Professional%20marine%20bunkering%20operation%20with%20fuel%20supply%20vessel%20alongside%20large%20commercial%20ship%20in%20port%2C%20clean%20industrial%20maritime%20scene%2C%20professional%20photography%20with%20excellent%20lighting%20and%20composition%2C%20simple%20background&width=600&height=400&seq=bunkering-service&orientation=landscape"
    },
    {
      title: "Shipping Equipment Logistics",
      description: "End-to-end logistics solutions for maritime equipment and spare parts. From procurement to delivery, we manage your shipping equipment needs with precision and reliability.",
      icon: "ri-truck-line",
      image: "https://readdy.ai/api/search-image?query=Professional%20shipping%20equipment%20logistics%20scene%20with%20organized%20maritime%20equipment%20and%20containers%20in%20modern%20port%20facility%2C%20clean%20industrial%20setting%2C%20professional%20photography%20with%20excellent%20lighting%20and%20composition%2C%20simple%20background&width=600&height=400&seq=logistics-service&orientation=landscape"
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">Our Core Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delivering excellence across all aspects of maritime operations with decades of industry expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-6 left-6 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                <button 
                  onClick={scrollToContact}
                  className="text-blue-600 hover:text-blue-800 font-semibold text-lg flex items-center gap-2 transition-colors duration-300 cursor-pointer whitespace-nowrap"
                >
                  Learn More 
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
