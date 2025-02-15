import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { fetchProfile } from "@/lib/Data";
import { updateProfile } from "@/lib/Data";
import { useEffect, useState, useRef } from "react";
import { a } from "@react-spring/web";

export default function() {
    let [profile, setProfile] = useState({});

    async function onSubmit(evt) {
        evt.preventDefault();
        const formData = new FormData(evt.target);

        const data = {
            full_name: formData.get("full_name"),
            profile: {
                bio: formData.get("biography"),
                sleep_hrs_per_day: Number(formData.get("sleep_hrs")),
                cgpa: Number(formData.get("cgpa"))
            }
        };

        try {
            await updateProfile(data);
            alert('Profile updated!');
        } catch (e) {
            alert ('Failed to update profile. Please try again.');
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
            <div class="general">
                <h1 className="title">General</h1>
                <form onSubmit={onSubmit} className="grid w-full max-w-md items-center gap-4">
                    <div>
                        <Label htmlFor="fullname">Full name</Label>
                        <Input name="full_name" value={profile ? profile.full_name : ""} type="text" id="fullname" placeholder="Enter your full name" onChange={(e) => {
                            setProfile({...profile, full_name: e.target.value});
                        }} />
                    </div>
                    <div>
                        <Label htmlFor="biography">Biography</Label>
                        <Textarea name="biography" value={profile.profile.bio ? profile.profile.bio : ""} placeholder="Enter a short biography about yourself." onChange={(e) => {
                            setProfile({...profile, profile: {...profile.profile, bio: e.target.value}});
                        }} />
                    </div>
                    <div>
                        <Label htmlFor="sleep_hrs">Sleep Hours per Day</Label>
                        <Input name="sleep_hrs" value={profile.profile.sleep_hrs_per_day ? profile.profile.sleep_hrs_per_day : 0} type="number" id="sleep_hrs" placeholder="Sleep hours per day" onChange={(e) => {
                            setProfile({...profile, profile: {...profile.profile, sleep_hrs_per_day: e.target.value}});
                        }} />
                    </div>
                    <div>
                        <Label htmlFor="cgpa">Average CGPA</Label>
                        <Input name="cgpa" value={profile.profile.cgpa ? profile.profile.cgpa : 0} type="number" id="cgpa" placeholder="Enter your average CGPA" onChange={(e) => {
                            setProfile({...profile, profile: {...profile.profile, cgpa: e.target.value}});
                        }} />
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