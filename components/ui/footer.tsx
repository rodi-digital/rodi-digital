import Image from "next/image";
import { Button } from "./button";

export function Footer() {
  return (
    <footer className="w-full flex justify-center mt-24 bg-transparent">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center py-12">
        <div>
          <Image
            className="mb-8"
            src="/rodi-digital-logo.svg"
            width={100}
            height={50}
            alt="Logo of Rodi Digital"
          />
          <div className="text-gray-700 text-sm">
            Stationsweg 19, 5211 TV 's-Hertogenbosch, The Netherlands
            <br />
            hello@rodi-digital.com
            <br />
            VAT: NL867887370B01
          </div>
        </div>
        <Button href="#contact" className="my-12  md:mt-0">
          Let's Talk
        </Button>
      </div>
    </footer>
  );
}
