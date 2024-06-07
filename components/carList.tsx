import { Button } from "./ui/button";
import { NewCarForm } from "./newCarForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-select";
import { Input } from "postcss";

export const CarList = () => {
  return (
    <div className="container mx-auto">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="bg-black">
          <DialogHeader>
            <DialogTitle>new car</DialogTitle>
          </DialogHeader>

          <NewCarForm />

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Button>
        <div className="text-center text-3xl uppercase font-medium py-4">
          new car +
        </div>
      </Button>
      <section className="flex justify-between">
        <div>
          <div className="text-xl text-neutral-100">...</div>
        </div>
      </section>
    </div>
  );
};
