import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "./Layout";
import { Link, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/role");
  };
  return (
    <Layout heading={"Reset Password"}>
      <div className="space-y-8">
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

          <Button type="submit" fullWidth>
            Save changes
          </Button>
        </form>
      </div>
    </Layout>
  );
}
