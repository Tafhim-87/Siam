import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#110D20] w-full">
      {/* Main footer content */}
      <div className="max-w-[1480px] mx-auto px-6 lg:px-8 py-[112px] pb-12">
        {/* Top section with columns */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-[148px] mb-12">
          {/* Left column - Bio & Social */}
          <div className="flex flex-col gap-12 max-w-[583px] w-full">
            <h2 className="text-white text-[32px] sm:text-4xl lg:text-5xl font-semibold leading-tight lg:leading-[54px] tracking-[-0.02em]">
              I help startups and businesses design and build impactful digital products.
            </h2>
            
            {/* Social icons */}
            <div className="flex flex-row items-center gap-1 p-1.5 bg-white/5 rounded-full w-fit">
              {/* Facebook */}
              <div className="w-10 h-10 bg-[#141414] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Dribbble */}
              <div className="w-10 h-10 bg-[#141414] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.12 8.12 0 011.93 5.19c-.876-.224-2.24-.414-3.995-.476-.12-.796-.32-1.563-.61-2.302 1.073-.447 2.106-.887 2.675-1.412zM12 4.04c1.23 0 2.36.292 3.38.81-.562.476-1.53.88-2.547 1.27-.793-1.06-1.627-1.91-2.358-2.44.46-.1.956-.16 1.525-.16zm-3.23.76c.695.53 1.512 1.368 2.294 2.395-1.806.56-3.37 1.296-4.53 2.106-.87-1.173-1.393-2.33-1.5-2.94 1.143-.782 2.514-1.25 3.736-1.56zM4.04 12c0-.466.046-.92.126-1.36.23.82.776 1.985 1.83 3.16-1.14.555-2.14.874-2.89.98A7.976 7.976 0 014.04 12zm2.54 5.28c-.72-.78-1.305-1.61-1.725-2.45.69-.107 1.63-.396 2.69-.915.377 1.035.886 2.005 1.51 2.85-.74.275-1.48.43-2.175.515zM12 19.96c-1.1 0-2.13-.226-3.09-.63.83-.14 1.74-.406 2.7-.8.717.834 1.54 1.416 2.39 1.76-.67.3-1.38.47-2.12.47zm2.63-1.03c-.75-.31-1.51-.84-2.19-1.61.853-.326 1.71-.498 2.55-.498.74 0 1.43.105 2.08.295-.37.98-.92 1.79-1.59 2.37zm3.59-1.49c-.55-.44-1.23-.81-2.04-1.09.39-.355.74-.73 1.05-1.12.94-.33 1.92-.49 2.86-.49.26 0 .52.015.78.04-.28 1.04-.86 1.93-1.65 2.66z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* LinkedIn */}
              <div className="w-10 h-10 bg-[#7556FD] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              
              {/* Instagram */}
              <div className="w-10 h-10 bg-[#141414] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Twitter/X */}
              <div className="w-10 h-10 bg-[#141414] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Right columns - Quick Links, Services, Contact */}
          <div className="flex flex-wrap gap-8 md:gap-12 w-full lg:w-auto">
            {/* Quick Links */}
            <div className="flex flex-col gap-4 min-w-[108px]">
              <h3 className="text-white text-xl font-semibold tracking-[-0.01em]">Quick Links</h3>
              <ul className="flex flex-col gap-1.5">
                <li><a href="#" className="text-[#B1B1B1] text-xl hover:text-white transition-colors">Home Page</a></li>
                <li><a href="#" className="text-[#B1B1B1] text-xl hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#" className="text-[#B1B1B1] text-xl hover:text-white transition-colors">Portfolio’s</a></li>
                <li><a href="#" className="text-[#B1B1B1] text-xl hover:text-white transition-colors">Contact Me</a></li>
              </ul>
            </div>
            
            {/* Our Services */}
            <div className="flex flex-col gap-4 min-w-[156px]">
              <h3 className="text-white text-xl font-semibold tracking-[-0.01em]">Our Services</h3>
              <ul className="flex flex-col gap-1.5">
                <li><a href="#" className="text-[#B1B1B1] text-xl hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="text-[#B1B1B1] text-xl hover:text-white transition-colors">Web Design</a></li>
                <li><a href="#" className="text-[#B1B1B1] text-xl hover:text-white transition-colors">Mobile app Design</a></li>
                <li><a href="#" className="text-[#B1B1B1] text-xl hover:text-white transition-colors">Dashboard Design</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col gap-4 min-w-[244px]">
              <h3 className="text-white text-xl font-semibold tracking-[-0.01em]">Contact Info</h3>
              <ul className="flex flex-col gap-1.5">
                <li className="text-[#B1B1B1] text-xl">aliakborsiam.uxd@gmail.com</li>
                <li className="text-[#B1B1B1] text-xl">+880 18868-70574</li>
                <li className="text-[#B1B1B1] text-xl">Barishal, Bangladesh.</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom bar with copyright and legal links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-white text-xl font-semibold tracking-[-0.01em] text-center sm:text-left">
            © 2026, Siam.Portfolio All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-[18px]">
            <a href="#" className="text-white text-xl font-semibold tracking-[-0.01em] hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white text-xl font-semibold tracking-[-0.01em] hover:text-gray-300 transition-colors">Terms & Condition</a>
            <a href="#" className="text-white text-xl font-semibold tracking-[-0.01em] hover:text-gray-300 transition-colors">Help & Support</a>
          </div>
        </div>
      </div>
      
      {/* Floating star and arrow button - positioned absolutely relative to footer */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-12 h-12 bg-[#413D4D] rounded-md flex items-center justify-center hover:bg-[#5a5570] transition-colors shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;