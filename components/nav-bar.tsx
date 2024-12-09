"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

interface NavLinksProps extends React.HTMLAttributes<HTMLUListElement> {
  onNavigate?: () => void;
}

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="px-5 py-3 flex flex-row w-full items-center justify-start md:justify-between">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="pr-5">
            <Button variant='ghost' size='icon' className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="left">
            <SheetHeader className="hidden">
                <SheetTitle>Navigation Drawer</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-y-4 mt-7">
                <Link href={'/'} onClick={() => setIsOpen(false)}>Home</Link>
                <Link href={'/about'} onClick={() => setIsOpen(false)}>About</Link>
                <Link href={'/team'} onClick={() => setIsOpen(false)}>Our Team</Link>
                <Link href={'/contact'} onClick={() => setIsOpen(false)}>Contact Us</Link>
                <Link href={'https://www.change.org/p/stop-google-from-limiting-custom-roms'}  onClick={() => setIsOpen(false)} className={buttonVariants({ variant: "outline" })}>Sign the Petition</Link>
                <ModeToggle />
            </nav>
        </SheetContent>
      </Sheet>
      <Link href={'/'} className="font-bold">Android Integrity Alliance</Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="space-x-2">
          <NavigationMenuItem>
            <Link href={"/about"} legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/team"} legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                Our Team
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/contact"} legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href={
                "https://www.change.org/p/stop-google-from-limiting-custom-roms"
              }
              className={buttonVariants({ variant: "outline" })}
            >
              Sign the Petition
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default NavBar;
