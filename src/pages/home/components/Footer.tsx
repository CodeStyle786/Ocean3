
export default function Footer() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 font-sans">
              Ocean3 Marine Pte Ltd
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Your trusted partner in maritime excellence, delivering comprehensive solutions 
              across chartering, oil trading, bunkering, and shipping equipment logistics.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><button onClick={scrollToServices} className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-left">Chartering</button></li>
              <li><button onClick={scrollToServices} className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-left">Oil Trading</button></li>
              <li><button onClick={scrollToServices} className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-left">Bunkering</button></li>
              <li><button onClick={scrollToServices} className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-left">Equipment Logistics</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-blue-400 text-xl mt-1"></i>
                <div>
                  <p className="text-gray-300">196 Pandan Loop Pantech Hub #02-02</p>
                  <p className="text-gray-300">Singapore 128384</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-phone-line text-blue-400 text-xl"></i>
                <p className="text-gray-300">(65) 6816 3161</p>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-mail-line text-blue-400 text-xl"></i>
                <p className="text-gray-300">enquiries@ocean3marinesg.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 Ocean3 Marine Pte Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
