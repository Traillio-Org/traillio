import {Send} from "lucide-react";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import AiPrompt from "@/components/AiPrompt";
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Diff from "./Diff";
import * as Trio from "@/lib/Trio";
import { fetchProblemStatement } from "@/lib/Data";

export default function() {
    let [messages, setMessages] = useState([]);
    let [problem, setProblem] = useState(null);
    let {url} = useParams();
    const formRef = useRef(null);

    url = decodeURIComponent(url);

    useEffect(() => {
        fetchProblemStatement(url).then(res => {
            setProblem(res);
        });
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const message = formData.get("message");

        if (message === "") {
            return alert("Please enter a valid message.");
        }

        setMessages([...messages, {
            role: 'user',
            content: message
        }]);
        formRef.current.firstElementChild.value = "";

        try {
            const response = await Trio.getTrioResponse(url, message, messages, problem);

            setMessages([...messages, {
                role: 'user',
                content: message
            }, {
                role: 'model',
                content: response.message,
                assistantCode: response.assistantCode,
                originalCode: response.originalCode,
                algorithm: response.algorithm,
            }]);
        } catch (e) {
            alert("Failed to get response from Trio. Please try again.");
            console.error(e);
        }
    }


    return (
        <>
        <Header title="Trio AI" subtitle="Get actionable hints to solve your problem" />

        <div className="body trio">
            <div class="flex gap-8">
                <div class="box basis-1/3 problem-box sb shrink-0">
                    <div class="box-header">
                        <h1>
                            {problem ? problem.problemTitle : "Loading..."}
                        </h1>
                    </div>
                    <div class="problem" dangerouslySetInnerHTML={{__html: problem ? problem.question : ""}}></div>
                </div>
                <div class="basis-2/3">
                    <div class="chat-box">
                        <div class="message left">
                            Hi, I'm Trio. How can I help?
                        </div>
                        {messages.map((message, i) => {
                            if (message.role == 'user') {
                                return (
                                    <div class="message right" key={i}>
                                        {message.content}
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={i}>
                                        <div class="message left" key={i}>
                                            {message.content}
                                            {message.algorithm ?? ''}
                                        </div>
                                        {message.originalCode && message.assistantCode ? (
                                            <div class="code-diff">
                                                <Diff oldCode={message.originalCode} newCode={message.assistantCode} />
                                            </div>
                                        ) : (
                                            null
                                        )}
                                    </div>

                                );
                            }
                        })}
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