import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/drawer";
import Button from "@/components/button";
import PaymentFlow from "./PaymentFlow"; // Import the PaymentFlow component

const PaymentMethodDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="w-full">
        <Button
          fullWidth
          className="mt-4 text-black-dark"
          variant="outlineBold2"
        >
          Choose Plan
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <PaymentFlow />
      </DrawerContent>
    </Drawer>
  );
};

export default PaymentMethodDrawer;
