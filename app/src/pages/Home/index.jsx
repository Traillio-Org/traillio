import {User, Users, Clock, Flame, Calendar, Ellipsis, Code, ArrowUpRight, ArrowRight} from "lucide-react";
import WeekChart from './chart';
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import AiPrompt from "@/components/AiPrompt";
import { Link } from "react-router-dom";
import { useAuth } from "@/lib/Auth";

export default function() {
    const { currentUser } = useAuth();

    console.log(currentUser);

    return (
        <>
        <Header title={`Welcome, ${currentUser.fullName.split(" ")[0]}`} subtitle="Your personal growth system" />

        <div className="body home">
            <div className="flex gap-8">
                <div className="flex basis-3/4 gap-8">
                    <div className="flex basis-1/3 gap-8 flex-col">
                        <div className="box profile-box">
                            <div className="box-header">
                                <h1>Profile</h1>
                                <User />
                            </div>

                            <div className="pfp my-16"><div style={{
                                backgroundImage: `url(${currentUser.pfp})`
                            }}></div></div>
                            <div className="info">
                                <h1>{currentUser.fullName}</h1>
                                <h2>Explorer</h2>
                            </div>
                            <div className="badges">
                                <div className="badge">
                                    <Users />
                                    100
                                </div>
                                <div className="badge">
                                    <Users />
                                    99+
                                </div>
                                <div className="badge">
                                    <Users />
                                    999
                                </div>
                            </div>
                        </div>

                        <div className="box languages-box">
                            <div className="box-header">
                                <h1>Languages</h1>
                                <Code />
                            </div>

                            <div className="content">
                                <div className="language">
                                    <div className="labels">
                                        <h1>C++</h1>
                                        <h2>92%</h2>
                                    </div>
                                    <div className="progressbar">
                                        <div className="progress" style={{width: "92%"}}></div>
                                    </div>
                                </div>
                                <div className="language">
                                    <div className="labels">
                                        <h1>Javascript</h1>
                                        <h2>50%</h2>
                                    </div>
                                    <div className="progressbar">
                                        <div className="progress" style={{width: "50%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex basis-2/3 flex-col gap-8">
                        <div className="flex gap-8">
                            <div className="basis-1/2">
                                <div className="box stat-box" style={{
                                    backgroundImage: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)"
                                }}>
                                    <div className="box-header">
                                        <h1>TriPoints</h1>
                                        <Flame />
                                    </div>
                                    <div className="stats">
                                        <h1>93</h1>
                                        <h2>Total points earned</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-1/2">
                                <div className="box stat-box" style={{
                                    backgroundImage: "linear-gradient(to top, #accbee 0%, #d9e9ff 100%)"
                                }}>
                                    <div className="box-header">
                                        <h1>My Streak</h1>
                                        <Clock />
                                    </div>
                                    <div className="stats">
                                        <h1>93</h1>
                                        <h2>Total points earned</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="padded-box platforms-box">
                                <div className="labels">
                                    <h1>Connected Platforms</h1>
                                    <h2>2 active connections</h2>
                                </div>
                                <div className="right">
                                    <div className="logos">
                                        <div className="icon" style={{
                                            backgroundImage: "url(/leetcode.png)"
                                        }}></div>
                                        <div className="icon" style={{
                                            backgroundImage: "url(/codeforces.webp)"
                                        }}></div>
                                    </div>
                                    <Link to="/settings/platforms">
                                        <div className="edit">
                                            <Ellipsis />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="padded-box chart-box">
                            <h1 className="title">Week at a Glance</h1>
                            <h2 className="subtitle mb-8">Analyze how your week is going.</h2>
                            
                            <WeekChart />
                        </div>
                    </div>
                </div>
                <div className="basis-1/4">
                    <div className="box tasks-box">
                        <div className="box-header">
                            <h1>My Tasks</h1>
                            <Calendar />
                        </div>

                        <div className="list mb-4">
                            <div className="item">
                                <div className="content">
                                    <span className="due">Tue, 11 July</span>
                                    <h1>Complete 5 Leetcode Hard problems</h1>
                                </div>
                                <ArrowUpRight />
                            </div>
                            <div className="item">
                                <div className="content">
                                    <span className="due">Tue, 11 July</span>
                                    <h1>Complete 5 Leetcode Hard problems</h1>
                                </div>
                                <ArrowUpRight />
                            </div>
                            <div className="item">
                                <div className="content">
                                    <span className="due">Tue, 11 July</span>
                                    <h1>Complete 5 Leetcode Hard problems</h1>
                                </div>
                                <ArrowUpRight />
                            </div>
                        </div>

                        <span className="link">View all tasks <ArrowRight /></span>
                    </div>
                </div>
            </div>
        </div>

        <NavBar />
        <AiPrompt />
        </>
    );
}