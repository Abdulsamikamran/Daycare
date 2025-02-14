import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-theme1-dark h-[405px] text-white py-6">
      <div className="container  mx-auto space-y-6 ">
        {/* Main Footer Content */}
        <div className="flex items-center border-b space-y-6 justify-between">
          {/* Left Side - Logo and Text */}
          <div className="max-w-[627px]">
            <div className="flex items-center gap-2 mb-3">
              <img src="/assets/logo-white.svg" alt="" />
            </div>
            <p className="text-[18px]  mb-4">
              Pulvinar nunc eget tincidunt id urna diam scelerisque cursus. Quis
              nunc pharetra arcu lectus nisl. Risus hendrerit consequat aliquet
              erat ullamcorper diam. Tortor vulputate sed maecenas rhoncus
              viverra purus.
            </p>
          </div>

          {/* Right Side - Contact and Social */}
          <div className="mt-6 md:mt-0 max-w-[455px] text-left">
            <div className="mb-4">
              <p className="text-[18px] ">
                Feel free to call us in working hours Mon - Fri (8:00 - 16.00).
                Our team will be happy to help answer your queries{" "}
              </p>

              <Link
                to="tel:+11233456789"
                className="text-[18px]  flex gap-2 items-center py-5 hover:underline  mt-1"
              >
                <img src="/icons/phone.svg" alt="" />
                +1 (333) 000-0000
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 justify-start mb-6">
              <Link to="#" className="hover:opacity-80 transition-opacity">
                <img src="/icons/facebook-white.svg" alt="" />
              </Link>
              <Link to="#" className="hover:opacity-80 transition-opacity">
                <img src="/icons/youtube-white.svg" alt="" />
              </Link>
              <Link to="#" className="hover:opacity-80 transition-opacity">
                <img src="/icons/insta-white.svg" alt="" />
              </Link>
              <Link to="#" className="hover:opacity-80 transition-opacity">
                <img src="/icons/linkedin-white.svg" alt="" />
              </Link>
              <Link to="#" className="hover:opacity-80 transition-opacity">
                <img src="/icons/twitter-white.svg" alt="" />
              </Link>
              <Link to="#" className="hover:opacity-80 transition-opacity">
                <img src="/icons/titok-white.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between space-y-6 items-center">
          <p className="text-[18px]">Copyrights © 2024 KinderKrippenJobs</p>
          <div className="flex gap-6 justify-end items-center text-[18px] ">
            <Link to="#" className="hover:underline ">
              Terms and Conditions
            </Link>
            <div className="h-4 w-[1px] border-r" />
            <Link to="#" className="hover:underline">
              Terms of Use
            </Link>
            <div className="h-4 w-[1px] border-r" />

            <Link to="#" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
