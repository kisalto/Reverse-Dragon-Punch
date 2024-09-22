import { useState } from "react";
import { Button } from "./ui/button";
import { RegisterDialog } from "@/pages/app/register/register";

export const Topbar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className={`${isDialogOpen ? "blur-sm" : ""}`}>
      <div className="p-4 flex justify-between items-center border-b">
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
