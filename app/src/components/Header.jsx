import { User } from "lucide-react";

export default function() {
    return (
        <header className="header">
            <div className="logo"></div>
            <div className="pagetitle">
                <h1>Welcome, Sayan</h1>
                <span>Your personal DSA tracker</span>
            </div>

            <div className="right">
                <div className="user-btn">
                    <User />
                </div>
            </div>
        </header>
    );
}