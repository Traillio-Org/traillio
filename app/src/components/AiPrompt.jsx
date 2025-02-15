import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {useRef, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export default function () {
    const navigate = useNavigate();
    let [isOpen, setOpen] = useState(false);
    const formRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const url = formData.get("url");
        setOpen(false);

        if (url === "") {
            return alert("Please enter a valid URL.");
        }

        navigate(`/dashboard/trio/${encodeURIComponent(url)}`);
    }

    return (
        <>
        <Drawer open={isOpen} onOpenChange={setOpen}>
            <DrawerTrigger><div className="ai-box"></div></DrawerTrigger>
            <DrawerContent className="ai-drawer">
                <div className="mx-auto w-full max-w-lg">
                    <DrawerHeader className="px-0 py-8">
                        <DrawerTitle>Stuck on a problem? Trio is here to help!</DrawerTitle>
                        <DrawerDescription>Hi, I'm Trio. Let's get started with the URL of the problem.</DrawerDescription>
                    </DrawerHeader>

                    <div>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <Label htmlFor="url">Problem Link or URL</Label>
                            <Input type="text" name="url" id="url" placeholder="Leetcode/Codeforces URL" />
                        </form>
                    </div>

                    <DrawerFooter className="flex gap-4 flex-row py-8 px-0">
                        <Button onClick={handleSubmit}>Help me solve this!</Button>
                        <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
        </>
    );
}