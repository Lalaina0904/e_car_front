import { type } from "os";
import { useEffect, useState } from "react";
import { List, Datagrid, TextField } from "react-admin";
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
    /*  const dataprovider=useDataProvider()
    const [users,setUsers]=useState<User[]>([])
    useEffect(()=>{
        dataprovider.getList("users",{
            pagination: { page: 0, perPage: 10 },
            sort: { field: 'name', order: 'ASC' },
            filter: {},
        })
        .then(({ data }) => setUsers(data))
        .catch(error => console.error(error));
    },[dataprovider])
    return(
        <div>
            <div>voici la listes des voitures</div>
             <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )*/
    return (
        <div className="relative placeholder-sky-100 py-6">
            <Dialog>
                <DialogTrigger asChild className="mb-12">
                    <Button
                        variant="outline"
                        className="text-[1rem] p-6 capitalize">
                        new user +
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="capitalize">
                            add new user
                        </DialogTitle>
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
