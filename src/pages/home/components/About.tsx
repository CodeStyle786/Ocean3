
export default function About() {
  return (
    <section id="about-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">About Ocean3 Marine</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Ocean3 Marine Pte Ltd is a leading marine company specialising in Chartering, Oil Trading, 
              Bunkering, and Shipping Equipment Logistics. With years of experience in the maritime industry, 
              we provide tailored solutions to meet the needs of our clients.
            </p>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Our commitment to safety, efficiency, and reliability ensures that we deliver high-quality 
              services in every aspect of marine operations. Whether you're looking for reliable chartering 
              services, fuel supply, or shipping logistics, Ocean3 Marine is your trusted partner in 
              navigating the complexities of the sea.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600 font-semibold">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">39+</div>
                <div className="text-gray-600 font-semibold">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
                <div className="text-gray-600 font-semibold">Global Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600 font-semibold">Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20maritime%20company%20office%20scene%20with%20modern%20business%20environment%2C%20marine%20industry%20professionals%20working%20with%20shipping%20documents%20and%20charts%2C%20clean%20corporate%20setting%20with%20ocean%20view%20through%20windows%2C%20professional%20photography%20with%20excellent%20lighting%20and%20composition%2C%20simple%20background%20highlighting%20the%20business%20atmosphere&width=600&height=500&seq=about-ocean3&orientation=portrait"
              alt="About Ocean3 Marine"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover object-top"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <i className="ri-award-line text-3xl"></i>
                <div>
                  <div className="font-bold text-lg">Industry Leader</div>
                  <div className="text-blue-200">Maritime Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-shield-check-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Safety First</h3>
            <p className="text-gray-600 leading-relaxed">
              Uncompromising commitment to safety standards and regulatory compliance 
              in all maritime operations.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-speed-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Efficiency</h3>
            <p className="text-gray-600 leading-relaxed">
              Streamlined processes and cutting-edge technology to deliver 
              optimal results in minimal time.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-heart-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Reliability</h3>
            <p className="text-gray-600 leading-relaxed">
              Dependable service delivery with consistent quality and 
              transparent communication throughout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
