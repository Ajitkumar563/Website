export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="font-bold text-2xl tracking-tight">
          Ajit Kumar
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 text-gray-600 font-medium">
          <a href="#services" className="hover:text-black transition duration-300">
            Services
          </a>
          <a href="#case" className="hover:text-black transition duration-300">
            Case Studies
          </a>
          <a href="#about" className="hover:text-black transition duration-300">
            About
          </a>
          <a href="#pricing" className="hover:text-black transition duration-300">
            Pricing
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/918920581628"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition duration-300"
        >
          Book Call
        </a>

      </div>
    </nav>
  );
}