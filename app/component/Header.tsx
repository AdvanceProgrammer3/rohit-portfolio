import React from "react";
import { DarkModeToggler } from "./DarkModeToggler";
import Image from "next/image";
import Link from "next/link";
import { SignIn, UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { NavigationMenus } from "./NavigationMenus";

function Header() {
  const { userId } = auth();

  return (
    <header className="p-4">
      <section className="flex justify-between items-center max-w-7xl mx-auto">
        <section>
          <Link href="/admin">
            <Image src="/logo.png" width={100} height={100} alt="" />
          </Link>
        </section>
        <section className="hidden lg:inline-flex">
          <NavigationMenus />
        </section>
        <section className="flex space-x-8 items-center">
          <DarkModeToggler />
          {userId ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link href="/sign-in">
              <Button>Login</Button>
            </Link>
          )}
        </section>
      </section>
      <section className="lg:hidden pt-6">
        <NavigationMenus />
      </section>
    </header>
  );
}

export default Header;
