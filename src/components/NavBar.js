import React from 'react';
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function NavBar() {
    return (
        <header className="bg-blue-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" 
                    exact activeClassName="text-white" 
                    className="inflex-flex items-center py-7 px-3 mr-4 text-blue-100 hover:text-red-800 text-4xl font-bold cursive tracking-widest"
                    >
                        Shawn
                    </NavLink>
                    <NavLink 
                        to="/post" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-red-800"
                        activeClassName="text-red-500 bg-blue-500"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink 
                        to="/project" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-red-800"
                        activeClassName="text-red-500 bg-blue-500"
                    >
                        Projects
                    </NavLink> 
                    <NavLink 
                        to="/about" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-red-800"
                        activeClassName="text-red-500 bg-blue-500"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                        url="https://github.com/shawnbmason" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor='#fff' 
                        style={{ height: 35, width: 35}} />
                    <SocialIcon 
                        url="https://www.linkedin.com/in/shawn-mason-a03827ab" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor='#fff' 
                        style={{ height: 35, width: 35}} />
                    <SocialIcon 
                        url="https://www.facebook.com/shawn.mason.7528" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor='#fff' 
                        style={{ height: 35, width: 35}} />
                </div>
            </div>
        </header>
        )
}

export default NavBar;