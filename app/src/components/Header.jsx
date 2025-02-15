import { User } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Link} from "react-router-dom";
import { useAuth } from "@/lib/Auth";
import { replace } from "react-router-dom";

export default function({ title, subtitle }) {
    const { logout } = useAuth();

    return (
        <header className="header">
            <div className="logo"></div>
            <div className="pagetitle">
                <h1>{title}</h1>
                <span>{subtitle}</span>
            </div>

            <div className="right">
                <DropdownMenu className="dropdown">
                    <DropdownMenuTrigger>
                    <div className="user-btn">
                        <User />
                    </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="dropdown-content">
                        <Link to="/settings"><DropdownMenuItem>Settings</DropdownMenuItem></Link>
                        <DropdownMenuItem onClick={() => {logout(); replace('/auth');}}>Log Out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}