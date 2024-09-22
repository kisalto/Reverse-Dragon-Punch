import { useState } from "react";
import { Button } from "./ui/button";
import { RegisterDialog } from "@/pages/app/register/register";

export const Topbar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="relative">
      {isDialogOpen && <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>}
      <div className="p-4 flex justify-between items-center border-b z-20 relative">
        <div className="flex gap-20 pl-60 pr-60">
          <Button variant="outline" className="w-48">Start Here</Button>
          <Button variant="outline" className="w-48">Guide</Button>
          <Button variant="outline" className="w-48">Community</Button>
          <Button variant="outline" className="w-48">Characters</Button>
          <Button onClick={() => setIsDialogOpen(true)} className="w-48">
            Login/Register
          </Button>
        </div>
        <div>
          <RegisterDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
        </div>
      </div>
    </div>
  );
};
