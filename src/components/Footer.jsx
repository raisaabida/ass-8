export default function Footer() {
  return (
    <footer className="bg-[#021C34] text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo.png"  // replace with your logo path
              alt="Logo"
              className="w-10"
            />
            <span className="text-lg font-semibold tracking-wide">HERO.IO</span>
          </div>

          {/* Social Links */}
          <div className="text-right mt-6 md:mt-0">
            <h3 className="text-sm mb-3 opacity-80">Social Links</h3>
            <div className="flex gap-4 justify-end">
              <a className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black hover:opacity-80 transition">
                ✕
              </a>
              <a className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black hover:opacity-80 transition">
                in
              </a>
              <a className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black hover:opacity-80 transition">
                f
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-8"></div>

        {/* Copyright */}
        <p className="text-center text-sm mt-6 opacity-80">
          Copyright © {new Date().getFullYear()} – All right reserved
        </p>

      </div>
    </footer>
  );
}
