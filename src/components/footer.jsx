import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-theme1-dark h-auto xl:h-[405px] text-white py-6">
      <div className="container px-6 mx-auto space-y-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center border-b space-y-6 justify-between">
          {/* Left Side - Logo and Text */}
          <div className="max-w-[627px]">
            <div className="flex items-center gap-2 mb-3">
              <img src="/assets/logo-white.svg" alt="Logo" />
            </div>
            <p className="text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl mb-4">
              Pulvinar nunc eget tincidunt id urna diam scelerisque cursus. Quis
              nunc pharetra arcu lectus nisl. Risus hendrerit consequat aliquet
              erat ullamcorper diam. Tortor vulputate sed maecenas rhoncus
              viverra purus.
            </p>
          </div>

          {/* Right Side - Contact and Social */}
          <div className="mt-6 md:mt-0 max-w-[455px] text-left">
            <div className="mb-4">
              <p className="text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl">
                Feel free to call us in working hours Mon - Fri (8:00 - 16.00).
                Our team will be happy to help answer your queries.
              </p>

              <Link
                to="tel:+11233456789"
                className="text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl flex gap-2 items-center py-5 hover:underline mt-1"
              >
                <img src="/icons/phone.svg" alt="Phone Icon" />
                +1 (333) 000-0000
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 justify-start mb-6">
              {[
                "facebook",
                "youtube",
                "insta",
                "linkedin",
                "twitter",
                "titok",
              ].map((platform) => (
                <Link
                  key={platform}
                  to="#"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img src={`/icons/${platform}-white.svg`} alt={platform} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-3 items-start md:items-center">
          <p className="text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl">
            Copyrights © 2024 KinderKrippenJobs
          </p>
          <div className="flex gap-2 md:gap-6 items-center text-xs sm:text-sm md:text-sm lg:text-lg xl:text-xl">
            <Link to="#" className="hover:underline whitespace-nowrap">
              Terms and Conditions
            </Link>
            <div className="h-4 w-[1px] border-r" />
            <Link to="#" className="hover:underline whitespace-nowrap">
              Terms of Use
            </Link>
            <div className="h-4 w-[1px] border-r" />
            <Link to="#" className="hover:underline whitespace-nowrap">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
