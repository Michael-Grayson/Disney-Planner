import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import Link from "next/link"

export function Navbar() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="list-none flex gap-4 w-full">

        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Theme Parks Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-normal">Theme Parks</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-2 p-2">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/parks/magic-kingdom">Magic Kingdom</Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/parks/epcot">EPCOT</Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/parks/animal-kingdom">Animal Kingdom</Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/parks/hollywood-studios">Hollywood Studios</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Attractions*/}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Attractions</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Dining*/}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Dining</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Events*/}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Events</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Login*/}
        <NavigationMenuItem className="ml-auto">
          <NavigationMenuLink asChild>
            <Link href="/">Login</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}
