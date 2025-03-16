
import React, { ReactNode, useState } from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { Logo } from './Logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Background pattern */}
      <div className="fixed inset-0 -z-10 military-bg-pattern pointer-events-none opacity-70"></div>
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container-custom flex h-16 items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md"
                            href="/about"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              About DefenseConnect
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              A specialized matrimony service for defense personnel, built on values of honor and commitment.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/mission" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Our Mission</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Connecting defense hearts with shared values
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/team" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Our Team</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Meet the people behind DefenseConnect
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/success-stories">
                    Success Stories
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/contact">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button className="bg-blue-700 hover:bg-blue-800">Sign Up</Button>
            <Button variant="outline" className="border-blue-700 text-blue-700 hover:text-blue-800 hover:bg-blue-50">Log In</Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            className="flex items-center justify-center h-10 w-10 rounded-md md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-blue-800" />
            ) : (
              <Menu className="h-6 w-6 text-blue-800" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 border-t", 
          isMenuOpen ? "max-h-96" : "max-h-0"
        )}>
          <div className="container-custom py-4 flex flex-col space-y-2">
            <a href="/" className="py-2 px-4 rounded-md hover:bg-blue-50">Home</a>
            <a href="/about" className="py-2 px-4 rounded-md hover:bg-blue-50">About Us</a>
            <a href="/success-stories" className="py-2 px-4 rounded-md hover:bg-blue-50">Success Stories</a>
            <a href="/contact" className="py-2 px-4 rounded-md hover:bg-blue-50">Contact</a>
            <div className="flex flex-col gap-2 pt-2">
              <Button className="bg-blue-700 hover:bg-blue-800 w-full">Sign Up</Button>
              <Button variant="outline" className="border-blue-700 text-blue-700 hover:text-blue-800 hover:bg-blue-50 w-full">Log In</Button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="relative z-0">
        {children}
      </main>
      
      {/* Fixed WhatsApp button */}
      <WhatsAppButton />
      
      {/* Footer */}
      <footer className="py-8 border-t border-blue-100 bg-white/50 backdrop-blur-sm mt-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col">
              <Logo textSize="lg" />
              <p className="text-sm text-muted-foreground mt-4">Connecting military hearts with honor and commitment since 2023.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-800 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-muted-foreground hover:text-blue-700 transition-colors">Home</a></li>
                <li><a href="/about" className="text-muted-foreground hover:text-blue-700 transition-colors">About Us</a></li>
                <li><a href="/success-stories" className="text-muted-foreground hover:text-blue-700 transition-colors">Success Stories</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-blue-700 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-800 mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/matching" className="text-muted-foreground hover:text-blue-700 transition-colors">Military Matching</a></li>
                <li><a href="/verification" className="text-muted-foreground hover:text-blue-700 transition-colors">ID Verification</a></li>
                <li><a href="/privacy" className="text-muted-foreground hover:text-blue-700 transition-colors">Privacy Focus</a></li>
                <li><a href="/counseling" className="text-muted-foreground hover:text-blue-700 transition-colors">Relationship Counseling</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-800 mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="/policy" className="text-muted-foreground hover:text-blue-700 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-muted-foreground hover:text-blue-700 transition-colors">Terms of Service</a></li>
                <li><a href="/faq" className="text-muted-foreground hover:text-blue-700 transition-colors">FAQ</a></li>
                <li><a href="/help" className="text-muted-foreground hover:text-blue-700 transition-colors">Help Center</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-100 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} DefenseConnect. All rights reserved.</p>
            </div>
            
            <div className="flex gap-6">
              <a href="/privacy" className="text-muted-foreground hover:text-blue-700 transition-colors">Privacy</a>
              <a href="/terms" className="text-muted-foreground hover:text-blue-700 transition-colors">Terms</a>
              <a href="/contact" className="text-muted-foreground hover:text-blue-700 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
