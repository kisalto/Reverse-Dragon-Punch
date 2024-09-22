import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@radix-ui/react-dialog";

interface RegisterDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterDialog: React.FC<RegisterDialogProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="fixed inset-0 flex justify-center items-center z-50">
        <Card className="relative p-5 max-w-md w-full">
          <Button onClick={onClose} className="absolute top-3 right-3 rounded-lg underline">close</Button>
          <DialogHeader className="items-center mt-3">
            <DialogTitle className="text-3xl font-bold p-4 rounded underline">REGISTER</DialogTitle>
          </DialogHeader>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">USERNAME*</label>
              <Input type="text" placeholder="Enter your username" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                DISCORD ID
              </label>
              <Input type="text" placeholder="Enter your Discord ID" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">EMAIL*</label>
              <Input type="email" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">PASSWORD*</label>
              <Input type="password" placeholder="Enter your password" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                CONFIRM PASSWORD*
              </label>
              <Input type="password" placeholder="Confirm your password" />
            </div>
            <Button type="submit" className="w-full underline">
              DIVIDE!
            </Button>
          </form>
        </Card>
      </DialogContent>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </Dialog>
  );
};
