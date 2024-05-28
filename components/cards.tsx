import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

const Cards = () => {
    return (
        <div className="container mx-auto my-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Create project</CardTitle>
                        <CardDescription>
                            Deploy your new project in one-click.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Create a new project from a variety of templates and
                            deploy it with Vercel or Netlify.
                        </p>
                    </CardContent>
                    <CardFooter className="flex justify-between"></CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Create project</CardTitle>
                        <CardDescription>
                            Deploy your new project in one-click.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Create a new project from a variety of templates and
                            deploy it with Vercel or Netlify.
                        </p>
                    </CardContent>
                    <CardFooter className="flex justify-between"></CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Create project</CardTitle>
                        <CardDescription>
                            Deploy your new project in one-click.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Create a new project from a variety of templates and
                            deploy it with Vercel or Netlify.
                        </p>
                    </CardContent>
                    <CardFooter className="flex justify-between"></CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Create project</CardTitle>
                        <CardDescription>
                            Deploy your new project in one-click.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Create a new project from a variety of templates and
                            deploy it with Vercel or Netlify.
                        </p>
                    </CardContent>
                    <CardFooter className="flex justify-between"></CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Cards;
