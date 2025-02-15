/**
 * Settings page
*/

import { Layers, User } from "lucide-react";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { Outlet, NavLink } from "react-router-dom";
import GeneralPage from "./General";

export default function() {
    return (
        <>
        <Header title="Settings" subtitle="Customize your settings" />

        <div className="body settings">
            <div className="flex gap-8">
                <div className="w-1/4 menu">
                    <NavLink to="general" className="item">
                        <User />
                        General
                    </NavLink>
                    <NavLink to="platforms" className="item">
                        <Layers />
                        Platforms
                    </NavLink>
                </div>
                <div className="w-3/4 form">
                    <Outlet />
                </div>
            </div>
        </div>

        <NavBar />
        </>
    );
}