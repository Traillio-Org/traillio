import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function() {
    return (
        <>
        <div class="platforms">
            <h1 className="title">Platforms</h1>
            <div className="grid w-full max-w-2xl items-center gap-4">
                <div class="platform box flex">
                    <div class="icon" style={{
                        backgroundImage: "url(/leetcode.png)"
                    }}></div>
                    <div class="labels">
                        <h1>Leetcode</h1>
                        <h2>Connect your Leetcode username.</h2>
                    </div>
                    <div class="form">
                        <Input type="text" placeholder="Enter your Leetcode username" />
                    </div>
                </div>
                <div class="platform box flex">
                    <div class="icon" style={{
                        backgroundImage: "url(/codeforces.webp)"
                    }}></div>
                    <div class="labels">
                        <h1>Codeforces</h1>
                        <h2>Connect your Codeforces username.</h2>
                    </div>
                    <div class="form">
                        <Input type="text" placeholder="Codeforces username" />
                    </div>
                </div>
                <div>
                    <Button>Save</Button>
                </div>
            </div>
        </div>
        </>
    );
}