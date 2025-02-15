import { User } from "lucide-react";

export default function({ title, subtitle }) {
    return (
        <header className="header">
            <div className="logo"></div>
            <div className="pagetitle">
                <h1>{title}</h1>
                <span>{subtitle}</span>
            </div>

            <div className="right">
                <div className="user-btn">
                    <User />
                </div>
            </div>
        </header>
    );
}