import Header from "@/components/Header"
import NavBar from "@/components/NavBar"
import Stopwatch from "./stopwatch"
import AiPrompt from "@/components/AiPrompt"
export default function Focus(){
    return (
        <>
        <Header title={"Focus"} subtitle={"Calm your mind and get productive"}/>
        <div className="body focus">
            <Stopwatch />
        </div>
        <NavBar />
        <AiPrompt />
        </>
    )
}