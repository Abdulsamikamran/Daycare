"use client";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./button";
import { Link } from "react-router-dom";
import Input from "./input";

export default function Navbar({ search, profile }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleNavigate = () => {
    navigate("/login");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <header className="border-b border-border h-[100px] bg-white">
      <div className="container mx-auto px-4 xl:p-0">
        <nav className="flex items-center justify-between h-[100px]">
          <div className="flex gap-4 items-center">
            <img src="/assets/logo-main.svg" alt="logo" />
            {search && (
              <div className={"min-w-[400px]"}>
                <Input
                  className={"w-full "}
                  type="text"
                  icon={"/icons/search-green.svg"}
                  placeholder={"Search here..."}
                />
              </div>
            )}
          </div>
          <div className="relative flex gap-3">
            <div className="hidden md:flex items-center mr-9 gap-9">
              {["/", "/jobs", "/centers", "/about"].map((path, index) => {
                const label =
                  path === "/"
                    ? "Home"
                    : path.charAt(1).toUpperCase() + path.slice(2);
                return (
                  <Link
                    key={index}
                    to={path}
                    className={`text-black-medium text-[18px] hover:text-gray-900 transition-colors ${
                      location.pathname === path
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
        </nav>
      </div>
    </header>
  );
}
