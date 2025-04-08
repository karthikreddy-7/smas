export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-300 to-green-400 bg-clip-text text-transparent">
              SMAS
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Pioneering sustainable seaweed solutions through marine biotechnology and community empowerment.
            </p>
            <div className="flex space-x-4">
              {[
                { platform: 'twitter', url: '#', icon: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.48 4.48 0 00-4.47 4.47c0 .35.04.7.12 1.03A12.93 12.93 0 013 4.14a4.48 4.48 0 001.39 5.99A4.52 4.52 0 012 9.4v.06A4.48 4.48 0 004.47 14a4.48 4.48 0 01-2 .08A4.48 4.48 0 007 17.54a8.96 8.96 0 01-5.53 1.91A9.18 9.18 0 010 19a12.9 12.9 0 007 2.06c8.41 0 13-6.97 13-13 0-.2 0-.41-.01-.61A9.4 9.4 0 0023 3z" },
                { platform: 'facebook', url: '#', icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { platform: 'linkedin', url: '#', icon: "M16 8a6 6 0 00-6 6v6h-4v-6a4 4 0 018 0v6h4v-6a6 6 0 00-6-6z M2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z" }
              ].map(({ platform, url, icon }) => (
                <a key={platform} href={url} className="text-teal-400 hover:text-teal-300 transition-colors">
                  <span className="sr-only">{platform}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-teal-300 mb-3">Explore</h4>
            {['About', 'Products', 'Farming', 'Contact'].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                className="block text-gray-300 hover:text-teal-400 transition-colors py-1"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-teal-300 mb-3">Connect</h4>
            <div className="space-y-2 text-gray-300">
              <p>Kavali, Nellore District</p>
              <p>Andhra Pradesh, India 524201</p>
              <a href="mailto:contact@skandamarine.com" className="block hover:text-teal-400">
              skandamarine@gmail.com
              </a>
              <a href="tel:+914422556677" className="block hover:text-teal-400">
                +91 90002 46048
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-teal-300 mb-3">Stay Updated</h4>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-500 to-green-400 hover:from-teal-600 hover:to-green-500 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            © 2025 Skanda Marine Algae Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
