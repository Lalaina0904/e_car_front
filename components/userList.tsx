import { type } from "os";
import { useEffect, useState } from "react";
import { List, Datagrid, TextField, email } from "react-admin";
import { useDataProvider } from "react-admin";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NewUserForm } from "./newUser";

export const UserList = () => {
  return (
    <div className="relative placeholder-sky-100 py-6">
      <Dialog>
        <DialogTrigger asChild className="mb-12">
          <Button variant="outline" className="text-[1rem] p-6 capitalize">
            new user +
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="capitalize">add new user</DialogTitle>
          </DialogHeader>
          <NewUserForm />
        </DialogContent>
      </Dialog>

      <List pagination={false} actions={false}>
        <Datagrid>
          <TextField className="capitalize" source="name" />
          <TextField source="email" />
        </Datagrid>
      </List>
    </div>
  );
};
