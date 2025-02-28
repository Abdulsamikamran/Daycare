import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/reset-password");
  };

  return (
    <Layout heading={"Forgot your password?"}>
      {/* Parent container */}
      <div className="xs:flex xs:flex-col xs:min-h-[65dvh] md:min-h-0">
        {/* Content area */}
        <div className="xs:flex-grow md:flex-grow-0">
          <p className="text-black-medium xs:text-sm lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Email"
              type="email"
              placeholder="example@domain.com"
              icon={"/icons/email.svg"}
            />
          </form>
        </div>

        {/* Button container */}
        <div className="xs:mt-auto xs:pt-6 md:mt-6 md:pt-0">
          <Button type="submit" fullWidth onClick={handleSubmit}>
            Send Password Reset Link
          </Button>
        </div>
      </div>
    </Layout>
  );
}
