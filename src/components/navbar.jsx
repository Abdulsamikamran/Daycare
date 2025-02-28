import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./button";
import { Link } from "react-router-dom";
import Input from "./input";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Menu, X } from "lucide-react";
import LogoutModal from "./logoutModal";

export default function Navbar({ search, profile }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleNavigate = () => {
    navigate("/login");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    console.log("Logging out...");
    setShowLogoutModal(false);
    // Add logout logic here
  };

  // Function to check if the current path is active
  const isActivePath = (path) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="border-b border-border w-full h-[100px] bg-white">
      <nav className="flex items-center w-full relative container px-6 mx-auto justify-between h-[100px]">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-3">
            <img
              onClick={() => navigate("/")}
              src="/assets/logo-main.svg"
              alt="logo"
              className="md:mr-4 xs:w-[150px] sm:w-[180px] md:w-[200px] lg:w-[230px]"
            />

            {search && (
              <div className="hidden lg:block min-w-[200px] xl:min-w-[500px]">
                <Input
                  className="w-full"
                  type="text"
                  icon="/icons/search-green.svg"
                  placeholder="Search here..."
                />
              </div>
            )}
          </div>

          {/* Search Icon for Small Screens */}
          <div className="lg:hidden flex items-center gap-3">
            {search && (
              <img
                src="/icons/search-green.svg"
                alt="search"
                className="block sm:w-6 sm:h-6"
              />
            )}

            {/* Mobile Menu Icon (visible on md and below) */}
            <div className="md:block lg:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger>
                  <Menu className="h-6 w-6 mt-2" />
                </SheetTrigger>
                <SheetContent side="right" className="w-full">
                  <div className="p-4 flex items-center h-[100px] bg-white justify-between">
                    <img
                      src="/assets/logo-main.svg"
                      alt="logo"
                      className="xs:w-[150px] sm:w-[180px] md:w-[200px]"
                    />
                    <X onClick={() => setIsSheetOpen(false)} />
                  </div>
                  <div className="flex justify-start flex-col">
                    {/* Navigation Links */}
                    {["/", "/jobs", "/centers", "/about-us", "/profile"].map(
                      (path, index) => {
                        const label =
                          path === "/"
                            ? "Home"
                            : path === "/about-us"
                            ? "About Us"
                            : path.charAt(1).toUpperCase() + path.slice(2);
                        return (
                          <Link
                            key={index}
                            to={path}
                            className={`text-black-medium text-[14px]  p-4  hover:text-gray-900 transition-colors ${
                              isActivePath(path)
                                ? "font-bold text-theme2-dark"
                                : "font-medium"
                            }`}
                            onClick={() => setIsSheetOpen(false)}
                          >
                            {label}
                          </Link>
                        );
                      }
                    )}

                    {!profile ? (
                      <div className="mt-4 w-full absolute bottom-0 p-4">
                        <Button
                          onClick={handleNavigate}
                          fullWidth
                          variant="primarySmall"
                        >
                          Create account
                        </Button>
                      </div>
                    ) : (
                      ""
                    )}
                    <button
                      className={`text-black-medium mr-auto text-[14px] border-border p-4 border-b hover:text-gray-900   font-medium`}
                      onClick={() => {
                        setShowLogoutModal(true);
                        setIsSheetOpen(false);
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Desktop Navigation (Only visible on lg+) */}
        <div className="hidden lg:flex gap-3 items-center">
          <div className="flex items-center mr-9 gap-6 xl:gap-9">
            {["/", "/jobs", "/centers", "/about-us"].map((path, index) => {
              const label =
                path === "/"
                  ? "Home"
                  : path === "/about-us"
                  ? "About Us"
                  : path.charAt(1).toUpperCase() + path.slice(2);
              return (
                <Link
                  key={index}
                  to={path}
                  className={`text-black-medium whitespace-nowrap text-[16px] xl:text-[18px] hover:text-gray-900 transition-colors ${
                    isActivePath(path)
                      ? "font-bold text-theme2-dark"
                      : "font-medium"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Button with Hoverable Menu */}
          {!profile ? (
            <div
              className="relative"
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <Button onClick={handleNavigate} variant="primarySmall">
                Create account
              </Button>

              {/* Dropdown Menu */}
              {showMenu && (
                <div className="absolute top-full right-0 z-50 w-[150px] bg-white shadow-lg rounded-lg border border-gray-200">
                  <ul className="py-2">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={handleProfileClick}
                    >
                      Profile
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="w-[48px] h-[48px] rounded-full">
              <img src="/icons/profile-icon.svg" alt="" />
            </div>
          )}
        </div>
        <LogoutModal
          open={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
        />
      </nav>
    </header>
  );
}
