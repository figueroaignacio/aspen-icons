"use client";

// Components
import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Logo } from "../Logo";
import { buttonVariants } from "../ui/button";
import { MobileMenu } from "./MobileMenu";

// Config
import { categories, navigation } from "@/config/navigation";

export function Navbar() {
  return (
    <header className="border-b-[.0625rem] border-white/10 flex items-center gap-24 py-3 px-8">
      <Logo />
      <div className="items-center gap-4 hidden md:flex">
        {navigation.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={buttonVariants({ variant: "ghost" })}
          >
            {item.title}
          </Link>
        ))}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categorías</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {categories.map((category, index: number) => (
                    <Link
                      href={`/categories/category/${category.slug}`}
                      key={index}
                    >
                      <ListItem key={category.title} title={category.title}>
                        {category.description}
                      </ListItem>
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <MobileMenu />
    </header>
  );
}
