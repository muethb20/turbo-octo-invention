import * as React from 'react';
import logo from '../../assets/logo.png'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {Outlet} from "react-router-dom"; // Adjust the import according to your setup

const Header: React.FC = () => {
    return (
        <header className="border-b p-4">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Left Side - Logo */}
                <div className="text-xl font-bold">
                    <a href="/">
                        <img
                            src={ logo } // Replace with your actual logo path
                            alt="Logo"
                            className="h-10 w-auto" // Adjust size as needed
                        />
                    </a>
                </div>

                {/* Right Side - Name Text and Login Button */}
                <NavigationMenu>
                    <NavigationMenuList className="flex items-center space-x-4">
                        {/* Name Text */}
                        <NavigationMenuItem>
                            <span className="text-gray-800 font-medium">John Doe</span> {/* Replace with dynamic user name if needed */}
                        </NavigationMenuItem>

                        {/* Login Button */}
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Login
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <Outlet/>
        </header>
    );
};

export default Header;