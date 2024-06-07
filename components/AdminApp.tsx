"use client";

import {
    Admin,
    Resource,
    ListGuesser,
    EditGuesser,
    nanoLightTheme,
    defaultLightTheme,
    defaultDarkTheme,
    houseDarkTheme,
    houseLightTheme,
    defaultTheme,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { authProvider } from "@/lib/authProvider";
import { dataProvider } from "@/lib/dataProvider";
import { UserList } from "./userList";
// import { Hello } from "./helloWorld";

const myTheme = {
    ...defaultTheme,
    palette: {
        primary: {
            main: "#013248", // Changez cette valeur pour la couleur principale de la navbar
        },
        secondary: {
            main: "#013248",
        },
        background: {
            default: "#f5f5f5",
        },
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Arial",
            "sans-serif",
        ].join(","),
    },
    components: {
        ...defaultTheme.components,
        MuiTextField: {
            defaultProps: {
                variant: "outlined" as const,
            },
        },
        MuiFormControl: {
            defaultProps: {
                variant: "outlined" as const,
            },
        },
    },
};

const AdminApp = () => (
    <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        theme={myTheme}
        darkTheme={houseDarkTheme}
        basename="/admin">
        <Resource name="users" list={UserList} />

        {/* 
            
        <Resource
            name="posts"
            list={ListGuesser}
            edit={EditGuesser}
            recordRepresentation="title"
        />
        <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
            */}
    </Admin>
);

export default AdminApp;
