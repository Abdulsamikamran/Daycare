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
      <div className="space-y-8">
        <p className="text-black-medium">
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

          <Button type="submit" fullWidth>
            Send Password Reset Link
          </Button>
        </form>
      </div>
    </Layout>
  );
}
