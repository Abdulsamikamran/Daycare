import Button from "@/components/button";
import Input from "@/components/input";
import { Mail, Lock } from "lucide-react";

import Layout from "./Layout";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <Layout heading={"Create an Account"}>
      <div className="space-y-8">
        <p className="text-black-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <form className="space-y-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="example@domain.com"
            icon={"/icons/user.svg"}
          />
          <Input
            label="Email"
            type="email"
            placeholder="example@domain.com"
            icon={"/icons/email.svg"}
          />
          <Input
            variant="phone"
            label="Phone Number"
            type="tel"
            placeholder="+41 576 889 324"
            icon={"/icons/country.svg"}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Must have at least 8 characters"
            icon={"/icons/password.svg"}
            showPasswordToggle
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="peer relative appearance-none shrink-0 w-6 h-6 border-2 border-border rounded-md mt-1 bg-white
    focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-border
    checked:bg-theme2-dark checked:border-0
    disabled:border-steel-400 disabled:bg-steel-400
    after:content-['✔'] after:absolute after:left-[6px] after:top-[6px] after:text-white after:opacity-0 
    checked:after:opacity-100 checked:after:left-[5px] checked:after:top-[1px]"
              />
              <span className="text-[16px] mt-1 text-black font-medium">
                Remember me
              </span>
            </label>
            <Link
              to={"/forgot-password"}
              className="text-[16px] text-theme2-dark"
            >
              Forgot password
            </Link>
          </div>

          <Button fullWidth>Create an account</Button>

          <div className="flex items-center">
            <div className="w-full border-t border-gray-200" />

            <p className=" px-2 text-black whitespace-nowrap text-[16px] font-medium">
              OR CONTINUE WITH
            </p>
            <div className="w-full border-t border-gray-200" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Button variant="outline" icon={"/icons/google.svg"}>
              Google
            </Button>
            <Button variant="outline" icon={"/icons/apple.svg"}>
              Apple ID
            </Button>
            <Button variant="outline" icon={"/icons/facebook.svg"}>
              Facebook
            </Button>
          </div>

          <p className="text-center text-[16px] text-black-medium">
            Already have an account?
            <Link
              to={"/login"}
              className="font-medium cursor-pointer pl-1 hover:underline text-[16px] text-theme2-dark"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}
