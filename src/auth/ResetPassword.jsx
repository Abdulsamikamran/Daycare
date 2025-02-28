import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/role");
  };

  return (
    <Layout heading={"Reset Password"}>
      {/* Parent container */}
      <div className="xs:flex xs:flex-col xs:min-h-[65dvh] md:min-h-0">
        {/* Content area */}
        <div className="xs:flex-grow md:flex-grow-0 space-y-8">
          <p className="text-black-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Create New Password"
              type="password"
              placeholder="Must have at least 8 characters"
              icon={"/icons/password.svg"}
              showPasswordToggle
            />
            <Input
              label="Retype Password"
              type="password"
              placeholder="Must have at least 8 characters"
              icon={"/icons/password.svg"}
              showPasswordToggle
            />
          </form>
        </div>

        {/* Button container */}
        <div className="xs:mt-auto xs:pt-6 md:mt-6 md:pt-0">
          <Button type="submit" fullWidth onClick={handleSubmit}>
            Save changes
          </Button>
        </div>
      </div>
    </Layout>
  );
}
