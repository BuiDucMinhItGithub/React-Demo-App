import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

export function MainLayoutAuth() {
    return (
        <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <footer>Copyright 2024</footer>
        </div>
    );
}