import Button from "@/components/button";
import Input from "@/components/input";
import React, { useState } from "react";

const ChangePassword = () => {
  const [isActive, setIsActive] = useState(false);

  const togglePlatform = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div className="bg-white border p-6 rounded-2xl border-gray-200">
      <p className="font-bold text-[28px] font-sour">Change Password</p>
      <div className="border-t border-border w-full my-3" />
      <div className="space-y-6">
        <Input
          label="Old Password"
          type="password"
          placeholder="Must have at least 8 characters"
          icon={"/icons/password.svg"}
          showPasswordToggle
        />
        <Input
          label="New Password"
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
      </div>
      <div className="flex gap-4 mt-5 justify-end w-full ">
        <Button className="px-6" variant="primarySmall">
          Save Changes
        </Button>
        <Button className="px-6" variant="outlineBold2">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ChangePassword;
