"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const components: { title: string; href: string; }[] = [
    {
        title: "Animals & Pets",
        href: "/",
    },
    {
        title: "Commercial  Equipment & Tools",
        href: "/",
    },
    {
        title: "Electronics",
        href: "/",
    },
    {
        title: "Fashion",
        href: "/",
    },
    {
        title: "Health & Beauty",
        href: "/",
    },
    {
        title: "Photography Equipments & Tools",
        href: "/",
    },
    {
        title: "Sports, Arts  & Outdoor",
        href: "/",
    },
    {
        title: "Vehicles",
        href: "/",
    },

]

const services: { title: string; href: string; }[] = [
    {
        title: "Artist",
        href: '/'
    },
    {
        title: "Graphic designer",
        href: "/"
    },
    {
        title: "Photographer",
        href: "/"
    },
]



const Dropdown = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Button asChild className=" py-[14px] px-5 rounded-[5px]">
                        <NavigationMenuTrigger>
                            Product
                        </NavigationMenuTrigger>
                    </Button>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[400px]">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {/* {component.title} */}
                                </ListItem>
                            ))}

                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Button asChild className=" py-[14px] px-5 rounded-[5px]">
                        <NavigationMenuTrigger>
                            Service
                        </NavigationMenuTrigger>
                    </Button>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[400px]">
                            {services.map((service) => (
                                <ListItem
                                    key={service.title}
                                    title={service.title}
                                    href={service.href}
                                >
                                    {/* {component.title} */}
                                </ListItem>
                            ))}

                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>



        </NavigationMenu>
    );
}

export default Dropdown;




const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
