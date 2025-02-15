import {Send} from "lucide-react";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import AiPrompt from "@/components/AiPrompt";
import { Link, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import Diff from "./Diff";

export default function() {
    let {url} = useParams();
    const formRef = useRef(null);

    url = decodeURIComponent(url);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const messsage = formData.get("message");

        if (messsage === "") {
            return alert("Please enter a valid message.");
        }

        alert(messsage);
    }

    return (
        <>
        <Header title="Trio AI" subtitle="Get actionable hints to solve your problem" />

        <div className="body trio">
            <div class="flex gap-8">
                <div class="box basis-1/3 problem-box sb shrink-0">
                    <div class="box-header">
                        <h1>287. Find the Duplicate Number</h1>
                    </div>
                    <div class="problem">
                    {`Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and using only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

Input: nums = [3,3,3,3,3]
Output: 3
 

Constraints:

1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.
 

Follow up:

How can we prove that at least one duplicate number must exist in nums?
Can you solve the problem in linear runtime complexity?`}
                    </div>
                </div>
                <div class="basis-2/3">
                    <div class="chat-box">
                        <div class="message left">
                            Hi, I'm Trio. How can I help?
                        </div>
                        <div class="message right">
                            ok
                        </div>
                        <div class="message left">
                            Sure! Let me help you.
                        </div>
                        <div class="code-diff">
                            <Diff />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} ref={formRef} class="input-box">
                        <input type="text" name="message" id="message" placeholder="Type your message here..." />
                        <button type="submit" class="submit-btn">
                            <Send />
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <NavBar />
        <AiPrompt />
        </>
    );
}