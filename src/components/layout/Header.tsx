import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <img
            src={'./logo.png'}
            alt="United Martial Arts Academy Logo"
            className="w-8 h-8 object-contain"
          />
          <h1 className="text-2xl font-bold text-orange-500">
            UMA
          </h1>
          
        </div>

        {/* RIGHT: Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="hover:text-orange-400">Home</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#classes" className="hover:text-orange-400">Classes</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#instructors" className="hover:text-orange-400">Instructors</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#gallery" className="hover:text-orange-400">Gallery</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#contact" className="hover:text-orange-400">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

      </div>
    </header>
  );
};

export default Header;
