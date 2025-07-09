import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-start md:items-center px-8 py-12 mt-24 bg-transparent">
      <div>
        <div className="text-2xl font-bold text-[#2d217c] flex items-center gap-1 mb-2">
          <span>Rodi Digital</span>
        </div>
        <div className="text-gray-700 text-sm mb-1">
          Stationsweg 19
          <br />
          5211 TV 's-Hertogenbosch
          <br />
          The Netherlands
        </div>
        <div className="text-gray-700 text-sm mb-1">hello@rodi-digital.com</div>
        <div className="text-gray-700 text-sm">NL8678 8737 0B01</div>
      </div>
      <Link
        href="#contact"
        className="bg-[#3f1e9d] text-white px-6 py-2 rounded font-medium hover:bg-[#2d217c] transition-colors mt-8 md:mt-0"
      >
        Get in touch
      </Link>
    </footer>
  );
}
