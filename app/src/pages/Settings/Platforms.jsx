import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { fetchProfile } from "@/lib/Data";
import { updateProfile } from "@/lib/Data";
import { useEffect, useState } from "react";

export default function() {
    let [profile, setProfile] = useState({});

    async function onSubmit(evt) {
        evt.preventDefault();
        const formData = new FormData(evt.target);

        const data = {
            platforms: {
                leetcode: formData.get("leetcode"),
                codeforces: formData.get("codeforces")
            }
        };

        try {
            await updateProfile(data);
            alert('Platforms updated!');
        } catch (e) {
            alert('Failed to update platforms. Please try again.');
            console.error(e);
        }
    }

    useEffect(() => {
        fetchProfile().then((data) => {
            setProfile(curr => {return {...curr, ...data}});
        });
    }, []);

    return (
        <>
        {
            Object.keys(profile).length === 0 ? <div>Loading...</div> :
            <div class="platforms">
                <h1 className="title">Platforms</h1>
                <form onSubmit={onSubmit} className="grid w-full max-w-2xl items-center gap-4">
                    <div class="platform box flex">
                        <div class="icon" style={{
                            backgroundImage: "url(/leetcode.png)"
                        }}></div>
                        <div class="labels">
                            <h1>Leetcode</h1>
                            <h2>Connect your Leetcode username.</h2>
                        </div>
                        <div class="form">
                            <Input 
                                name="leetcode"
                                type="text" 
                                placeholder="Enter your Leetcode username"
                                value={profile.platforms?.leetcode || ""}
                                onChange={(e) => setProfile({
                                    ...profile,
                                    platforms: {...profile.platforms, leetcode: (e.target.value == "" ? null : e.target.value)}
                                })}
                            />
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
                            <Input 
                                name="codeforces"
                                type="text" 
                                placeholder="Codeforces username"
                                value={profile.platforms?.codeforces || ""}
                                onChange={(e) => setProfile({
                                    ...profile,
                                    platforms: {...profile.platforms, codeforces: (e.target.value == "" ? null : e.target.value)}
                                })}
                            />
                        </div>
                    </div>
                    <div>
                        <Button type="submit">Save</Button>
                    </div>
                </form>
            </div>
        }
        </>
    );
}