// Components
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

// Config
import { navigation } from "@/config/navigation";

// Icons
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export function MobileMenu() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon width={24} height={24} />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <Link href="/">Sneakerf</Link>
            </SheetTitle>
            <Accordion type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger>Lobby</AccordionTrigger>
                <AccordionContent className="flex flex-col text-start gap-3">
                  <Link href={"/products"}>Productos</Link>
                  <Link href={"/blog"}>Blog</Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Sneakers</AccordionTrigger>
                {navigation.map((item, index: number) => (
                  <AccordionContent
                    key={index}
                    className="flex flex-col text-start gap-3"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </AccordionContent>
                ))}
              </AccordionItem>
            </Accordion>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
