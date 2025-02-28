import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/dialog";
import Button from "@/components/button";

export default function LogoutModal({ open, onClose, onConfirm }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[90%] md:w-full max-w-sm mx-auto p-6 sm:p-8 rounded-lg shadow-lg bg-white">
        <DialogHeader className="flex flex-col items-center text-center">
          <img
            src="/icons/logout.svg"
            alt="Logout Icon"
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <DialogTitle className="text-[24px] sm:text-[28px] font-sour font-bold mt-4">
            Logging out?
          </DialogTitle>
          <p className="text-black-medium text-[16px] sm:text-[18px] mt-2">
            Are you sure you want to log out?
          </p>
        </DialogHeader>
        <DialogFooter className="flex mx-auto justify-center gap-3 mt-4">
          <Button
            className="bg-theme2-dark w-full sm:w-auto px-6 py-2 text-sm sm:text-base"
            onClick={onConfirm}
          >
            Logout
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto px-6 py-2 text-sm sm:text-base"
            onClick={onClose}
          >
            Not Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
