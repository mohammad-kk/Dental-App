"use client"
import { cn } from "@/lib/utils"
import { BookOpen, MenuIcon } from 'lucide-react'
import Link from "next/link"
import * as React from "react"
import { Dialog, DialogClose } from "./ui/dialog"
import { Button } from "./ui/button"
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu"
// import ModeToggle from "../mode-toggle"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import ModeToggle from "./mode-toggle"


export function NavBar() {

    return (
        <div className="fixed w-full z-[50] border dark:border-zinc-900 dark:bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center p-5">
                    <Dialog>
                        <SheetTrigger className="min-[825px]:hidden p-2 transition">
                            <MenuIcon />
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>ByteDental.</SheetTitle>
                                <SheetDescription>
                                    Scale and launch products with expert developers, on-demand, at a flat monthly fee
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
                                <DialogClose asChild>
                                    <Link href="/">
                                        <Button variant="outline" className="w-full">Home</Button>
                                    </Link>
                                </DialogClose>
                                <DialogClose asChild>
                                    <Link href="/software">
                                        <Button variant="outline" className="w-full">Software</Button>
                                    </Link>
                                </DialogClose>
                                <DialogClose asChild>
                                    <Link href="/automation">
                                        <Button variant="outline" className="w-full">Automation</Button>
                                    </Link>
                                </DialogClose>
                                <DialogClose asChild>
                                    <Link href="/blog">
                                        <Button variant="outline" className="w-full">Blog</Button>
                                    </Link>
                                </DialogClose>
                                <DialogClose asChild>
                                    <Link href="/projects">
                                        <Button variant="outline" className="w-full">Projects</Button>
                                    </Link>
                                </DialogClose>
                                <ModeToggle />
                            </div>
                        </SheetContent>
                    </Dialog>
                    <NavigationMenu>
                        <NavigationMenuList className="max-[825px]:hidden">
                            <Link href="/" className="pl-2">
                                <h1 className="font-bold text-2xl tracking-tight">ByteDental.</h1>
                            </Link>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="flex items-center gap-4 max-[825px]:hidden">
                        <Link href="/#services">
                            <Button variant="ghost" className="text-base font-medium">Services</Button>
                        </Link>
                        <Link href="/#pricing">
                            <Button variant="ghost" className="text-base font-medium">Pricing</Button>
                        </Link>
                        {/* <Link href="/blog">
                            <Button variant="ghost" className="text-base font-medium">Blog</Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="ghost" className="text-base font-medium">Projects</Button>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

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
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
