import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
export default function Layout(){
    return (
        <>
        <p><Navbar/></p>
        <main>
            <Outlet/>
        </main>
        <p> <Footer/></p>
        </>
    )
}