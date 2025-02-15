import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";


export default function() {
    return (
        <>
        <div class="general">
            <h1 className="title">General</h1>
            <div className="grid w-full max-w-md items-center gap-4">
                <div>
                    <Label htmlFor="fullname">Full name</Label>
                    <Input type="text" id="fullname" placeholder="Enter your full name" />
                </div>
                <div>
                    <Label htmlFor="fullname">Biography</Label>
                    <Textarea placeholder="Enter a short biography about yourself." />
                </div>
                <div>
                    <Button>Save</Button>
                </div>
            </div>
        </div>
        </>
    );
}